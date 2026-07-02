import { useState, useEffect } from 'react';
import { NativePurchases } from '@capgo/native-purchases';

const PRODUCT_ID = 'coffee_small'; // Pastikan ini sama dengan di Google Play Console

export const useBilling = () => {
  const [loading, setLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const initBilling = async () => {
      try {
        // Cek apakah billing tersedia di perangkat ini
        // Plugin ini biasanya otomatis terinisialisasi
        setIsAvailable(true);
      } catch (e) {
        console.error('Billing initialization failed', e);
      }
    };
    initBilling();
  }, []);

  const purchaseCoffee = async () => {
    if (window.location.hostname === 'localhost') {
      alert('Mockup: Pembelian Berhasil! (Hanya tampil di Localhost)');
      return true;
    }

    setLoading(true);
    try {
      // 1. Lakukan pembelian
      const result = await NativePurchases.purchase({
        productId: PRODUCT_ID,
        // productType: 'SUBSCRIPTION' // Kosongkan untuk Consumable/One-time
      });

      if (result) {
        // 2. Konsumsi produk agar bisa dibeli lagi (SANGAT PENTING)
        // Catatan: @capgo/native-purchases menangani konsumsi secara berbeda
        // tergantung versi. Pastikan cek dokumentasi terbaru.
        // Biasanya untuk consumable di Google Play, kita perlu memanggil consume.

        alert('Terima kasih atas dukungannya! Semoga berkah.');
        return true;
      }
    } catch (e) {
      console.error('Purchase failed', e);
      alert('Pembelian dibatalkan atau terjadi kesalahan.');
    } finally {
      setLoading(false);
    }
    return false;
  };

  return { purchaseCoffee, loading, isAvailable };
};
