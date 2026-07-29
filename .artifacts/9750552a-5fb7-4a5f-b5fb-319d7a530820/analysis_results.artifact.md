# Analisis Inkonsistensi UI - Umroh Mandiri

Berdasarkan tinjauan mendalam terhadap kode sumber (React & CSS), berikut adalah temuan inkonsistensi antarmuka pengguna (UI) yang dapat diperbaiki untuk meningkatkan kualitas dan profesionalitas aplikasi:

## 1. Penanganan Safe Area (Notch & Navigation Bar)
Setelah kita mengaktifkan mode *Edge-to-Edge*, penanganan jarak aman (*padding*) belum merata di seluruh halaman:
*   **Header Utama:** Sudah menggunakan `env(safe-area-inset-top)`, namun tombol **Hamburger** dan **FAQ** masih menggunakan posisi absolut tetap (`top: 35px`). Ini akan terlihat berantakan di HP dengan notch yang sangat dalam atau sangat dangkal.
*   **Halaman Overlay (FAQ & About):** Masih menggunakan padding statis (`40px`). Konten di halaman ini akan tertutup oleh Status Bar di HP Android modern.
*   **Drawer (Menu Samping):** Bagian `drawer-head` belum memperhitungkan *safe area top*, sehingga teks "Bismillah" mungkin tertutup jam sistem.

## 2. Tipografi & Skala Font
Ada beberapa inkonsistensi dalam pemberian ukuran teks pada elemen yang setara fungsinya:
*   **Label Section:**
    *   `drawer-section-label`: `0.65rem`
    *   `quick-menu-label`: `10px`
    *   `section-label-modern`: `11px`
*   **Font Family:** Penggunaan font `Inter` didefinisikan di `index.html`, namun hampir seluruh CSS memaksa penggunaan `Tajawal` atau `Amiri`. Font `Inter` menjadi redundan dan menambah beban muat tanpa digunakan secara efektif.

## 3. Desain Komponen & Interaksi
*   **Gaya Ikon:**
    *   Menu di **Drawer** menggunakan ikon dengan latar belakang gradien bulat/kotak.
    *   **Quick Menu** menggunakan emoji polos tanpa latar belakang.
    *   **Audio Player** menggunakan ikon SVG (`lucide-react`), sementara bagian lain menggunakan emoji.
*   **Feedback Visual (Active State):**
    *   Tombol **Quick Menu** memiliki efek `scale(0.92)` saat ditekan.
    *   Tombol **Segmented Control** (pilih tema) tidak memiliki efek tekan, hanya berubah warna.
    *   Tombol **Drawer Item** hanya berubah warna latar belakang tanpa efek skala.
*   **Tap Highlight:** Sebagian elemen memiliki `-webkit-tap-highlight-color: transparent`, namun elemen interaktif lainnya (seperti kartu checklist) mungkin masih memunculkan kotak abu-abu default Android saat ditekan.

## 4. Dark Mode Refinements
*   **Elevasi & Bayangan:** Penggunaan `box-shadow` pada kartu di Dark Mode terkadang terlalu pekat atau menggunakan warna yang sama dengan Light Mode, sehingga efek "kedalaman" (elevation) kurang terasa di background gelap.
*   **Kontras Border:** Variabel `--border-card` di Dark Mode mungkin perlu disesuaikan agar batas antar kartu lebih terlihat jelas namun tidak terlalu mencolok.

## 5. Duplikasi Kode Komponen
*   Komponen `DS` (Detail Section) dan `SubTabs` terdefinisi di dua file berbeda (`Common.tsx` dan `TutorialUI.tsx`). Ini menyulitkan jika Anda ingin mengubah gaya ekspansi (misal: kecepatan rotasi panah) di masa depan.

---

### Rekomendasi Prioritas Utama:
> [!IMPORTANT]
> Saya sangat menyarankan untuk menyatukan seluruh penanganan **Safe Area** menggunakan variabel CSS yang konsisten di semua halaman overlay (About, FAQ, dan Drawer) agar aplikasi benar-benar terasa *native* di semua jenis layar HP.
