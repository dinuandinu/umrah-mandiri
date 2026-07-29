import React from "react";
import { DS, SubTabs } from "../components/ui/TutorialUI";
import { MiniMap } from "../components/ui/MapComponents";
import { PrayerAudioPlayer } from "../components/ui/PrayerAudioPlayer";
import { PrepSection, TutItem } from "../types/umroh";

export const OB_SLIDES = [
  {
    emoji:"📋",
    title:"Persiapkan Perjalanan Anda",
    desc:"Centang setiap item di tab Persiapan — mulai dari paspor, visa, vaksin, hingga perlengkapan ibadah.",
    tip:"Progress tersimpan otomatis di perangkat Anda. Kapan saja buka aplikasi, centang langsung lanjut dari terakhir kali.",
  },
  {
    emoji:"🕋",
    title:"Panduan Ibadah Lengkap",
    desc:"Tab Tutorial berisi panduan step-by-step seluruh ritual umroh — dari miqat, tawaf, sa'i, hingga tahallul — lengkap dengan doa dan transliterasi.",
    tip:"Ketuk judul kartu untuk membuka detail. Gunakan sub-tab untuk melihat bagian berbeda seperti doa, adab, dan panduan praktis.",
  },
  {
    emoji:"🗺️",
    title:"Peta Interaktif",
    desc:"Temukan peta Masjidil Haram, Masjid Nabawi, serta kota Makkah dan Madinah. Ketuk penanda untuk melihat detail lokasi.",
    tip:"Peta tersedia di dalam kartu Tutorial (tab Mekah & Madinah → sub-tab Peta).",
  },
  {
    emoji:"⚙️",
    title:"Pengaturan & Informasi",
    desc:"Ketuk ☰ di pojok kiri atas untuk mengatur tema gelap/terang, ukuran teks, atau mereset progress. Cari topik dengan cepat lewat kotak pencarian.",
    tip:"Gunakan fitur pencarian untuk langsung menemukan topik seperti 'paspor', 'tawaf', atau 'dam' tanpa harus scroll manual.",
  },
];

