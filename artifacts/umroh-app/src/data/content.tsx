import React from "react";
import { DS, SubTabs } from "../components/ui/TutorialUI";
import { MiniMap } from "../components/ui/MapComponents";
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
        "  - Paspor lama rusak/coretan",
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
    section: "Langkah 2: Persyaratan Kesehatan (H-60 s/d H-45)",
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
    section: "Langkah 3: Logistik Mandiri (H-45 s/d H-30)",
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
    section: "Langkah 4: Eksekusi Visa & Legalitas (H-30 s/d H-14)",
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
  {emoji:"🕌",title:"Miqat & Ihram",subtitle:"Titik awal & tata cara berihram",gold:false,defaultSubTab:"miqat",
    content:({D,T,subTab,setSubTab})=>(
      <div>
        <SubTabs tabs={[{id:"miqat",label:"🗺️ Miqat"},{id:"ihram",label:"🤍 Ihram"},{id:"dam-sebab",label:"⚠️ Sebab Dam"},{id:"dam-cara",label:"🐑 Cara Bayar"}]} active={subTab} onChange={setSubTab}/>
        {subTab==="miqat"&&<div>
          <DS id="mq1" title="1. Mengenal Miqat Makani" open={D["mq1"]} onToggle={T}>
            <p><strong>Miqat Makani</strong> adalah batas geografis tempat jamaah wajib memulai ihram:</p>
            <ul className="tip-list">
              <li><strong>Qarnul Manazil</strong> — jamaah dari Indonesia (via Jeddah) & negara Teluk</li>
              <li><strong>Bir Ali (Dzulhulaifah)</strong> — jamaah dari arah Madinah. ±450 km dari Mekkah</li>
              <li><strong>Yalamlam</strong> — jamaah dari arah Yaman & sebagian Asia Tenggara</li>
              <li><strong>Juhfah (Rabigh)</strong> — jamaah dari arah barat (Mesir, Maroko)</li>
              <li><strong>Dzatu 'Irq</strong> — jamaah dari arah Irak</li>
            </ul>
            <div className="info-box"><p>🗺️ Terbang Jakarta → Jeddah (langsung): niat ihram wajib diucapkan sesaat sebelum pesawat melewati titik miqat Qarnul Manazil. Maskapai biasanya mengumumkan 15–30 menit sebelumnya.</p></div>
            <div className="warn-box"><p>✈️ <strong>Khusus penerbangan transit:</strong><br/>
              • <strong>Transit Qatar (DOH)</strong> → Turun di Doha sudah melewati miqat. Niat ihram saat di bandara Doha atau di pesawat sebelum mendarat, lalu kenakan ihram di Doha. Miqat untuk terbang ke Jeddah dari Doha: di pesawat sebelum mendarat.<br/>
              • <strong>Transit Dubai (DXB/DWC)</strong> → Dubai berada di luar batas miqat. Berihramlah di bandara Dubai sebelum naik penerbangan ke Jeddah — jangan tunda hingga di pesawat.<br/>
              • <strong>Transit Kuwait (KWI)</strong> → Kuwait terletak di luar miqat. Kenakan ihram dan niat sebelum boarding dari Kuwait menuju Jeddah.<br/>
              • <strong>Transit Oman (MCT)</strong> → Muscat terletak di luar miqat. Berihramlah di bandara Muscat sebelum penerbangan ke Jeddah.<br/>
              ⚠️ Jika terlewat miqat tanpa ihram, wajib membayar <strong>dam (denda)</strong>. Jika masih bisa kembali ke titik miqat terdekat, lakukanlah.</p></div>
          </DS>
          <DS id="mq2" title="2. Strategi Ihram di Pesawat" open={D["mq2"]} onToggle={T}>
            <p><strong>Direkomendasikan:</strong> Pria — pakai kain ihram bawah sejak bandara asal, ganti Rida' di toilet pesawat 1 jam sebelum mendarat. Wanita — pakai muslimah syar'i sejak awal.</p>
            <div className="warn-box"><p>⚠️ Hindari ganti pakaian saat turbulensi.</p></div>
          </DS>
          <DS id="mq3" title="3. Niat Ihram & Talbiyah" open={D["mq3"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Niat Ihram Umroh</div>
              <div className="doa-arabic">لَبَّيْكَ اللَّهُمَّ عُمْرَةً</div>
              <div className="doa-latin">Labbaik Allāhumma 'umratan</div>
              <div className="doa-arti">"Ya Allah, aku memenuhi panggilan-Mu untuk mengerjakan umroh."</div>
            </div>
            <div className="doa-box">
              <div className="doa-label">Talbiyah</div>
              <div className="doa-arabic">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّIْكَ لاَ شَرِICَ لَكَ لَبَّIْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَALْمُلْكَ، لاَ شَرِيكَ لَكَ</div>
              <div className="doa-latin">Labbaik Allāhumma labbaik, labbaik lā syarīka laka labbaik, innal-ḥamda wan-ni'mata laka wal-mulk, lā syarīka lak</div>
              <div className="doa-arti">Artinya: "Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Aku penuhi panggilan-Mu, tiada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, nikmat, dan seluruh kekuasaan hanya milik-Mu, tiada sekutu bagi-Mu."</div>
              <div style={{fontSize:".8rem",color:"var(--muted)",marginTop:6,lineHeight:1.6}}>💡 Baca talbiyah terus-menerus sejak niat ihram hingga memulai tawaf — dengan suara keras bagi pria, pelan untuk wanita. Talbiyah adalah tanda jamaah benar-benar "hadir" memenuhi panggilan Allah.</div>
            </div>
          </DS>
        </div>}
        {subTab==="ihram"&&<div>
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
        </div>}
        {subTab==="dam-sebab"&&<div>
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
            <div className="info-box"><p>📖 Dasar: QS. Al-Baqarah: 196 — "...barang siapa yang sakit atau ada gangguan di kepalanya (lalu ia bercukur), maka wajiblah atasnya berfidyah, yaitu berpuasa atau bersedekah atau berkorban..."</p></div>
          </DS>
        </div>}
        {subTab==="dam-cara"&&<div>
          <DS id="dam4" title="Tata Cara Membayar Dam di Arab Saudi" open={D["dam4"]} onToggle={T}>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Via Lembaga Resmi Saudi (Direkomendasikan):</strong> Bayar melalui "Bank Al-Rajhi Qurban" atau platform resmi <strong>adahi.com.sa</strong> — daging langsung disalurkan ke fakir miskin, Anda terima bukti digital</li>
              <li><span className="step-badge">2</span><strong>Via Jagal Resmi di Mekkah:</strong> Cari jagal (tukang sembelih) bertanda resmi di sekitar Masjidil Haram. Harga kambing SAR 300–600. Minta bukti penyembelihan tertulis</li>
              <li><span className="step-badge">3</span><strong>Via PPIU/Agen Perjalanan Anda:</strong> Beberapa agen memiliki layanan pembayaran dam — tanyakan sebelum berangkat. Pastikan ada bukti nyata penyembelihan, bukan hanya kuitansi</li>
            </ul>
            <div className="warn-box"><p>⚠️ Dam HARUS disembelih di dalam wilayah tanah haram (Mekkah dan sekitarnya) — tidak sah jika disembelih di Indonesia. Dagingnya harus diberikan kepada fakir miskin setempat, bukan dibawa pulang.</p></div>
          </DS>
          <DS id="dam5" title="Estimasi Biaya Dam" open={D["dam5"]} onToggle={T}>
            <ul className="tip-list">
              <li><strong>Kambing/Domba:</strong> SAR 300–600 (±Rp1.350.000–2.700.000) tergantung ukuran dan musim</li>
              <li><strong>Sapi (untuk rafast/haji tamattu):</strong> SAR 1.000–2.500 untuk 1/7 bagian sapi</li>
              <li><strong>Fidyah makanan (untuk kafarat ringan):</strong> SAR 30–50 per orang (×6 = SAR 180–300)</li>
              <li>Siapkan dana cadangan SAR 400–700 untuk kemungkinan dam</li>
            </ul>
          </DS>
          <DS id="dam6" title="Tips Menghindari Dam" open={D["dam6"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Pakai wewangian di badan sebelum niat ihram — setelahnya dilarang</li>
              <li>Kenakan kain ihram sejak bandara asal, bukan buru-buru di pesawat</li>
              <li>Jika transit Dubai/Qatar/Kuwait/Oman: berihram sebelum boarding, jangan tunda</li>
              <li>Bawa gunting kuku untuk memotong jika tidak sengaja — tapi lakukan sebelum ihram</li>
              <li>Pria: latihan ikatan ihram di rumah agar tidak lepas saat tawaf</li>
            </ul>
          </DS>
        </div>}
      </div>
    )
  },
  {emoji:"🕋",title:"Memasuki Masjidil Haram",subtitle:"Adab dan panduan masuk masjid",gold:false,defaultSubTab:null,
    content:()=>(
      <div>
        <p>Masuk melalui pintu <strong>Bab As-Salam</strong> dengan kaki kanan terlebih dahulu.</p>
        <div className="doa-box">
          <div className="doa-label">Doa Masuk Masjid</div>
          <div className="doa-arabic">اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ</div>
          <div className="doa-latin">Allāhummaftaḥ lī abwāba raḥmatik</div>
          <div className="doa-arti">"Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu."</div>
        </div>
        <ul className="tip-list">
          <li>Saat pertama kali melihat Ka'bah, berdiri sejenak dan panjatkan doa — waktu mustajab</li>
          <li>Simpan sandal di dalam tas, bukan di rak masjid agar tidak tertukar</li>
          <li>Baca talbiyah terus hingga siap memulai tawaf</li>
        </ul>
      </div>
    )
  },
  {emoji:"🙏",title:"Sholat di Masjidil Haram",subtitle:"Panduan, adab & keutamaan sholat berjamaah",gold:true,defaultSubTab:"sh-panduan",
    content:({D,T,subTab,setSubTab})=>(
      <div>
        <SubTabs tabs={[{id:"sh-panduan",label:"📋 Panduan"},{id:"sh-waktu",label:"🕐 Waktu"},{id:"sh-adab",label:"🤲 Adab"}]} active={subTab} onChange={setSubTab}/>
        {subTab==="sh-panduan"&&<div>
          <DS id="sh1" title="🕋 Keutamaan Sholat di Masjidil Haram" open={D["sh1"]} onToggle={T}>
            <div className="info-box"><p>💎 Satu rakaat sholat di Masjidil Haram setara dengan <strong>100.000 rakaat</strong> di masjid lain (HR. Ibnu Majah). Ini adalah kesempatan terbesar dalam hidup seorang Muslim — jangan lewatkan satu pun sholat fardhu berjamaah selama di Makkah.</p></div>
            <ul className="tip-list">
              <li>Utamakan sholat fardhu langsung di dalam Masjidil Haram, bukan di hotel</li>
              <li>Usahakan hadir <strong>20–30 menit sebelum iqamah</strong> — masjid sangat padat terutama Maghrib dan Isya</li>
              <li>Sholat sunnah qabliyah/ba'diyah tetap berlaku dan sangat dianjurkan</li>
              <li>Sholat Jum'at di Masjidil Haram: datang minimal 2 jam sebelum waktu untuk dapat shaf dekat</li>
            </ul>
          </DS>
          <DS id="sh2" title="🗺️ Posisi Shaf & Area Sholat" open={D["sh2"]} onToggle={T}>
            <p style={{fontWeight:600,color:"var(--emerald-text)",marginBottom:6}}>Lantai & zona sholat:</p>
            <ul className="tip-list">
              <li><strong>Mataf (lantai dasar, area Ka'bah):</strong> Khusus tawaf saat tidak ada sholat berjamaah. Saat iqamah, mataf menjadi shaf sholat — posisi paling afdhal</li>
              <li><strong>Lantai 1 (main hall):</strong> Bisa untuk sholat, cukup sejuk dan luas. Layar besar menampilkan imam</li>
              <li><strong>Lantai 2 (rooftop/mas'a atas):</strong> Lebih longgar, cocok untuk jamaah wanita atau saat sangat padat</li>
              <li><strong>Halaman luar (sahn):</strong> Area sholat terbuka di sekeliling masjid, tersedia saat masjid penuh</li>
            </ul>
            <p style={{fontWeight:600,color:"var(--emerald-text)",marginTop:10,marginBottom:6}}>Tips posisi:</p>
            <ul className="larangan-list sunnah-list">
              <li>Pria: masuk dari pintu King Fahd (utara) atau King Abdul Aziz (barat) untuk akses shaf depan lebih mudah</li>
              <li>Wanita: area khusus di sayap kanan masjid dan lantai atas — ikuti petunjuk petugas</li>
              <li>Bawa sajadah tipis sendiri — lantai masjid ber-AC dan nyaman, tapi sajadah membantu saat di halaman luar</li>
              <li>Kenali letak pintu masuk Anda sebelum masuk — mudah tersesat saat keluar</li>
            </ul>
          </DS>
          <DS id="sh3" title="📿 Sholat Sunnah Khusus di Masjidil Haram" open={D["sh3"]} onToggle={T}>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Sholat Tahiyatul Masjid:</strong> 2 rakaat saat pertama kali masuk. Sangat dianjurkan — jangan langsung duduk sebelum sholat ini</li>
              <li><span className="step-badge">2</span><strong>Sholat di Hijr Ismail:</strong> 2 rakaat di area setengah lingkaran di sisi barat Ka'bah. Pahala setara sholat di dalam Ka'bah. Waktu terbaik: tengah malam atau dini hari</li>
              <li><span className="step-badge">3</span><strong>Sholat menghadap Multazam:</strong> Berdoa di antara Hajar Aswad dan pintu Ka'bah setelah tawaf — area mustajab doa</li>
              <li><span className="step-badge">4</span><strong>Sholat 2 rakaat di Maqam Ibrahim:</strong> Dianjurkan setelah selesai tawaf — "Jadikanlah maqam Ibrahim sebagai tempat sholat" (QS. Al-Baqarah: 125)</li>
            </ul>
          </DS>
        </div>}
        {subTab==="sh-waktu"&&<div>
          <DS id="sh4" title="🕐 Jadwal Sholat & Strategi Waktu" open={D["sh4"]} onToggle={T}>
            <div className="warn-box"><p>⏰ Jadwal sholat di Arab Saudi berbeda dengan Indonesia. Download aplikasi <strong>Muslim Pro</strong> atau <strong>Athan</strong> dan set lokasi ke Makkah sebelum berangkat untuk membiasakan diri.</p></div>
            <p style={{fontWeight:600,color:"var(--emerald-text)",marginBottom:6}}>Waktu sholat umum di Makkah:</p>
            <ul className="tip-list">
              <li><strong>Subuh:</strong> ±05:00–05:30 — waktu paling tenang di Masjidil Haram, shaf lebih longgar</li>
              <li><strong>Dzuhur:</strong> ±12:15–12:30 — sangat panas di musim panas, siapkan payung/air</li>
              <li><strong>Ashar:</strong> ±15:30–16:00 — waktu favorit jamaah, mulai ramai</li>
              <li><strong>Maghrib:</strong> ±18:00–18:15 (menyesuaikan musim) — paling padat, datang 30 menit lebih awal</li>
              <li><strong>Isya:</strong> ±19:30–20:00 — sering dilanjutkan Tarawih di bulan Ramadhan</li>
            </ul>
            <div className="info-box"><p>💡 Strategi: manfaatkan waktu antara Maghrib–Isya (±1,5 jam) untuk tawaf sunnah karena suhu sudah turun dan suasana khusyuk.</p></div>
          </DS>
          <DS id="sh5" title="🌙 Sholat Malam & Qiyamul Lail" open={D["sh5"]} onToggle={T}>
            <ul className="tip-list">
              <li>Sholat tahajud di Masjidil Haram antara pukul 02:00–03:30 — masjid relatif sepi dan sangat kondusif</li>
              <li>Di bulan Ramadhan: sholat Tarawih 23 rakaat dipimpin imam hafidz dengan suara merdu — pengalaman seumur hidup</li>
              <li>Waktu dini hari di Makkah sangat afdhal untuk doa, dzikir, and membaca Al-Quran</li>
            </ul>
          </DS>
        </div>}
        {subTab==="sh-adab"&&<div>
          <DS id="sh6" title="🚫 Adab & Larangan di Area Sholat" open={D["sh6"]} onToggle={T}>
            <p style={{fontWeight:600,color:"var(--emerald-text)",marginBottom:6}}>Wajib diperhatikan:</p>
            <ul className="larangan-list">
              <li>Dilarang berjalan di depan orang yang sedang sholat — cari jalan memutar atau tunggu</li>
              <li>Matikan atau silent HP sebelum masuk area sholat — nada dering saat khutbah/sholat sangat mengganggu</li>
              <li>Dilarang duduk membelakangi Ka'bah saat sholat atau berdoa</li>
              <li>Jangan terlambat masuk shaf saat imam sudah ruku' pada rakaat terakhir — lebih baik tunggu jamaah berikutnya</li>
              <li>Dilarang foto/video di dalam masjid saat sholat berlangsung — hormati kekhusyukan jamaah</li>
            </ul>
            <p style={{fontWeight:600,color:"var(--emerald-text)",marginTop:10,marginBottom:6}}>Dianjurkan:</p>
            <ul className="larangan-list sunnah-list">
              <li>Pakai pakaian bersih, harum, and rapi — ini rumah Allah yang paling mulia</li>
              <li>Berwudhu dari hotel sebelum berangkat ke masjid — antrian wudhu bisa panjang</li>
              <li>Bawa Al-Quran kecil atau murojaah hafalan saat menunggu iqamah</li>
              <li>Jika sholat di lantai atas/luar: tetap sah and sama afdhalnya selama mengikuti imam</li>
            </ul>
          </DS>
          <DS id="sh7" title="🤲 Doa Setelah Sholat di Masjidil Haram" open={D["sh7"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Doa Memasuki Masjid</div>
              <div className="doa-arabic">اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ</div>
              <div className="doa-latin">Allāhummaftaḥ lī abwāba raḥmatik</div>
              <div className="doa-arti">Artinya: "Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu."</div>
            </div>
            <div className="info-box" style={{marginTop:10}}><p>💡 Setelah salam, manfaatkan momen untuk berdoa with sungguh-sungguh. Doa setelah sholat fardhu di Masjidil Haram adalah salah satu waktu mustajab yang paling utama.</p></div>
          </DS>
        </div>}
      </div>
    )
  },
  {emoji:"🔄",title:"Tawaf — Mengelilingi Ka'bah",subtitle:"7 putaran berlawanan arah jarum jam",gold:true,defaultSubTab:null,
    content:({D,T})=>(
      <div>
        <p>Tawaf adalah mengelilingi Ka'bah sebanyak <strong>7 putaran berlawanan arah jarum jam</strong>. Ka'bah selalu di sebelah kiri.</p>
        <DS id="tw-jenis" title="📚 Jenis-Jenis Tawaf" open={D["tw-jenis"]} onToggle={T}>
          <ul className="tip-list">
            <li><span className="step-badge">1</span><strong>Tawaf Qudum (Tawaf Kedatangan)</strong> — Dilakukan saat pertama kali tiba di Makkah, sebelum mengerjakan sa'i. Hukumnya <em>sunnah</em> bagi jamaah yang datang dari luar Miqat. Ini adalah tawaf pertama yang Anda lakukan begitu memasuki Masjidil Haram — sebagai "penghormatan" atas kedatangan ke Baitullah.</li>
            <li><span className="step-badge">2</span><strong>Tawaf Umroh (Tawaf Rukun)</strong> — Tawaf wajib yang menjadi bagian inti ibadah umroh. Dilakukan setelah Tawaf Qudum and dilanjutkan with sa'i. Hukumnya <em>rukun</em> — tidak bisa digantikan dam.</li>
            <li><span className="step-badge">3</span><strong>Tawaf Wada' (Tawaf Perpisahan)</strong> — Dilakukan sesaat sebelum meninggalkan kota Makkah, sebagai "pamitan" kepada Ka'bah. Hukumnya <em>wajib</em> — meninggalkannya wajib membayar dam (1 ekor kambing). <br/>Cara melakukan: seperti tawaf biasa, 7 putaran, namun tanpa diikuti sa'i. Usahakan pintu terakhir keluar Masjidil Haram adalah pintu yang menghadap Ka'bah sambil memandang ke arah Ka'bah sebelum pergi.</li>
            <li><span className="step-badge">4</span><strong>Tawaf Sunnah (Tawaf Nafilah)</strong> — Tawaf kapan saja selama di Makkah sebagai ibadah tambahan. Sangat dianjurkan — manfaatkan setiap waktu luang di Masjidil Haram.</li>
          </ul>
          <div className="info-box"><p>💡 Urutan untuk umroh: Tawaf Qudum → Tawaf Umroh → Sa'i → Tahallul → Tawaf Wada' (saat hendak pulang). Bagi yang tidak sempat Tawaf Qudum karena langsung ihram dari luar, cukup Tawaf Umroh.</p></div>
        </DS>
        <DS id="tw3" title="✅ Syarat Sahnya Tawaf" open={D["tw3"]} onToggle={T}>
          <ul className="tip-list">
            <li>Suci dari hadas kecil (wudhu) and hadas besar</li>
            <li>Ka'bah berada di sebelah kiri selama tawaf</li>
            <li>Dimulai tepat dari garis sejajar Hajar Aswad</li>
            <li>Dilakukan genap 7 putaran penuh</li>
          </ul>
          <div className="warn-box"><p>⚠️ Wanita haid tidak boleh tawaf. Sa'i boleh dilakukan dalam keadaan haid.</p></div>
        </DS>
        <DS id="tw5" title="📖 Cara Pelaksanaan" open={D["tw5"]} onToggle={T}>
          <ul className="tip-list">
            <li><span className="step-badge">1</span>Wudhu. Pria: idhtiba (buka bahu kanan).</li>
            <li><span className="step-badge">2</span>Berdiri sejajar bahu kiri with Hajar Aswad.</li>
            <li><span className="step-badge">3</span>Istilam: "Bismillahi Allahu Akbar"</li>
            <li><span className="step-badge">4</span>Berjalan berlawanan jarum jam (Ka'bah di kiri).</li>
            <li><span className="step-badge">5</span>Rukun Yamani: usap tangan kanan jika bisa.</li>
            <li><span className="step-badge">6</span>Antara Rukun Yamani–Hajar Aswad: baca doa sapu jagad.</li>
            <li><span className="step-badge">7</span>Selesai 7 putaran → shalat 2 rakaat di Maqam Ibrahim.</li>
          </ul>
          <div className="doa-box">
            <div className="doa-label">Doa antara Rukun Yamani & Hajar Aswad</div>
            <div className="doa-arabic">رَبَّنَا آتِنَا فِي الدُّنIَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</div>
            <div className="doa-latin">Rabbanā ātinā fid-dunyā ḥasanah, wa fil-ākhirati ḥasanah, wa qinā 'adzāban-nār</div>
            <div className="doa-arti">"Ya Tuhan kami, berikanlah kepada kami kebaikan di dunia dan di akhirat, dan peliharalah kami dari azab neraka."</div>
          </div>
        </DS>
        <DS id="tw7" title="⚠️ Kesalahan Umum" open={D["tw7"]} onToggle={T}>
          <ul className="tip-list">
            <li><strong>Tawaf searah jarum jam</strong> — TIDAK SAH</li>
            <li><strong>Tawaf tanpa wudhu</strong> — tidak sah, wajib diulang</li>
            <li><strong>Memaksakan menyentuh Hajar Aswad</strong> hingga menyakiti orang — DILARANG</li>
          </ul>
        </DS>
      </div>
    )
  },
  {emoji:"🏃",title:"Sa'i — Shafa & Marwah",subtitle:"7 kali bolak-balik, total ±3,15 km",gold:false,defaultSubTab:null,
    content:({D,T})=>(
      <div>
        <p>Sa'i adalah berjalan bolak-balik antara bukit Shafa and Marwah sebanyak <strong>7 kali</strong>, dimulai dari Shafa and diakhiri di Marwah.</p>
        <DS id="si2" title="⚖️ Hukum Sa'i" open={D["si2"]} onToggle={T}>
          <p>Wajib — rukun umroh. Tidak bisa digantikan dam.</p>
          <div className="info-box"><p>📌 Wanita haid boleh sa'i tanpa harus suci terlebih dahulu.</p></div>
        </DS>
        <DS id="si3" title="📖 Cara Pelaksanaan" open={D["si3"]} onToggle={T}>
          <ul className="tip-list">
            <li><span className="step-badge">1</span>Selesai tawaf → shalat 2 rakaat → minum zamzam.</li>
            <li><span className="step-badge">2</span>Naiki bukit Shafa, hadap Ka'bah, baca doa pembuka.</li>
            <li><span className="step-badge">3</span>Berjalan ke Marwah. Pria: lari kecil di area lampu hijau.</li>
            <li><span className="step-badge">4</span>Lanjutkan 7 kali. <strong>Ke-7 berakhir di Marwah.</strong></li>
          </ul>
          <div className="doa-box">
            <div className="doa-label">Doa di Shafa & Marwah</div>
            <div className="doa-arabic">إِنَّ الصَّفَا وَALْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ</div>
            <div className="doa-latin">Innaṣ-ṣafā wal-marwata min sya'ā'irillāh</div>
            <div className="doa-arti">"Sesungguhnya Shafa dan Marwah adalah sebagian dari syi'ar Allah." (QS. 2:158)</div>
          </div>
        </DS>
      </div>
    )
  },
  {emoji:"✂️",title:"Tahallul — Menggunting Rambut",subtitle:"Penanda selesainya ibadah umroh",gold:true,defaultSubTab:null,
    content:()=>(
      <div>
        <p>Tahallul adalah mencukur atau memotong rambut sebagai tanda berakhirnya ihram and selesainya umroh.</p>
        <ul className="tip-list">
          <li><strong>Pria:</strong> Afdhal mencukur habis (gundul/halq), atau minimal potong ±3 cm dari seluruh rambut</li>
          <li><strong>Wanita:</strong> Cukup memotong ±2–3 cm dari ujung rambut</li>
          <li>Setelah tahallul, semua larangan ihram hilang — berpakaian normal kembali</li>
        </ul>
        <div className="doa-box">
          <div className="doa-label">Doa Tahallul</div>
          <div className="doa-arabic">اللَّهُمَّ اغْفِرْ لِلْمُحَلِّقِينَ</div>
          <div className="doa-latin">Allāhummagh-fir lil-muḥalliqīn</div>
          <div className="doa-arti">"Ya Allah, ampunilah orang-orang yang mencukur rambut mereka."</div>
        </div>
        <div className="info-box"><p>🎉 Selamat! Umroh Anda telah selesai. Perbanyak tawaf sunnah, doa, and dzikir selama masih di Mekkah.</p></div>
      </div>
    )
  },
  {emoji:"🕋",title:"Mekah — Kota Suci Pertama",subtitle:"Keutamaan, sunnah & aktivitas selama di Mekah",gold:true,defaultSubTab:"mk-keutamaan",
    content:({D,T,subTab,setSubTab})=>(
      <div>
        <SubTabs tabs={[{id:"mk-keutamaan",label:"⭐ Keutamaan"},{id:"mk-sunnah",label:"🌿 Sunnah"},{id:"mk-kegiatan",label:"🗺️ Kegiatan"},{id:"mk-peta",label:"📍 Peta"}]} active={subTab} onChange={setSubTab}/>
        {subTab==="mk-keutamaan"&&<div>
          <DS id="mk1" title="🕋 Keutamaan Kota Mekah" open={D["mk1"]} onToggle={T}>
            <ul className="tip-list">
              <li>Shalat di Masjidil Haram = <strong>100.000× pahala</strong> dibanding masjid lain</li>
              <li>Di sinilah Ka'bah berdiri — kiblat seluruh umat Islam di dunia</li>
              <li>Tempat turunnya wahyu pertama Al-Qur'an di Gua Hira</li>
            </ul>
          </DS>
          <DS id="mk2" title="💧 Keutamaan Air Zamzam" open={D["mk2"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Doa Minum Air Zamzam</div>
              <div className="doa-arabic">اللَّهُمَّ إِنِّI أَSْأَلُكَ عِلْمًا نَAFِعًا وَرِZْقًا وَASِعًا وَSHِفَاءً مِنْ كُلِّ دَاءٍ</div>
              <div className="doa-latin">Allāhumma innī as'aluka 'ilman nāfi'an wa rizqan wāsi'an wa syifā'an min kulli dā'</div>
              <div className="doa-arti">"Ya Allah, aku memohon ilmu yang bermanfaat, rezeki yang luas, and kesembuhan dari segala penyakit."</div>
            </div>
          </DS>
        </div>}
        {subTab==="mk-sunnah"&&<div>
          <DS id="mk4" title="Masjidil Haram" open={D["mk4"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Memperbanyak tawaf sunnah — waktu terbaik dini hari 02.00–05.00</li>
              <li>Berdoa di Multazam (tempelkan dada and tangan ke dinding)</li>
              <li>Membaca Al-Qur'an and i'tikaf di dalam masjid</li>
            </ul>
          </DS>
          <DS id="mk6" title="🌿 Sunnah di Kota Mekah" open={D["mk6"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Berziarah ke Jabal Nur (Gua Hira)</li>
              <li>Berziarah ke Jabal Tsur — tempat Nabi bersembunyi saat hijrah</li>
              <li>Mengunjungi Masjid Ji'ranah untuk umroh sunnah</li>
              <li>Ziarah ke Janatul Mu'alla (makam Siti Khadijah RA)</li>
            </ul>
          </DS>
        </div>}
        {subTab==="mk-kegiatan"&&<div>
          <DS id="mk8" title="⛰️ Jabal Nur & Gua Hira" open={D["mk8"]} onToggle={T}>
            <ul className="tip-list">
              <li>Jarak: ±4.5km. Pendakian ±45 menit, ±1.700 anak tangga</li>
              <li>Berangkat dini hari atau sore untuk menghindari terik matahari</li>
            </ul>
          </DS>
          <DS id="mk10" title="🕌 Masjid Ji'ranah" open={D["mk10"]} onToggle={T}>
            <ul className="tip-list">
              <li>Jarak: ±24km NE. Titik miqat untuk umroh sunnah</li>
              <li>Waktu terbaik: malam hari agar bisa langsung tawaf setelah ihram</li>
            </ul>
          </DS>
        </div>}
        {subTab==="mk-peta"&&(
          <MiniMap maps={[
            {id:"haram",  label:"🕋 Masjidil Haram"},
            {id:"makkah", label:"🗺️ Kota Makkah"},
          ]}/>
        )}
      </div>
    )
  },
  {emoji:"🕌",title:"Madinah — Kota Cahaya",subtitle:"Keutamaan, sunnah & aktivitas selama di Madinah",gold:false,defaultSubTab:"md-keutamaan",
    content:({D,T,subTab,setSubTab})=>(
      <div>
        <SubTabs tabs={[{id:"md-keutamaan",label:"⭐ Keutamaan"},{id:"md-sunnah",label:"🌿 Sunnah"},{id:"md-kegiatan",label:"🗺️ Kegiatan"},{id:"md-peta",label:"📍 Peta"}]} active={subTab} onChange={setSubTab}/>
        {subTab==="md-keutamaan"&&<div>
          <DS id="md2" title="🌟 Keutamaan Masjid Nabawi" open={D["md2"]} onToggle={T}>
            <ul className="tip-list">
              <li>Shalat di Masjid Nabawi = <strong>1.000× pahala</strong> (HR. Bukhari & Muslim)</li>
              <li>"Antara rumahku and mimbarku adalah taman dari taman-taman surga." (HR. Bukhari)</li>
            </ul>
          </DS>
          <DS id="md3" title="🤍 Keutamaan Raudhah" open={D["md3"]} onToggle={T}>
            <ul className="tip-list">
              <li>Doa di Raudhah sangat mustajab — panjatkan doa terbaik Anda</li>
            </ul>
            <div className="doa-box">
              <div className="doa-label">Salam kepada Rasulullah ﷺ</div>
              <div className="doa-arabic">اَلسَّلاَمُ عَلَيْكَ يَا رَسُوْلَ اللهِ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</div>
              <div className="doa-latin">As-salāmu 'alaika yā Rasūlallāh wa raḥmatullāhi wa barakātuh</div>
              <div className="doa-arti">"Semoga keselamatan, rahmat, and berkah Allah terlimpah kepadamu, wahai Rasulullah."</div>
            </div>
          </DS>
        </div>}
        {subTab==="md-sunnah"&&<div>
          <DS id="md4" title="Masjid Nabawi" open={D["md4"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Melaksanakan <strong>Arbain</strong> — 40 shalat fardhu berturut-turut (min. 8 hari)</li>
              <li>Shalat di Raudhah and memperbanyak doa</li>
              <li>Memperbanyak shalawat kepada Nabi ﷺ</li>
            </ul>
          </DS>
          <DS id="md5" title="🌿 Sunnah di Kota Madinah" open={D["md5"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Berziarah ke Masjid Quba — 2 rakaat = 1 umroh (HR. Tirmidzi)</li>
              <li>Ziarah ke Makam Baqi' and mendoakan para penghuninya</li>
              <li>Mengunjungi Masjid Qiblatayn — tempat kiblat berpindah</li>
            </ul>
          </DS>
        </div>}
        {subTab==="md-kegiatan"&&<div>
          <DS id="md7" title="🕌 Masjid Quba" open={D["md7"]} onToggle={T}>
            <ul className="tip-list">
              <li>Masjid pertama Islam — shalat 2 rakaat = pahala 1 umroh</li>
              <li>Jarak from Masjid Nabawi: ±3.5 km</li>
            </ul>
          </DS>
          <DS id="md10" title="⚔️ Jabal Uhud & Makam Syuhada" open={D["md10"]} onToggle={T}>
            <ul className="tip-list">
              <li>Makam Hamzah RA and 70 syuhada. Jarak: ±5 km utara</li>
              <li>Rasulullah ﷺ rutin berziarah ke sini — sangat dianjurkan</li>
            </ul>
          </DS>
        </div>}
        {subTab==="md-peta"&&(
          <MiniMap maps={[
            {id:"nabawi",  label:"🕌 Masjid Nabawi"},
            {id:"madinah", label:"🗺️ Kota Madinah"},
          ]}/>
        )}
      </div>
    )
  },
  {emoji:"💡",title:"Tips Penting Umroh Mandiri",subtitle:"Hal-hal yang wajib diperhatikan",gold:false,defaultSubTab:null,
    content:()=>(
      <div>
        <ul className="tip-list">
          <li><strong>Aplikasi wajib install:</strong> Nusuk, Google Maps offline, Uber/Careem, HHR (Haramain Train), Al-Qur'an Indonesia</li>
          <li><strong>Cuaca:</strong> 35–45°C. Minum minimal 3 liter/hari termasuk air zamzam</li>
          <li><strong>Waktu terbaik tawaf:</strong> Dini hari (02.00–05.00) lebih lengang and sejuk</li>
          <li><strong>Internet:</strong> Pilih E-SIM, roaming, atau beli SIM Card STC/Zain/Mobily setibanya di Jeddah</li>
          <li><strong>Transportasi:</strong> Kereta HHR Makkah–Madinah ±2 jam. Bus Saptco ±5 jam (lebih murah)</li>
          <li><strong>Keamanan:</strong> Simpan paspor asli di safe deposit hotel</li>
          <li><strong>Tawaf sunnah:</strong> Manfaatkan setiap waktu luang — pahala berlipat ganda</li>
        </ul>
        <div style={{marginTop:12,background:"var(--surface-doa-from)",borderRadius:11,padding:"11px 13px",border:"1px solid var(--border-dashed)"}}>
          <div style={{fontSize:".72rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"1.5px",color:"var(--gold)",marginBottom:8}}>🚺 Khusus Wanita — Panduan Haid</div>
          <ul className="tip-list" style={{marginTop:0}}>
            <li>Wanita yang haid sebelum atau saat tawaf: <strong>tunda tawaf hingga suci</strong> — tawaf dalam keadaan haid tidak sah</li>
            <li>Boleh melakukan semua ibadah lain saat haid: sa'i, dzikir, berdoa, mendengar Al-Qur'an, and ziarah</li>
            <li>Jika masa haid diperkirakan panjang and mengancam jadwal kepulangan, boleh menggunakan <strong>obat penunda haid</strong> (norethisterone/primolut) — wajib konsultasi dokter minimal 2 minggu sebelum berangkat</li>
            <li>Saat suci, segera mandi wajib and lanjutkan tawaf — tidak perlu mengulang sa'i jika sudah dilakukan sebelumnya</li>
            <li>Wanita nifas (setelah melahirkan) hukumnya sama with haid — tunda tawaf hingga suci sempurna</li>
          </ul>
        </div>
      </div>
    )
  },
];

