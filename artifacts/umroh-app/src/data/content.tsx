import React from "react";
import { DS, SubTabs } from "../components/ui/Common";
import { MiniMap } from "../components/ui/Maps";
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
        q:"Apa perbedaan rukun, wajib, dan sunnah umroh?",
        a:"<strong>Rukun</strong>: wajib dikerjakan, tidak bisa diganti dam. <strong>Wajib</strong>: harus dikerjakan, jika ditinggalkan wajib membayar dam (denda). <strong>Sunnah</strong>: dianjurkan untuk menambah pahala, tidak mempengaruhi keabsahan ibadah.",
      },
    ]
  },
  {
    cat:"🧳 Persiapan & Keberangkatan",
    items:[
      {
        q:"Dokumen apa saja yang wajib disiapkan untuk umroh?",
        a:"<strong>Wajib</strong>: Paspor (minimal 6 bulan aktif), visa umroh, tiket pesawat, bukti akomodasi hotel, sertifikat vaksin meningitis, dan kartu BPJS Kesehatan aktif.",
        note:"Visa umroh kini bisa diurus mandiri melalui platform Nusuk (nusuk.sa) atau melalui penyedia visa terpercaya."
      },
    ]
  },
  {
    cat:"🤍 Ihram & Miqat",
    items:[
      {
        q:"Bolehkah berpakaian ihram sejak dari bandara Indonesia?",
        a:"<strong>Boleh dan dianjurkan</strong> untuk memakai pakaian ihram sejak di bandara Indonesia, karena lebih praktis dan menghindari risiko kelewat miqat.",
      },
    ]
  },
];

