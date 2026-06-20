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
      {
        q:"Berapa biaya pembuatan paspor terbaru?",
        a:"Paspor biasa 48 halaman ±Rp350.000, Paspor Elektronik (E-Paspor) ±Rp650.000. Pengurusan via aplikasi M-Paspor.",
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
      {
        q:"Bagaimana jika saya haid saat tiba di Mekkah?",
        a:"Anda tetap boleh berihram dan berniat umroh dari miqat. Namun, Anda <strong>dilarang tawaf</strong> sampai suci. Sa'i boleh dilakukan saat haid menurut sebagian ulama, tapi afdhalnya menunggu suci agar bisa sepaket dengan tawaf.",
      },
    ]
  },
];

export const prepData: PrepSection[] = [
  {
    section:"Dokumen & Administrasi",
    items:[
      {id:1,title:"Paspor aktif (min. 6 bulan sejak keberangkatan)",badge:"penting",tips:["Buat/perpanjang via aplikasi M-Paspor. Biaya: Rp350rb (biasa) / Rp650rb (elektronik)","Pastikan nama minimal 2 kata. Scan & simpan backup di Google Drive/Email"]},
      {id:2,title:"Visa Umroh",badge:"penting",tips:["Ajukan via nusuk.sa atau agen terdaftar. Biaya ±Rp2jt-4jt","Dokumen: paspor, tiket PP, voucher hotel, foto latar putih 3x4"]},
      {id:25,title:"Registrasi Siskopatuh (Kemenag)",badge:"penting",tips:["Wajib verifikasi via siskopatuh.kemenag.go.id agar bisa boarding","Lakukan setelah visa terbit & min. 7 hari sebelum berangkat"]},
      {id:3,title:"Vaksin Meningitis ACYW135",badge:"penting",tips:["Wajib kartu kuning ICV. Lakukan min. 10 hari sebelum berangkat","Tersedia di RS Pemerintah/KKP Pelabuhan. Biaya ±Rp350rb-600rb"]},
    ]
  },
  {
    section:"Tiket & Penginapan",
    items:[
      {id:11,title:"Tiket Pesawat PP (confirmed)",badge:"penting",tips:["Maskapai langsung: Garuda, Saudi, Lion, Batik. Tiket wajib confirmed","Tiba di Jeddah (JED) lebih dekat Mekkah, Madinah (MED) untuk ziarah awal"]},
      {id:12,title:"Booking Hotel Mekkah (dengan voucher)",badge:"penting",tips:["Filter 'near Masjid al-Haram'. Jarak 200-500m sangat ideal","Simpan voucher digital & cetak fisik — wajib saat imigrasi"]},
    ]
  },
  {
    section:"Perlengkapan Ibadah",
    items:[
      {id:18,title:"Kain Ihram 2 lembar (pria)",badge:"penting",tips:["Bahan terry cotton/turkish. Ukuran 90x150cm (bawah) & 90x200cm (atas)","Latihan pakai di rumah agar tidak lepas saat tawaf"]},
      {id:19,title:"Sandal & Tas Sandal",badge:"penting",tips:["Sandal nyaman & tidak licin. Bawa tas kecil untuk simpan sandal dalam masjid"]},
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
              <li><strong>Qarnul Manazil</strong> — jamaah dari Indonesia (via Jeddah)</li>
              <li><strong>Bir Ali (Dzulhulaifah)</strong> — jamaah dari arah Madinah</li>
            </ul>
            <div className="warn-box"><p>✈️ <strong>Transit Miqat:</strong><br/>
              • <strong>Transit Doha/Qatar</strong> → Berihram di bandara Doha atau di pesawat sebelum mendarat.<br/>
              • <strong>Transit Dubai/Abu Dhabi</strong> → Berihram di bandara sebelum naik pesawat ke Jeddah.</p></div>
          </DS>
          <DS id="mq3" title="2. Niat Ihram & Talbiyah" open={D["mq3"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Niat Ihram Umroh</div>
              <div className="doa-arabic">لَبَّيْكَ اللَّهُمَّ عُمْرَةً</div>
              <div className="doa-latin">Labbaik Allāhumma 'umratan</div>
            </div>
            <div className="doa-box">
              <div className="doa-label">Talbiyah</div>
              <div className="doa-arabic">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ...</div>
              <div className="doa-latin">Labbaik Allāhumma labbaik...</div>
            </div>
          </DS>
        </div>}
        {subTab==="ihram"&&<div>
          <DS id="ih2" title="🚫 Larangan Ihram" open={D["ih2"]} onToggle={T}>
            <ul className="larangan-list">
              <li>Memakai wewangian, memotong rambut/kuku</li>
              <li>Pria: pakaian berjahit, tutup kepala, sepatu tutup mata kaki</li>
              <li>Wanita: tutup wajah (cadar), sarung tangan</li>
            </ul>
          </DS>
        </div>}
        {subTab==="dam-sebab"&&<div>
          <DS id="dam2" title="Penyebab Wajib Dam" open={D["dam2"]} onToggle={T}>
            <ul className="tip-list">
              <li>Melanggar larangan ihram (dam 1 kambing)</li>
              <li>Melewati miqat tanpa ihram (dam 1 kambing)</li>
              <li>Rafast (hubungan suami istri) — dam berat unta/sapi</li>
            </ul>
          </DS>
        </div>}
        {subTab==="dam-cara"&&<div>
          <DS id="dam4" title="Cara Membayar Dam" open={D["dam4"]} onToggle={T}>
            <ul className="tip-list">
              <li>Lembaga resmi: <strong>adahi.com.sa</strong> atau Bank Al-Rajhi</li>
              <li>Sembelih di Mekkah, daging untuk fakir miskin setempat</li>
            </ul>
          </DS>
        </div>}
      </div>
    )
  },
  {emoji:"🔄",title:"Tawaf",subtitle:"7 putaran mengelilingi Ka'bah",gold:true,defaultSubTab:null,
    content:({D,T})=>(
      <div>
        <DS id="tw5" title="📖 Cara Pelaksanaan" open={D["tw5"]} onToggle={T}>
          <ul className="tip-list">
            <li>Mulai dari Hajar Aswad (garis hijau), Ka'bah di kiri</li>
            <li>Istilam: "Bismillahi Allahu Akbar" setiap awal putaran</li>
            <li>Selesai 7 putaran → shalat 2 rakaat di Maqam Ibrahim</li>
          </ul>
        </DS>
      </div>
    )
  },
  {emoji:"🕋",title:"Mekah",subtitle:"Kota Suci Pertama",gold:true,defaultSubTab:"mk-peta",
    content:()=>(
      <div>
        <MiniMap maps={[{id:"haram",label:"🕋 Masjidil Haram"},{id:"makkah",label:"🗺️ Kota Makkah"}]}/>
      </div>
    )
  },
];
