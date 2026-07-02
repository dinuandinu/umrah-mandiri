import { useState } from 'react';
import { NativePurchases } from '@capgo/native-purchases';
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

export const useBilling = () => {
  const [loading, setLoading] = useState(false);

  const purchaseTier = async (tier: CoffeeTier) => {
    // 1. MOCKUP FOR BROWSER
    if (!Capacitor.isNativePlatform()) {
      alert(`Mockup: Berhasil memberikan ${tier.label}! (Simulasi Browser)`);
      return true;
    }

    setLoading(true);
    try {
      // 2. TRIGGER PURCHASE
      // Menggunakan API terbaru purchaseProduct dengan type INAPP (Consumable)
      const result = await NativePurchases.purchaseProduct({
        productIdentifier: tier.id,
        productType: 'INAPP',
        quantity: 1
      });

      if (result && result.transactionId) {
        // 3. MANDATORY CONSUME (Penting agar bisa beli lagi)
        if (Capacitor.getPlatform() === 'android') {
          await NativePurchases.consumePurchase({
            purchaseToken: result.transactionId // Pada Android, transactionId berisi token
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

  return { purchaseTier, loading };
};