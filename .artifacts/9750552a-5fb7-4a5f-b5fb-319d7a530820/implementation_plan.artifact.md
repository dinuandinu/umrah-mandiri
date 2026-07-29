# Rencana Modernisasi UI Onboarding

Rencana ini bertujuan untuk menyelaraskan tampilan kartu tips pada halaman Onboarding (selamat datang) agar konsisten dengan gaya "Modern" yang digunakan di halaman utama aplikasi.

## Analisis Inkonsistensi

Berdasarkan pengecekan, kartu tips di Onboarding (`ob-tip`) saat ini menggunakan gaya lama:
*   Sudut kotak hanya `10px` (halaman utama menggunakan `1.5rem` / `24px`).
*   Menggunakan border kiri statis (gaya lama `info-box`).
*   Warna latar belakang pucat dan kurang kontras.
*   Belum mendukung *Safe Area* untuk HP dengan notch, sehingga teks "Bismillah" di atas bisa terpotong.

## Perubahan yang Diusulkan

### 1. Transformasi Kartu Tips (`ob-tip`)
Kita akan mengubah kartu tips di onboarding agar menyerupai `info-banner-modern`:
*   **Warna Latar**: Menggunakan gradien Emerald atau latar belakang yang lebih hidup.
*   **Border Radius**: Menaikkan radius menjadi `1.5rem` agar selaras dengan kartu di halaman utama.
*   **Visual**: Menghapus border kiri dan menggantinya dengan padding yang lebih lega.

### 2. Penyesuaian Safe Area
*   **Header Onboarding**: Menggunakan `env(safe-area-inset-top)` agar konten tidak menabrak status bar.
*   **Footer Onboarding**: Menggunakan `env(safe-area-inset-bottom)` agar tombol "Lanjut" tidak tertutup bar navigasi transparan.

### 3. Tipografi & Ikon
*   Memastikan ukuran font Judul dan Deskripsi slide selaras dengan skala tipografi halaman utama.

## Langkah-langkah Teknis

### [Component] Onboarding UI Refinement

#### [MODIFY] [UmrohApp.css](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/src/UmrohApp.css)
*   Update class `.ob-tip` untuk menggunakan gaya modern (Emerald background, rounded corners).
*   Update class `.ob-topbar` dan `.ob-footer` untuk mendukung Safe Area Insets.
*   Menambahkan pattern overlay (subtle) pada kartu tips jika memungkinkan lewat CSS.

#### [MODIFY] [Components.tsx](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/src/components/Layout/Components.tsx)
*   Menyesuaikan struktur HTML `Onboarding` jika diperlukan untuk mendukung layout baru.

## Rencana Verifikasi
1.  Reset progress aplikasi (lewat menu Drawer) untuk memunculkan kembali halaman Onboarding.
2.  Pastikan kartu tips terlihat identik dengan banner hijau di halaman utama.
3.  Pastikan teks "Bismillah" di atas memiliki jarak aman dari jam/status bar sistem.