export const FAQ_DATA: {cat:string; items:{q:string;a:string;note?:string}[]}[] = [
  {
    cat:"🕌 Dasar Ibadah Umroh",
    items:[
      {
        q:"Apa saja rukun umroh yang wajib dipenuhi?",
        a:"Rukun umroh ada 5: <strong>niat ihram, tawaf, sa'i, tahallul (cukur rambut)</strong>, dan <strong>tertib</strong> (dilakukan berurutan). Jika salah satu rukun ditinggalkan, umroh tidak sah dan tidak bisa digantikan dengan dam.",
        note:"Berbeda dengan wajib umroh — jika wajib dilanggar, bisa ditebus dengan dam."
      },
      {
        q:"Apa perbedaan rukun, wajib, and sunnah umroh?",
        a:"<strong>Rukun</strong>: wajib dikerjakan, tidak bisa diganti dam. <strong>Wajib</strong>: harus dikerjakan, jika ditinggalkan wajib membayar dam (denda). <strong>Sunnah</strong>: dianjurkan untuk menambah pahala, tidak mempengaruhi keabsahan ibadah.",
      },
      {
        q:"Berapa lama waktu ideal perjalanan umroh mandiri?",
        a:"Minimal <strong>10–14 hari</strong>: sekitar 5–7 hari di Mekkah dan 4–8 hari di Madinah. Waktu ideal ini memberi kesempatan untuk Arbain (40 shalat berturut-turut) di Nabawi dan eksplorasi situs-situs penting.",
        note:"Durasi bisa disesuaikan — sebagian jamaah mandiri memilih 21 hari agar lebih tenang beribadah."
      },
      {
        q:"Apakah umroh bisa dilakukan lebih dari sekali dalam satu perjalanan?",
        a:"Ya, boleh. Caranya: setelah umroh pertama selesai (tahallul), pergi ke salah satu titik miqat seperti <strong>Masjid Ji'ranah (±24km NE Mekkah)</strong> untuk berihram kembali, lalu lakukan tawaf, sa'i, and tahallul lagi. Ini disebut <strong>umroh sunnah</strong>.",
      },
    ]
  },
  {
    cat:"🧳 Persiapan & Keberangkatan",
    items:[
      {
        q:"Dokumen apa saja yang wajib disiapkan untuk umroh?",
        a:"<strong>Wajib</strong>: Paspor (minimal 6 bulan aktif), visa umroh, tiket pesawat, bukti akomodasi hotel, sertifikat vaksin meningitis, and kartu BPJS Kesehatan aktif (atau asuransi perjalanan).",
        note:"Visa umroh kini bisa diurus mandiri melalui platform Nusuk (nusuk.sa) atau melalui penyedia visa terpercaya."
      },
      {
        q:"Apakah vaksin meningitis wajib?",
        a:"<strong>Ya, wajib</strong>. Pemerintah Arab Saudi mewajibkan vaksin meningitis untuk semua jamaah. Suntikan harus dilakukan minimal <strong>10 hari sebelum keberangkatan</strong>. Tersedia di klinik kesehatan haji/umroh atau puskesmas tertentu.",
      },
      {
        q:"Berapa biaya minimal umroh mandiri dari Indonesia?",
        a:"Estimasi minimal (ekonomis): tiket PP sekitar Rp 5–8 juta, akomodasi 10 malam Rp 3–5 juta, visa Rp 1,5–2 juta, transportasi & makan Rp 2–4 juta. <strong>Total sekitar Rp 12–20 juta</strong>, jauh lebih hemat dibanding paket travel yang berkisar Rp 25–40 juta.",
        note:"Harga tiket sangat berfluktuasi. Pesan tiket 3–6 bulan lebih awal untuk mendapatkan harga terbaik."
      },
      {
        q:"Aplikasi apa saja yang wajib dipasang sebelum berangkat?",
        a:"<strong>Wajib</strong>: Nusuk (booking Raudhah & izin masuk haram), Google Maps (unduh offline Mekkah & Madinah), Uber/Careem (transportasi), Haramain Train (kereta HHR). <strong>Sangat disarankan</strong>: WhatsApp, Al-Qur'an Indonesia, and aplikasi kurs mata uang.",
      },
      {
        q:"Pakaian apa yang boleh dipakai wanita saat ihram?",
        a:"Wanita mengenakan <strong>pakaian longgar menutup aurat</strong> — tidak ada ketentuan warna khusus. Boleh menggunakan gamis, abaya, atau baju biasa yang syar'i. <strong>Wajah dan telapak tangan harus terbuka</strong>, tidak boleh memakai cadar atau sarung tangan saat berihram.",
      },
    ]
  },
  {
    cat:"🤍 Ihram & Miqat",
    items:[
      {
        q:"Di mana miqat bagi jamaah Indonesia yang terbang via Jeddah?",
        a:"Jamaah yang mendarat di Bandara Internasional King Abdulaziz (Jeddah) menggunakan miqat <strong>Yalamlam</strong> (disebut juga As-Sa'diyah). Karena pesawat melewati kawasan miqat di udara, jamaah harus berihram <strong>sebelum boarding atau saat di pesawat</strong> sebelum melintas garis miqat.",
        note:"Diumumkan pilot di pesawat saat mendekati kawasan miqat. Jangan tunggu sampai mendarat!"
      },
      {
        q:"Bolehkah berpakaian ihram sejak dari bandara Indonesia?",
        a:"<strong>Boleh dan dianjurkan</strong> untuk memakai pakaian ihram sejak di bandara Indonesia, karena lebih praktis dan menghindari risiko kelewat miqat. Namun niat ihram (niat + talbiyah) baru dilakukan saat mendekati miqat di atas pesawat.",
      },
      {
        q:"Apa saja larangan saat berihram?",
        a:"<strong>Larangan ihram</strong> meliputi: memotong rambut/kuku, memakai wewangian, berburu binatang darat, berhubungan suami-istri, melamar/menikah, bertengkar/berbicara kotor. Pria dilarang menutup kepala and memakai pakaian berjahit. Wanita dilarang memakai sarung tangan and cadar.",
      },
      {
        q:"Apa hukum dan konsekuensi melanggar larangan ihram?",
        a:"Tergantung jenis pelanggarannya: <strong>Fidyah</strong> (memilih: puasa 3 hari, atau memberi makan 6 orang miskin, atau menyembelih 1 ekor kambing) untuk pelanggaran seperti memotong rambut/kuku atau memakai wewangian. Pelanggaran hubungan suami-istri sebelum tahallul pertama <strong>merusak keabsahan umroh</strong>.",
      },
      {
        q:"Apakah wanita yang sedang haid tetap bisa berihram?",
        a:"<strong>Ya, boleh dan tetap harus berihram</strong> dari miqat. Wanita haid bisa melakukan semua rangkaian perjalanan dan ibadah kecuali <strong>tawaf dan shalat</strong>. Sa'i boleh dilakukan. Tawaf ditunda hingga suci.",
        note:"Jika khawatir waktu tidak cukup, konsultasikan dengan dokter mengenai obat penunda haid, minimal 2 minggu sebelum berangkat."
      },
    ]
  },
  {
    cat:"🕋 Tawaf",
    items:[
      {
        q:"Apakah tawaf harus dalam kondisi suci (berwudhu)?",
        a:"<strong>Ya, wajib berwudhu</strong> untuk tawaf. Jika batal wudhu di tengah tawaf, keluar dari area mataf, wudhu kembali, lalu sambung putaran yang tertinggal dari titik yang sama (tidak perlu mulai dari awal).",
        note:"Wanita haid tidak boleh tawaf. Sa'i boleh dilakukan tanpa syarat suci."
      },
      {
        q:"Apa yang harus dilakukan jika tawaf terganggu oleh waktu shalat?",
        a:"Jika iqamah shalat dikumandangkan saat tawaf berlangsung, <strong>berhenti dan ikut shalat berjemaah</strong>. Setelah salam, lanjutkan putaran dari titik terakhir berhenti. Putaran yang sudah selesai tidak perlu diulang.",
      },
      {
        q:"Berapa minimal putaran tawaf yang sah?",
        a:"<strong>Tepat 7 putaran penuh</strong>, dimulai dan diakhiri di Hajar Aswad. Putaran yang tidak sampai garis Hajar Aswad tidak dihitung. Tawaf yang kurang dari 7 putaran tidak sah.",
      },
      {
        q:"Bolehkah berdoa with bahasa Indonesia saat tawaf?",
        a:"<strong>Boleh</strong>. Tidak ada doa tawaf yang sifatnya wajib with teks tertentu. Anda bebas berdoa with bahasa apa pun. Namun membaca doa yang diajarkan Rasulullah ﷺ tentu lebih afdhal, terutama doa sapu jagad antara Rukun Yamani dan Hajar Aswad.",
      },
    ]
  },
  {
    cat:"🏃 Sa'i & Tahallul",
    items:[
      {
        q:"Apakah sa'i harus langsung dilakukan setelah tawaf?",
        a:"Tidak harus langsung, tetapi <strong>sa'i harus dilakukan pada hari yang sama</strong> setelah tawaf. Jamaah boleh istirahat sebentar, minum zamzam, and shalat 2 rakaat di Maqam Ibrahim sebelum memulai sa'i.",
      },
      {
        q:"Apakah wanita juga harus lari-lari kecil (harwalah) di antara dua tanda hijau saat sa'i?",
        a:"<strong>Tidak</strong>. Harwalah (lari-lari kecil) di antara dua tanda lampu hijau hanya disunnahkan bagi <strong>pria</strong>. Wanita cukup berjalan biasa sepanjang sa'i.",
      },
      {
        q:"Apakah sa'i sah jika dilakukan oleh wanita yang sedang haid?",
        a:"<strong>Ya, sa'i tetap sah</strong> bagi wanita haid karena sa'i tidak mensyaratkan kesucian/wudhu. Wanita haid boleh sa'i, namun tetap tidak boleh melakukan tawaf.",
      },
      {
        q:"Apa perbedaan tahallul asghar dan tahallur akbar?",
        a:"Untuk umroh, hanya ada <strong>satu tahallul</strong> — yaitu menggunting rambut setelah sa'i. Setelah itu semua larangan ihram gugur. Konsep tahallul asghar dan akbar (dua tahap) berlaku untuk <strong>ibadah haji</strong>, bukan umroh.",
      },
      {
        q:"Bagaimana cara tahallul untuk umroh kedua atau ketiga jika rambut sudah dicukur gundul saat umroh pertama?",
        a:"Jika kepala sudah <strong>gundul total</strong> pada umroh pertama, maka untuk umroh berikutnya dalam perjalanan yang sama, tahallul tetap <strong>wajib dilakukan</strong> meskipun tidak ada rambut yang tersisa. Caranya:<br/><br/>"
         +"<strong>① Untuk pria:</strong> Lewatkan pisau cukur atau alat cukur di atas kepala meskipun tidak ada rambut — cukup menggerakkan alat cukur di kulit kepala sebagai simbol pemenuhan rukun tahallul. Ini adalah pendapat mayoritas ulama (Mazhab Syafi'i, Hambali) bahwa <em>niat dan gerakan mencukur</em> sudah memenuhi kewajiban rukun.<br/><br/>"
         +"<strong>② Untuk wanita:</strong> Gunting ujung rambut minimal sepanjang <em>satu ruas jari</em> (±1–2 cm) dari beberapa helai rambut. Wanita tidak dianjurkan mencukur gundul.<br/><br/>"
         +"<strong>③ Jika benar-benar tidak memungkinkan:</strong> Sebagian ulama membolehkan hanya meniatkan tahallul dalam hati sambil menggerakkan tangan di kepala — namun pendapat yang lebih kuat tetap menganjurkan menggunakan alat cukur secara fisik.",
        note:"Catatan: Kondisi ini umum terjadi pada jamaah yang melakukan 2–3 umroh dalam satu perjalanan. Sah hukumnya dan umroh tetap sempurna selama rukun dilakukan.",
      },
    ]
  },
  {
    cat:"🗺️ Praktis & Teknis",
    items:[
      {
        q:"Bagaimana cara booking slot Raudhah di Masjid Nabawi?",
        a:"Wajib melalui aplikasi <strong>Nusuk</strong> (nusuk.sa). Buat akun, masukkan data paspor, pilih lokasi 'Raudhah', lalu pilih jadwal yang tersedia. Slot sangat terbatas — booking <strong>segera setelah tiba di Madinah</strong> atau bahkan sebelum berangkat dari Indonesia.",
        note:"Jamaah pria dan wanita memiliki slot waktu yang berbeda. Wanita mendapat akses tertentu."
      },
      {
        q:"Apa itu BRN (Booking Reference Number) dan bagaimana cara mendapatkannya?",
        a:"<strong>BRN</strong> adalah kode referensi unik yang membuktikan hotel/transportasi Anda telah dibayar dan terdaftar di sistem kementerian Saudi. <strong>Cara mendapatkan:</strong><br/>"
         +"<strong>① Via Nusuk (Mandiri):</strong> Pesan langsung paket hotel/transport di platform [umrah.nusuk.sa]. Kode BRN otomatis terbit bersama visa.<br/>"
         +"<strong>② Via Provider Visa (PPIU):</strong> Jika Anda booking hotel sendiri (Agoda/Booking.com), kirim bukti bayar ke biro travel resmi (PPIU) untuk di-<em>inject</em> ke sistem Nusuk Masar guna mendapatkan BRN resmi.",
        note:"Tanpa BRN yang valid di sistem Nusuk Masar, pengajuan Visa Umrah akan ditolak otomatis."
      },
      {
        q:"Bagaimana cara terbaik perjalanan Mekkah–Madinah?",
        a:"Ada dua pilihan utama: <strong>Kereta HHR (Haramain High Speed Railway)</strong> — durasi ±2 jam, harga SAR 65–150, nyaman dan cepat. Stasiun Makkah ±4km dari Haram. <strong>Bus Saptco</strong> — durasi ±5 jam, lebih murah sekitar SAR 30, tersedia dari Terminal Bus Mekkah.",
      },
      {
        q:"Di mana sebaiknya menginap agar dekat Masjidil Haram?",
        a:"Pilih hotel di <strong>ring 1 atau ring 2 Haram</strong> — dalam radius 500m–1km. Area Ajyad, Masa, dan Abraj Al-Bait (Clock Tower) adalah lokasi terpopuler. Semakin dekat, semakin mahal. Manfaatkan aplikasi Booking.com atau Agoda, filter with jarak ke Haram.",
      },
      {
        q:"Kartu SIM mana yang terbaik untuk dipakai di Arab Saudi?",
        a:"Tiga operator utama: <strong>STC, Zain, dan Mobily</strong>. Beli di bandara atau minimarket setibanya di Jeddah. Harga SIM perdana with data ±SAR 50–100 untuk 30 hari. Alternatif: gunakan <strong>eSIM</strong> (Airalo, Nomad) yang bisa diaktifkan sebelum boarding dari Indonesia.",
      },
      {
        q:"Apakah wanita boleh umroh mandiri tanpa mahram?",
        a:"Per kebijakan Arab Saudi terbaru (2021), <strong>wanita di atas 18 tahun boleh umroh tanpa mahram</strong> jika tergabung dalam rombongan resmi atau bersama kelompok wanita yang terorganisir. Namun kebijakan ini dapat berubah — selalu cek informasi terkini dari Kemenag atau KJRI Jeddah sebelum berangkat.",
        note:"Meski secara regulasi diperbolehkan, dari sisi fiqih sebagian ulama tetap menganjurkan mahram untuk keselamatan."
      },
      {
        q:"Apa yang harus dilakukan jika paspor hilang di Arab Saudi?",
        a:"Segera laporkan ke <strong>kantor polisi setempat</strong> untuk mendapatkan surat laporan kehilangan. Kemudian hubungi <strong>KJRI Jeddah</strong> (untuk jamaah dari Indonesia) atau Kedubes Indonesia di Riyadh untuk pengurusan Surat Perjalanan Laksana Paspor (SPLP). Selalu simpan fotokopi paspor dan data diri di email atau cloud.",
      },
      {
        q:"Bagaimana cara mendapatkan air zamzam untuk dibawa pulang ke Indonesia?",
        a:"Di Bandara King Abdulaziz Jeddah (terminal haji/umroh), tersedia <strong>paket air zamzam resmi 5 liter</strong> yang dijual seharga sekitar SAR 20–30. Ini adalah cara resmi dan legal. Batas bawaan: satu botol per penumpang. Memindahkan zamzam ke botol pribadi dan membawanya dalam bagasi kabin tidak diperbolehkan.",
      },
    ]
  },
  {
    cat:"🏥 Kesehatan & Medis",
    items:[
      {
        q:"Bagaimana cara menjaga kesehatan dan stamina selama menjalani ibadah umroh?",
        a:"Kunci utama: <strong>cukup tidur minimal 6–7 jam</strong>, minum air zamzam dan air mineral minimal 2–3 liter per hari (udara Mekkah sangat kering), gunakan sandal yang nyaman, dan jangan memaksakan diri tawaf/sa'i saat cuaca paling panas (pukul 11.00–15.00). Bawa <strong>pelembap kulit dan lip balm</strong> untuk mencegah dehidrasi kulit.",
        note:"Istirahat bukan kelemahan — menjaga fisik adalah bagian dari menjaga ibadah agar tetap khusyuk."
      },
      {
        q:"Apakah bisa umroh jika memiliki penyakit kronis seperti diabetes atau hipertensi?",
        a:"<strong>Bisa, with persiapan matang</strong>. Konsultasikan kondisi kesehatan with dokter spesialis minimal 1–2 bulan sebelum berangkat. Bawa obat-obatan rutin dalam jumlah cukup beserta surat keterangan dokter berbahasa Inggris/Arab. Pilih hotel paling dekat Haram untuk meminimalkan jarak tempuh. Hindari berdesak-desakan saat kondisi ramai.",
        note:"Klinik kesehatan tersedia di kompleks Masjidil Haram dan Masjid Nabawi, buka 24 jam selama musim umroh."
      },
      {
        q:"Obat-obatan apa saja yang sebaiknya dibawa dari Indonesia?",
        a:"<strong>Wajib bawa</strong>: obat rutin sesuai kondisi, parasetamol/ibuprofen (demam & nyeri), oralit (rehidrasi), antidiare (Imodium/Diapet), antasida (maag), obat batuk & flu, salep antiseptik, plester luka, and vitamin C. <strong>Sangat disarankan</strong>: obat tetes mata (debu Mekkah banyak), krim pelindung sinar matahari SPF 50+, and obat tidur ringan jika jet lag.",
        note:"Bawa salinan resep dokter untuk obat-obatan tertentu agar tidak tertahan di bea cukai."
      },
      {
        q:"Bagaimana prosedur mendapatkan bantuan medis di Arab Saudi?",
        a:"Di area Masjidil Haram and Nabawi tersedia <strong>pos kesehatan gratis</strong> yang bisa langsung didatangi. Untuk kedaruratan, hubungi <strong>911 (ambulans Arab Saudi)</strong>. Jika dirawat inap, segera hubungi <strong>KJRI Jeddah (+966-12-671-1271)</strong> atau KBRI Riyadh untuk bantuan konsuler dan koordinasi asuransi.",
        note:"Simpan nomor KJRI Jeddah di ponsel sebelum berangkat. Pelayanan medis di RS Arab Saudi umumnya sangat baik."
      },
      {
        q:"Bagaimana cara mengatasi diare atau masalah pencernaan saat umroh?",
        a:"Segera minum <strong>oralit</strong> untuk rehidrasi dan kurangi makanan berlemak/pedas. Konsumsi makanan ringan seperti roti, nasi putih, atau pisang. Jika tidak membaik dalam 24 jam atau disertai demam tinggi, kunjungi klinik terdekat di area Haram. <strong>Pencegahan</strong>: cuci tangan sebelum makan, hindari es batu di restoran pinggir jalan, and pilih makanan yang baru dimasak.",
      },
      {
        q:"Apakah perlu asuransi perjalanan khusus untuk umroh mandiri?",
        a:"<strong>Sangat dianjurkan</strong>. Asuransi perjalanan menanggung biaya rawat inap, evakuasi medis, kehilangan bagasi, and pembatalan penerbangan. Beberapa produk yang populer di Indonesia: AXA Mandiri Travel, Allianz Travel, atau asuransi dari kartu kredit premium. Pastikan polis mencakup <strong>wilayah Arab Saudi dan aktivitas ibadah</strong>.",
        note:"Biaya perawatan RS di Arab Saudi bisa sangat mahal tanpa asuransi — satu malam rawat inap bisa mencapai SAR 2.000–5.000."
      },
    ]
  },
  {
    cat:"🚗 Transportasi & Logistik",
    items:[
      {
        q:"Apakah lebih baik terbang langsung ke Jeddah atau transit dulu?",
        a:"<strong>Terbang langsung (direct flight)</strong> lebih dianjurkan karena lebih hemat energi, mengurangi risiko kehilangan bagasi, and lebih mudah pengurusan ihram di pesawat. Tersedia dari Jakarta (CGK), Surabaya (SUB), and Makassar (UPG) via Garuda, Lion, Batik, and Saudi Airlines. <strong>Transit</strong> di Kuala Lumpur atau Dubai bisa lebih murah namun perjalanan lebih panjang (16–20 jam total).",
      },
      {
        q:"Bagaimana cara transportasi dari bandara Jeddah ke Mekkah secara mandiri?",
        a:"Ada tiga pilihan: <strong>Taksi resmi (SAPTCO)</strong> tersedia di kedatangan internasional, harga SAR 100–150 ke Mekkah, aman dan resmi. <strong>Uber/Careem</strong> bisa dipesan dari area kedatangan, harga SAR 80–120, lebih murah. <strong>Bus SAPTCO</strong> tersedia dari terminal khusus di bandara, harga SAR 25–35, paling hemat namun perlu jalan kaki membawa koper.",
        note:"Jangan naik taksi tidak resmi yang menawarkan tarif murah di luar area kedatangan — rawan penipuan."
      },
      {
        q:"Apakah bisa menyewa mobil sendiri di Arab Saudi?",
        a:"<strong>Bisa secara teknis</strong>, tersedia di Jeddah, Mekkah, and Madinah. Namun <strong>tidak direkomendasikan</strong> untuk jamaah umroh karena: parkir di area Haram sangat terbatas, lalu lintas Mekkah saat musim umroh sangat padat, and jalur satu arah yang membingungkan. Lebih praktis menggunakan <strong>Uber/Careem</strong> yang bisa langsung mengantarkan ke depan Haram.",
      },
      {
        q:"Bagaimana cara pesan taksi di Arab Saudi and apa aplikasinya?",
        a:"Dua aplikasi utama: <strong>Uber</strong> (tersedia di Jeddah, Mekkah, Madinah) and <strong>Careem</strong> (lebih populer di Arab Saudi, juga punya opsi motor/Careem Bike). Cara pakai sama seperti di Indonesia — unduh aplikasi, daftarkan nomor HP with kartu SIM Arab Saudi, and gunakan Google Maps untuk destinasi. <strong>Bayar tunai (SAR) atau kartu kredit</strong> bisa keduanya.",
        note:"Simpan nama hotel atau destinasi dalam Bahasa Arab untuk memudahkan komunikasi jika perlu."
      },
    ]
  },
  {
    cat:"🏨 Akomodasi & Makanan",
    items:[
      {
        q:"Hotel bintang berapa yang ideal untuk menginap saat umroh?",
        a:"Untuk umroh mandiri, <strong>hotel bintang 3–4 dalam radius 500m dari Haram</strong> adalah sweet spot terbaik. Bintang 3 di lokasi dekat jauh lebih bernilai daripada bintang 5 yang jauh. Cek ulasan di Booking.com atau Google Maps, prioritaskan: jarak ke Haram, fasilitas lift, and ketersediaan sarapan halal.",
        note:"Harga hotel naik drastis saat Ramadhan and akhir tahun. Musim terbaik (harga + cuaca): Oktober–November and Februari–Maret."
      },
      {
        q:"Bagaimana cara pesan hotel dekat Masjidil Haram secara online?",
        a:"Gunakan <strong>Booking.com atau Agoda</strong>, filter lokasi with 'dekat Masjidil Haram' and aktifkan filter radius jarak. Alternatif: <strong>platform Nusuk (nusuk.sa)</strong> menyediakan akomodasi resmi yang terverifikasi. Pesan minimal <strong>2–3 bulan sebelum keberangkatan</strong> untuk musim biasa, atau 4–6 bulan untuk musim Ramadhan.",
        note:"Selalu pilih opsi 'free cancellation' agar fleksibel jika ada perubahan jadwal."
      },
      {
        q:"Apakah makanan halal mudah ditemukan di Arab Saudi?",
        a:"<strong>Semua makanan di Arab Saudi secara default halal</strong> — tidak ada restoran yang menjual babi atau alkohol. Tersedia banyak pilihan: restoran Indonesia and Malaysia (Nasi Padang tersebar luas di Mekkah), restoran Arab (mandi, kabsa), fast food internasional (KFC, McDonald's, Pizza Hut), hingga warung pinggir jalan yang murah meriah.",
      },
      {
        q:"Tips apa saja untuk menghemat biaya makan selama di tanah suci?",
        a:"<strong>Tips hemat makan</strong>: (1) Manfaatkan makanan gratis yang sering dibagikan di area Masjidil Haram and Nabawi oleh donatur, terutama saat magrib. (2) Beli roti, kurma, and keju di minimarket (Danube, Bin Dawood) untuk sarapan/snack. (3) Cari warung nasi Indonesia di gang-gang kecil sekitar Haram — biasanya SAR 10–15 per porsi. (4) Masak mie instan di hotel jika ada fasilitas kettle.",
        note:"Budget makan hemat: SAR 30–50 per hari. Budget nyaman: SAR 80–150 per hari."
      },
    ]
  },
  {
    cat:"📿 Ibadah & Teknis Pelaksanaan",
    items:[
      {
        q:"Kapan waktu terbaik melakukan tawaf agar tidak terlalu ramai?",
        a:"Waktu paling sepi: <strong>setelah Subuh hingga pukul 08.00</strong> and <strong>pukul 14.00–15.30</strong> (tengah hari, panas). Waktu paling ramai: setelah Isya hingga tengah malam, and akhir pekan (Kamis–Jumat malam). Tawaf di lantai atas (rooftop mataf) umumnya lebih longgar meski putarannya lebih panjang.",
        note:"Di luar musim haji and Ramadhan, tawaf jauh lebih lengang bahkan di jam-jam sibuk."
      },
      {
        q:"Bagaimana hukum niat umroh saat di miqat?",
        a:"Niat umroh hukumnya <strong>rukun (wajib)</strong> and dilakukan di miqat. Caranya: ucapkan <strong>«لَبَّIْكَ اللَّهُمَّ عُمْرَةً»</strong> (Labbaik Allahumma 'umratan) yang artinya 'Aku memenuhi panggilan-Mu ya Allah untuk umroh', lalu dilanjutkan with talbiyah. Niat dalam hati sudah cukup, namun mengucapkan with lisan lebih afdhal.",
      },
      {
        q:"Apakah tawaf qudum dan tawaf ifadhah berbeda?",
        a:"<strong>Ya, keduanya berbeda</strong> and berlaku untuk <strong>ibadah haji</strong>, bukan umroh. Tawaf qudum adalah tawaf selamat datang saat pertama masuk Mekkah (sunnah). Tawaf ifadhah adalah tawaf rukun haji yang dilakukan setelah wukuf di Arafah. Untuk <strong>umroh</strong>, hanya ada satu tawaf, yaitu <strong>tawaf umroh</strong> yang merupakan rukun.",
      },
      {
        q:"Bagaimana cara menghitung putaran tawaf jika terasa pusing?",
        a:"Gunakan <strong>tasbih digital atau jari tangan</strong> untuk menghitung. Jika tiba-tiba lupa sudah putaran ke berapa, ambil angka yang lebih kecil (lebih sedikit) agar lebih aman. Jika pusing atau sesak, <strong>keluar dari mataf and istirahat</strong> — tawaf boleh dilanjutkan kapan saja, tidak harus dalam satu waktu tanpa jeda, asalkan masih dalam rangkaian yang sama.",
        note:"Selalu minum cukup air sebelum tawaf. Dehidrasi adalah penyebab utama pusing saat tawaf."
      },
      {
        q:"Apakah boleh melakukan tawaf with menggunakan kursi roda?",
        a:"<strong>Boleh</strong>. Kursi roda tersedia di pintu-pintu masuk Masjidil Haram (gratis atau berbayar SAR 50–100 with jasa pendorong). Jalur khusus kursi roda tersedia di lantai dasar mataf. Orang yang mendorong kursi roda tidak perlu berihram kecuali jika juga berniat tawaf sendiri.",
      },
      {
        q:"Bagaimana hukumnya jika lupa membaca niat saat memulai ibadah?",
        a:"Untuk <strong>ihram</strong>: niat adalah rukun yang wajib — jika benar-benar lupa berniat sama sekali, ihram tidak sah and harus kembali ke miqat. Namun para ulama menyatakan niat di dalam hati sudah cukup, and umumnya orang yang menuju miqat with tujuan umroh dianggap sudah berniat. Untuk <strong>tawaf and sa'i</strong>: lupa membaca basmalah atau doa tertentu tidak membatalkan ibadah.",
        note:"Konsultasikan with muthawwif (pembimbing) atau ustadz jika ragu tentang keabsahan ibadah."
      },
    ]
  },
  {
    cat:"💰 Keuangan & Lainnya",
    items:[
      {
        q:"Berapa jumlah uang saku yang ideal untuk umroh mandiri?",
        a:"Estimasi per hari: makan SAR 50–100, transportasi lokal SAR 20–50, oleh-oleh & keperluan SAR 50–200. Untuk <strong>10 hari, siapkan minimal SAR 2.000–3.000</strong> (±Rp 8–12 juta) sebagai uang saku di luar biaya tiket dan hotel. Tambahkan buffer 20% untuk keperluan darurat. Kurs riyal Arab Saudi (SAR) sekitar Rp 4.200–4.500 per SAR.",
      },
      {
        q:"Apakah bisa menggunakan kartu kredit di Arab Saudi?",
        a:"<strong>Bisa</strong>. Kartu Visa and Mastercard diterima luas di hotel, mal, restoran besar, and minimarket. Namun <strong>siapkan uang tunai SAR</strong> untuk kebutuhan di warung kecil, taksi non-aplikasi, pembayaran ziarah, and pengeluaran di area sekitar Haram yang tidak semua menerima kartu. Gunakan kartu kredit berlogo Visa/Mastercard tanpa biaya transaksi luar negeri.",
        note:"Beberapa bank Indonesia (BCA, Mandiri, BNI) memiliki fitur transaksi bebas biaya internasional — aktifkan sebelum berangkat."
      },
      {
        q:"Di mana tempat penukaran mata uang riyal yang terpercaya?",
        a:"<strong>Terpercaya</strong>: money changer resmi di Bandara Jeddah (kurs sedikit lebih rendah tapi aman untuk kebutuhan awal), bank-bank besar di Mekkah/Madinah, atau money changer berlisensi di area pertokoan sekitar Haram. <strong>Hindari</strong> penukaran di jalan atau kepada orang yang tidak jelas. Di Indonesia, kurs riyal biasanya lebih baik di money changer besar.",
      },
      {
        q:"Bagaimana cara mengakses WiFi gratis di Masjidil Haram?",
        a:"<strong>WiFi gratis 'Haram-Guest'</strong> tersedia di seluruh area Masjidil Haram and Masjid Nabawi. Sambungkan ke jaringan tersebut, akan muncul halaman login — masukkan nomor HP Arab Saudi Anda untuk verifikasi OTP. Kecepatan bervariasi, cukup untuk WhatsApp and navigasi Google Maps.",
        note:"Tetap aktifkan paket data sebagai backup karena WiFi Haram bisa tidak stabil saat sangat ramai."
      },
      {
        q:"Apakah perlu membawa sandal cadangan untuk ihram?",
        a:"<strong>Ya, sangat disarankan</strong>. Sandal sering hilang atau tertukar di area Masjidil Haram and Nabawi karena jutaan jamaah melepas alas kaki sebelum masuk. Bawa <strong>2 pasang sandal</strong>: satu untuk tawaf and sa'i (pilih yang kokoh and anti-slip), satu cadangan di tas. Gunakan sandal with tali yang bisa dikunci agar tidak mudah tertukar. Bisa juga menggunakan kantong kain khusus untuk menyimpan sandal.",
        note:"Sandal karet tipis flip-flop tidak disarankan — jarak tempuh saat umroh bisa mencapai 5–10 km per hari."
      },
    ]
  },
];

