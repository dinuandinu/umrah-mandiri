# Rencana Penyelarasan Header (Drawer & FAQ)

Rencana ini bertujuan untuk menyelaraskan tampilan "bagian atas" (Header) pada Menu Samping (Drawer) dan Halaman FAQ agar konsisten dengan gaya **Modern Banner** yang ada di halaman utama.

## Analisis Masalah

Meskipun jarak aman (*Safe Area*) sudah ditambahkan, secara visual Header di Drawer dan FAQ masih terlihat "polos" dibandingkan Header utama:
*   **Tanpa Pola**: Tidak ada pola geometris (*Geo Pattern*) yang menjadi ciri khas desain aplikasi.
*   **Hierarki Visual**: Teks judul dan dekorasi Arab belum mengikuti pola yang sama dengan Header utama.
*   **Ketinggian**: Proporsi ketinggian header di overlay (FAQ/About) terasa sedikit berbeda dengan transisi yang ada di halaman utama.

## Perubahan yang Diusulkan

### 1. Penambahan Pola Geometris (`Geo Pattern`)
Kita akan menambahkan elemen `.header-geo` (atau `.ob-topbar::before`) ke dalam:
*   `.drawer-head`
*   `.faq-header`
*   `.about-header`

### 2. Standarisasi Dekorasi Logo/Badge
*   **Drawer**: Menambahkan container logo kecil (Kaaba) atau memperbaiki container teks Arab agar lebih menonjol.
*   **FAQ**: Mengubah `faq-header-badge` (❓) agar menggunakan gaya container yang serupa dengan logo di halaman utama (putih, membulat, dengan bayangan).

### 3. Sinkronisasi Gradien & Tipografi
*   Memastikan semua header menggunakan gradien yang identik: `linear-gradient(160deg, var(--emerald), var(--emerald-mid))`.
*   Menyelaraskan gaya teks Arab (font `Amiri`) di semua header agar memiliki ukuran dan warna yang konsisten.

## Langkah-langkah Teknis

### [Component] UI Consistency

#### [MODIFY] [Components.tsx](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/src/components/Layout/Components.tsx)
*   Update `Drawer`: Tambahkan `<div className="header-geo" />` di dalam `drawer-head`.
*   Update `FAQPage`: Tambahkan `<div className="header-geo" />` di dalam `faq-header`.
*   Update `AboutPage`: Tambahkan `<div className="header-geo" />` di dalam `about-header`.

#### [MODIFY] [UmrohApp.css](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/src/UmrohApp.css)
*   Update style `.drawer-head`, `.faq-header`, dan `.about-header` agar memiliki `position: relative` dan `overflow: hidden`.
*   Pastikan `.header-geo` dapat digunakan secara universal di semua container tersebut.
*   Refine gaya `faq-header-badge` agar lebih modern.

## Rencana Verifikasi
1.  Buka **Drawer** (☰) dan pastikan ada pola geometris di bagian hijaunya.
2.  Buka **FAQ** dan pastikan tampilannya sudah "wah" seperti halaman utama.
3.  Pastikan transisi antar halaman terasa mulus karena gaya header yang identik.
