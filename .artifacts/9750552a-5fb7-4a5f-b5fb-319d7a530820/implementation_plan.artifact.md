# Rencana Penyelarasan Layout "Edge-to-Edge" & Pola Latar Belakang

Rencana ini bertujuan untuk menyamakan gaya transisi antara header (hijau) dan area konten (putih/parchment) di seluruh halaman overlay (FAQ, About, Onboarding, dan Drawer) agar identik dengan halaman utama, lengkap dengan pola diagonal dan chessboard.

## Perubahan yang Diusulkan

### 1. Transformasi Header & Konten (The "Cut")
Kita akan mengubah transisi lurus/lengkungan sederhana saat ini menjadi gaya "Rounded Card" yang tumpang tindih dengan header:
*   **Hapus Header Curve Lama**: Menghapus `::after` pada `.faq-header`, `.about-header`, dan `.ob-topbar`.
*   **Body Container Modern**: Membungkus isi halaman overlay dengan kontainer yang memiliki:
    *   `border-top-left-radius: 2rem`
    *   `border-top-right-radius: 2rem`
    *   `position: relative` dengan `top: -32px` untuk efek overlap yang cantik.
    *   Latar belakang sesuai variabel `--bg`.

### 2. Sinkronisasi Pola Dekoratif
*   **Pola Diagonal (Header)**: Memastikan `.header-geo` (berlian tipis) ada di semua header overlay.
*   **Pola Chessboard (Body)**: Menambahkan elemen `.body-pattern` di dalam semua kontainer konten baru agar pola grid miring terlihat konsisten.

### 3. Penyesuaian Drawer (Menu Samping)
*   Mengubah bagian atas area scroll Drawer agar memiliki sudut membulat yang sama, sehingga saat di-scroll, konten tidak langsung "menabrak" header hijau melainkan masuk ke bawah lengkungan.

## Langkah-langkah Teknis

### [Component] Overlay UI Refinement

#### [MODIFY] [Components.tsx](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/src/components/Layout/Components.tsx)
*   Update `FAQPage`, `AboutPage`, dan `Onboarding`: Gunakan struktur kontainer baru (`overlay-body-container`) yang menyertakan `.body-pattern`.

#### [MODIFY] [UmrohApp.css](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/src/UmrohApp.css)
*   Definisikan `.overlay-body-container` dan `.overlay-body-inner`.
*   Hapus gaya `::after` (clip-path lama) pada header-header terkait.
*   Pastikan `.body-pattern` memiliki posisi yang benar agar tidak menutupi teks.

## Rencana Verifikasi
1.  Buka **FAQ**: Pastikan batas antara hijau dan putih melengkung besar (`2rem`) dan menutupi sedikit bagian bawah header hijau, persis seperti gambar referensi.
2.  Pastikan pola grid kotak-kotak (chessboard) terlihat di area putih FAQ.
3.  Pastikan pola berlian (diagonal) terlihat di area hijau FAQ.
4.  Ulangi pengecekan untuk **Tentang Aplikasi** dan **Onboarding**.

> [!IMPORTANT]
> Saya akan sangat berhati-hati dengan **opasitas pola** agar tetap sangat tipis (opacity 0.03 - 0.05) sehingga kontras teks putih di atas hijau tetap tajam dan nyaman dibaca.
