# Rencana Perbaikan Build APK (GitHub Actions)

Rencana ini bertujuan untuk memperbaiki error pada alur kerja GitHub Actions (`build-apk.yml`) yang muncul setelah penambahan plugin baru. Error terjadi karena konflik saat menyalin folder `node_modules` dan hilangnya dependensi plugin baru di lingkungan build sementara.

## Analisis Masalah

1.  **Missing Plugins:** Langkah "Setup Capacitor di folder bersih" belum menyertakan `@capacitor/status-bar` dan `@capawesome/capacitor-navigation-bar`.
2.  **Symlink Conflict:** Perintah `cp` gagal karena mencoba menimpa symlink (hasil dari `pnpm install`) dengan direktori fisik secara paksa.

## Perubahan yang Diusulkan

### 1. Update Dependensi di Workflow
Menambahkan plugin baru ke perintah `npm install` di lingkungan build sementara agar Capacitor bisa menemukannya saat proses `sync`.

### 2. Robust File Copying
Memastikan folder tujuan dihapus terlebih dahulu sebelum dilakukan penyalinan (`rm -rf` diikuti `cp -r`) untuk menghindari konflik "non-directory" pada symlink pnpm.

## Langkah-langkah Teknis

### [Component] GitHub Workflow

#### [MODIFY] [.github/workflows/build-apk.yml](file:///Users/andinu/StudioProjects/umrah-mandiri/.github/workflows/build-apk.yml)
*   Update langkah `Setup Capacitor di folder bersih` untuk menyertakan:
    *   `@capacitor/status-bar`
    *   `@capawesome/capacitor-navigation-bar`
*   Update langkah `Sync Capacitor` untuk menambahkan perintah `rm -rf` sebelum melakukan `cp` pada folder `node_modules/@capacitor/*`.

## Rencana Verifikasi
1. Karena perbaikan ini ada di GitHub Actions, verifikasi dilakukan dengan memicu build di GitHub (melalui push atau workflow dispatch).
2. Memastikan langkah `Sync Capacitor` tidak lagi mengeluarkan error 404 atau konflik `cp`.
