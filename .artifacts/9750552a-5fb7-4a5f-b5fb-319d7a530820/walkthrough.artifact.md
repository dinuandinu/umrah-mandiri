# Walkthrough: Sinkronisasi Status Bar & Navigation Bar Transparan

Saya telah berhasil mengimplementasikan perubahan agar Status Bar senada dengan Header dan Navigation Bar menjadi transparan.

## Perubahan yang Dilakukan

### 1. Instalasi Plugin Native
Saya telah menambahkan dua plugin penting untuk mengontrol UI sistem Android:
*   `@capacitor/status-bar`: Mengontrol bar bagian atas (jam, baterai).
*   `@capawesome/capacitor-navigation-bar`: Mengontrol bar bagian bawah (tombol navigasi).

### 2. Integrasi Edge-to-Edge (Android)
Saya memodifikasi file native Android agar aplikasi dapat digambar di seluruh area layar (full screen):
*   **[MainActivity.java](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/android/app/src/main/java/com/dinuandinu/umrahmandiri/MainActivity.java)**: Menambahkan `WindowCompat.setDecorFitsSystemWindows(false)` agar konten aplikasi bisa "mengalir" di belakang bar navigasi.
*   **[styles.xml](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/android/app/src/main/res/values/styles.xml)**: Menyetel transparansi default pada level tema sistem.

### 3. Logic Sinkronisasi Dinamis (React)
Di file **[UmrohApp.tsx](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/src/UmrohApp.tsx)**, saya menambahkan `useEffect` yang secara otomatis:
*   Mengubah warna Status Bar menjadi Hijau Emerald (`#1A4A3A`) agar menyatu dengan Header.
*   Membuat Navigation Bar menjadi transparan.
*   Menyetel gaya ikon (putih) agar tetap terbaca di atas background hijau.

### 4. Penyesuaian Layout (CSS)
Agar konten tidak tertutup oleh bar sistem yang sekarang transparan, saya memperbarui **[UmrohApp.css](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/src/UmrohApp.css)**:
*   **Header**: Menggunakan `env(safe-area-inset-top)` untuk memberikan jarak otomatis di bagian atas (terutama untuk HP dengan notch).
*   **Konten Bawah**: Menggunakan `env(safe-area-inset-bottom)` agar bagian bawah aplikasi tidak bertumpukan dengan tombol navigasi Android.

## Cara Verifikasi
1.  Jalankan aplikasi di emulator atau perangkat Android.
2.  Perhatikan bagian atas (Status Bar) sekarang harus berwarna hijau yang sama persis dengan Header.
3.  Perhatikan bagian bawah (Navigation Bar) sekarang transparan, dan konten aplikasi terlihat di belakang tombol navigasi.
4.  Coba ganti ke Dark Mode; sistem akan tetap mempertahankan keselarasan warna tersebut.

> [!TIP]
> Perubahan ini memerlukan sinkronisasi native. Jika Anda menjalankan secara lokal, pastikan untuk menjalankan `npx cap copy android` sebelum mem-build ulang aplikasi di Android Studio.
