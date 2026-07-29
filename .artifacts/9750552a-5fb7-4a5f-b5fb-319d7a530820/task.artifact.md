# Task List: Menghubungkan Google Cloud Console & Sync System UI

- [x] Ambil SHA-1 Fingerprint dari aplikasi
- [x] Berikan instruksi konfigurasi OAuth di Cloud Console
- [ ] Verifikasi penempatan `google-services.json`
- [ ] Verifikasi koneksi Billing/Maps

## Sync System UI (Status & Navigation Bar)
- [x] Install dependensi `@capacitor/status-bar` dan `@capawesome/capacitor-navigation-bar`
- [x] Konfigurasi Android `MainActivity.java` untuk Edge-to-Edge
- [x] Konfigurasi Android `styles.xml` untuk transparansi bar
- [x] Update `UmrohApp.tsx` untuk kontrol dinamis Status & Navigation Bar
- [x] Update `UmrohApp.css` untuk penanganan Safe Area Insets

## Deployment
- [x] Naikkan versi di `package.json` (1.3.13)
- [x] Naikkan `versionCode` (2) dan `versionName` (1.3.13) di `build.gradle`
- [x] Commit dan Push ke GitHub

## Fix GitHub Actions Build
- [x] Update `build-apk.yml` dengan plugin baru dan perbaikan perintah `cp`
- [x] Push perbaikan workflow ke GitHub
