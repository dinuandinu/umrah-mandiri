import { useState } from 'react';
import { NativePurchases } from '@capgo/native-purchases';

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
    if (window.location.hostname === 'localhost') {
      alert(`Mockup: Berhasil memberikan ${tier.label}! (Simulasi Localhost)`);
      return true;
    }

    setLoading(true);
    try {
      // 1. Lakukan pembelian berdasarkan ID tier
      const result = await NativePurchases.purchase({
        productId: tier.id,
      });

      if (result) {
        alert(`Terima kasih atas ${tier.label}-nya! Semoga berkah dan menjadi amal jariyah.`);
        return true;
      }
    } catch (e) {
      console.error('Purchase failed', e);
      alert('Terjadi kesalahan atau pembelian dibatalkan.');
    } finally {
      setLoading(false);
    }
    return false;
  };

  return { purchaseTier, loading };
};
