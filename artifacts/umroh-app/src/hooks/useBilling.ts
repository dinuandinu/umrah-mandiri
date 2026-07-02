import { useState, useEffect } from 'react';
import { NativePurchases, PURCHASE_TYPE } from '@capgo/native-purchases';
import { Capacitor } from '@capacitor/core';

export type CoffeeTier = {
  id: string;
  label: string;
  price: string;
  icon: string;
};

export const COFFEE_TIERS: CoffeeTier[] = [
  { id: 'donut_5k',    label: 'Donat',    price: 'Rp 5.000',  icon: '🍩' },
  { id: 'coffee_12k',   label: 'Kopi',     price: 'Rp 12.000', icon: '☕' },
  { id: 'martabak_25k', label: 'Martabak', price: 'Rp 25.000', icon: '🍰' },
  { id: 'pizza_50k',    label: 'Pizza',    price: 'Rp 50.000', icon: '🍕' },
];

let hasSweptDangling = false;

export const useBilling = () => {
  const [loading, setLoading] = useState(false);
  const [tiers, setTiers] = useState<CoffeeTier[]>(COFFEE_TIERS);

  // 1. Fungsi penyapu donasi yang nyangkut (berjalan sekali saja saat aplikasi dibuka)
  useEffect(() => {
    if (hasSweptDangling || !Capacitor.isNativePlatform() || Capacitor.getPlatform() !== 'android') return;
    
    const sweepDanglingPurchases = async () => {
      try {
        hasSweptDangling = true;
        const { isBillingSupported } = await NativePurchases.isBillingSupported();
        if (!isBillingSupported) return;

        // Ambil semua transaksi masa lalu yang nyangkut / belum ter-consume
        const { purchases } = await NativePurchases.getPurchases({
          productType: PURCHASE_TYPE.INAPP
        });

        for (const p of purchases) {
          if (p.purchaseToken) {
            console.log(`Menyapu donasi nyangkut untuk: ${p.productIdentifier}`);
            await NativePurchases.consumePurchase({ purchaseToken: p.purchaseToken });
          }
        }
      } catch (e) {
        console.error('Gagal menyapu donasi yang nyangkut:', e);
      }
    };

    sweepDanglingPurchases();
  }, []);

  // 2. Fungsi mengambil harga asli dari Google Play (Dynamic Pricing)
  useEffect(() => {
    const fetchDynamicPrices = async () => {
      if (!Capacitor.isNativePlatform()) return;

      try {
        const { isBillingSupported } = await NativePurchases.isBillingSupported();
        if (!isBillingSupported) return;

        const productIds = COFFEE_TIERS.map(t => t.id);
        const { products } = await NativePurchases.getProducts({
          productIdentifiers: productIds,
          productType: PURCHASE_TYPE.INAPP
        });

        if (products && products.length > 0) {
          setTiers(prevTiers => prevTiers.map(tier => {
            const dynamicProduct = products.find((p: any) => p.identifier === tier.id);
            if (dynamicProduct && dynamicProduct.priceString) {
              return { ...tier, price: dynamicProduct.priceString };
            }
            return tier;
          }));
        }
      } catch (error) {
        console.error('Gagal memuat harga dinamis:', error);
      }
    };

    fetchDynamicPrices();
  }, []);

  const purchaseTier = async (tier: CoffeeTier) => {
    // 1. MOCKUP FOR BROWSER
    if (!Capacitor.isNativePlatform()) {
      alert(`Mockup: Berhasil memberikan ${tier.label}! (Simulasi Browser)`);
      return true;
    }

    setLoading(true);
    try {
      // 2. TRIGGER PURCHASE
      const result = await NativePurchases.purchaseProduct({
        productIdentifier: tier.id,
        productType: PURCHASE_TYPE.INAPP,
        quantity: 1
      });

      if (result && result.transactionId) {
        // 3. MANDATORY CONSUME (Penting agar bisa beli lagi)
        if (Capacitor.getPlatform() === 'android' && result.purchaseToken) {
          await NativePurchases.consumePurchase({
            purchaseToken: result.purchaseToken 
          });
        }

        alert(`Terima kasih atas ${tier.label}-nya! Semoga berkah dan menjadi amal jariyah.`);
        return true;
      }
    } catch (e: any) {
      console.error('Purchase Error Detail:', e);

      // Memberikan info lebih detail jika gagal
      const errorMsg = e.message || '';
      if (errorMsg.includes('User cancelled')) {
        alert('Pembelian dibatalkan.');
      } else {
        alert(`Gagal: ${errorMsg || 'Terjadi kesalahan sistem Google Play. Pastikan akun tester aktif.'}`);
      }
    } finally {
      setLoading(false);
    }
    return false;
  };

  const checkProducts = async () => {
    try {
      if (!Capacitor.isNativePlatform()) {
        alert('Debugging hanya berjalan di device Android/iOS.');
        return;
      }

      setLoading(true);
      
      const { isBillingSupported } = await NativePurchases.isBillingSupported();
      if (!isBillingSupported) {
        alert('DEBUG: Google Play Billing TIDAK didukung di perangkat/akun ini.');
        return;
      }

      const productIds = COFFEE_TIERS.map(t => t.id);
      alert(`DEBUG: Mencari produk: ${productIds.join(', ')}`);
      
      const { products } = await NativePurchases.getProducts({
        productIdentifiers: productIds,
        productType: PURCHASE_TYPE.INAPP
      });

      if (!products || products.length === 0) {
        alert(`DEBUG GAGAL: Google Play mengembalikan 0 produk. Ini berarti aplikasi sudah terhubung ke Google Play, tapi Google Play tidak mengenali ID produk tersebut untuk aplikasi/akun tester ini. Cek kembali App Signature, Tester Account, dan Status Produk di Console.`);
      } else {
        const foundIds = products.map((p: any) => p.identifier).join(', ');
        alert(`DEBUG SUKSES: Google Play merespon! Produk ditemukan: ${foundIds}`);
      }
    } catch (e: any) {
      console.error('Debug Billing Error:', e);
      alert(`DEBUG ERROR: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return { tiers, purchaseTier, loading, checkProducts };
};