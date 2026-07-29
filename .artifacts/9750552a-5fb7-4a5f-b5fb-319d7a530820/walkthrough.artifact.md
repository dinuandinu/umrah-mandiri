# Walkthrough: Modernisasi UI & Penyelarasan Layout

Saya telah melakukan perombakan pada tampilan Onboarding dan menyelaraskan seluruh halaman agar konsisten dengan gaya desain modern serta mendukung layar penuh (Edge-to-Edge).

## Perubahan yang Dilakukan

### 1. Modernisasi Onboarding
*   **Kartu Tips Baru**: Mengubah `.ob-tip` dari gaya kotak kaku dengan border kiri menjadi gaya banner modern berwarna Hijau Emerald dengan sudut membulat (`1.5rem`).
*   **Visual Enhancements**: Menambahkan pola latar belakang halus (*subtle pattern*) pada kartu tips agar senada dengan banner di halaman utama.
*   **Elevasi**: Menambahkan bayangan yang lebih lembut dan kontemporer pada elemen onboarding.

### 2. Penyelarasan Safe Area (Full Screen Support)
Saya telah memastikan seluruh elemen antarmuka menghormati "jarak aman" agar tidak tertutup oleh notch (poni) atau tombol navigasi sistem:
*   **Header Utama**: Tombol Hamburger dan FAQ kini menggunakan posisi dinamis berdasarkan `safe-area-inset-top`.
*   **Halaman FAQ & About**: Memperbarui header dan tombol kembali agar konsisten dengan halaman utama.
*   **Drawer (Menu Samping)**: Menambahkan jarak aman pada bagian atas menu samping.
*   **Onboarding**: Menyeimbangkan jarak teks "Bismillah" di atas dan tombol navigasi di bawah.

### 3. Pembaruan Versi & Push
*   Versi aplikasi dinaikkan menjadi **`1.3.15`** (Build **`4`**).
*   Seluruh perubahan telah di-*commit* dan di-*push* ke GitHub untuk memicu build APK otomatis.

## Cara Verifikasi
1.  Buka aplikasi dan lihat halaman **Onboarding**. Kartu tips sekarang seharusnya terlihat mewah dan menyatu dengan tema Emerald.
2.  Perhatikan posisi tombol ☰ dan FAQ di header utama; mereka tidak akan lagi menabrak jam sistem di HP dengan notch.
3.  Buka menu **FAQ** atau **Tentang Aplikasi** dan pastikan header-nya sejajar sempurna dengan status bar.

> [!TIP]
> Jika Onboarding tidak muncul karena sudah pernah dibuka, Anda bisa memunculkannya kembali dengan cara:
> **Buka Drawer (☰) → Ketuk "Reset Progress" → Pilih "Ya" → Segarkan/Buka ulang aplikasi.**