export const prepData: PrepSection[] = [
  {
    section:"Dokumen & Administrasi",
    items:[
      {id:1,title:"Paspor aktif (min. 6 bulan sejak keberangkatan)",badge:"penting",tips:["Pastikan nama di paspor minimal 2 kata (rekomendasi 3 kata untuk kemudahan visa)","Scan halaman depan & simpan di Google Drive/Email sebagai backup"]},
      {id:2,title:"Visa Umroh",badge:"penting",tips:["Ajukan via agen travel terpercaya atau gunakan aplikasi Nusuk (jika mandiri)","Proses biasanya 1-3 hari kerja. Simpan print-out visa bersama paspor"]},
      {id:3,title:"Sertifikat Vaksin Meningitis",badge:"penting",tips:["Sangat dianjurkan meskipun terkadang tidak dicek ketat di imigrasi","Lakukan vaksinasi minimal 2 minggu sebelum keberangkatan"]},
      {id:4,title:"Vaksin COVID-19 (Lengkap/Booster)",badge:"rekomendasi",tips:["Siapkan sertifikat internasional via aplikasi SatuSehat"]},
      {id:5,title:"Pas Foto (latar putih, wajah 80%)",badge:"opsional",tips:["Siapkan 5-10 lembar ukuran 4x6 untuk cadangan dokumen lokal"]},
    ]
  },
  {
    section:"Persiapan Kesehatan",
    items:[
      {id:9,title:"Medical Check-Up",badge:"rekomendasi",tips:["Periksa tekanan darah, gula darah, fungsi jantung, dan kondisi fisik umum","Jamaah kondisi khusus (jantung, diabetes) wajib bawa catatan medis lengkap"]},
      {id:10,title:"Obat-obatan pribadi",badge:"penting",tips:["Bawa obat rutin untuk 2x durasi perjalanan — apotek di Saudi mahal","Wajib bawa: paracetamol, antidiare, oralit, obat maag, vitamin C, plester","Masker N95 sangat penting saat area tawaf padat — bawa minimal 10 lembar"]},
    ]
  },
  {
    section:"Tiket & Penginapan",
    items:[
      {id:11,title:"Tiket Pesawat PP (confirmed)",badge:"penting",tips:["Maskapai langsung dari Indonesia: Garuda, Saudi Airlines, Lion Air, Batik Air","Tiket harus confirmed (bukan open ticket) untuk keperluan pengajuan visa","Tiba di Jeddah (JED) lebih dekat ke Mekkah. Madinah (MED) untuk mulai ziarah dulu"]},
      {id:12,title:"Booking Hotel Mekkah (dengan voucher)",badge:"penting",tips:["Gunakan Booking.com, Agoda, atau nusuk.sa — filter 'near Masjid al-Haram'","Radius 200–500m dari Masjidil Haram sangat ideal — hemat tenaga dan waktu","Simpan voucher digital + cetak fisik — wajib ditunjukkan saat imigrasi Saudi"]},
      {id:13,title:"Bukti Transport Bandara ↔ Hotel",badge:"penting",tips:["Bukti pemesanan transportasi bandara–hotel–bandara wajib untuk pengajuan visa","Bisa berupa: konfirmasi shuttle hotel, booking Uber/Careem, atau surat agen transport"]},
      {id:14,title:"Hotel di Madinah",badge:"opsional",tips:["Pilih hotel di area Anbariyyah atau Central Area — dekat Masjid Nabawi","Booking slot Raudhah via aplikasi Nusuk sebelum berangkat dari Indonesia"]},
    ]
  },
  {
    section:"Persiapan Keuangan",
    items:[
      {id:15,title:"Riyal Arab Saudi (SAR)",badge:"penting",tips:["Tukar rupiah ke SAR di money changer Indonesia — kurs lebih baik dari di Saudi","1 SAR ≈ Rp4.200–4.400. Rata-rata SAR 3.000–5.000 cukup untuk 10 hari (belum termasuk oleh-oleh)"]},
      {id:16,title:"Kartu Debit/Kredit Internasional",badge:"rekomendasi",tips:["Aktifkan fitur transaksi internasional di mobile banking sebelum berangkat","Kartu GPN (logo lokal) tidak bisa dipakai di Saudi — pastikan Visa/Mastercard"]},
      {id:17,title:"Simpan nomor penting (darurat, KJRI & bank)",badge:"penting",tips:["🏛️ KJRI Jeddah: +966-12-671-1271 (24 jam)","🏛️ KJRI Jeddah WhatsApp Darurat: +966-53-831-0077","📞 Call Center Kemenag Umroh: 021-3811-546 / 1500025","🚑 Darurat Umum Arab Saudi: 911 | 997 (kebakaran)","💡 Simpan semua nomor ini di kontak HP dan catatan kertas di dompet"]},
    ]
  },
  {
    section:"Perlengkapan Ibadah & Bawaan",
    items:[
      {id:18,title:"Pakaian Ihram & Sandal",badge:"penting",tips:["Pilih bahan terry cotton atau turkish cotton — kuat, tidak mudah melar","Ukuran ideal: 90×150 cm (bawah) dan 90×200 cm (atas)","Wanita: gamis + khimar putih menutup seluruh tubuh kecuali wajah & telapak tangan","Latihan pakai ihram sebelum berangkat agar tidak kerepotan di miqat","Sandal Hawalaki atau sandal kulit: nyaman, awet, tidak licin di marmer basah","Pria saat ihram: tidak boleh menutup mata kaki dan jari-jari kaki","Bawa spidol kecil untuk menandai sandal agar tidak tertukar di masjid"]},
      {id:21,title:"Pakaian sopan & nyaman (min. 5 set)",badge:"penting",tips:["Bahan terbaik: linen, katun, atau dry-fit. Cuaca Mekkah 35–45°C","Pria: kurta/gamis adalah pilihan terbaik. Wanita: gamis longgar + bergo nyaman"]},
      {id:22,title:"Power bank & adaptor tipe G",badge:"penting",tips:["Arab Saudi pakai colokan Tipe G (3 pin kotak). Beli adaptor universal sebelum berangkat","Power bank min. 20.000 mAh sangat berguna saat seharian di masjid"]},
    ]
  },
  {
    section:"Komunikasi, Internet & Aplikasi",
    items:[
      {id:27,title:"Siapkan koneksi internet di Arab Saudi",badge:"penting",tips:[
        "Ada 3 pilihan — pilih salah satu atau kombinasi:",
        "① E-SIM (paling praktis): beli via Airalo/Holafly/Nomad sebelum berangkat. Paket Saudi 10–15 hari ±Rp150.000–350.000. Syarat: HP mendukung E-SIM",
        "② Paket Roaming: aktifkan via MyTelkomsel / myXL / myIM3. Biaya Rp100.000–300.000/hari",
        "③ SIM Card Lokal (paling hemat): beli STC/Zain/Mobily di bandara. Harga SAR 30–60, data 10–20 GB",
        "Rekomendasi: STC memiliki sinyal terkuat di area Masjidil Haram dan Masjid Nabawi",
      ]},
      {id:30,title:"Install aplikasi penting & panduan doa offline",badge:"penting",tips:[
        "① Nusuk (nusuk.sa) — WAJIB: booking slot Raudhah. Buat akun minimal 2 hari sebelum berangkat",
        "② Google Maps — download peta offline Makkah & Madinah sebelum berangkat",
        "③ Uber / Careem — daftarkan akun + kartu kredit internasional sebelum berangkat",
        "④ HHR Haramain Train — tiket kereta cepat Makkah–Madinah (±2 jam, SAR 65–150)",
        "⑤ Al-Qur'an Indonesia / Muslim Pro — aktifkan mode offline untuk doa & dzikir lengkap",
        "📖 Hafal minimal sebelum berangkat: niat ihram, talbiyah, dan doa antara Rukun Yamani–Hajar Aswad",
        "Semua aplikasi ini GRATIS — install dan coba sebelum berangkat agar familiar",
      ]},
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
            </ul>
          </DS>
        </div>}
      </div>
    )
  },
  {emoji:"🔄",title:"Tawaf — Mengelilingi Ka'bah",subtitle:"7 putaran berlawanan arah jarum jam",gold:true,defaultSubTab:null,
    content:({D,T})=>(
      <div>
        <p>Tawaf adalah mengelilingi Ka'bah sebanyak <strong>7 putaran berlawanan arah jarum jam</strong>. Ka'bah selalu di sebelah kiri.</p>
        <DS id="tw3" title="✅ Syarat Sahnya Tawaf" open={D["tw3"]} onToggle={T}>
          <ul className="tip-list">
            <li>Suci dari hadas kecil (wudhu) dan hadas besar</li>
            <li>Ka'bah berada di sebelah kiri selama tawaf</li>
          </ul>
        </DS>
      </div>
    )
  },
  {emoji:"🕋",title:"Mekah — Kota Suci Pertama",subtitle:"Keutamaan, sunnah & aktivitas selama di Mekah",gold:true,defaultSubTab:"mk-peta",
    content:()=>(
      <div>
        <MiniMap maps={[{id:"haram",label:"🕋 Masjidil Haram"},{id:"makkah",label:"🗺️ Kota Makkah"}]}/>
      </div>
    )
  },
];
