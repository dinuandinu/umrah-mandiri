export type PrepItem = {id:number;title:string;badge:string;tips:string[];links?:{url:string;icon:string;label:string;outline?:boolean}[]};
export type PrepSection = {section:string;items:PrepItem[]};

export const prepData: PrepSection[] = [
  {
    section:"Dokumen & Administrasi",
    items:[
      {id:1,title:"Paspor aktif (min. 6 bulan sejak keberangkatan)",badge:"penting",tips:[
        "[BUAT BARU & PERPANJANG]",
        "Buat atau perpanjang di kantor Imigrasi terdekat atau via aplikasi M-Paspor",
        "- Biaya: Rp350.000 (biasa 48 hal) atau Rp650.000 (elektronik)",
        "- Proses ±4 hari kerja",
        "[SYARAT & MASA BERLAKU]",
        "Paspor wajib masih berlaku minimal 6 bulan terhitung dari tanggal keberangkatan — bukan tanggal pengajuan visa",
        "- Cek masa berlaku sekarang — jangan menunggu H-14 keberangkatan",
        "Pastikan foto paspor tidak lebih dari 5 tahun dan masih mirip wajah saat ini"
      ]},
      {id:2,title:"Visa Umroh",badge:"penting",tips:[
        "[PENGAJUAN VISA]",
        "Ajukan via platform resmi nusuk.sa atau agen PPIU terdaftar Kemenag",
        "- ⚠️ Biaya visa terkini berkisar Rp2.000.000 – Rp4.000.000 (bervariasi tergantung agen & musim)",
        "- Proses 3–7 hari kerja. Ajukan minimal 3 minggu sebelum keberangkatan",
        "[DOKUMEN WAJIB]",
        "Siapkan dokumen wajib pengajuan:",
        "- Paspor asli & KTP",
        "- Tiket PP confirmed & voucher hotel",
        "- Foto background putih 3x4",
        "- Kartu vaksin meningitis",
        "[PENYIMPANAN]",
        "Simpan visa digital di HP dan cetak salinan fisik sebagai cadangan"
      ],links:[{url:"https://nusuk.sa",icon:"🔗",label:"Buka Nusuk.sa"}]},
      {id:25,title:"Registrasi Siskopatuh (Kemenag)",badge:"penting",tips:[
        "[TENTANG SISKOPATUH]",
        "Siskopatuh adalah sistem wajib Kemenag RI untuk verifikasi jamaah umroh mandiri",
        "✅ Umroh mandiri adalah hak sah setiap warga negara — legal secara hukum",
        "- Namun tetap WAJIB melakukan registrasi melalui PPIU yang terdaftar di Kemenag",
        "[CARA REGISTRASI]",
        "Registrasi di: siskopatuh.kemenag.go.id — gunakan NIK dan data paspor Anda",
        "- Dokumen yang diunggah: scan paspor, foto 3x4, bukti visa, tiket PP, dan voucher hotel",
        "- Lakukan registrasi setelah visa terbit dan minimal 7 hari sebelum keberangkatan",
        "[PERINGATAN]",
        "⚠️ Tanpa Siskopatuh, jamaah bisa ditolak boarding di bandara Indonesia"
      ],links:[{url:"https://siskopatuh.kemenag.go.id",icon:"🔗",label:"Buka Siskopatuh"},{url:"https://haji.kemenag.go.id/umrah/",icon:"📋",label:"Info PPIU Resmi",outline:true}]},
      {id:3,title:"KTP, Kartu Keluarga, Buku Nikah & Fotokopi Dokumen",badge:"penting",tips:[
        "[DOKUMEN IDENTITAS & KELUARGA]",
        "Bawa fotokopi KTP dan KK minimal 5 lembar — sering diminta untuk keperluan administrasi di Saudi",
        "Syarat keberangkatan wanita tanpa/dengan mahram:",
        "- Wanita di bawah 45 tahun wajib disertai mahram (suami/ayah/saudara laki-laki) — sertakan buku nikah atau akta keluarga sebagai bukti",
        "- Wanita 45 tahun ke atas bisa berangkat tanpa mahram jika bersama rombongan resmi yang terdaftar di PPIU",
        "[PENGGANDAAN DOKUMEN]",
        "Fotokopi semua dokumen penting: paspor, visa, tiket PP, voucher hotel, kartu vaksin meningitis, KTP",
        "- Gandakan minimal 3 set",
        "- Simpan 1 set di tas kabin, 1 set di koper, dan 1 set dititipkan ke teman/keluarga serombongan — pisah dari dokumen asli",
        "- Scan seluruh dokumen dan upload ke Google Drive atau email sendiri agar bisa diakses kapanpun meski HP/dompet hilang"
      ]},
      {id:5,title:"Asuransi Saudi (otomatis via visa)",badge:"penting",tips:[
        "[STATUS ASURANSI]",
        "Asuransi ini OTOMATIS aktif saat visa terbit — tidak perlu aksi terpisah",
        "[CAKUPAN]",
        "Mencakup: darurat kesehatan, kecelakaan, kematian selama di Arab Saudi",
        "- ⚠️ Tidak mencakup: transit di negara lain, pembatalan penerbangan, bagasi hilang"
      ]},
      {id:6,title:"Asuransi perjalanan tambahan",badge:"rekomendasi",tips:[
        "[PILIHAN ASURANSI]",
        "Pilih yang mencakup: pembatalan penerbangan, bagasi hilang, medis di negara transit",
        "- Rekomendasi: Traveloka Insurance, Tokio Marine, atau Allianz Travel Care",
        "- Harga mulai Rp150.000–400.000 untuk 10–14 hari perjalanan"
      ]}
    ]
  },
  {
    section:"Kesehatan & Vaksinasi",
    items:[
      {id:7,title:"Vaksin Meningitis ACYW135",badge:"penting",tips:[
        "[LOKASI VAKSINASI]",
        "Dapatkan di klinik vaksinasi resmi, RS pemerintah/swasta, atau Kantor Kesehatan Pelabuhan",
        "[BIAYA & MASA BERLAKU]",
        "Biaya: Rp350.000–600.000",
        "- Akan mendapat kartu ICV (kartu kuning internasional)",
        "Vaksin berlaku 5 tahun",
        "- Lakukan minimal 10 hari sebelum berangkat"
      ]},
      {id:26,title:"Vaksin Polio (IPV/OPV)",badge:"rekomendasi",tips:[
        "[KETENTUAN SAUDI]",
        "Arab Saudi mewajibkan bukti vaksin polio bagi jamaah dari negara endemis termasuk Indonesia",
        "[VAKSIN IPV]",
        "Vaksin polio tipe IPV (suntik) tersedia di puskesmas, klinik, dan rumah sakit",
        "- Biaya: Rp50.000–150.000 di fasilitas kesehatan pemerintah",
        "- Lakukan minimal 4 minggu sebelum keberangkatan"
      ]},
      {id:8,title:"Vaksin Influenza",badge:"rekomendasi",tips:[
        "[INFLUENZA]",
        "Tersedia di puskesmas, klinik, dan rumah sakit",
        "- Biaya ±Rp200.000–400.000",
        "- Lakukan minimal 2 minggu sebelum berangkat agar proteksi optimal"
      ]},
      {id:9,title:"Medical Check-Up",badge:"rekomendasi",tips:[
        "[PEMERIKSAAN UMUM]",
        "Periksa tekanan darah, gula darah, fungsi jantung, dan kondisi fisik umum",
        "[KONDISI KHUSUS]",
        "Jamaah kondisi khusus (jantung, diabetes) wajib bawa catatan medis lengkap"
      ]},
      {id:10,title:"Obat-obatan pribadi",badge:"penting",tips:[
        "[JUMLAH & JENIS]",
        "Bawa obat rutin untuk 2x durasi perjalanan — apotek di Saudi mahal",
        "- Wajib bawa: paracetamol, antidiare, oralit, obat maag, vitamin C, plester",
        "[PROTEKSI TAMBAHAN]",
        "Masker N95 sangat penting saat area tawaf padat — bawa minimal 10 lembar"
      ]}
    ]
  },
  {
    section:"Tiket & Penginapan",
    items:[
      {id:11,title:"Tiket Pesawat PP (confirmed)",badge:"penting",tips:[
        "[MASKAPAI & TIKET]",
        "Maskapai langsung dari Indonesia: Garuda, Saudi Airlines, Lion Air, Batik Air",
        "- Tiket harus confirmed (bukan open ticket) untuk keperluan pengajuan visa",
        "[RUTE PENERBANGAN]",
        "Tiba di Jeddah (JED) lebih dekat ke Mekkah",
        "- Pilih Madinah (MED) untuk mulai ziarah dulu"
      ]},
      {id:12,title:"Booking Hotel Mekkah (dengan voucher)",badge:"penting",tips:[
        "[APLIKASI BOOKING]",
        "Gunakan Booking.com, Agoda, atau nusuk.sa — filter 'near Masjid al-Haram'",
        "[LOKASI STRATEGIS]",
        "Radius 200–500m dari Masjidil Haram sangat ideal — hemat tenaga dan waktu",
        "[DOKUMEN VOUCHER]",
        "Simpan voucher digital + cetak fisik — wajib ditunjukkan saat imigrasi Saudi"
      ]},
      {id:13,title:"Bukti Transport Bandara ↔ Hotel",badge:"penting",tips:[
        "[SYARAT VISA]",
        "Bukti pemesanan transportasi bandara–hotel–bandara wajib untuk pengajuan visa",
        "[BUKTI YANG DITERIMA]",
        "Bisa berupa: konfirmasi shuttle hotel, booking Uber/Careem, atau surat agen transport"
      ]},
      {id:14,title:"Hotel di Madinah",badge:"opsional",tips:[
        "[LOKASI IDEAL]",
        "Pilih hotel di area Anbariyyah atau Central Area — dekat Masjid Nabawi",
        "[SLOT RAUDHAH]",
        "Booking slot Raudhah via aplikasi Nusuk sebelum berangkat dari Indonesia"
      ]}
    ]
  },
  {
    section:"Persiapan Keuangan",
    items:[
      {id:15,title:"Riyal Arab Saudi (SAR)",badge:"penting",tips:[
        "[PENUKARAN UANG]",
        "Tukar rupiah ke SAR di money changer Indonesia — kurs lebih baik dari di Saudi",
        "[ESTIMASI DANA]",
        "1 SAR ≈ Rp4.200–4.400",
        "- Rata-rata SAR 3.000–5.000 cukup untuk 10 hari (belum termasuk oleh-oleh)"
      ]},
      {id:16,title:"Kartu Debit/Kredit Internasional",badge:"rekomendasi",tips:[
        "[PENGATURAN KARTU]",
        "Aktifkan fitur transaksi internasional di mobile banking sebelum berangkat",
        "[JENIS KARTU]",
        "Kartu GPN (logo lokal) tidak bisa dipakai di Saudi — pastikan Visa/Mastercard"
      ]},
      {id:17,title:"Simpan nomor penting (darurat, KJRI & bank)",badge:"penting",tips:[
        "[NOMOR DARURAT]",
        "Simpan kontak KJRI dan Darurat Saudi:",
        "- 🏛️ KJRI Jeddah: +966-12-671-1271 (24 jam)",
        "- 🏛️ KJRI Jeddah WhatsApp Darurat: +966-53-831-0077",
        "- 📞 Call Center Kemenag Umroh: 021-3811-546 / 1500025",
        "- 🚑 Darurat Umum Arab Saudi: 911 | 997 (kebakaran)",
        "[PENYIMPANAN]",
        "💡 Simpan semua nomor ini di kontak HP dan catatan kertas di dompet"
      ]}
    ]
  },
  {
    section:"Perlengkapan Ibadah & Bawaan",
    items:[
      {id:18,title:"Pakaian Ihram & Sandal",badge:"penting",tips:[
        "[KAIN IHRAM]",
        "Pilih bahan terry cotton atau turkish cotton — kuat, tidak mudah melar",
        "- Ukuran ideal pria: 90×150 cm (bawah) dan 90×200 cm (atas)",
        "- Wanita: gamis + khimar putih menutup seluruh tubuh kecuali wajah & telapak tangan",
        "- Latihan pakai ihram sebelum berangkat agar tidak kerepotan di miqat",
        "[SANDAL & ALAS KAKI]",
        "Sandal Hawalaki atau sandal kulit: nyaman, awet, tidak licin di marmer basah",
        "- Pria saat ihram: tidak boleh menutup mata kaki dan jari-jari kaki",
        "- Bawa spidol kecil untuk menandai sandal agar tidak tertukar di masjid"
      ]},
      {id:21,title:"Pakaian sopan & nyaman (min. 5 set)",badge:"penting",tips:[
        "[BAHAN & CUACA]",
        "Bahan terbaik: linen, katun, atau dry-fit. Cuaca Mekkah 35–45°C",
        "[MODEL PAKAIAN]",
        "Pria: kurta/gamis adalah pilihan terbaik",
        "- Wanita: gamis longgar + bergo nyaman"
      ]},
      {id:22,title:"Power bank & adaptor tipe G",badge:"penting",tips:[
        "[ADAPTOR LISTRIK]",
        "Arab Saudi pakai colokan Tipe G (3 pin kotak). Beli adaptor universal sebelum berangkat",
        "[DAYA BATERAI]",
        "Power bank min. 20.000 mAh sangat berguna saat seharian di masjid"
      ]}
    ]
  },
  {
    section:"Komunikasi, Internet & Aplikasi",
    items:[
      {id:27,title:"Siapkan koneksi internet di Arab Saudi",badge:"penting",tips:[
        "[PILIHAN KONEKSI INTERNET]",
        "Ada 3 pilihan — pilih salah satu atau kombinasi:",
        "- E-SIM (paling praktis): beli via Airalo/Holafly/Nomad sebelum berangkat. Paket Saudi 10–15 hari ±Rp150.000–350.000. Syarat: HP mendukung E-SIM",
        "- Paket Roaming: aktifkan via MyTelkomsel / myXL / myIM3. Biaya Rp100.000–300.000/hari",
        "- SIM Card Lokal (paling hemat): beli STC/Zain/Mobily di bandara. Harga SAR 30–60, data 10–20 GB",
        "[REKOMENDASI]",
        "STC memiliki sinyal terkuat di area Masjidil Haram dan Masjid Nabawi"
      ]},
      {id:30,title:"Install aplikasi penting & panduan doa offline",badge:"penting",tips:[
        "[APLIKASI WAJIB]",
        "Nusuk (nusuk.sa) — WAJIB: booking slot Raudhah. Buat akun minimal 2 hari sebelum berangkat",
        "[APLIKASI PENDUKUNG]",
        "Google Maps — download peta offline Makkah & Madinah sebelum berangkat",
        "- Uber / Careem — daftarkan akun + kartu kredit internasional sebelum berangkat",
        "- HHR Haramain Train — tiket kereta cepat Makkah–Madinah (±2 jam, SAR 65–150)",
        "- Al-Qur'an Indonesia / Muslim Pro — aktifkan mode offline untuk doa & dzikir lengkap",
        "[PERSIAPAN LAINNYA]",
        "📖 Hafal minimal sebelum berangkat: niat ihram, talbiyah, dan doa antara Rukun Yamani–Hajar Aswad",
        "- Semua aplikasi ini GRATIS — install dan coba sebelum berangkat agar familiar"
      ]}
    ]
  }
];