export const prepData: PrepSection[] = [
  {
    section: "Langkah 1: Dokumen & Paspor (H-90 s/d H-60)",
    items: [
      { id: 1, title: "Identitas dan Back Up Digital", badge: "Wajib", tips: [
        "📁 Scan KTP, KK, Akta Lahir/Buku Nikah menggunakan fitur Scan di Google Drive agar menjadi PDF rapi.",
        "📁 Buat satu folder khusus bernama \"DOKUMEN UMROH — [NAMA ANDA]\".",
        "📁 Setel folder ke mode Available Offline agar dokumen tetap bisa diakses di Saudi meski tanpa sinyal.",
        "📁 Siapkan foto digital 4x6 latar belakang putih (fokus wajah 80%) untuk pengajuan visa."
      ] },
      { id: 2, title: "Paspor Elektronik (E-Passport)", badge: "Wajib", tips: [
        "📌 Riset dulu syarat & ketersediaan kuota kantor imigrasi tujuan (beda kantor bisa beda kuota/jadwal).",
        "⏰ Sebelum terbang: pastikan sisa masa berlaku paspor minimal 8 bulan dan nama minimal 2 kata.",
        "📌 Cek kondisi fisik paspor lama: tidak ada coretan, sobek, atau halaman rusak. Paspor dengan kondisi ini bisa dianggap rusak dan permohonan perpanjangan DITOLAK.",
        "📌 Cek nama, tempat & tanggal lahir identik di semua dokumen.",
        "📌 Daftar via aplikasi M-Paspor: pilih Paspor Biasa Elektronik → pilih kantor imigrasi → pilih jadwal kedatangan.",
        "⏰ Kode billing kedaluwarsa: bayar maksimal 2 jam setelah pendaftaran. Lewat 2 jam = daftar ulang dari awal.",
        "Datang ke kantor imigrasi sesuai jadwal: foto, sidik jari, wawancara. Jawab jujur & konsisten dengan dokumen.",
        "💸 Biaya PNBP tidak dapat dikembalikan jika ditolak saat verifikasi/wawancara karena:",
        "  - Paspor lama rusak/coretan - Jika rusak/ada coretan buat BAP terlebih dahulu",
        "  - Info tidak jujur atau tidak konsisten saat wawancara",
        "  - Indikasi pemalsuan dokumen atau masalah keamanan-hukum",
        "🟢 Catatan: jika ditolak karena dokumen kurang lengkap, masih bisa dilengkapi/reschedule. Biaya tetap berlaku untuk proses ulang (tidak perlu bayar lagi).",
        "💸 Biaya (PP 45/2024): Rp650.000 (5 tahun) atau Rp950.000 (10 tahun). Tambahan Rp1.000.000 untuk layanan percepatan (selesai hari yang sama).",
        "⏰ Estimasi proses: 3-5 hari kerja setelah foto & wawancara.",
        "Setelah jadi: gunakan Autogate di bandara untuk imigrasi lebih cepat (cek syarat usia minimal)."
      ] },
    ]
  },
  {
    section: "Langkah 2: Persyaratan Kesehatan (H-60 s/d H-30)",
    items: [
      { id: 3, title: "Vaksin Meningitis", badge: "Wajib", tips: [
        "📌 Cek riwayat vaksin meningitis sebelumnya:",
        "  - Jenis Konjugat: berlaku 5 tahun",
        "  - Jenis Polisakarida: berlaku 2-3 tahun",
        "  - Jika sudah lewat, wajib vaksin ulang",
        "Daftar via aplikasi SatuSehat (menu Vaksin Luar Negeri) atau langsung ke KKP terdekat. Alternatif: SINKARKES (sinkarkes.kemkes.go.id).",
        "⏰ Lakukan vaksinasi minimal 14 hari sebelum terbang agar antibodi terbentuk sempurna.",
        "💸 Estimasi biaya: KKP/Puskesmas Rp200.000-350.000, RS swasta Rp400.000-700.000 (umumnya sudah termasuk biaya ICV).",
        "Pastikan mendapat Buku Kuning (ICV) fisik atau digital yang terverifikasi di SatuSehat.",
        "[KONDISIONAL — Jika membawa anak]",
        "  - Anak usia 2 tahun ke atas wajib vaksin meningitis sama seperti dewasa.",
        "  - Untuk bayi di bawah 2 tahun, ada ketentuan khusus — konsultasikan langsung ke dokter anak atau KKP.",
        "  - ICV anak diterbitkan terpisah (atas nama masing-masing anak, bukan digabung dengan ICV orang tua)."
      ] },
      { id: 4, title: "Vaksin Polio (IPV)", badge: "Wajib", tips: [
        "Wajib bagi WNI mulai 2025. Mintalah dosis IPV di Puskesmas, KKP, atau RS Pemerintah.",
        "⏰ Lakukan vaksinasi 2-4 minggu sebelum keberangkatan (jangan disuntik di hari yang sama dengan Meningitis jika terlalu mepet).",
        "Sertakan bukti vaksinasi dalam catatan kesehatan internasional Anda (ICV/e-ICV).",
        "[KONDISIONAL — Jika membawa anak]",
        "Cek dulu riwayat imunisasi polio rutin anak (biasanya usia 2, 3, 4 bulan + booster 18 bulan):",
        "  - Jika sudah lengkap: konsultasi ke dokter/KKP, kemungkinan tidak perlu dosis tambahan",
        "  - Jika belum lengkap: wajib lengkapi dulu sesuai jadwal IDAI",
        "⚠️ Catatan: tidak ada angka usia minimal spesifik yang seragam untuk anak, selalu konsultasi langsung ke KKP/dokter anak."
      ] },
      { id: 5, title: "Vaksin Influenza & Pneumonia", badge: "Rekomendasi", tips: [
        "Sangat disarankan untuk mencegah Batuk Makkah akibat perubahan cuaca ekstrem dan debu.",
        "Sangat membantu menjaga kondisi tubuh agar tetap fit selama rangkaian ibadah.",
        "[INFLUENZA — untuk semua usia]",
        "  - Berikan minimal 2 minggu sebelum keberangkatan",
        "  - Perlu diulang tiap tahun (virus bermutasi setiap musim)",
        "  - Estimasi biaya: Rp280.000 - 600.000",
        "[PNEUMONIA (PNEUMOKOKUS) — kondisional]",
        "⚠️ Hanya direkomendasikan untuk: usia 50 tahun ke atas, atau punya komorbid.",
        "  - Berikan minimal 2 minggu sebelum keberangkatan",
        "  - Tidak perlu diulang tiap tahun (masa lindung lebih panjang)",
        "  - Estimasi biaya: Rp800.000 - 1.500.000"
      ] },
      { id: 28, title: "Jaga Kesehatan Pribadi", badge: "Rekomendasi", tips: [
        "Lakukan medical check-up dasar (tensi, gula darah, jantung) terutama bagi penderita penyakit rutin.",
        "Mulai rutin jalan kaki 30-45 menit setiap pagi. Total jalan kaki harian bisa mencapai 10-15 km per hari.",
        "Konsumsi Vitamin C/D dan cukupi hidrasi (minum 2-3 liter air/hari) untuk imunitas pra-keberangkatan.",
        "[KONDISIONAL — Jika membawa anak]",
        "  - Medical check-up khusus anak ke dokter anak, pastikan imunisasi dasar lengkap.",
        "  - Usia ideal untuk anak: 5-7 tahun lebih mudah diajak komunikasi.",
        "  - Latih anak jalan kaki lebih sering dari rumah untuk membangun daya tahan tubuh.",
        "  - Siapkan stroller ringan/baby carrier untuk balita (sangat membantu mobilitas di masjid).",
        "  - Manfaatkan gelang pelacak anak GRATIS yang disediakan Otoritas Masjidil Haram.",
        "  - Pertimbangkan waktu keberangkatan: hindari musim panas ekstrem (Juni-Agustus)."
      ] },
      { id: 33, title: "Kesehatan Wanita", badge: "Rekomendasi", tips: [
        "📌 Khusus jamaah wanita yang belum menopause:",
        "  - Hitung perkiraan tanggal haid berikutnya berdasarkan siklus bulanan Anda.",
        "  - Konsultasikan ke dokter (idealnya dokter kandungan) minimal 1 bulan sebelum berangkat.",
        "  - Obat penunda haid umum: Primolut N atau lanjut pil KB kombinasi aktif (obat resep).",
        "  - Obat mulai diminum 3-7 hari sebelum tanggal haid biasanya datang.",
        "  - Maksimal pemakaian: tidak lebih dari 14 hari berturut-turut tanpa pengawasan dokter.",
        "  - Bawa obat dalam jumlah cukup untuk seluruh durasi umroh + buffer.",
        "  - Kenali efek samping: mual, sakit kepala, nyeri payudara, perubahan mood.",
        "📌 Catatan: menunda haid adalah pilihan personal, bukan kewajiban. Ritual Tawaf/Sa'i bisa disesuaikan jadwalnya."
      ] },
    ]
  },
  {
    section: "Langkah 3: Logistik Mandiri (H-90 s/d H-30)",
    items: [
      { id: 6, title: "Tiket Pesawat PP (Confirmed)", badge: "Wajib", tips: [
        "Cari dan pesan tiket pesawat secara mandiri (via web maskapai atau OTA).",
        "⏰ Timing: idealnya beli 3-6 bulan sebelum keberangkatan untuk harga terbaik.",
        "Wajib berstatus Confirmed (Pulang-Pergi). Simpan E-ticket dalam format PDF.",
        "Pastikan nama di tiket sesuai dengan paspor (minimal 2 kata).",
        "Tentukan bandara kedatangan: Jeddah (King Abdul Aziz) atau Madinah (Mohammad Bin Abdulaziz).",
        "Cek kebijakan bagasi: pastikan sudah termasuk bagasi untuk bawa barang/air zamzam.",
        "✈️ STRATEGI HEMAT: PENERBANGAN TRANSIT",
        "  - Mengapa murah? Rute via KL/Singapura sering jauh lebih murah karena kompetisi ketat.",
        "  - Rute populer: via KL (AirAsia), Doha (Qatar), Dubai (Emirates), Istanbul (Turkish).",
        "  - ⚠️ Connecting Flight (1 booking): direkomendasikan, bagasi otomatis transfer, proteksi delay.",
        "  - ⚠️ Beli Tiket Terpisah (2 booking): berisiko, harus keluar imigrasi/ambil bagasi saat transit.",
        "  - 📌 Tips: cari MCT minimal 2 jam, cek bagasi through-checked.",
        "💡 Pertimbangan fisik: transit bisa 12-18 jam vs direct 9-10 jam (pikirkan lansia/anak)."
      ] },
      { id: 7, title: "Booking Hotel Madinah & Makkah", badge: "Wajib", tips: [
        "Pesan hotel via OTA (Agoda/Trip.com/Booking.com).",
        "⏰ Timing: booking minimal 4 minggu sebelum keberangkatan.",
        "Pilih tipe kamar prepaid/non-refundable (approval lebih cepat untuk kamar lunas).",
        "Pastikan tanggal check-in/out sinkron dengan tiket pesawat.",
        "📌 Simpan bukti reservasi (HCN/Voucher) — harus lanjut sampai hotel approve Agreement.",
        "═══════════════════════════════════════",
        "[OPSI A — Hotel sudah terdaftar Nusuk Masar (Simpel)]",
        "  - Kelebihan: hotel sudah biasa proses approval, lebih responsif, risiko ditolak kecil.",
        "  - Cara cek: mt.gov.sa → Special Accommodation Facilities → License Number.",
        "═══════════════════════════════════════",
        "[OPSI B — Hotel belum terdaftar Nusuk Masar (Effort Ekstra)]",
        "  - Kelebihan: pilihan jauh lebih banyak dan variatif, harga bisa lebih murah.",
        "  - ⚠️ Proses tambahan: harus menghubungi hotel sendiri (WA/Email) untuk minta approval Agreement.",
        "  - ⚠️ Hubungi jam kerja Saudi: 13:00-21:00 WIB (hindari hari Jumat).",
        "  - 🔴 Risiko: jika hotel tidak respons/menolak, visa tidak bisa terbit meski sudah bayar lunas."
      ] },
      { id: 8, title: "Transportasi Lengkap (Closed Loop)", badge: "Wajib", tips: [
        "📌 Siapkan bukti booking untuk 3 rute wajib:",
        "  - Rute 1: Bandara (JED/MED) → Hotel (kedatangan)",
        "  - Rute 2: Hotel Makkah ↔ Hotel Madinah (antar kota)",
        "  - Rute 3: Hotel → Bandara (kepulangan)",
        "Pilihan moda: Kereta Cepat HHR, Taxi Service, atau Bus (khusus Rute 2 & 3).",
        "⚠️ Wajib: provider transport harus terdaftar di Nusuk Masar (Uber/Grab tidak diterima).",
        "📋 BRN Transport — solusi darurat (kode booking tanpa approval lengkap):",
        "  - Digunakan jika approval normal macet / itinerary multi-kota tidak match.",
        "  - Biaya tambahan: SAR 9-18/hari atau fixed SAR 60-80/orang.",
        "  - ⚠️ Tidak semua provider visa menyediakan ini, tanyakan langsung.",
        "Pastikan Tafweej/penjemputan bandara sudah disiapkan minimal 1 hari sebelum kedatangan."
      ] },
    ]
  },
  {
    section: "Langkah 4: Eksekusi Visa & Legalitas (H-45 s/d H-14)",
    items: [
      { id: 9, title: "Apply Visa via Provider", badge: "Wajib", tips: [
        "📌 Kirimkan dokumen lengkap ke Provider Visa: E-ticket, Voucher Hotel (HCN), dan bukti booking 3 rute transportasi.",
        "Provider akan memproses semuanya di sistem resmi Nusuk Masar, termasuk meminta approval ke pihak hotel. Proses ini di luar kendali jamaah — tugas Anda hanya memastikan dokumen yang dikirim sudah lengkap & benar.",
        "⏰ Estimasi waktu proses: 3-7 hari kerja setelah hotel approve. Jika hotel lambat merespons, proses bisa lebih lama — tanyakan progress ke provider secara berkala.",
        "📋 Jika proses macet/lambat mendekati keberangkatan, provider mungkin menawarkan BRN sebagai solusi jalan pintas (ada biaya tambahan). Tanyakan ke provider jika situasi ini terjadi.",
        "Biaya pengajuan visa sudah mencakup asuransi kesehatan dasar untuk biaya medis di rumah sakit umum pemerintah Arab Saudi.",
        "⏰ Visa umrah berlaku 90 hari sejak diterbitkan — pastikan tanggal keberangkatan & kepulangan masih dalam rentang ini."
      ] },
      { id: 10, title: "Registrasi Siskopatuh Kemenag", badge: "Wajib", tips: [
        "Provider akan mendaftarkan data keberangkatan Anda ke sistem Siskopatuh Kemenag RI.",
        "⏰ Timing bisa berbeda tergantung provider — ada yang proses visa & Siskopatuh BERSAMAAN, ada yang sequential. Tanyakan langsung ke provider Anda: \"Siskopatuh diproses bersamaan dengan visa, atau menyusul setelahnya?\"",
        "Wajib meminta ID Card Siskopatuh (fisik/digital) untuk ditunjukkan ke petugas check-in maskapai atau imigrasi — sifatnya random check, tapi WAJIB tetap dibawa.",
        "🔍 Cara verifikasi keaslian ID Card: scan QR code, pastikan link mengarah ke siskopatuh.kemenag.go.id/web/npu/?id=xxxxxx — 6 digit terakhir URL harus sama dengan nomor porsi umrah di kartu.",
        "💡 Manfaat tambahan: kartu memuat nama hotel — berguna jika ada anggota keluarga/grup terpisah, bisa minta diantar ke hotel yang tertulis di kartu.",
        "⚠️ Risiko jika tidak dibawa: berpotensi diperiksa lanjutan, diarahkan ke gate manual (bukan autogate) — berisiko delay bahkan ketinggalan pesawat."
      ] },
      { id: 11, title: "Booking Slot Raudhah (Aplikasi Nusuk)", badge: "Wajib", tips: [
        "Registrasi akun Nusuk sebagai International Visitor menggunakan No. Paspor dan No. Visa.",
        "[JADWAL RAWDAH PERMIT SESUAI GENDER]",
        "- Pria: Pintu 37, sekitar pukul 02.00 dini hari–Subuh dan 11.30–Isya",
        "- Wanita: Pintu 25, sekitar setelah Subuh–11.00 dan setelah Isya–02.00 dini hari",
        "⚠️ Jadwal & pintu bisa berubah sewaktu-waktu — selalu cek jadwal terbaru langsung di aplikasi Nusuk sebelum booking.",
        "Simpan bukti QR Code di galeri HP sebelum tiba di Madinah.",
        "Anak di bawah usia 5 tahun tidak bisa dibooking masuk Raudhah.",
        "Jika gagal dapat slot dari Indonesia, masih ada kesempatan booking dadakan (\"war tiket\") saat sudah berada di sekitar Masjid Nabawi — jadi jangan khawatir kalau booking awal belum berhasil.",
        "💡 Tips: cek aplikasi secara rutin, karena slot baru sering muncul dari jamaah lain yang membatalkan booking-nya."
      ] },
    ]
  },
  {
    section: "Langkah 5: Keuangan & Koneksi (H-14 s/d H-7)",
    items: [
      { id: 12, title: "Persiapan Keuangan & Kartu ATM/Kredit", badge: "Wajib", tips: [
        "Wajib membawa kartu ATM/Debit berlogo Visa atau Mastercard (GPN tidak bisa digunakan di luar negeri).",
        "Aktifkan fitur Transaksi Luar Negeri dan Debit Online di m-banking SEBELUM berangkat — tanpa ini kartu akan ditolak.",
        "Tukar Rupiah ke Riyal (SAR) secukupnya di Indonesia (SAR 200-500) untuk darurat saat mendarat.",
        "💳 Manfaatkan fitur contactless (tap) untuk transportasi dalam kota: Makkah Bus & Madinah Bus mengharuskan tap kartu langsung (tanpa PIN), juga berlaku di minimarket dan resto. Untuk Kereta Cepat HHR, beli tiket online dulu via web/app (bukan tap di tempat) — pastikan Debit Online aktif & siap terima OTP via SMS.",
        "Bawa 2 kartu dari bank berbeda (misal 1 Mandiri + 1 BCA) untuk antisipasi jika salah satu kartu rusak/tertelan mesin ATM.",
        "💰 Biaya admin tarik tunai luar negeri: Rp20rb-25rb per transaksi. Tarik sekaligus jumlah besar (1.000-2.000 SAR), JANGAN tarik sedikit-sedikit agar biaya admin tidak boros.",
        "🏦 Cari ATM Al-Rajhi Bank (biru putih) atau SNB (Saudi National Bank) — ATM Al-Rajhi biasanya ada opsi Bahasa Indonesia.",
        "[STRATEGI BAYAR PER LOKASI]",
        "- Mall/Hotel/Bin Dawood → pakai kartu (tap contactless, kurs kompetitif)",
        "- Pasar tradisional/kaki lima → WAJIB tunai (jarang ada EDC, dan tunai lebih mudah untuk nego harga)"
      ] },
      { id: 13, title: "Koneksi Internet di Saudi", badge: "Wajib", tips: [
        "🥇 eSIM (PALING DISARANKAN): beli via Airalo/Holafly dari Indonesia. Tidak hanya praktis — bisa diaktifkan sebelum terbang (scan QR code), TIDAK perlu antre/registrasi sidik jari/paspor di bandara (berbeda dari SIM fisik). Kualitas sinyal setara kartu lokal (terhubung ke jaringan STC/Mobily), BUKAN kualitas roaming biasa.",
        "Kartu SIM Lokal: beli STC, Zain, atau Mobily di bandara Saudi (SAR 80-120 untuk paket ~10GB/4 minggu). Catatan: prosesnya perlu antre + registrasi paspor & sidik jari, bisa makan waktu kalau bandara ramai.",
        "- STC: sinyal paling stabil terutama di basement Masjidil Haram & hotel besar, tapi harga lebih mahal & kuota lebih kecil",
        "- Zain/Mobily: harga lebih murah, kuota lebih besar, tapi sinyal sedikit kurang stabil di area sangat padat",
        "⚠️ Roaming: aktifkan paket Umrah dari provider Indonesia jika ingin tetap pakai nomor lama. Catatan: kualitas roaming TIDAK terjamin sama di semua area — di dalam Masjidil Haram yang sangat padat, sinyal roaming bisa tidak stabil meski sinyal lokal (STC/Mobily) tetap baik.",
        "💡 Tips tambahan: gunakan WiFi hotel sebagai cadangan khusus untuk backup foto/video berukuran besar, agar kuota utama tetap awet untuk kebutuhan navigasi & komunikasi harian."
      ] },
      { id: 29, title: "Asuransi Perjalanan Tambahan", badge: "Opsional", tips: [
        "⚠️ Kenapa perlu, meski asuransi dasar sudah include di visa: asuransi dasar cakupannya SEMPIT — biasanya hanya rumah sakit pemerintah tertentu, dan plafon cepat habis untuk penyakit kritis. Biaya rawat ICU di Saudi untuk warga asing bisa puluhan juta rupiah per malam.",
        "Perlindungan Transit: menanggung risiko saat berada di negara transit (relevan jika pakai rute transit yang sudah dibahas di item Tiket Pesawat).",
        "Pembatalan Perjalanan: ganti rugi jika batal berangkat karena sakit serius.",
        "Kehilangan Bagasi & Paspor: penggantian jika koper/dokumen hilang di hotel.",
        "💰 Estimasi biaya: Rp300rb-700rb/orang untuk durasi 9-12 hari (diskon hingga 15% untuk grup/keluarga). Lansia 65+ tahun biasanya kena biaya tambahan (loading) karena risiko kesehatan lebih tinggi.",
        "🕌 Pertimbangkan opsi syariah: pakai akad Tabarru' (tolong-menolong), bebas riba/gharar/maysir — relevan untuk konteks ibadah.",
        "⚠️ Pengecualian umum yang perlu disadari: penyakit yang sudah ada sebelumnya (pre-existing condition) biasanya TIDAK ditanggung kecuali ada rider khusus.",
        "🔍 Cek cakupan asuransi dasar (dari visa) di situs resmi CCHI (Council of Cooperative Health Insurance) Arab Saudi, untuk tahu rumah sakit rekanan mana yang menerima klaim."
      ] },
    ]
  },
  {
    section: "Langkah 6: Perlengkapan Pribadi (H-7 s/d H-3)",
    items: [
      { id: 14, title: "Perlengkapan Pakaian Pribadi", badge: "Wajib", tips: [
        "[JUMLAH DISESUAIKAN DURASI PERJALANAN]",
        "📏 Asumsi ada fasilitas laundry hotel untuk durasi panjang:",
        "- Wanita: 4-5 set gamis untuk 9-12 hari, tambah +1 set per 3-4 hari tambahan",
        "- Pria: 3-4 set baju koko/kurta untuk 9-12 hari, tambah +1 set per 3-4 hari tambahan",
        "- Pakaian dalam: lebih baik dilebihkan sedikit dari jumlah hari (cuci tidak selalu sempat tiap hari)",
        "Bawa celana dalaman tipis (legging) untuk kenyamanan berjalan jauh.",
        "Kaos kaki secukupnya, terutama untuk penggunaan di luar ibadah ihram (wanita perlu lebih banyak untuk variasi outfit harian).",
        "Jaket atau cardigan tipis — WAJIB untuk perjalanan pesawat (AC kabin dingin) dan ruangan ber-AC di hotel/mall.",
        "Pakaian tidur yang nyaman.",
        "Kantong pakaian kotor/laundry bag agar koper tetap rapi & tidak campur baju bersih.",
        "🧳 KOPER BAGASI: sebagian besar pakaian harian — gulung (bukan lipat) untuk hemat ruang & kurangi kusut, pisahkan per-hari pakai pouch/ziplock (\"Day 1, Day 2, dst\").",
        "🎒 TAS KABIN: sisakan 1 set pakaian ganti LENGKAP (termasuk dalaman) + jaket — antisipasi koper bagasi tertahan/delay transit.",
        "💡 Tips: pilih warna netral, bahan cepat kering & tidak mudah kusut (kurangi kebutuhan setrika). Sisakan ruang 25-30% di koper bagasi untuk oleh-oleh saat pulang."
      ] },
      { id: 15, title: "Perlengkapan Khusus Ibadah Umroh", badge: "Wajib", tips: [
        "Pria: Minimal 2 set kain ihram berkualitas yang tidak mudah melorot. Sabuk/belt ihram untuk simpan uang, kartu, ponsel.",
        "Wanita: Mukena praktis atau mukena atasan (gober) yang ringan.",
        "Sajadah lipat ukuran kecil.",
        "Sandal jepit/sandal empuk mudah dilepas-pasang + sandal CADANGAN (antisipasi tertukar/hilang — area masjid sangat ramai).",
        "Kaos kaki anti-slip (khusus untuk aktivitas di hotel/area tertentu).",
        "Peniti/klip mukena secukupnya.",
        "[POSISI KAIN IHRAM TERGANTUNG RUTE KEDATANGAN]",
        "- Direct Jeddah → kain ihram WAJIB di TAS KABIN (niat ihram di atas pesawat)",
        "- Direct Madinah dulu → boleh di KOPER BAGASI (masih santai dulu, ambil miqat nanti dari Madinah)",
        "🎒 TAS KABIN: mukena/sajadah tipis untuk sholat selama penerbangan & transit.",
        "👜 TAS SELEMPANG: Tas Serut Kecil untuk bawa sandal masuk masjid.",
        "💡 Tips: beri tanda nama/pita pada sandal & tas serut agar mudah dikenali di area Masjidil Haram/Masjid Nabawi yang ramai."
      ] },
      { id: 30, title: "Perlengkapan Selama di Arab Saudi", badge: "Opsional", tips: [
        "Lauk kering: abon, rendang, serundeng, sambal kemasan — bawa secukupnya (makanan halal tersedia luas di sekitar masjid).",
        "Gelas lipat/wadah makan ringan, sendok-garpu lipat.",
        "Deterjen sachet untuk cuci ringan, hanger lipat/portabel.",
        "Kantong ziplock untuk makanan/barang basah.",
        "Payung lipat atau topi untuk perlindungan dari panas.",
        "Botol minum isi ulang yang ringan.",
        "Tas belanja lipat untuk oleh-oleh/barang tambahan.",
        "🧳 KOPER BAGASI: semua barang di item ini (tidak dibutuhkan selama penerbangan).",
        "💡 Tips: alat memasak listrik (magic com, dll) TIDAK disarankan kecuali benar-benar perlu — pastikan dulu diizinkan oleh hotel & maskapai. Sebagian besar paket umroh sudah sediakan konsumsi, jadi bawalah yang praktis & ringan saja."
      ] },
      { id: 16, title: "Gadget & Kebutuhan Medis", badge: "Wajib", tips: [
        "Ponsel + charger, kabel charger cadangan, headset/earphone.",
        "Power bank maksimal 20.000 mAh — WAJIB di tas kabin (sesuai ketentuan maskapai), tidak boleh di bagasi.",
        "⚡ Adaptor/travel adapter Tipe G (3 lubang persegi panjang) — ini yang DOMINAN dipakai di Saudi & BEDA TOTAL dari colokan Indonesia (Tipe C/F). Saudi juga sebagian pakai Tipe A (2 lempeng pipih, kebetulan SAMA dengan salah satu standar Indonesia) — tapi tetap utamakan bawa adaptor Tipe G untuk aman.",
        "Obat rutin sesuai resep dokter. Obat maag, diare, flu, batuk, pereda nyeri, obat mabuk perjalanan sesuai kebutuhan.",
        "Plester luka, perban kecil, antiseptik praktis.",
        "Masker medis/N95, hand sanitizer, tisu basah.",
        "Sunscreen SPF 50+, pelembap wajah & tubuh, lip balm (udara Saudi sangat kering).",
        "Kacamata hitam bagi yang sensitif sinar matahari.",
        "🎒 TAS KABIN: SEMUA barang elektronik berbaterai (powerbank, charger, adaptor) WAJIB di sini — dilarang masuk koper bagasi. Obat-obatan yang perlu diakses cepat juga di sini.",
        "👜 TAS SELEMPANG/EDC (selalu menempel badan): paspor, visa, ID Siskopatuh, kartu ATM/kredit, uang tunai SAR, HP — \"tas penyelamat\" jika koper/tas kabin tertinggal.",
        "💡 Tips: beli adaptor universal Tipe G dari Indonesia (lebih terjamin kualitas) — kalau lupa, toko sekitar masjid jual \"fisha\" (sebutan lokal) sekitar 10-20 Riyal."
      ] },
    ]
  },
  {
    section: "Langkah 7: Final Check (H-3 s/d Keberangkatan)",
    items: [
      { id: 17, title: "Pemeriksaan Akhir & Keberangkatan", badge: "Wajib", tips: [
        "📁 Cetak Fisik: bawa hardcopy paspor asli, visa, tiket, voucher hotel, dan buku kuning (ICV) — meski semua sudah ada versi digital, hardcopy tetap wajib sebagai cadangan.",
        "📁 Kesiapan Digital: pastikan aplikasi Nusuk dan SatuSehat sudah aktif & bisa diakses offline (screenshot QR penting sebagai cadangan jika sinyal lemah).",
        "⏰ Timing kehadiran: hadir 4-5 jam sebelum keberangkatan — JANGAN kurang dari 3 jam, karena proses verifikasi dokumen penerbangan internasional memakan waktu lebih lama dari penerbangan domestik biasa.",
        "⚠️ PENTING — Terminal keberangkatan TIDAK SELALU sama: Soekarno-Hatta punya Terminal 2F (khusus haji/umrah resmi) DAN sebagian maskapai/travel pakai Terminal 3 Ultimate. SELALU cek terminal di tiket/boarding pass Anda sendiri, jangan berasumsi otomatis 2F — bandara sendiri mengimbau untuk selalu verifikasi sebelum berangkat ke sana.",
        "Kalungkan ID Card Siskopatuh sejak dari rumah/sebelum masuk bandara — memudahkan jika ditanya petugas tanpa harus bongkar tas.",
        "Meski sudah web check-in, tetap WAJIB ke konter check-in maskapai untuk verifikasi dokumen & penyerahan bagasi tercatat.",
        "🧴 Cek aturan cairan (LAGs) di tas kabin — sunscreen, hand sanitizer, dan obat cair harus dalam kemasan sesuai batas yang diizinkan, simpan di tempat mudah diakses untuk pemeriksaan.",
        "Sebelum masuk screening: siapkan diri keluarkan barang logam dari saku (jam tangan, ikat pinggang, koin, kunci) serta keluarkan laptop/tablet dari tas — mempercepat antrean.",
        "Hadir di gate sebelum waktu boarding di boarding pass, ikuti instruksi petugas soal urutan naik pesawat (zona/grup/nomor kursi)."
      ] },
    ]
  },
];
export const tutorialData: TutItem[] = [
    {emoji:"🕌",title:"Miqat & Ihram",subtitle:"Titik awal & tata cara berihram",gold:false,
      content:({D,T})=>(
        <div style={{ padding: '4px 0' }}>
          {/* --- SECTION 1: MIQAT --- */}
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '15px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🗺️ Panduan Miqat <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>


          <DS id="mq1" title="1. Mengenal Miqat Makani" open={D["mq1"]} onToggle={T}>
            <p><strong>Miqat Makani</strong> adalah batas geografis tempat jamaah wajib memulai ihram:</p>
            <ul className="tip-list">
              <li><strong>Yalamlam</strong> — jamaah dari arah Yaman, DAN jamaah Indonesia yang terbang LANGSUNG ke Jeddah (direct flight, tanpa transit Teluk)</li>
              <li><strong>Qarnul Manazil</strong> — jamaah dari Najd/Tha'if, DAN jamaah Indonesia yang transit via Dubai/Doha/Kuwait/Oman sebelum ke Jeddah</li>
              <li><strong>Bir Ali (Dzulhulaifah)</strong> — jamaah dari arah Madinah. ±450 km dari Mekkah</li>
              <li><strong>Juhfah (Rabigh)</strong> — jamaah dari arah barat (Mesir, Suriah, Yordania) & transit Istanbul</li>
              <li><strong>Dzatu 'Irq</strong> — jamaah dari arah Irak</li>
            </ul>
            <div className="info-box"><p>🗺️ Direct Jakarta → Jeddah: niat ihram wajib diucapkan sesaat sebelum pesawat melewati titik miqat <strong>Yalamlam</strong>. Maskapai biasanya mengumumkan 15–30 menit sebelumnya.</p></div>
            <div className="warn-box"><p>✈️ <strong>Khusus penerbangan transit:</strong><br/>
              Transit via <strong>Doha, Dubai, Kuwait, atau Muscat</strong> — keempatnya berada di wilayah <strong>Qarnul Manazil</strong> (miqat yang sama). Niat ihram dilakukan pada penerbangan TERAKHIR menuju Jeddah/Madinah (bukan di kota transit), saat pesawat mendekati/sejajar miqat — biasanya diumumkan kru kabin 15-30 menit sebelumnya.<br/><br/>
              💡 Jika waktu transit sangat singkat/mepet (khawatir tidak sempat ganti di pesawat), boleh kenakan kain ihram sejak di bandara transit sebelum boarding leg terakhir — ini opsional untuk kenyamanan, bukan kewajiban karena miqat-nya tetap sama.<br/><br/>
              • <strong>Transit Istanbul (IST)</strong> → beda miqat: wilayah <strong>Al-Juhfah</strong>. Niat ihram tetap di penerbangan terakhir Istanbul→Jeddah.<br/><br/>
              ⚠️ Jika terlewat miqat tanpa ihram, wajib membayar <strong>dam (denda)</strong>. Jika masih bisa kembali ke titik miqat terdekat, lakukanlah.<br/><br/>
              📌 Ada perbedaan pendapat ulama soal ihram dari Jeddah (sebagian membolehkan tanpa dam, sebagian mewajibkan dam) — untuk kepastian hukum sesuai mazhab/pembimbing Anda, disarankan konsultasi dengan ustadz/pembimbing manasik.</p></div>
          </DS>

          <DS id="mq4" title="🚺 Wanita Haid/Nifas Saat Miqat" open={D["mq4"]} onToggle={T}>
            <div className="info-box"><p>✅ Haid TIDAK menghalangi niat ihram. Hadis Nabi ﷺ: <strong>"Wanita nifas dan wanita haid, jika sampai di miqat, hendaknya ia mandi dan berihram, selanjutnya melakukan semua amalan haji selain tawaf seputar Ka'bah."</strong> (HR. Abu Dawud, Tirmidzi)</p></div>

            <p style={{fontWeight:600,color:'var(--emerald-text)',marginBottom:6}}>Jika sedang haid SAAT tiba di miqat:</p>
            <ul className="tip-list">
              <li><span className="step-badge">1</span>Tetap mandi sunnah (boleh pakai sabun, asal tanpa wewangian)</li>
              <li><span className="step-badge">2</span>Pakai pembalut dengan aman, lalu kenakan ihram seperti biasa</li>
              <li><span className="step-badge">3</span>Niat & ucapkan talbiyah seperti jamaah lain — ihram TETAP SAH</li>
              <li><span className="step-badge">4</span>Boleh langsung lakukan Sa'i (tidak mensyaratkan suci)</li>
              <li><span className="step-badge">5</span>TUNDA Tawaf hingga suci & mandi wajib — baru lakukan Tawaf, lalu Tahallul</li>
            </ul>

            <div className="warn-box"><p>⚠️ Larangan ihram (no wewangian, no potong kuku/rambut, dll) TETAP BERLAKU selama haid — ihram tidak otomatis batal/longgar.</p></div>

            <DS id="mq5" title="💡 Khawatir Haid Datang Setelah Niat? — Niat Bersyarat" open={D["mq5"]} onToggle={T}>
              <p>Jika sudah suci saat di miqat, tapi khawatir haid datang sebelum sempat Tawaf (misal: durasi trip pendek, sudah mendekati siklus), boleh mengambil <strong>niat ihram bersyarat</strong>:</p>
              <div className="doa-box">
                <div className="doa-label">Niat Ihram Bersyarat</div>
                <PrayerAudioPlayer src="/assets/audio/niat-bersyarat.mp3" id="niat-bersyarat" />
                <div className="doa-arabic">نَوَيْتُ الْعُمْرَةَ وَأَحْرَمْتُ بِهَا لِلَّهِ تَعَالَى، فَإِنْ حَاضَتْ فَأَنَا حَلٌّ</div>
                <div className="doa-latin">Nawaitul 'umrata wa ahramtu bihaa lillahi ta'ala, fa-in haadhat fa ana hill</div>
                <div className="doa-arti">"Aku niat umroh dan berihram karena Allah, jika aku didatangi haid maka aku menjadi halal (bebas dari ihram)."</div>
              </div>
              <p style={{fontSize:".85rem",color:"var(--muted)"}}>💡 Manfaat niat bersyarat: jika haid benar-benar datang & tidak sempat suci sampai waktu pulang, bisa tahallul (gunting rambut) tanpa wajib dam — karena sudah ada syarat dari awal.</p>
            </DS>

            <p style={{fontSize:".85rem",color:"var(--muted)",marginTop:10}}>📌 Mazhab Syafi'i (mayoritas di Indonesia) membolehkan niat bersyarat ini. Untuk kepastian sesuai situasi spesifik, disarankan konsultasi pembimbing manasik.</p>
          </DS>

          <DS id="mq2" title="2. Strategi Ihram di Pesawat" open={D["mq2"]} onToggle={T}>
            <p><strong>Direkomendasikan:</strong> Pria — pakai kain ihram bawah sejak bandara asal, ganti Rida' di toilet pesawat 1 jam sebelum mendarat. Wanita — pakai muslimah syar'i sejak awal.</p>
            <div className="warn-box"><p>⚠️ Hindari ganti pakaian saat turbulensi.</p></div>
          </DS>

          <DS id="mq-shalat" title="✨ Shalat Sunnah Ihram" open={D["mq-shalat"]} onToggle={T}>
            <p>Sebelum berniat ihram, disunnahkan shalat dua rakaat (jika bukan waktu terlarang shalat).</p>
            <div className="doa-box">
              <div className="doa-label">Niat Shalat Sunnah Ihram</div>
              <PrayerAudioPlayer src="/assets/audio/niat-shalat-ihram.mp3" id="niat-shalat-ihram" />
              <div className="doa-arabic">أُصَلِّي سُنَّةَ اْلإِحْرَامِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى</div>
              <div className="doa-latin">Ushalli sunnatal ihraami rak’ataini lillaahi ta’aala</div>
              <div className="doa-arti">"Aku niat shalat sunnah ihram dua rakaat karena Allah Ta'ala."</div>
            </div>
            <p style={{fontSize:".85rem",color:"var(--muted)"}}>💡 Rakaat pertama disunnahkan membaca Al-Kafirun, rakaat kedua Al-Ikhlas.</p>
          </DS>

          <DS id="mq3" title="3. Niat Ihram & Talbiyah" open={D["mq3"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Niat Ihram Umroh</div>
              <PrayerAudioPlayer src="/assets/audio/niat-umroh.mp3" id="niat-umroh" />
              <div className="doa-arabic">لَبَّيْكَ اللَّهُمَّ عُمْرَةً</div>
              <div className="doa-latin">Labbaik Allāhumma 'umratan</div>
              <div className="doa-arti">"Ya Allah, aku memenuhi panggilan-Mu untuk mengerjakan umroh."</div>
            </div>
            <div className="doa-box">
              <div className="doa-label">Talbiyah</div>
              <PrayerAudioPlayer src="/assets/audio/talbiyah.mp3" id="talbiyah" />
              <div className="doa-arabic">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ</div>
              <div className="doa-latin">Labbaik Allāhumma labbaik, labbaik lā syarīka laka labbaik, innal-ḥamda wan-ni'mata laka wal-mulk, lā syarīka lak</div>
              <div className="doa-arti">Artinya: "Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Aku penuhi panggilan-Mu, tiada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, nikmat, dan seluruh kekuasaan hanya milik-Mu, tiada sekutu bagi-Mu."</div>
              <div style={{fontSize:".8rem",color:"var(--muted)",marginTop:6,lineHeight:1.6}}>💡 Baca talbiyah terus-menerus sejak niat ihram hingga memulai tawaf — dengan suara keras bagi pria, pelan untuk wanita. Talbiyah adalah tanda jamaah benar-benar "hadir" memenuhi panggilan Allah.</div>
            </div>
          </DS>

          {/* --- SECTION 2: TATA CARA IHRAM --- */}
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🤍 Larangan & Sunnah <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <DS id="ih2" title="🚫 Larangan Ihram" open={D["ih2"]} onToggle={T}>
            <p style={{fontWeight:600,color:'var(--emerald-text)',marginBottom:6}}>Pria & Wanita:</p>
            <ul className="larangan-list">
              <li>Memakai wewangian setelah niat ihram</li>
              <li>Memotong rambut atau kuku</li>
              <li>Berhubungan suami istri (Rafast) — membatalkan umroh</li>
              <li>Mencaci, bertengkar, berkata kotor</li>
            </ul>
            <p style={{fontWeight:600,color:'var(--emerald-text)',marginTop:10,marginBottom:6}}>Khusus Pria:</p>
            <ul className="larangan-list">
              <li>Memakai pakaian berjahit (kemeja, celana, jaket)</li>
              <li>Menutup kepala dengan benda menempel (topi, sorban, kain yang menempel di kepala). Namun <strong>payung diperbolehkan</strong> karena tidak menempel langsung di kepala.</li>
              <li>Memakai sepatu menutup mata kaki dan jari kaki</li>
            </ul>
            <p style={{fontWeight:600,color:'var(--emerald-text)',marginTop:10,marginBottom:6}}>Pria & Wanita (Larangan di Tanah Haram):</p>
            <ul className="larangan-list">
              <li>Memotong, mencabut, atau merusak tumbuhan yang tumbuh di kawasan Tanah Haram — termasuk mencabut rumput, memotong pohon, atau merusak dedaunan</li>
              <li>Memburu atau membunuh hewan darat yang hidup liar di Tanah Haram (hewan laut dan serangga berbahaya dikecualikan)</li>
            </ul>
            <p style={{fontWeight:600,color:'var(--emerald-text)',marginTop:10,marginBottom:6}}>Khusus Wanita:</p>
            <ul className="larangan-list">
              <li>Menutup wajah dengan cadar/niqab</li>
              <li>Memakai sarung tangan</li>
            </ul>
            <div className="warn-box"><p>⚠️ Melanggar larangan ihram dapat mewajibkan membayar <strong>fidyah (dam)</strong>.</p></div>
          </DS>

          <DS id="ih3" title="✨ Sunnah Ihram" open={D["ih3"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Mandi sunnah (ghusl) sebelum memakai pakaian ihram</li>
              <li>Memakai wewangian di badan (bukan pakaian) sebelum niat</li>
              <li>Shalat sunnah 2 rakaat sebelum niat ihram</li>
              <li>Membaca talbiyah dengan penuh penghayatan</li>
            </ul>
          </DS>

          {/* --- SECTION 3: TENTANG DAM --- */}
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🐑 Tentang Dam & Denda <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <DS id="dam1" title="Apa Itu Dam?" open={D["dam1"]} onToggle={T}>
            <p><strong>Dam</strong> (دَمٌ, secara harfiah berarti "darah") adalah denda berupa penyembelihan hewan ternak yang wajib dibayar oleh jamaah yang melanggar ketentuan ibadah haji atau umroh.</p>
            <div className="info-box"><p>📌 Dam bukan berarti ibadah umroh Anda batal. Dam adalah penebus/kafarat atas pelanggaran yang terjadi.</p></div>
          </DS>

          <DS id="dam2" title="Sebab-Sebab Wajib Dam" open={D["dam2"]} onToggle={T}>
            <p style={{fontWeight:600,color:"var(--emerald-text)",marginBottom:6}}>🔴 Pelanggaran Ihram (dam ringan — 1 eking kambing/domba):</p>
            <ul className="larangan-list">
              <li>Memakai wewangian setelah niat ihram</li>
              <li>Memakai pakaian berjahit (pria)</li>
              <li>Menutup kepala (pria)</li>
              <li>Memotong rambut atau kuku</li>
              <li>Mencukur rambut seluruh kepala (dam lebih berat)</li>
            </ul>
            <p style={{fontWeight:600,color:"var(--emerald-text)",marginTop:10,marginBottom:6}}>🔴 Melewati Miqat Tanpa Ihram:</p>
            <ul className="larangan-list">
              <li>Melewati batas miqat tanpa berihram (termasuk saat transit jika tidak berihram dulu)</li>
              <li>Dam: 1 ekor kambing/domba yang disembelih di tanah haram (Mekkah)</li>
            </ul>
            <p style={{fontWeight:600,color:"var(--emerald-text)",marginTop:10,marginBottom:6}}>🔴 Rafast (Dam berat — umroh bisa batal):</p>
            <ul className="larangan-list">
              <li>Berhubungan suami istri sebelum tahallul — umroh tidak sah dan wajib mengulang + dam seekor unta atau sapi</li>
            </ul>
          </DS>

          <DS id="dam3" title="Kafarat Alternatif (Fidyah)" open={D["dam3"]} onToggle={T}>
            <p>Untuk pelanggaran ringan (potong kuku, memakai wewangian, dll), jamaah boleh memilih salah satu dari tiga pilihan:</p>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Menyembelih kambing/domba</strong> — dagingnya dibagikan kepada fakir miskin di tanah haram</li>
              <li><span className="step-badge">2</span><strong>Berpuasa 3 hari</strong> — boleh dilakukan kapan saja (tidak harus di Mekkah)</li>
              <li><span className="step-badge">3</span><strong>Bersedekah kepada 6 orang miskin</strong> — masing-masing mendapat setengah sha' (±1,5 kg) makanan pokok</li>
            </ul>
          </DS>

          <DS id="dam4" title="🐑 Cara Bayar & Estimasi" open={D["dam4"]} onToggle={T}>
            <p><strong>Tata cara bayar:</strong></p>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Via Lembaga Resmi Saudi (Direkomendasikan):</strong> Bayar melalui "Bank Al-Rajhi Qurban" atau platform resmi <strong>adahi.com.sa</strong> — daging langsung disalurkan ke fakir miskin, Anda terima bukti digital</li>
              <li><span className="step-badge">2</span><strong>Via Jagal Resmi di Mekkah:</strong> Cari jagal (tukang sembelih) bertanda resmi di sekitar Masjidil Haram. Harga kambing SAR 300–600.</li>
            </ul>
            <div className="info-box" style={{marginTop:10}}><p>💰 Estimasi Biaya: Kambing/Domba SAR 300–600 (±Rp1,3jt – 2,7jt). Sapi ( Rafast) SAR 1.000–2.500.</p></div>
          </DS>
        </div>
      )
    },
    {emoji:"🙏",title:"Masjidil Haram & Sholat",subtitle:"Adab masuk & panduan ibadah di Haram",gold:true,
      content:({D,T})=>(
        <div style={{ padding: '4px 0' }}>
          {/* --- SECTION 1: ADAB MASUK --- */}
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '15px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🕋 Memasuki Masjid <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <p style={{ fontSize: '.94rem', lineHeight: '1.6', marginBottom: '12px' }}>Masuk melalui pintu <strong>Bab As-Salam</strong> atau pintu terdekat dengan kaki kanan terlebih dahulu.</p>

          <div className="doa-box">
            <div className="doa-label">Doa Masuk Masjid</div>
            <PrayerAudioPlayer src="/assets/audio/doa-masuk-masjid.mp3" id="doa-masuk-masjid" />
            <div className="doa-arabic">اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ</div>
            <div className="doa-latin">Allāhummaftaḥ lī abwāba raḥmatik</div>
            <div className="doa-arti">"Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu."</div>
          </div>

          <DS id="sh-view" title="🕋 Doa Melihat Ka'bah" open={D["sh-view"]} onToggle={T}>
            <p>Saat pertama kali mata memandang Ka'bah, angkat tangan dan baca doa ini (waktu mustajab):</p>
            <div className="doa-box">
              <div className="doa-label">Doa Melihat Ka'bah</div>
              <PrayerAudioPlayer src="/assets/audio/doa-melihat-kaabah.mp3" id="doa-melihat-kaabah" />
              <div className="doa-arabic">اللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَمَهَابَةً وَزِدْ مَنْ شَرَّفَهُ وَكَرَّمَهُ مِمَّنْ حَجَّهُ أَوِ اعْتَمَرَهُ تَشْرِيفًا وَتَكْرِيمًا وَتَعْظِيمًا وَبِرًّا</div>
              <div className="doa-latin">Allāhumma zid hādzal baita tasyrīfan wa ta'dzīman wa takrīman wa mahābatan, wa zid man syarrafahū wa karramahū mimman ḥajjahū awi'tamarahū tasyrīfan wa takrīman wa ta'dzīman wa birran</div>
              <div className="doa-arti">"Ya Allah, tambahkanlah kemuliaan, keagungan, kehormatan, dan kewibawaan pada Baitullah ini. Dan tambahkanlah pula kemuliaan, kehormatan, keagungan, dan kebaikan bagi orang yang memuliakan dan menghormatinya dari kalangan mereka yang berhaji atau berumroh."</div>
            </div>
          </DS>

          <ul className="tip-list">
            <li>Saat pertama kali melihat Ka'bah, berdiri sejenak dan panjatkan doa — waktu mustajab.</li>
            <li>Simpan sandal di dalam tas (tas serut), bukan di rak terbuka agar tidak tertukar/hilang.</li>
            <li>Baca talbiyah terus hingga siap memulai tawaf.</li>
          </ul>

          {/* --- SECTION 2: PANDUAN SHOLAT --- */}
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📿 Ibadah Sholat <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <DS id="sh1" title="🕋 Keutamaan Sholat" open={D["sh1"]} onToggle={T}>
            <div className="info-box"><p>💎 Satu rakaat sholat di Masjidil Haram setara dengan <strong>100.000 rakaat</strong> di masjid lain.</p></div>
            <ul className="tip-list">
              <li>Utamakan sholat fardhu berjamaah di dalam masjid, bukan di hotel.</li>
              <li>Hadir <strong>20–30 menit sebelum iqamah</strong> karena kepadatan jemaah.</li>
              <li>Sholat sunnah qabliyah/ba'diyah sangat dianjurkan.</li>
            </ul>
          </DS>

          <DS id="sh2" title="🗺️ Posisi Shaf & Area" open={D["sh2"]} onToggle={T}>
            <ul className="tip-list">
              <li><strong>Mataf (Lantai Dasar):</strong> Khusus tawaf. Saat iqamah, menjadi shaf utama.</li>
              <li><strong>Lantai 1 & 2:</strong> Area sholat luas dan ber-AC.</li>
              <li><strong>Pria:</strong> Masuk pintu King Fahd atau King Abdul Aziz.</li>
              <li><strong>Wanita:</strong> Area khusus bertanda — ikuti petunjuk petugas.</li>
            </ul>
          </DS>

          <DS id="sh3" title="🕐 Jadwal & Strategi Waktu" open={D["sh3"]} onToggle={T}>
            <div className="warn-box"><p>⏰ Jadwal sholat di Arab Saudi berbeda dengan Indonesia. Manfaatkan waktu antara Maghrib–Isya untuk tawaf sunnah karena suhu lebih sejuk.</p></div>
            <ul className="tip-list">
              <li><strong>Subuh:</strong> ±05:00 — Waktu paling tenang.</li>
              <li><strong>Dzuhur:</strong> ±12:15 — Sangat panas, siapkan payung.</li>
              <li><strong>Tahajud:</strong> 02:00–03:30 — Masjid sangat kondusif untuk i'tikaf.</li>
            </ul>
          </DS>

          {/* --- SECTION 3: ADAB DI DALAM --- */}
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🤲 Adab & Larangan <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <DS id="sh6" title="🚫 Larangan di Area Sholat" open={D["sh6"]} onToggle={T}>
            <ul className="larangan-list">
              <li>Dilarang berjalan di depan orang yang sedang sholat.</li>
              <li>Matikan/Silent HP sebelum masuk masjid.</li>
              <li>Dilarang duduk membelakangi Ka'bah saat berdoa.</li>
              <li>Dilarang foto/video saat sholat berlangsung.</li>
            </ul>
          </DS>

          <div className="info-box" style={{marginTop:10}}>
            <p>💡 <strong>Tips:</strong> Berwudhu lah dari hotel sebelum berangkat. Antrian wudhu di dalam masjid bisa sangat panjang saat mendekati waktu sholat.</p>
          </div>
        </div>
      )
    },
    {emoji:"🔄",title:"Tawaf — Mengelilingi Ka'bah",subtitle:"7 putaran berlawanan arah jarum jam",gold:true,
      content:({D,T})=>(
        <div style={{ padding: '4px 0' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '15px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📚 Panduan & Syarat <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <p style={{ fontSize: '.94rem', lineHeight: '1.6', marginBottom: '12px' }}>Tawaf adalah mengelilingi Ka'bah sebanyak <strong>7 putaran</strong>. Ka'bah harus selalu berada di sebelah kiri Anda.</p>

          <DS id="tw3" title="✅ Syarat Sahnya Tawaf" open={D["tw3"]} onToggle={T}>
            <ul className="tip-list">
              <li>Suci dari hadas kecil (wudhu) dan hadas besar.</li>
              <li>Menutup aurat secara sempurna.</li>
              <li>Ka'bah berada di sebelah kiri selama tawaf.</li>
              <li>Dimulai tepat dari garis sejajar Hajar Aswad.</li>
              <li>Dilakukan genap 7 putaran penuh.</li>
            </ul>
            <div className="warn-box"><p>⚠️ Wanita haid tidak boleh tawaf. Jika batal wudhu di tengah tawaf, segera keluar untuk wudhu dan sambung kembali putaran yang tersisa.</p></div>
          </DS>

          <DS id="tw-jenis" title="📋 Jenis-Jenis Tawaf" open={D["tw-jenis"]} onToggle={T}>
            <ul className="tip-list">
              <li><strong>Tawaf Umroh</strong> — Rukun utama umroh (wajib).</li>
              <li><strong>Tawaf Qudum</strong> — Tawaf selamat datang (sunnah).</li>
              <li><strong>Tawaf Sunnah</strong> — Dilakukan kapan saja untuk pahala tambahan.</li>
              <li><strong>Tawaf Wada'</strong> — Tawaf perpisahan sebelum meninggalkan Makkah.</li>
            </ul>
          </DS>

          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📖 Tata Cara & Doa <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <ul className="tip-list">
            <li><span className="step-badge">1</span>Berdiri sejajar Hajar Aswad, angkat tangan: <em>"Bismillahi Allahu Akbar"</em>.</li>
            <li><span className="step-badge">2</span>Berjalan mengelilingi Ka'bah (Ka'bah di kiri).</li>
            <li><span className="step-badge">3</span>Di Rukun Yamani: cukup usap dengan tangan jika bisa (tanpa cium).</li>
          </ul>

          <div className="doa-box">
            <div className="doa-label">Doa antara Rukun Yamani & Hajar Aswad</div>
            <PrayerAudioPlayer src="/assets/audio/doa-sapu-jagad.mp3" id="doa-sapu-jagad" />
            <div className="doa-arabic">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</div>
            <div className="doa-latin">Rabbanā ātinā fid-dunyā ḥasanah, wa fil-ākhirati ḥasanah, wa qinā 'adzāban-nār</div>
            <div className="doa-arti">"Ya Tuhan kami, berikanlah kami kebaikan di dunia dan akhirat, dan peliharalah kami dari azab neraka."</div>
          </div>

          <DS id="tw-shalat" title="✨ Shalat Sunnah Tawaf" open={D["tw-shalat"]} onToggle={T}>
            <p>Setelah selesai 7 putaran, disunnahkan shalat dua rakaat di belakang Maqam Ibrahim (atau di mana saja di dalam masjid jika penuh).</p>
            <div className="doa-box">
              <div className="doa-label">Niat Shalat Sunnah Tawaf</div>
              <PrayerAudioPlayer src="/assets/audio/niat-shalat-tawaf.mp3" id="niat-shalat-tawaf" />
              <div className="doa-arabic">أُصَلِّي سُنَّةَ الطَّوَافِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى</div>
              <div className="doa-latin">Ushalli sunnatat-thawaafi rak’ataini lillaahi ta’aala</div>
              <div className="doa-arti">"Aku niat shalat sunnah tawaf dua rakaat karena Allah Ta'ala."</div>
            </div>
            <p style={{fontSize:".85rem",color:"var(--muted)"}}>💡 Dianjurkan membaca surat Al-Kafirun pada rakaat pertama dan Al-Ikhlas pada rakaat kedua.</p>
          </DS>

          <DS id="tw-zamzam" title="🥤 Minum Air Zamzam" open={D["tw-zamzam"]} onToggle={T}>
            <p>Disunnahkan minum air zamzam sepuasnya sambil menghadap Ka'bah dan berdoa:</p>
            <div className="doa-box">
              <div className="doa-label">Doa Minum Air Zamzam</div>
              <PrayerAudioPlayer src="/assets/audio/doa-minum-zamzam.mp3" id="doa-minum-zamzam" />
              <div className="doa-arabic">اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ</div>
              <div className="doa-latin">Allāhumma innī as’aluka ‘ilman nāfi’an wa rizqan wāsi’an wa syifā’an min kulli dā’in</div>
              <div className="doa-arti">"Ya Allah, sesungguhnya aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang luas, dan kesembuhan dari segala penyakit."</div>
            </div>
          </DS>
        </div>
      )
    },
    {emoji:"🏃",title:"Sa'i — Shafa & Marwah",subtitle:"7 kali bolak-balik, total ±3,15 km",gold:false,
      content:({D,T})=>(
        <div style={{ padding: '4px 0' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '15px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ⛰️ Bukit Shafa & Marwah <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <p style={{ fontSize: '.94rem', lineHeight: '1.6', marginBottom: '12px' }}>Sa'i adalah berjalan bolak-balik sebanyak <strong>7 kali</strong> antara Shafa & Marwah (±405 meter sekali jalan), dimulai dari bukit Shafa dan berakhir di bukit Marwah.</p>

          <DS id="si3" title="📖 Cara Pelaksanaan" open={D["si3"]} onToggle={T}>
            <ul className="tip-list">
              <li><span className="step-badge">1</span>Naiki bukit Shafa, menghadap Ka'bah (jika terlihat), ucapkan takbir 3x: <em>"Allahu Akbar, Allahu Akbar, Allahu Akbar"</em>.</li>
              <li><span className="step-badge">2</span>Berjalan menuju Marwah. <strong>Pria:</strong> lari-lari kecil di area lampu hijau (Harwalah).</li>
              <li><span className="step-badge">3</span>Tiba di Marwah, menghadap Ka'bah dan berdoa kembali.</li>
              <li><span className="step-badge">4</span>Ulangi hingga 7 kali (Shafa ke Marwah dihitung 1, Marwah ke Shafa dihitung 1) — putaran terakhir/ke-7 berakhir di Marwah.</li>
            </ul>
            <div className="info-box"><p>📌 Wanita haid diperbolehkan melakukan Sa'i karena tidak mensyaratkan keadaan suci/wudhu — berbeda dari Tawaf.</p></div>
          </DS>

          <DS id="si4" title="📿 Doa di Atas Bukit & Putaran" open={D["si4"]} onToggle={T}>
            <p style={{fontSize:".88rem",marginBottom:8}}>Saat tiba di atas bukit Shafa atau Marwah, menghadaplah ke Ka'bah dan baca doa yang dipraktikkan Rasulullah ﷺ:</p>
            <div className="doa-box">
              <div className="doa-label">Doa di Atas Bukit (Shafa/Marwah)</div>
              <PrayerAudioPlayer src="/assets/audio/doa-shafa-marwah.mp3" id="doa-shafa-marwah" />
              <div className="doa-arabic">اللهُ أَكْبَرُ، اللهُ أَكْبَرُ، اللهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</div>
              <div className="doa-latin">Allāhu Akbar (3x), Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul mulku wa lahul ḥamdu wa huwa ‘alā kulli syai’in qadīr</div>
              <div className="doa-arti">"Allah Maha Besar (3x). Tiada Tuhan selain Allah Yang Maha Esa, tiada sekutu bagi-Nya. Bagi-Nya segala kerajaan dan segala puji, dan Dia Maha Kuasa atas segala sesuatu."</div>
            </div>
            <div className="doa-box">
              <div className="doa-label">Doa Sepanjang Perjalanan (Riwayat Ibnu Mas'ud)</div>
              <PrayerAudioPlayer src="/assets/audio/doa-sai.mp3" id="doa-sai" />
              <div className="doa-arabic">رَبِّ اغْفِرْ وَارْحَمْ إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ</div>
              <div className="doa-latin">Allahummaghfirlī warham wa antal a'azzul akram</div>
              <div className="doa-arti">"Ya Rabbku, ampuni dan rahmatilah aku. Sesungguhnya Engkaulah Yang Maha Perkasa dan Maha Pemurah."</div>
            </div>
          </DS>

          <div className="warn-box" style={{marginTop:10}}>
            <p>⚠️ Area Sa'i sekarang ber-AC dan terdiri dari beberapa lantai — jika padat, gunakan lantai 1/2/atap untuk lebih leluasa. Bawa air minum karena durasi total bisa 30-60 menit tergantung kepadatan.</p>
          </div>
        </div>
      )
    },
    {emoji:"✂️",title:"Tahallul — Menggunting Rambut",subtitle:"Penanda selesainya ibadah umroh",gold:true,
      content:({D,T})=>(
        <div style={{ padding: '4px 0' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '15px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ✂️ Penutup Ihram <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <p style={{ fontSize: '.94rem', lineHeight: '1.6', marginBottom: '12px' }}>Tahallul dilakukan SETELAH Sa'i selesai (di area Marwah) — ini RUKUN terakhir umroh. Jika belum dilakukan, Anda masih terikat larangan ihram & umroh dianggap belum selesai.</p>

          <DS id="th1" title="👨 Tata Cara untuk Pria" open={D["th1"]} onToggle={T}>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Mencukur gundul (Halq)</strong> — lebih utama/afdhal, Nabi ﷺ mendoakan 3x bagi yang gundul, hanya 1x bagi yang memotong sebagian</li>
              <li><span className="step-badge">2</span>Atau <strong>memotong pendek merata (Taqshir)</strong> — minimal 3 helai rambut dari seluruh bagian kepala</li>
              <li><span className="step-badge">3</span>Mulai dari sisi <strong>kanan kepala</strong> terlebih dahulu, baru sisi kiri (sesuai sunnah)</li>
              <li><span className="step-badge">4</span>Jika ingin gundul total, sebaiknya dilakukan di luar Masjidil Haram (banyak tukang cukur di sekitar area Marwah/hotel)</li>
              <li><span className="step-badge">5</span>Jika kepala botak/tidak ada rambut: cukup isyarat — gerakan seperti menggunting 3x di kepala</li>
            </ul>
          </DS>

          <DS id="th2" title="👩 Tata Cara untuk Wanita" open={D["th2"]} onToggle={T}>
            <ul className="tip-list">
              <li><span className="step-badge">1</span>Cukup memotong ujung rambut, minimal <strong>3 helai</strong>, sepanjang satu ruas jari</li>
              <li><span className="step-badge">2</span>Dipotong oleh <strong>mahram</strong> (suami/ayah/saudara laki-laki) atau wanita lain yang sudah selesai tahallul — JANGAN oleh tukang cukur pria yang bukan mahram</li>
              <li><span className="step-badge">3</span>Jaga aurat — lakukan di tempat tertutup/privat, bukan terbuka di area Marwah yang ramai</li>
            </ul>
          </DS>

          <DS id="th3" title="📿 Doa Saat & Setelah Tahallul" open={D["th3"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Saat Mulai Mencukur/Memotong</div>
              <PrayerAudioPlayer src="/assets/audio/doa-tahallul.mp3" id="doa-tahallul" />
              <div className="doa-arabic">اللَّهُمَّ اجْعَلْ لِكُلِّ شَعْرَةٍ نُورًا يَوْمَ الْقِيَامَةِ</div>
              <div className="doa-latin">Allāhummaj'al likulli sya'ratin nūran yaumal qiyāmah</div>
              <div className="doa-arti">"Ya Allah, jadikanlah cahaya untukku dari setiap helai rambut yang dipotong ini pada hari kiamat."</div>
            </div>
            <div className="doa-box">
              <div className="doa-label">Setelah Selesai Tahallul (Penutup Manasik)</div>
              <PrayerAudioPlayer src="/assets/audio/doa-selesai-umroh.mp3" id="doa-selesai-umroh" />
              <div className="doa-arabic">اَلْحَمْدُ للهِ الَّذِى قَضَى عَنَّا مَنَاسِكَنَا، اَللَّهُمَّ زِدْنَا إِيمَانًا وَيَقِينًا وَعَوْنًا وَاغْفِرْ لَنَا وَلِوَالِدَيْنَا وَلِسَائِرِ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ</div>
              <div className="doa-latin">Alhamdulillāhil ladzī qaḍā 'annā manāsikanā. Allāhumma zidnā īmānan wa yaqīnan wa 'aunan, waghfir lanā wa liwālidainā wa lisā'iril muslimīna wal muslimāt</div>
              <div className="doa-arti">"Segala puji bagi Allah yang telah menyelesaikan manasik kami. Ya Allah, tambahkanlah kepada kami iman, keyakinan, dan pertolongan. Ampunilah kami, kedua orang tua kami, dan seluruh kaum muslimin dan muslimat."</div>
            </div>
            <p style={{fontSize:".85rem",color:"var(--muted)"}}>💡 Tidak wajib membaca doa tertentu — tahallul tetap sah meski tanpa doa. Tapi membaca doa ini menyempurnakan pahala & momen spiritualnya.</p>
          </DS>

          <div className="info-box" style={{marginTop:10}}>
            <p>✅ <strong>Setelah Tahallul selesai</strong>, seluruh larangan ihram otomatis halal kembali — boleh memakai wewangian, memotong kuku, mengenakan pakaian biasa. Umroh Anda telah SELESAI & SAH.</p>
          </div>

          <div className="warn-box" style={{marginTop:10}}>
            <p>⚠️ Bagi yang berniat <strong>Umroh Sunnah/Badal tambahan</strong> setelah ini (lihat section Umroh Badal), boleh langsung lanjut ihram lagi dari Tan'im — tidak perlu jeda waktu khusus.</p>
          </div>
        </div>
      )
    },

    {emoji:"🤲", title:"Umroh Badal",
    subtitle:"Mengumrohkan orang yang sudah wafat atau tidak mampu",
    gold:false,
    content:({D,T})=>(
      <div style={{ padding: '4px 0' }}>

        {/* PENGERTIAN */}
        <div style={{ fontSize: '0.72rem', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '1.2px',
          color: 'var(--gold)', margin: '15px 0 10px',
          display: 'flex', alignItems: 'center', gap: '8px' }}>
          📖 Pengertian & Hukum
          <span style={{ flex: 1, height: '1px',
            background: 'var(--border-detail)' }}></span>
        </div>

        <p style={{ fontSize: '.94rem', lineHeight: '1.6', marginBottom: '12px' }}>
          <strong>Badal Umroh</strong> adalah melaksanakan ibadah umroh
          atas nama orang lain yang tidak mampu hadir sendiri.
          Hukumnya <strong>mubah (diperbolehkan)</strong> berdasarkan
          qiyas dari hadis Nabi ﷺ tentang badal haji — dan bisa menjadi
          <strong> wajib</strong> jika almarhum/almarhumah pernah bernazar
          untuk umroh semasa hidupnya.
        </p>

        <div className="info-box">
          <p>💛 Bagi seorang anak, membadalkan umroh orang tua yang telah
          wafat adalah salah satu bentuk <strong>birrul walidain</strong>
          (berbakti kepada orang tua) tertinggi yang bisa dilakukan setelah
          mereka tiada — pahala terus mengalir sebagai amal jariyah.</p>
        </div>

        {/* SIAPA YANG BISA DIBADALKAN */}
        <div style={{ fontSize: '0.72rem', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '1.2px',
          color: 'var(--gold)', margin: '30px 0 10px',
          display: 'flex', alignItems: 'center', gap: '8px' }}>
          👤 Siapa yang Bisa Dibadalkan?
          <span style={{ flex: 1, height: '1px',
            background: 'var(--border-detail)' }}></span>
        </div>

        <ul className="tip-list">
          <li>Orang yang sudah <strong>wafat</strong> — terutama yang
            semasa hidupnya punya niat/keinginan untuk umroh tapi belum
            sempat terlaksana</li>
          <li>Orang yang masih hidup tapi <strong>tidak mampu secara
            fisik</strong> — sakit parah, usia sangat lanjut, atau kondisi
            yang mustahil untuk melakukan perjalanan jauh</li>
          <li><strong>TIDAK boleh</strong> dibadalkan jika orang tersebut
            masih sehat dan mampu secara fisik & finansial — ia wajib
            berangkat sendiri</li>
          <li><strong>TIDAK boleh</strong> dibadalkan karena alasan tidak
            mampu secara finansial saja (umroh memang tidak wajib jika
            tidak mampu harta)</li>
        </ul>

        {/* SYARAT PELAKSANA */}
        <div style={{ fontSize: '0.72rem', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '1.2px',
          color: 'var(--gold)', margin: '30px 0 10px',
          display: 'flex', alignItems: 'center', gap: '8px' }}>
          ✅ Syarat Orang yang Membadalkan
          <span style={{ flex: 1, height: '1px',
            background: 'var(--border-detail)' }}></span>
        </div>

        <ul className="tip-list">
          <li><span className="step-badge">1</span>
            <strong>Sudah pernah umroh/haji untuk dirinya sendiri</strong>
            — ini syarat paling utama & mutlak. Jika belum, umroh badal
            yang diniatkan otomatis jatuh sebagai umroh pribadi pelaksana
            (bukan untuk yang dibadalkan)</li>
          <li><span className="step-badge">2</span>
            <strong>Beragama Islam, baligh, sehat fisik & mental</strong></li>
          <li><span className="step-badge">3</span>
            <strong>Memahami tata cara umroh dengan baik</strong> — wajib
            mampu melaksanakan seluruh rukun (Ihram, Tawaf, Sa'i, Tahallul)
            dengan sempurna</li>
          <li><span className="step-badge">4</span>
            <strong>Niat tulus & ikhlas</strong> karena Allah, bukan
            karena motif lain</li>
          <li><span className="step-badge">5</span>
            <strong>Pria boleh membadalkan untuk wanita, dan sebaliknya
            </strong> — tidak ada batasan gender</li>
          <li><span className="step-badge">6</span>
            <strong>Satu kali umroh hanya untuk SATU orang</strong> —
            tidak boleh niatkan badal untuk dua orang sekaligus dalam satu
            rangkaian Ihram-Tawaf-Sa'i-Tahallul</li>
        </ul>

        <div className="warn-box">
          <p>⚠️ <strong>Waspada penipuan jasa badal:</strong> banyak
          biro yang menawarkan "badal umroh sekaligus untuk 5-10 orang"
          dalam satu perjalanan — ini <strong>tidak sah</strong> secara
          syariat. Pastikan jasa badal yang dipilih melaksanakan 1 umroh
          penuh (Ihram → Tawaf → Sa'i → Tahallul) khusus untuk 1 nama
          saja.</p>
        </div>

        {/* NIAT */}
        <div style={{ fontSize: '0.72rem', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '1.2px',
          color: 'var(--gold)', margin: '30px 0 10px',
          display: 'flex', alignItems: 'center', gap: '8px' }}>
          🤍 Niat Ihram Badal Umroh
          <span style={{ flex: 1, height: '1px',
            background: 'var(--border-detail)' }}></span>
        </div>

        <p style={{ fontSize: '.9rem', lineHeight: '1.6', marginBottom: '10px' }}>
          Perbedaan badal umroh dengan umroh biasa <strong>hanya terletak
          pada niat</strong>. Seluruh rukun (Tawaf, Sa'i, Tahallul)
          dilaksanakan sama persis seperti umroh biasa.
        </p>

        <div className="doa-box">
          <div className="doa-label">Niat Ihram Badal Umroh</div>
          <PrayerAudioPlayer src="/assets/audio/niat-badal.mp3" id="niat-badal" />
          <div className="doa-arabic">نَوَيْتُ الْعُمْرَةَ وَأَحْرَمْتُ بِهَا لِلَّهِ تَعَالَى عَنْ فُلَانٍ</div>
          <div className="doa-latin">Nawaytul 'umrata wa ahramtu bihā lillāhi ta'ālā 'an [sebut nama]</div>
          <div className="doa-arti">"Aku menyengaja ibadah umroh dan aku ihram umroh karena Allah Ta'ala untuk si [sebut nama orang yang dibadalkan]."</div>
        </div>

        <div className="info-box" style={{marginTop:10}}>
          <p>📌 <strong>Tentang miqat untuk badal umroh:</strong><br/>
          Jika kamu sudah selesai umroh untuk dirimu sendiri dan ingin
          langsung badal dari Makkah, miqatnya dari <strong>Tan'im
          (Masjid Aisyah)</strong> — ±7,5 km dari Masjidil Haram, bisa
          naik taksi/Uber. Tidak perlu kembali ke miqat jauh (Yalamlam/
          Qarnul Manazil). Ini berdasarkan hadis Aisyah ra. yang
          diperintahkan Nabi ﷺ berihram dari Tan'im untuk umroh
          tambahannya.</p>
        </div>

        {/* TATA CARA */}
        <DS id="bd1" title="📋 Tata Cara Lengkap Badal Umroh"
          open={D["bd1"]} onToggle={T}>
          <ul className="tip-list">
            <li><span className="step-badge">1</span>
              Pastikan sudah menyelesaikan umroh untuk diri sendiri terlebih
              dahulu</li>
            <li><span className="step-badge">2</span>
              Minta izin/persetujuan dari ahli waris (jika yang dibadalkan
              sudah wafat) atau dari orangnya langsung (jika masih hidup
              tapi tidak mampu fisik)</li>
            <li><span className="step-badge">3</span>
              Pergi ke miqat (Tan'im/Masjid Aisyah jika sudah di Makkah),
              mandi sunnah, kenakan ihram</li>
            <li><span className="step-badge">4</span>
              Ucapkan niat badal umroh dengan menyebut nama orang yang
              dibadalkan</li>
            <li><span className="step-badge">5</span>
              Laksanakan seluruh rukun umroh dengan sempurna:
              Tawaf (7 putaran) → Sa'i (7 kali) → Tahallul (gunting
              rambut) — atas nama orang yang dibadalkan</li>
            <li><span className="step-badge">6</span>
              Setelah selesai, sampaikan laporan kepada keluarga/ahli waris
              bahwa badal umroh telah dilaksanakan</li>
          </ul>
          <div className="info-box" style={{marginTop:10}}>
            <p>💡 Tidak ada ritual khusus setelah badal umroh selesai —
            cukup berdoa memohon kepada Allah agar ibadah ini diterima dan
            pahalanya sampai kepada yang dibadalkan.</p>
          </div>
        </DS>

      </div>
    )},

    {emoji:"🕋",title:"Ziarah Makkah",subtitle:"Keutamaan ibadah & tempat bersejarah di Makkah",gold:false,
      content:({D,T})=>(
        <div style={{ padding: '4px 0' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '15px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ⭐ Keutamaan & Sunnah <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <ul className="tip-list">
            <li>Perbanyak Tawaf Sunnah — waktu terbaik: 02.00–05.00 dini hari.</li>
            <li>Minum Air Zamzam sebanyak-banyaknya dengan menghadap Ka'bah.</li>
            <li>Berdoa di Multazam (area antara Hajar Aswad & pintu Ka'bah).</li>
          </ul>

          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ⛰️ Tempat Bersejarah (Wisata Religi — Opsional) <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <div className="info-box">
            <p>📌 <strong>Catatan penting:</strong> Semua tempat di bawah ini
            adalah situs sejarah untuk menambah wawasan — BUKAN bagian dari
            rukun/wajib umroh. Umroh tidak memiliki ritual wukuf seperti
            haji, jadi mengunjungi tempat-tempat ini murni opsional sesuai
            waktu & kondisi fisik Anda.</p>
          </div>

          <DS id="mk8" title="⛰️ Jabal Nur & Jabal Tsur" open={D["mk8"]} onToggle={T}>
            <p><strong>Gua Hira (Jabal Nur):</strong> Tempat wahyu pertama turun. Pendakian ±45-60 menit, jarak 7 km dari Masjidil Haram.</p>
            <p><strong>Jabal Tsur:</strong> Tempat Rasulullah ﷺ & Abu Bakar bersembunyi saat hijrah, ±7 km arah Thaif.</p>
            <div className="warn-box"><p>⚠️ Pendakian cukup menantang & makan waktu. Bawa air minum cukup, kenakan alas kaki nyaman, dan pertimbangkan kondisi fisik sebelum mendaki — terutama bagi lansia/anak-anak.</p></div>
          </DS>

          <DS id="mk9" title="🏔️ Jabal Rahmah & Arafah" open={D["mk9"]} onToggle={T}>
            <p><strong>Jabal Rahmah:</strong> Bukit di Padang Arafah (±20 km dari Masjidil Haram), diyakini sebagai tempat bertemunya kembali Nabi Adam & Siti Hawa.</p>
            <div className="info-box"><p>📌 Tidak ada ritual/doa khusus yang disyariatkan di tempat ini — boleh dikunjungi sebagai wisata sejarah & boleh berdoa umum, tapi hindari ritual khusus yang tidak ada tuntunannya (mengusap batu, dll).</p></div>
          </DS>

          <DS id="mk10" title="🕌 Masjid Tan'im (Masjid Aisyah)" open={D["mk10"]} onToggle={T}>
            <p>Berjarak ±7,5 km dari Masjidil Haram — ini adalah miqat yang dipakai Aisyah ra. atas perintah Rasulullah ﷺ. Banyak dikunjungi jamaah yang ingin melakukan <strong>umroh tambahan/sunnah</strong> selama berada di Makkah (lihat juga section Umroh Badal jika untuk mengumrohkan orang lain).</p>
          </DS>

          <DS id="mk11" title="🪦 Pemakaman Jannatul Ma'la" open={D["mk11"]} onToggle={T}>
            <p>Pemakaman umum ±1 km dari Masjidil Haram, tempat dimakamkannya Khadijah ra. (istri Nabi ﷺ) beserta kedua putranya. Jamaah dianjurkan berziarah dengan adab yang sama seperti ziarah kubur pada umumnya (lihat section Ziarah Madinah untuk tata cara & doa lengkap).</p>
          </DS>

          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📍 Peta Lokasi <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>
          <MiniMap maps={[{id:"haram", label:"🕋 Masjidil Haram"}, {id:"makkah", label:"🗺️ Kota Makkah"}]}/>
        </div>
      )
    },
    {emoji:"👋", title:"Tawaf Wada' — Perpisahan dengan Ka'bah",
    subtitle:"Amalan penutup sebelum meninggalkan Makkah",
    gold:false,
    content:({D,T})=>(
      <div style={{ padding: '4px 0' }}>

        <p style={{ fontSize: '.94rem', lineHeight: '1.6', marginBottom: '12px' }}>
          <strong>Tawaf Wada'</strong> (tawaf perpisahan) adalah tawaf
          terakhir yang dilakukan sebelum meninggalkan Makkah — sebagai
          penghormatan terakhir kepada Ka'bah sebelum pulang.
        </p>

        <div className="info-box">
          <p>📌 <strong>Untuk Umroh: hukumnya SUNNAH (afdhal), bukan wajib.</strong><br/>
          Mayoritas ulama (mazhab Syafi'i, Hanbali, Maliki) sepakat tawaf
          wada' tidak wajib bagi jemaah umroh — berbeda dengan ibadah
          haji yang sebagian mazhab mewajibkannya. Jika tidak sempat
          dilakukan, umroh Anda tetap sah & tidak ada dam (denda).</p>
        </div>

        <p style={{ fontSize: '.9rem', lineHeight: '1.6' }}>
          Meski tidak wajib, sangat dianjurkan dilakukan sebagai bentuk
          kecintaan & penghormatan terakhir kepada Baitullah — berdasarkan
          hadis Nabi ﷺ:
        </p>

        <div className="doa-box">
          <div className="doa-arabic">لَا يَنْفِرَنَّ أَحَدٌ حَتَّى يَكُونَ آخِرُ عَهْدِهِ بِالْبَيْتِ</div>
          <div className="doa-latin">Lā yanfiranna ahadun hattā yakūna ākhiru 'ahdihī bil-bayt</div>
          <div className="doa-arti">"Janganlah seseorang di antara kalian meninggalkan Makkah kecuali akhir keberadaannya adalah di Baitullah." (HR. Muslim & Abu Dawud)</div>
        </div>

        <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          📖 Tata Cara <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
        </div>

        <ul className="tip-list">
          <li><span className="step-badge">1</span>
            Lakukan SEBAGAI AKTIVITAS TERAKHIR — setelah packing &
            check-out hotel selesai, sesaat sebelum berangkat ke bandara/
            Madinah</li>
          <li><span className="step-badge">2</span>
            Suci dari hadas (wudhu), sama seperti tawaf biasa</li>
          <li><span className="step-badge">3</span>
            Tawaf 7 putaran mengelilingi Ka'bah, mulai & berakhir di
            Hajar Aswad — TANPA Sa'i & tanpa gunting rambut setelahnya
            (beda dari Tawaf Umroh)</li>
          <li><span className="step-badge">4</span>
            Shalat sunnah 2 rakaat di belakang Maqam Ibrahim (jika
            memungkinkan, atau di area masjid manapun jika penuh)</li>
          <li><span className="step-badge">5</span>
            Berdoa di Multazam dengan penuh kekhusyukan</li>
          <li><span className="step-badge">6</span>
            Sebagian jamaah berjalan mundur beberapa langkah sambil
            memandang Ka'bah sebagai tanda perpisahan (sunnah adab,
            bukan rukun)</li>
        </ul>

        <div className="warn-box">
          <p>⚠️ <strong>Setelah Tawaf Wada', segera tinggalkan Makkah.</strong><br/>
          Hindari aktivitas non-perjalanan setelahnya (belanja,
          jalan-jalan, mampir ke tempat lain) — jika dilakukan, sebagian
          ulama menyarankan tawaf wada' diulang agar benar-benar menjadi
          "amalan terakhir" di Baitullah. Aktivitas terkait keberangkatan
          (packing, menuju bandara) tidak masalah.</p>
        </div>

        <DS id="tww1" title="📿 Doa Setelah Tawaf Wada'" open={D["tww1"]} onToggle={T}>
          <div className="doa-box">
            <div className="doa-label">Doa Setelah Tawaf Wada'</div>
            <PrayerAudioPlayer src="/assets/audio/doa-wada.mp3" id="doa-wada" />
            <div className="doa-arabic">اَللّٰهُمَّ لَا تَجْعَلْ هٰذَا آخِرَ الْعَهْدِ بِبَيْتِكَ الْحَرَامِ، وَإِنْ جَعَلْتَهُ آخِرَ الْعَهْدِ فَعَوِّضْنِي الْجَنَّةَ يَا أَرْحَمَ الرَّاحِمِينَ</div>
            <div className="doa-latin">Allāhumma lā taj'al hādzā ākhiral 'ahdi bi-baytikal harām, wa in ja'altahu ākhiral 'ahdi fa'awwidhnil jannah, yā arhamar rāhimīn</div>
            <div className="doa-arti">"Ya Allah, janganlah Engkau jadikan ini sebagai pertemuan terakhirku dengan Baitullah ini. Jika Engkau jadikan ini pertemuan terakhirku, maka gantilah untukku dengan surga, wahai Yang Maha Penyayang di antara para penyayang."</div>
          </div>
          <p style={{fontSize:".85rem",color:"var(--muted)",marginTop:8}}>
            💡 Ini adalah momen yang sangat emosional bagi banyak jamaah —
            sampaikan harapan & doa pribadi agar Allah mengizinkan kembali
            lagi ke Tanah Suci.
          </p>
        </DS>

        <div className="info-box" style={{marginTop:16}}>
          <p>👶 <strong>Pengecualian:</strong> wanita yang sedang haid/nifas
          TIDAK wajib melakukan tawaf wada' & tidak terkena konsekuensi
          apapun — cukup berdoa di pintu gerbang Masjidil Haram sebagai
          penggantinya jika ingin.</p>
        </div>

      </div>
    )},
    {emoji:"🕌",title:"Ziarah Madinah",subtitle:"Keutamaan, adab ziarah & tempat bersejarah di Madinah",gold:false,
      content:({D,T})=>(
        <div style={{ padding: '4px 0' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '15px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ✨ Masjid Nabawi <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <ul className="tip-list">
            <li>Shalat di Nabawi = <strong>1.000× pahala</strong> dibanding masjid lain.</li>
            <li><strong>Raudhah:</strong> Taman Surga. Wajib booking slot via aplikasi Nusuk.</li>
            <li>Ziarah ke Makam Rasulullah ﷺ dan para sahabat.</li>
          </ul>

          {/* === MULAI KONTEN ZIARAH === */}

          <div className="info-box">
            <p>📍 <strong>3 lokasi ziarah utama di Madinah:</strong><br/>
            1. Makam Rasulullah ﷺ, Abu Bakar & Umar (dalam Masjid Nabawi)<br/>
            2. Kompleks pemakaman <strong>Baqi'</strong> — para sahabat,
               istri-istri Nabi, dan keluarga beliau<br/>
            3. Makam para syuhada <strong>Uhud</strong> — termasuk Hamzah
               bin Abdul Muthalib ra.</p>
          </div>

          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🤍 Niat yang Benar <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <ul className="tip-list">
            <li><strong>Niat pokok pergi ke Madinah</strong> adalah untuk
              shalat di Masjid Nabawi (bukan semata ziarah makam) — ini
              yang sesuai tuntunan</li>
            <li>Setelah tiba & shalat di Masjid Nabawi, barulah berziarah
              ke makam Nabi ﷺ sebagai amalan tambahan yang sunnah</li>
            <li>Niat ziarah = <strong>mendoakan</strong> ahli kubur &
              mengingat akhirat — bukan meminta hajat/keberkatan dari
              penghuni makam</li>
          </ul>

          <div className="warn-box">
            <p>⚠️ <strong>Prinsip akidah paling penting:</strong><br/>
            Doa dan permintaan hajat hanya ditujukan kepada
            <strong> Allah SWT</strong> — bukan kepada penghuni makam,
            termasuk makam Nabi ﷺ sekalipun. Yang kita lakukan di makam
            adalah <strong>mengucapkan salam</strong> kepada beliau dan
            <strong>berdoa kepada Allah</strong> agar beliau mendapat
            rahmat — bukan berdoa/meminta kepada beliau.</p>
          </div>

          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📖 Tata Cara Ziarah Makam Nabi ﷺ <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <ul className="tip-list">
            <li><span className="step-badge">1</span>
              Masuki Masjid Nabawi dengan kaki kanan, baca doa masuk masjid,
              perbanyak shalawat</li>
            <li><span className="step-badge">2</span>
              Shalat 2 rakaat di Raudhah atau masjid (utamakan ini sebagai
              tujuan pokok)</li>
            <li><span className="step-badge">3</span>
              Menuju area makam (Mawajaha) — berdiri dengan tenang & penuh
              adab, <strong>jangan berdesak-desakan atau terburu-buru</strong></li>
            <li><span className="step-badge">4</span>
              Ucapkan salam kepada Rasulullah ﷺ dengan suara
              <strong> rendah/pelan</strong> (bukan keras)</li>
            <li><span className="step-badge">5</span>
              Geser sedikit ke kanan → ucapkan salam kepada
              <strong> Abu Bakar ash-Shiddiq ra.</strong></li>
            <li><span className="step-badge">6</span>
              Geser lagi ke kanan → ucapkan salam kepada
              <strong> Umar bin al-Khattab ra.</strong></li>
            <li><span className="step-badge">7</span>
              Berdoa kepada Allah — mohon ampunan, rahmat, dan syafaat
              Nabi ﷺ di hari kiamat</li>
          </ul>

          <DS id="zr1" title="📿 Doa Salam kepada Rasulullah ﷺ" open={D["zr1"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Salam kepada Nabi ﷺ</div>
              <PrayerAudioPlayer src="/assets/audio/salam-nabi.mp3" id="salam-nabi" />
              <div className="doa-arabic">اَلسَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</div>
              <div className="doa-latin">Assalāmu 'alaika ayyuhan-nabiyyu wa rahmatullāhi wa barakātuh</div>
              <div className="doa-arti">"Semoga keselamatan, rahmat, dan berkah Allah terlimpah atasmu wahai Nabi."</div>
            </div>
            <div className="doa-box">
              <div className="doa-label">Salam kepada Abu Bakar & Umar ra.</div>
              <PrayerAudioPlayer src="/assets/audio/salam-sahabat.mp3" id="salam-sahabat" />
              <div className="doa-arabic">اَلسَّلَامُ عَلَيْكُمَا يَا صَاحِبَيْ رَسُولِ اللهِ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</div>
              <div className="doa-latin">Assalāmu 'alaikumā yā shāhibay rasūlillāhi wa rahmatullāhi wa barakātuh</div>
              <div className="doa-arti">"Semoga keselamatan, rahmat, dan berkah Allah terlimpah atas kalian berdua wahai dua sahabat Rasulullah."</div>
            </div>
          </DS>

          <DS id="zr2" title="📿 Doa Masuk Pemakaman (Baqi'/Uhud)" open={D["zr2"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Salam Ahli Kubur</div>
              <PrayerAudioPlayer src="/assets/audio/salam-kubur.mp3" id="salam-kubur" />
              <div className="doa-arabic">اَلسَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللهُ بِكُمْ لَاحِقُونَ، أَسْأَلُ اللهَ لَنَا وَلَكُمُ الْعَافِيَةَ</div>
              <div className="doa-latin">Assalāmu 'alaikum ahlad-diyāri minal mu'minīna wal muslimīn, wa innā insyā'allāhu bikum lāhiqūn, as'alullāha lanā wa lakumul 'āfiyah</div>
              <div className="doa-arti">"Semoga keselamatan atas kalian wahai penghuni kubur dari kaum mukmin dan muslim. Kami insyaAllah akan menyusul kalian. Saya memohon keselamatan kepada Allah untuk kami dan kalian."</div>
            </div>
          </DS>

          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🚫 Yang Perlu Dihindari <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>

          <ul className="larangan-list">
            <li>Meminta hajat/kebutuhan langsung kepada penghuni makam
              (termasuk Nabi ﷺ) — doa hanya kepada Allah</li>
            <li>Mengeraskan suara di area makam — <strong>suara pelan
              adalah adab</strong> di sisi Rasulullah ﷺ (QS. Al-Hujurat: 2)</li>
            <li>Thawaf mengelilingi makam — thawaf hanya untuk Ka'bah</li>
            <li>Mengusap-usap dinding/kisi-kisi makam untuk mengambil
              berkah</li>
            <li>Duduk atau menginjak di atas makam</li>
            <li>Berdesak-desakan, mendorong jamaah lain, atau bersikap
              tidak tenang</li>
          </ul>

          <div className="info-box" style={{marginTop:16}}>
            <p>💡 <strong>Tips praktis:</strong> Datanglah ke area makam
            di luar waktu-waktu puncak kepadatan (hindari setelah shalat
            fardhu berjamaah). Pagi hari setelah Subuh atau menjelang Dzuhur
            biasanya lebih tenang dan kondusif untuk berdoa dengan khusyuk.</p>
          </div>

          {/* === SELESAI KONTEN ZIARAH === */}

          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--gold)', margin: '30px 0 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📍 Peta Lokasi <span style={{ flex: 1, height: '1px', background: 'var(--border-detail)' }}></span>
          </div>
          <MiniMap maps={[{id:"nabawi", label:"🕌 Masjid Nabawi"}, {id:"madinah", label:"🗺️ Kota Madinah"}]}/>
        </div>
      )
    },
    {emoji:"💡", title:"Tips Penting Umroh Mandiri",
    subtitle:"Hal-hal yang wajib diperhatikan", gold:false,
    content:()=>(
      <div style={{ padding: '4px 0' }}>

        {/* NAVIGASI & ANTI-TERSESAT */}
        <div style={{ fontSize: '0.72rem', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '1.2px',
          color: 'var(--gold)', margin: '15px 0 10px',
          display: 'flex', alignItems: 'center', gap: '8px' }}>
          🗺️ Navigasi & Anti Tersesat
          <span style={{ flex: 1, height: '1px',
            background: 'var(--border-detail)' }}></span>
        </div>

        <ul className="tip-list">
          <li>
            <strong>Ambil kartu nama hotel di hari pertama tiba</strong> —
            simpan di saku/sabuk ihram. Jika tersesat tanpa ponsel,
            serahkan ke Askar (petugas berseragam). Mereka sangat
            terlatih membantu jemaah menggunakan radio komunikasi.
          </li>
          <li>
            <strong>Buat ID Card mandiri</strong> — karena jemaah mandiri
            tidak dapat lanyard dari travel, buat sendiri: cantumkan nama,
            nomor paspor, nomor WhatsApp aktif, dan nama hotel. Kalungkan
            di leher, terutama saat memasuki masjid. Sangat penting jika
            membawa anak atau lansia.
          </li>
          <li>
            <strong>Sepakati titik kumpul darurat</strong> sebelum masuk
            masjid — contoh: "Jika terpisah setelah tawaf, kumpul di bawah
            lampu hijau lurus dari Gate King Abdul Aziz, maksimal 30 menit."
            Jangan andalkan sinyal HP — di dalam masjid saat padat, sinyal
            internet sangat tidak stabil.
          </li>
          <li>
            <strong>Patokan navigasi di dalam Masjidil Haram:</strong>
            <ul style={{marginTop:6, paddingLeft:16}}>
              <li>Lampu hijau neon di dinding masjid = sejajar Hajar Aswad
                (garis start/finish tawaf)</li>
              <li>Maqam Ibrahim & Hijr Ismail = penanda posisi dalam putaran</li>
              <li>Puluhan pintu masjid terlihat identik — catat nomor Gate
                masuk sejak awal, jangan andalkan ingatan</li>
            </ul>
          </li>
          <li>
            <strong>Aktifkan Share Live Location</strong> (WhatsApp/Google
            Maps) dengan semua anggota rombongan sejak keluar hotel — bukan
            hanya saat sudah tersesat.
          </li>
        </ul>

        <div className="warn-box">
          <p>🆘 Jika tersesat: <strong>BERHENTI, jangan panik, jangan
          terus berjalan.</strong><br/>
          Ucapkan ke Askar: <strong>"Ana dho-i'"</strong> (pria) /
          <strong>"Ana dho-i'ah"</strong> (wanita) = "Saya tersesat"<br/>
          Tunjukkan kartu nama hotel.<br/>
          Jika tanpa HP sama sekali: pinjam HP warga lokal untuk hubungi
          KJRI Jeddah.</p>
        </div>

        {/* KONTAK DARURAT */}
        <div style={{ fontSize: '0.72rem', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '1.2px',
          color: 'var(--gold)', margin: '30px 0 10px',
          display: 'flex', alignItems: 'center', gap: '8px' }}>
          📞 Kontak Darurat — Simpan Sebelum Berangkat
          <span style={{ flex: 1, height: '1px',
            background: 'var(--border-detail)' }}></span>
        </div>

        <ul className="tip-list">
          <li>🇮🇩 <strong>KJRI Jeddah</strong> (paling relevan untuk
            jemaah umroh): +966-12-671-1271</li>
          <li>🇮🇩 <strong>KBRI Riyadh</strong>: +966-11-488-2800</li>
          <li>🕌 <strong>Hotline Kemenhaj RI</strong>: 021-3811642
            (dari Indonesia) / WhatsApp resmi Kemenag</li>
          <li>🚑 <strong>Nomor darurat Saudi</strong>:
            911 (Polisi/Ambulans/Pemadam)</li>
          <li>📋 Simpan di 2 tempat: di HP DAN di kertas di dompet —
            antisipasi HP hilang/baterai habis</li>
        </ul>

        {/* BAHASA ARAB DARURAT */}
        <div style={{ fontSize: '0.72rem', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '1.2px',
          color: 'var(--gold)', margin: '30px 0 10px',
          display: 'flex', alignItems: 'center', gap: '8px' }}>
          🗣️ Frasa Arab Darurat — Hafal Sebelum Berangkat
          <span style={{ flex: 1, height: '1px',
            background: 'var(--border-detail)' }}></span>
        </div>

        <ul className="tip-list">
          <li><strong>"Ana dho-i'"</strong> (pria) /
            <strong>"Ana dho-i'ah"</strong> (wanita)
            = Saya tersesat</li>
          <li><strong>"Ayna funduq [nama hotel]?"</strong>
            = Di mana hotel [nama hotel]?</li>
          <li><strong>"Ayna Al-Masjid Al-Haram?"</strong>
            = Di mana Masjidil Haram?</li>
          <li><strong>"Funduqi fi..."</strong>
            = Hotel saya di...</li>
          <li><strong>"Hal yumkinuka musa'adati?"</strong>
            = Bisa tolong saya?</li>
          <li><strong>"Kam?"</strong> = Berapa harganya?</li>
          <li><strong>"Shukran"</strong> = Terima kasih</li>
          <li><strong>"La, syukran"</strong> = Tidak, terima kasih
            (menolak tawaran pedagang)</li>
        </ul>

        {/* TIPS KHUSUS MANDIRI */}
        <div style={{ fontSize: '0.72rem', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '1.2px',
          color: 'var(--gold)', margin: '30px 0 10px',
          display: 'flex', alignItems: 'center', gap: '8px' }}>
          ✅ Tips Khusus Jemaah Mandiri
          <span style={{ flex: 1, height: '1px',
            background: 'var(--border-detail)' }}></span>
        </div>

        <ul className="tip-list">
          <li>
            <strong>Timbangan koper portabel</strong> — bawa dari
            Indonesia. Euforia belanja oleh-oleh sering bikin koper
            overweight tanpa sadar. Denda kelebihan bagasi di bandara
            Saudi sangat mahal. Jika sudah kelebihan, ada jasa kargo
            pengiriman ke Indonesia di sekitar hotel Makkah.
          </li>
          <li>
            <strong>Air Zamzam — aturan bawaan pulang:</strong>
            maksimal 5 liter per orang di bagasi (sudah dikemas resmi
            oleh otoritas Saudi). DILARANG bawa di kabin atau dikemas
            sendiri di koper — petugas bandara Saudi aktif memeriksa
            ini dan akan disita tanpa ganti rugi.
          </li>
          <li>
            <strong>Download peta offline</strong> area Makkah & Madinah
            di Google Maps sebelum berangkat dari Indonesia — koneksi
            internet tidak terjamin stabil di area sangat padat. GPS
            tetap bekerja meski tanpa sinyal internet.
          </li>
          <li>
            <strong>Pecahan kecil Riyal</strong> — tukar sebagian uang
            ke pecahan 1, 5, 10 Riyal untuk sedekah, jasa dorong kursi
            roda, dan pedagang kaki lima yang sering tidak punya kembalian
            untuk uang besar.
          </li>
          <li>
            <strong>Kenali area hotel di hari pertama</strong> — jalan
            kaki keliling blok hotel sebelum pergi ke masjid. Catat
            landmark mencolok (nama toko, warna gedung, nomor jalan)
            sebagai patokan pulang — jauh lebih reliable dari GPS saat
            sinyal lemah.
          </li>
        </ul>

        {/* CROSS-REFERENCE */}
        <div className="info-box" style={{marginTop:20}}>
          <p>📋 <strong>Catatan:</strong> Tips teknis lainnya
          (persiapan dokumen, vaksin, visa, booking Raudhah, koneksi
          internet, keuangan) sudah tersedia lengkap di tab
          <strong> Persiapan</strong> — pastikan semua checklist
          di sana sudah selesai sebelum berangkat.</p>
        </div>

      </div>
    )}
  ];

