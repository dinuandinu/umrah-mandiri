# Rencana Update Versi dan Push ke GitHub

Rencana ini bertujuan untuk memperbarui versi aplikasi (baik versi web maupun native Android) dan mengunggah seluruh perubahan terbaru ke repositori GitHub.

## Perubahan yang Diusulkan

### 1. Update Versi Aplikasi
*   **Web (`package.json`)**: Menaikkan versi dari `1.3.12` ke `1.3.13`.
*   **Android (`build.gradle`)**:
    *   Menaikkan `versionName` menjadi `1.3.13`.
    *   Menaikkan `versionCode` dari `1` menjadi `2` (wajib untuk update di Play Store).

### 2. Version Control (Git)
*   Melakukan `git add` untuk semua perubahan (termasuk fitur System UI dan Google Cloud yang baru saja dikerjakan).
*   Melakukan `git commit` dengan pesan yang deskriptif.
*   Melakukan `git push` ke branch `main`.

## Langkah-langkah Teknis

### [Component] Version Management

#### [MODIFY] [package.json](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/package.json)
Update field `"version": "1.3.13"`.

#### [MODIFY] [build.gradle](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/android/app/build.gradle)
Update `versionCode 2` dan `versionName "1.3.13"`.

### [Component] GitHub Deployment

#### [EXECUTE] Git Commands
1. `git add .`
2. `git commit -m "chore: bump version to 1.3.13 and sync system UI features"`
3. `git push origin main`

## Rencana Verifikasi
1. Memastikan `git status` bersih setelah push.
2. Memastikan versi di `package.json` dan `build.gradle` sudah sinkron.
