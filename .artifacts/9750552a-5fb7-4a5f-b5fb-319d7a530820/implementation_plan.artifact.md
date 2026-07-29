# Rencana Modernisasi Halaman FAQ

Rencana ini bertujuan untuk menyelaraskan desain halaman FAQ agar konsisten dengan gaya visual "Modern" di halaman utama, dengan fokus pada keterbacaan dan kontras yang lebih baik.

## Perubahan yang Diusulkan

### 1. Header FAQ
*   **Warna & Gradien**: Menyelaraskan gradien latar belakang dengan Header utama agar identik.
*   **Judul**: Mengubah warna teks "Pertanyaan Umum" menjadi putih (`#FFFFFF`) untuk kontras yang lebih tajam.
*   **Pola Geometris**: Menambahkan `.header-geo` agar memiliki pola berlian yang sama dengan halaman depan.
*   **Modernisasi Ikon**: Mengubah badge ❓ menjadi container putih membulat yang elegan (mengikuti gaya logo Ka'bah).

### 2. Konten FAQ (Bawah)
*   **Label Kategori**: Memperbarui `.faq-cat-label` agar lebih selaras dengan `.section-label-modern` (font-weight lebih tebal, warna slate-400, dan garis pemisah).
*   **Kartu Pertanyaan**: Menyesuaikan `.faq-item` agar lebih mendekati gaya `.check-card-modern` (radius lebih besar, bayangan lebih halus, dan feedback sentuhan yang lebih baik).
*   **Warna Teks Jawaban**: Memastikan kontras teks jawaban tetap nyaman dibaca di mode terang maupun gelap.

## Langkah-langkah Teknis

### [Component] FAQ UI Refinement

#### [MODIFY] [Components.tsx](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/src/components/Layout/Components.tsx)
*   Menambahkan `<div className="header-geo" />` di dalam container `faq-header`.

#### [MODIFY] [UmrohApp.css](file:///Users/andinu/StudioProjects/umrah-mandiri/artifacts/umroh-app/src/UmrohApp.css)
*   Update `.faq-header`: Tambahkan `position: relative`, `overflow: hidden`, dan sesuaikan gradien.
*   Update `.faq-header-title`: Ubah `color` menjadi `#FFFFFF`.
*   Update `.faq-header-badge`: Ubah menjadi kotak putih membulat (`border-radius: 1rem`) dengan bayangan.
*   Update `.faq-cat-label`: Sesuaikan gaya dengan label section di halaman utama.
*   Update `.faq-item`: Tingkatkan `border-radius` dan sesuaikan `box-shadow`.

## Rencana Verifikasi
1.  Buka halaman FAQ.
2.  Pastikan header terlihat identik secara visual (pola dan warna) dengan halaman depan.
3.  Pastikan teks judul putih terbaca sangat jelas.
4.  Pastikan kartu pertanyaan di bawahnya terlihat lebih modern dan bersih.

> [!IMPORTANT]
> Saya **tidak akan** mengubah nomor versi aplikasi dalam tugas ini sesuai dengan instruksi Anda.
