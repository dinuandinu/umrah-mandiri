import React from "react";

export const DS = ({id,title,open,onToggle,children}:{id:string;title:string;open:boolean;onToggle:(id:string)=>void;children:React.ReactNode}) => (
  <div className="detail-section">
    <button className="detail-header" onClick={()=>onToggle(id)}>
      <span>{title}</span>
      <span className={`detail-arrow ${open?"open":""}`}>▾</span>
    </button>
    {open && <div className="detail-body">{children}</div>}
  </div>
);

export const SubTabs = ({tabs,active,onChange}:{tabs:{id:string;label:string}[];active:string;onChange:(id:string)=>void}) => (
  <div className="sub-tabs" data-count={tabs.length}>
    {tabs.map(t=><button key={t.id} className={`sub-tab-btn ${active===t.id?"active":""}`} onClick={()=>onChange(t.id)}>{t.label}</button>)}
  </div>
);

export const KaabaSVG = () => (
  <svg className="kaaba-icon" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="32" fill="#124C41" fillOpacity="0.1"/>
    <path d="M32 12L52 22V42L32 52L12 42V22L32 12Z" fill="#1A1A1A"/>
    <path d="M32 12L52 22V42L32 52V26L12 16L32 12Z" fill="#333333"/>
    <path d="M12 22L32 26V52L12 42V22Z" fill="#262626"/>
    <path d="M12 22L32 12L52 22L32 26L12 22Z" fill="#404040"/>
    <path d="M12 28H52V30H12V28Z" fill="#C9A84C"/>
    <path d="M26 38H38V52H26V38Z" fill="#C9A84C" fillOpacity="0.8"/>
  </svg>
);
const DS = ({id,title,open,onToggle,children}:{id:string;title:string;open:boolean;onToggle:(id:string)=>void;children:React.ReactNode}) => (
  <div className="detail-section">
    <button className="detail-header" onClick={()=>onToggle(id)}>
      <span>{title}</span>
      <span className={`detail-arrow ${open?"open":""}`}>▾</span>
    </button>
    {open && <div className="detail-body">{children}</div>}
  </div>
);

const SubTabs = ({tabs,active,onChange}:{tabs:{id:string;label:string}[];active:string;onChange:(id:string)=>void}) => (
  <div className="sub-tabs" data-count={tabs.length}>
    {tabs.map(t=><button key={t.id} className={`sub-tab-btn ${active===t.id?"active":""}`} onClick={()=>onChange(t.id)}>{t.label}</button>)}
  </div>
);
const OB_SLIDES = [
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

const Onboarding = ({onDone}:{onDone:()=>void}) => {
  const [slide, setSlide] = useState(0);
  const total = OB_SLIDES.length;
  const s = OB_SLIDES[slide];
  const isLast = slide === total - 1;

  const next = () => { if (isLast) onDone(); else setSlide(p=>p+1); };
  const prev = () => { if (slide > 0) setSlide(p=>p-1); };

  return (
    <div className="ob-overlay">
      <div className="ob-topbar">
        <div className="ob-topbar-arabic">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
        <div className="ob-topbar-sub">Selamat datang di Umroh Mandiri</div>
        <button className="ob-skip" onClick={onDone}>Lewati</button>
      </div>

      <div className="ob-body">
        <div className="ob-slides" style={{transform:`translateX(-${slide*100}%)`}}>
          {OB_SLIDES.map((sl,i)=>(
            <div className="ob-slide" key={i}>
              <div className="ob-illus">{sl.emoji}</div>
              <div className="ob-title">{sl.title}</div>
              <div className="ob-desc">{sl.desc}</div>
              <div className="ob-tip"><p>💡 {sl.tip}</p></div>
            </div>
          ))}
        </div>
      </div>

      <div className="ob-footer">
        <div className="ob-dots">
          {OB_SLIDES.map((_,i)=>(
            <div key={i} className={`ob-dot ${slide===i?"active":""}`} onClick={()=>setSlide(i)}/>
          ))}
        </div>
        <div className="ob-btn-row">
          {slide > 0 && (
            <button className="ob-btn-prev" onClick={prev}>‹</button>
          )}
          <button className="ob-btn-primary" onClick={next}>
            {isLast ? "Mulai Sekarang 🌙" : "Lanjut →"}
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── About Page ───────────────────────────────────────────────────────────────
const AboutPage = ({onClose}:{onClose:()=>void}) => (
  <div className="about-overlay">
    <div className="about-header">
      <button className="about-back-btn" onClick={onClose} aria-label="Kembali">‹</button>
      <div className="about-header-arabic">جَزَاكَ اللَّهُ خَيْرًا</div>
      <div className="about-header-title">Tentang Aplikasi</div>
      <div className="about-header-sub">Umroh Mandiri v{import.meta.env.VITE_APP_VERSION}</div>
    </div>

    <div className="about-body">
      {/* Author */}
      <div className="about-card">
        <div className="about-card-label">👤 Tentang Pembuat</div>
        <div className="author-avatar">🕌</div>
        <div className="author-name">Andinu</div>
        <div className="author-bio">
          Aplikasi ini dibuat sebagai amal jariyah — semoga bermanfaat bagi saudara-saudara Muslim yang hendak melaksanakan ibadah umroh mandiri.
        </div>
        <div className="author-links">
          <a
            className="author-link-btn"
            href="mailto:andinu@duck.com?subject=Umroh%20Mandiri%20App"
            style={{flexDirection:"column",gap:2}}
          >
            <span style={{display:"flex",alignItems:"center",gap:5,fontSize:".85rem",fontWeight:700}}>
              <span>✉️</span> Email
            </span>
            <span style={{fontSize:".72rem",color:"var(--muted)",fontWeight:400}}>andinu@duck.com</span>
          </a>
        </div>
        <div className="author-doa">
          <span style={{fontFamily:"Amiri,serif",fontSize:"1.1rem",color:"var(--gold)"}}>جَزَاكَ اللَّهُ خَيْرًا</span><br/>
          <span style={{fontSize:".78rem",color:"var(--muted)"}}>Jazakallahu khairan — Semoga Allah membalas dengan kebaikan</span>
        </div>
      </div>

      {/* Tentang */}
      <div className="about-card">
        <div className="about-card-label">ℹ️ Tentang Aplikasi</div>
        <div style={{textAlign:"center",marginBottom:10}}>
          <div className="about-version-badge">🕋 Umroh Mandiri <span style={{opacity:.75}}>v{import.meta.env.VITE_APP_VERSION}</span></div>
        </div>
        <div className="about-desc">
          Panduan ibadah umroh mandiri untuk jamaah Indonesia. Mencakup:
        </div>
        <ul className="tip-list" style={{marginTop:10}}>
          <li>Checklist persiapan lengkap dengan tips & link referensi</li>
          <li>Tutorial ibadah step-by-step dari miqat hingga tahallul</li>
          <li>Doa-doa umroh dalam Arab, latin, dan terjemahan</li>
          <li>Peta interaktif Masjidil Haram, Masjid Nabawi, Makkah & Madinah</li>
          <li>Panduan dam, larangan ihram, tips haid, dan tips mandiri</li>
        </ul>
        <div style={{marginTop:14,textAlign:"center"}}>
          <div style={{fontFamily:"Amiri,serif",fontSize:"1.1rem",color:"var(--gold)",marginBottom:4}}>تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ</div>
          <div style={{fontSize:".78rem",color:"var(--muted)"}}>Semoga Allah menerima ibadah dari kami dan dari kalian. Aamiin 🤲</div>
        </div>
      </div>
    </div>
  </div>
);

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQ_DATA: {cat:string; items:{q:string;a:string;note?:string}[]}[] = [
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
      {
        q:"Berapa lama waktu ideal perjalanan umroh mandiri?",
        a:"Minimal <strong>10–14 hari</strong>: sekitar 5–7 hari di Mekkah dan 4–8 hari di Madinah. Waktu ideal ini memberi kesempatan untuk Arbain (40 shalat berturut-turut) di Nabawi dan eksplorasi situs-situs penting.",
        note:"Durasi bisa disesuaikan — sebagian jamaah mandiri memilih 21 hari agar lebih tenang beribadah."
      },
      {
        q:"Apakah umroh bisa dilakukan lebih dari sekali dalam satu perjalanan?",
        a:"Ya, boleh. Caranya: setelah umroh pertama selesai (tahallul), pergi ke salah satu titik miqat seperti <strong>Masjid Ji'ranah (±24km NE Mekkah)</strong> untuk berihram kembali, lalu lakukan tawaf, sa'i, dan tahallul lagi. Ini disebut <strong>umroh sunnah</strong>.",
      },
    ]
  },
  {
    cat:"🧳 Persiapan & Keberangkatan",
    items:[
      {
        q:"Dokumen apa saja yang wajib disiapkan untuk umroh?",
        a:"<strong>Wajib</strong>: Paspor (minimal 6 bulan aktif), visa umroh, tiket pesawat, bukti akomodasi hotel, sertifikat vaksin meningitis, dan kartu BPJS Kesehatan aktif (atau asuransi perjalanan).",
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
        a:"<strong>Wajib</strong>: Nusuk (booking Raudhah & izin masuk haram), Google Maps (unduh offline Mekkah & Madinah), Uber/Careem (transportasi), Haramain Train (kereta HHR). <strong>Sangat disarankan</strong>: WhatsApp, Al-Qur'an Indonesia, dan aplikasi kurs mata uang.",
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
        a:"<strong>Larangan ihram</strong> meliputi: memotong rambut/kuku, memakai wewangian, berburu binatang darat, berhubungan suami-istri, melamar/menikah, bertengkar/berbicara kotor. Pria dilarang menutup kepala dan memakai pakaian berjahit. Wanita dilarang memakai sarung tangan dan cadar.",
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
        q:"Bolehkah berdoa dengan bahasa Indonesia saat tawaf?",
        a:"<strong>Boleh</strong>. Tidak ada doa tawaf yang sifatnya wajib dengan teks tertentu. Anda bebas berdoa dengan bahasa apa pun. Namun membaca doa yang diajarkan Rasulullah ﷺ tentu lebih afdhal, terutama doa sapu jagad antara Rukun Yamani dan Hajar Aswad.",
      },
    ]
  },
  {
    cat:"🏃 Sa'i & Tahallul",
    items:[
      {
        q:"Apakah sa'i harus langsung dilakukan setelah tawaf?",
        a:"Tidak harus langsung, tetapi <strong>sa'i harus dilakukan pada hari yang sama</strong> setelah tawaf. Jamaah boleh istirahat sebentar, minum zamzam, dan shalat 2 rakaat di Maqam Ibrahim sebelum memulai sa'i.",
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
        q:"Bagaimana cara terbaik perjalanan Mekkah–Madinah?",
        a:"Ada dua pilihan utama: <strong>Kereta HHR (Haramain High Speed Railway)</strong> — durasi ±2 jam, harga SAR 65–150, nyaman dan cepat. Stasiun Makkah ±4km dari Haram. <strong>Bus Saptco</strong> — durasi ±5 jam, lebih murah sekitar SAR 30, tersedia dari Terminal Bus Mekkah.",
      },
      {
        q:"Di mana sebaiknya menginap agar dekat Masjidil Haram?",
        a:"Pilih hotel di <strong>ring 1 atau ring 2 Haram</strong> — dalam radius 500m–1km. Area Ajyad, Masa, dan Abraj Al-Bait (Clock Tower) adalah lokasi terpopuler. Semakin dekat, semakin mahal. Manfaatkan aplikasi Booking.com atau Agoda, filter dengan jarak ke Haram.",
      },
      {
        q:"Kartu SIM mana yang terbaik untuk dipakai di Arab Saudi?",
        a:"Tiga operator utama: <strong>STC, Zain, dan Mobily</strong>. Beli di bandara atau minimarket setibanya di Jeddah. Harga SIM perdana dengan data ±SAR 50–100 untuk 30 hari. Alternatif: gunakan <strong>eSIM</strong> (Airalo, Nomad) yang bisa diaktifkan sebelum boarding dari Indonesia.",
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
        a:"<strong>Bisa, dengan persiapan matang</strong>. Konsultasikan kondisi kesehatan dengan dokter spesialis minimal 1–2 bulan sebelum berangkat. Bawa obat-obatan rutin dalam jumlah cukup beserta surat keterangan dokter berbahasa Inggris/Arab. Pilih hotel paling dekat Haram untuk meminimalkan jarak tempuh. Hindari berdesak-desakan saat kondisi ramai.",
        note:"Klinik kesehatan tersedia di kompleks Masjidil Haram dan Masjid Nabawi, buka 24 jam selama musim umroh."
      },
      {
        q:"Obat-obatan apa saja yang sebaiknya dibawa dari Indonesia?",
        a:"<strong>Wajib bawa</strong>: obat rutin sesuai kondisi, parasetamol/ibuprofen (demam & nyeri), oralit (rehidrasi), antidiare (Imodium/Diapet), antasida (maag), obat batuk & flu, salep antiseptik, plester luka, dan vitamin C. <strong>Sangat disarankan</strong>: obat tetes mata (debu Mekkah banyak), krim pelindung sinar matahari SPF 50+, dan obat tidur ringan jika jet lag.",
        note:"Bawa salinan resep dokter untuk obat-obatan tertentu agar tidak tertahan di bea cukai."
      },
      {
        q:"Bagaimana prosedur mendapatkan bantuan medis di Arab Saudi?",
        a:"Di area Masjidil Haram dan Nabawi tersedia <strong>pos kesehatan gratis</strong> yang bisa langsung didatangi. Untuk kedaruratan, hubungi <strong>911 (ambulans Arab Saudi)</strong>. Jika dirawat inap, segera hubungi <strong>KJRI Jeddah (+966-12-671-1271)</strong> atau KBRI Riyadh untuk bantuan konsuler dan koordinasi asuransi.",
        note:"Simpan nomor KJRI Jeddah di ponsel sebelum berangkat. Pelayanan medis di RS Arab Saudi umumnya sangat baik."
      },
      {
        q:"Bagaimana cara mengatasi diare atau masalah pencernaan saat umroh?",
        a:"Segera minum <strong>oralit</strong> untuk rehidrasi dan kurangi makanan berlemak/pedas. Konsumsi makanan ringan seperti roti, nasi putih, atau pisang. Jika tidak membaik dalam 24 jam atau disertai demam tinggi, kunjungi klinik terdekat di area Haram. <strong>Pencegahan</strong>: cuci tangan sebelum makan, hindari es batu di restoran pinggir jalan, dan pilih makanan yang baru dimasak.",
      },
      {
        q:"Apakah perlu asuransi perjalanan khusus untuk umroh mandiri?",
        a:"<strong>Sangat dianjurkan</strong>. Asuransi perjalanan menanggung biaya rawat inap, evakuasi medis, kehilangan bagasi, dan pembatalan penerbangan. Beberapa produk yang populer di Indonesia: AXA Mandiri Travel, Allianz Travel, atau asuransi dari kartu kredit premium. Pastikan polis mencakup <strong>wilayah Arab Saudi dan aktivitas ibadah</strong>.",
        note:"Biaya perawatan RS di Arab Saudi bisa sangat mahal tanpa asuransi — satu malam rawat inap bisa mencapai SAR 2.000–5.000."
      },
    ]
  },
  {
    cat:"🚗 Transportasi & Logistik",
    items:[
      {
        q:"Apakah lebih baik terbang langsung ke Jeddah atau transit dulu?",
        a:"<strong>Terbang langsung (direct flight)</strong> lebih dianjurkan karena lebih hemat energi, mengurangi risiko kehilangan bagasi, dan lebih mudah pengurusan ihram di pesawat. Tersedia dari Jakarta (CGK), Surabaya (SUB), dan Makassar (UPG) via Garuda, Lion, Batik, dan Saudi Airlines. <strong>Transit</strong> di Kuala Lumpur atau Dubai bisa lebih murah namun perjalanan lebih panjang (16–20 jam total).",
      },
      {
        q:"Bagaimana cara transportasi dari bandara Jeddah ke Mekkah secara mandiri?",
        a:"Ada tiga pilihan: <strong>Taksi resmi (SAPTCO)</strong> tersedia di kedatangan internasional, harga SAR 100–150 ke Mekkah, aman dan resmi. <strong>Uber/Careem</strong> bisa dipesan dari area kedatangan, harga SAR 80–120, lebih murah. <strong>Bus SAPTCO</strong> tersedia dari terminal khusus di bandara, harga SAR 25–35, paling hemat namun perlu jalan kaki membawa koper.",
        note:"Jangan naik taksi tidak resmi yang menawarkan tarif murah di luar area kedatangan — rawan penipuan."
      },
      {
        q:"Apakah bisa menyewa mobil sendiri di Arab Saudi?",
        a:"<strong>Bisa secara teknis</strong>, tersedia di Jeddah, Mekkah, dan Madinah. Namun <strong>tidak direkomendasikan</strong> untuk jamaah umroh karena: parkir di area Haram sangat terbatas, lalu lintas Mekkah saat musim umroh sangat padat, dan jalur satu arah yang membingungkan. Lebih praktis menggunakan <strong>Uber/Careem</strong> yang bisa langsung mengantarkan ke depan Haram.",
      },
      {
        q:"Bagaimana cara pesan taksi di Arab Saudi dan apa aplikasinya?",
        a:"Dua aplikasi utama: <strong>Uber</strong> (tersedia di Jeddah, Mekkah, Madinah) dan <strong>Careem</strong> (lebih populer di Arab Saudi, juga punya opsi motor/Careem Bike). Cara pakai sama seperti di Indonesia — unduh aplikasi, daftarkan nomor HP dengan kartu SIM Arab Saudi, dan gunakan Google Maps untuk destinasi. <strong>Bayar tunai (SAR) atau kartu kredit</strong> bisa keduanya.",
        note:"Simpan nama hotel atau destinasi dalam Bahasa Arab untuk memudahkan komunikasi jika perlu."
      },
    ]
  },
  {
    cat:"🏨 Akomodasi & Makanan",
    items:[
      {
        q:"Hotel bintang berapa yang ideal untuk menginap saat umroh?",
        a:"Untuk umroh mandiri, <strong>hotel bintang 3–4 dalam radius 500m dari Haram</strong> adalah sweet spot terbaik. Bintang 3 di lokasi dekat jauh lebih bernilai daripada bintang 5 yang jauh. Cek ulasan di Booking.com atau Google Maps, prioritaskan: jarak ke Haram, fasilitas lift, dan ketersediaan sarapan halal.",
        note:"Harga hotel naik drastis saat Ramadhan dan akhir tahun. Musim terbaik (harga + cuaca): Oktober–November dan Februari–Maret."
      },
      {
        q:"Bagaimana cara pesan hotel dekat Masjidil Haram secara online?",
        a:"Gunakan <strong>Booking.com atau Agoda</strong>, filter lokasi dengan 'dekat Masjidil Haram' dan aktifkan filter radius jarak. Alternatif: <strong>platform Nusuk (nusuk.sa)</strong> menyediakan akomodasi resmi yang terverifikasi. Pesan minimal <strong>2–3 bulan sebelum keberangkatan</strong> untuk musim biasa, atau 4–6 bulan untuk musim Ramadhan.",
        note:"Selalu pilih opsi 'free cancellation' agar fleksibel jika ada perubahan jadwal."
      },
      {
        q:"Apakah makanan halal mudah ditemukan di Arab Saudi?",
        a:"<strong>Semua makanan di Arab Saudi secara default halal</strong> — tidak ada restoran yang menjual babi atau alkohol. Tersedia banyak pilihan: restoran Indonesia dan Malaysia (Nasi Padang tersebar luas di Mekkah), restoran Arab (mandi, kabsa), fast food internasional (KFC, McDonald's, Pizza Hut), hingga warung pinggir jalan yang murah meriah.",
      },
      {
        q:"Tips apa saja untuk menghemat biaya makan selama di tanah suci?",
        a:"<strong>Tips hemat makan</strong>: (1) Manfaatkan makanan gratis yang sering dibagikan di area Masjidil Haram dan Nabawi oleh donatur, terutama saat magrib. (2) Beli roti, kurma, dan keju di minimarket (Danube, Bin Dawood) untuk sarapan/snack. (3) Cari warung nasi Indonesia di gang-gang kecil sekitar Haram — biasanya SAR 10–15 per porsi. (4) Masak mie instan di hotel jika ada fasilitas kettle.",
        note:"Budget makan hemat: SAR 30–50 per hari. Budget nyaman: SAR 80–150 per hari."
      },
    ]
  },
  {
    cat:"📿 Ibadah & Teknis Pelaksanaan",
    items:[
      {
        q:"Kapan waktu terbaik melakukan tawaf agar tidak terlalu ramai?",
        a:"Waktu paling sepi: <strong>setelah Subuh hingga pukul 08.00</strong> dan <strong>pukul 14.00–15.30</strong> (tengah hari, panas). Waktu paling ramai: setelah Isya hingga tengah malam, dan akhir pekan (Kamis–Jumat malam). Tawaf di lantai atas (rooftop mataf) umumnya lebih longgar meski putarannya lebih panjang.",
        note:"Di luar musim haji dan Ramadhan, tawaf jauh lebih lengang bahkan di jam-jam sibuk."
      },
      {
        q:"Bagaimana hukum niat umroh saat di miqat?",
        a:"Niat umroh hukumnya <strong>rukun (wajib)</strong> dan dilakukan di miqat. Caranya: ucapkan <strong>«لَبَّيْكَ اللَّهُمَّ عُمْرَةً»</strong> (Labbaik Allahumma 'umratan) yang artinya 'Aku memenuhi panggilan-Mu ya Allah untuk umroh', lalu dilanjutkan dengan talbiyah. Niat dalam hati sudah cukup, namun mengucapkan dengan lisan lebih afdhal.",
      },
      {
        q:"Apakah tawaf qudum dan tawaf ifadhah berbeda?",
        a:"<strong>Ya, keduanya berbeda</strong> dan berlaku untuk <strong>ibadah haji</strong>, bukan umroh. Tawaf qudum adalah tawaf selamat datang saat pertama masuk Mekkah (sunnah). Tawaf ifadhah adalah tawaf rukun haji yang dilakukan setelah wukuf di Arafah. Untuk <strong>umroh</strong>, hanya ada satu tawaf, yaitu <strong>tawaf umroh</strong> yang merupakan rukun.",
      },
      {
        q:"Bagaimana cara menghitung putaran tawaf jika terasa pusing?",
        a:"Gunakan <strong>tasbih digital atau jari tangan</strong> untuk menghitung. Jika tiba-tiba lupa sudah putaran ke berapa, ambil angka yang lebih kecil (lebih sedikit) agar lebih aman. Jika pusing atau sesak, <strong>keluar dari mataf dan istirahat</strong> — tawaf boleh dilanjutkan kapan saja, tidak harus dalam satu waktu tanpa jeda, asalkan masih dalam rangkaian yang sama.",
        note:"Selalu minum cukup air sebelum tawaf. Dehidrasi adalah penyebab utama pusing saat tawaf."
      },
      {
        q:"Apakah boleh melakukan tawaf dengan menggunakan kursi roda?",
        a:"<strong>Boleh</strong>. Kursi roda tersedia di pintu-pintu masuk Masjidil Haram (gratis atau berbayar SAR 50–100 dengan jasa pendorong). Jalur khusus kursi roda tersedia di lantai dasar mataf. Orang yang mendorong kursi roda tidak perlu berihram kecuali jika juga berniat tawaf sendiri.",
      },
      {
        q:"Bagaimana hukumnya jika lupa membaca niat saat memulai ibadah?",
        a:"Untuk <strong>ihram</strong>: niat adalah rukun yang wajib — jika benar-benar lupa berniat sama sekali, ihram tidak sah dan harus kembali ke miqat. Namun para ulama menyatakan niat di dalam hati sudah cukup, dan umumnya orang yang menuju miqat dengan tujuan umroh dianggap sudah berniat. Untuk <strong>tawaf dan sa'i</strong>: lupa membaca basmalah atau doa tertentu tidak membatalkan ibadah.",
        note:"Konsultasikan dengan muthawwif (pembimbing) atau ustadz jika ragu tentang keabsahan ibadah."
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
        a:"<strong>Bisa</strong>. Kartu Visa dan Mastercard diterima luas di hotel, mal, restoran besar, dan minimarket. Namun <strong>siapkan uang tunai SAR</strong> untuk kebutuhan di warung kecil, taksi non-aplikasi, pembayaran ziarah, dan pengeluaran di area sekitar Haram yang tidak semua menerima kartu. Gunakan kartu kredit berlogo Visa/Mastercard tanpa biaya transaksi luar negeri.",
        note:"Beberapa bank Indonesia (BCA, Mandiri, BNI) memiliki fitur transaksi bebas biaya internasional — aktifkan sebelum berangkat."
      },
      {
        q:"Di mana tempat penukaran mata uang riyal yang terpercaya?",
        a:"<strong>Terpercaya</strong>: money changer resmi di Bandara Jeddah (kurs sedikit lebih rendah tapi aman untuk kebutuhan awal), bank-bank besar di Mekkah/Madinah, atau money changer berlisensi di area pertokoan sekitar Haram. <strong>Hindari</strong> penukaran di jalan atau kepada orang yang tidak jelas. Di Indonesia, kurs riyal biasanya lebih baik di money changer besar seperti PT Valuta Inti Prima atau PT TT Prima Valuta.",
      },
      {
        q:"Bagaimana cara mengakses WiFi gratis di Masjidil Haram?",
        a:"<strong>WiFi gratis 'Haram-Guest'</strong> tersedia di seluruh area Masjidil Haram dan Masjid Nabawi. Sambungkan ke jaringan tersebut, akan muncul halaman login — masukkan nomor HP Arab Saudi Anda untuk verifikasi OTP. Kecepatan bervariasi, cukup untuk WhatsApp dan navigasi Google Maps.",
        note:"Tetap aktifkan paket data sebagai backup karena WiFi Haram bisa tidak stabil saat sangat ramai."
      },
      {
        q:"Apakah perlu membawa sandal cadangan untuk ihram?",
        a:"<strong>Ya, sangat disarankan</strong>. Sandal sering hilang atau tertukar di area Masjidil Haram dan Nabawi karena jutaan jamaah melepas alas kaki sebelum masuk. Bawa <strong>2 pasang sandal</strong>: satu untuk tawaf dan sa'i (pilih yang kokoh dan anti-slip), satu cadangan di tas. Gunakan sandal dengan tali yang bisa dikunci agar tidak mudah tertukar. Bisa juga menggunakan kantong kain khusus untuk menyimpan sandal.",
        note:"Sandal karet tipis flip-flop tidak disarankan — jarak tempuh saat umroh bisa mencapai 5–10 km per hari."
      },
    ]
  },
];

// ─── FAQ Page ─────────────────────────────────────────────────────────────────
function highlight(text: string, query: string) {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx < 0) return <>{text}</>;
  return <>{text.slice(0, idx)}<mark>{text.slice(idx, idx + query.length)}</mark>{text.slice(idx + query.length)}</>;
}

const FAQPage = ({onClose}:{onClose:()=>void}) => {
  const [openIdx, setOpenIdx] = useState<string|null>(null);
  const [searchQ, setSearchQ] = useState('');

  const toggleItem = (key: string) => setOpenIdx(p => p===key ? null : key);

  const trimmed = searchQ.trim();
  const filtered = trimmed
    ? FAQ_DATA.map(cat => ({
        ...cat,
        items: cat.items.filter(item =>
          item.q.toLowerCase().includes(trimmed.toLowerCase()) ||
          item.a.toLowerCase().includes(trimmed.toLowerCase())
        )
      })).filter(cat => cat.items.length > 0)
    : FAQ_DATA;

  const totalFiltered = filtered.reduce((s, c) => s + c.items.length, 0);
  const totalAll = FAQ_DATA.reduce((s, c) => s + c.items.length, 0);

  let globalNum = 0;

  return (
    <div className="faq-overlay">
      <div className="faq-header">
        <button className="faq-back-btn" onClick={onClose} aria-label="Kembali">‹</button>
        <div className="faq-header-badge">❓</div>
        <div className="faq-header-title">Pertanyaan Umum</div>
        <div className="faq-header-sub">FAQ Ibadah Umroh Mandiri</div>
      </div>

      <div className="faq-search-wrap">
        <div className="faq-search-box">
          <span className="faq-search-icon">🔍</span>
          <input
            className="faq-search-input"
            type="search"
            placeholder="Cari pertanyaan atau kata kunci…"
            value={searchQ}
            onChange={e => { setSearchQ(e.target.value); setOpenIdx(null); }}
            autoCorrect="off"
            autoCapitalize="none"
          />
          {searchQ && (
            <button className="faq-search-clear" onClick={() => { setSearchQ(''); setOpenIdx(null); }} aria-label="Hapus pencarian">✕</button>
          )}
        </div>
      </div>

      <div className="faq-body">
        {trimmed && (
          <div className="faq-search-count">
            {totalFiltered === 0 ? 'Tidak ada hasil' : `${totalFiltered} dari ${totalAll} pertanyaan`}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="faq-search-empty">
            <div className="faq-search-empty-icon">🔎</div>
            <div className="faq-search-empty-text">
              Tidak ditemukan hasil untuk <strong>"{trimmed}"</strong>.<br/>
              Coba kata kunci lain seperti "tawaf", "ihram", atau "paspor".
            </div>
          </div>
        ) : (
          filtered.map((cat, ci) => (
            <div key={ci}>
              <div className="faq-cat-label">{cat.cat}</div>
              {cat.items.map((item, ii) => {
                globalNum++;
                const key = `${ci}-${ii}-${trimmed}`;
                const isOpen = openIdx === key;
                return (
                  <div className="faq-item" key={key}>
                    <div className="faq-q" onClick={() => toggleItem(key)}>
                      <div className="faq-q-num">{globalNum}</div>
                      <div className="faq-q-text">{highlight(item.q, trimmed)}</div>
                      <span className={`faq-arrow${isOpen?" open":""}`}>▾</span>
                    </div>
                    {isOpen && (
                      <div className="faq-a">
                        <span dangerouslySetInnerHTML={{__html: item.a}}/>
                        {item.note && (
                          <div className="faq-note">
                            <span>📌</span>
                            <span>{item.note}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))
        )}

        {!trimmed && (
          <div style={{marginTop:20,textAlign:"center",padding:"16px",background:"var(--surface)",borderRadius:14,border:"1px solid var(--closing-border)"}}>
            <div style={{fontFamily:"Amiri,serif",fontSize:"1.2rem",color:"var(--gold)",marginBottom:5}}>وَاللَّهُ أَعْلَمُ</div>
            <div style={{fontSize:".8rem",color:"var(--muted)",lineHeight:1.65}}>Wallahu a'lam bishawab — Hanya Allah yang Maha Mengetahui.<br/>Bila ragu, konsultasikan dengan ustadz atau pembimbing ibadah. 🤲</div>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Drawer Component ─────────────────────────────────────────────────────────
const Drawer = ({open,onClose,theme,setTheme,fontSize,setFontSize,onResetProgress,onOpenAbout}:{
  open:boolean;onClose:()=>void;theme:string;setTheme:(t:string)=>void;
  fontSize:string;setFontSize:(s:string)=>void;onResetProgress:()=>void;onOpenAbout:()=>void;
}) => {
  const [confirmReset, setConfirmReset] = useState(false);

  const handleReset = () => {
    if (!confirmReset) { setConfirmReset(true); return; }
    onResetProgress();
    setConfirmReset(false);
    onClose();
  };

  return (
    <>
      <div className={`drawer-overlay ${open?"open":""}`} onClick={onClose}/>
      <div className={`drawer ${open?"open":""}`}>
        <div className="drawer-head">
          <div className="drawer-head-arabic">بِسْمِ اللَّهِ</div>
          <div className="drawer-head-title">Umroh Mandiri</div>
          <div className="drawer-head-sub">Pengaturan & Referensi</div>
        </div>

        <div className="drawer-body">
          <div className="drawer-section-label">🎨 Tampilan</div>

          <div style={{paddingLeft:16,paddingRight:16,marginBottom:4}}>
            <div style={{fontSize:".74rem",fontWeight:600,color:"var(--muted)",marginBottom:5}}>Mode Tema</div>
            <div className="seg-ctrl">
              {([["auto","🖥️ Auto"],["light","☀️ Terang"],["dark","🌙 Gelap"]] as [string,string][]).map(([v,l])=>(
                <button key={v} className={`seg-btn ${theme===v?"active":""}`} onClick={()=>setTheme(v)}>{l}</button>
              ))}
            </div>
          </div>

          <div style={{paddingLeft:16,paddingRight:16,marginBottom:4}}>
            <div style={{fontSize:".74rem",fontWeight:600,color:"var(--muted)",marginBottom:5,marginTop:10}}>Ukuran Teks</div>
            <div className="seg-ctrl">
              {([["normal","🔤 Normal"],["large","🔡 Besar"]] as [string,string][]).map(([v,l])=>(
                <button key={v} className={`seg-btn ${fontSize===v?"active":""}`} onClick={()=>setFontSize(v)}>{l}</button>
              ))}
            </div>
          </div>

          <div className="drawer-section-label">⚙️ Alat</div>

          <button className="drawer-item" onClick={handleReset}>
            <div className="drawer-item-icon warn">🔄</div>
            <div className="drawer-item-text">
              <div className="drawer-item-label">Reset Progress Persiapan</div>
              <div className="drawer-item-desc">Hapus semua centang checklist</div>
            </div>
          </button>
          {confirmReset && (
            <div className="reset-confirm">
              <div className="reset-confirm-text">⚠️ Semua centang checklist akan dihapus. Yakin?</div>
              <div className="reset-confirm-btns">
                <button className="reset-btn-yes" onClick={handleReset}>Ya, Reset</button>
                <button className="reset-btn-no" onClick={()=>setConfirmReset(false)}>Batal</button>
              </div>
            </div>
          )}

          <div className="drawer-section-label">ℹ️ Informasi</div>

          <button className="drawer-item" onClick={()=>{onClose();setTimeout(onOpenAbout,200);}}>
            <div className="drawer-item-icon purple">🕌</div>
            <div className="drawer-item-text">
              <div className="drawer-item-label">Tentang Aplikasi</div>
              <div className="drawer-item-desc">Profil author & info aplikasi</div>
            </div>
            <span className="drawer-item-chev">›</span>
          </button>

          <div style={{padding:"10px 20px 4px"}}>
            <span className="pwa-badge">
              <span className="pwa-dot"/>
              Tersedia Offline
            </span>
          </div>
        </div>
      </div>
    </>
  );
};


// ─── APP ───────────────────────────────────────────────────────────────────────
export default function UmrohApp() {
  const [tab, setTab]               = useState(()=>{ try{return localStorage.getItem("umrah-tab")||"persiapan";}catch{return "persiapan";} });
  const [checked, setChecked]       = useState<Record<number,boolean>>(()=>{try{return JSON.parse(localStorage.getItem("umrah-checked")||"{}");}catch{return {};}});
  const [openStep, setOpenStep]     = useState<number|null>(null);
  const [openPrep, setOpenPrep]     = useState<number|null>(null);
  const [subTabs, setSubTabs]       = useState<Record<number,string>>(()=>{try{return JSON.parse(localStorage.getItem("umrah-subtabs")||"{}");}catch{return {};}});
  const [detailOpen, setDetailOpen] = useState<Record<string,boolean>>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme]           = useState(()=>{ try{return localStorage.getItem("umrah-theme")||"light";}catch{return "light";} });
  const [fontSize, setFontSize]     = useState(()=>{ try{return localStorage.getItem("umrah-fontsize")||"normal";}catch{return "normal";} });
  const [showTop, setShowTop]       = useState(false);
  const [query, setQuery]           = useState("");
  const [showAbout, setShowAbout]   = useState(false);
  const [showFAQ, setShowFAQ]       = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(()=>{
    try { return !localStorage.getItem("umrah-onboarded"); } catch { return false; }
  });
  const [isOffline, setIsOffline] = useState(() => typeof navigator !== "undefined" && !navigator.onLine);
  const [offlineDismissed, setOfflineDismissed] = useState(false);

  const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme:dark)").matches;
  const isDark = theme==="dark" || (theme==="auto" && prefersDark);

  useEffect(()=>{try{localStorage.setItem("umrah-checked",JSON.stringify(checked));}catch{}},[checked]);
  useEffect(()=>{try{localStorage.setItem("umrah-theme",theme);}catch{}},[theme]);
  useEffect(()=>{try{localStorage.setItem("umrah-fontsize",fontSize);}catch{}},[fontSize]);
  useEffect(()=>{try{localStorage.setItem("umrah-tab",tab);}catch{}},[tab]);
  useEffect(()=>{try{localStorage.setItem("umrah-subtabs",JSON.stringify(subTabs));}catch{}},[subTabs]);
  useEffect(()=>{
    const onScroll = () => setShowTop(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, {passive:true});
    return () => window.removeEventListener("scroll", onScroll);
  },[]);
  useEffect(()=>{
    const goOffline = () => { setIsOffline(true); setOfflineDismissed(false); };
    const goOnline  = () => setIsOffline(false);
    window.addEventListener("offline", goOffline);
    window.addEventListener("online",  goOnline);
    return () => { window.removeEventListener("offline",goOffline); window.removeEventListener("online",goOnline); };
  },[]);

  const handleOnboardingDone = () => {
    try { localStorage.setItem("umrah-onboarded","1"); } catch {}
    setShowOnboarding(false);
  };

  const toggleCheck  = (e: React.MouseEvent, id: number) => {e.stopPropagation();setChecked(p=>({...p,[id]:!p[id]}));};
  const togglePrep   = (id: number)  => setOpenPrep(p=>p===id?null:id);
  const toggleStep   = (i: number)   => setOpenStep(p=>p===i?null:i);
  const toggleDetail = (key: string) => setDetailOpen(p=>({...p,[key]:!p[key]}));
  const setSubTab    = (i: number,t: string) => setSubTabs(p=>({...p,[i]:t}));
  const resetProgress = () => {setChecked({});try{localStorage.removeItem("umrah-checked");}catch{}};

  const allItems  = prepData.flatMap(s=>s.items);
  const doneCount = allItems.filter(i=>checked[i.id]).length;
  const pct       = Math.round((doneCount/allItems.length)*100);
  const appClasses = `app${fontSize==="large"?" fs-large":""}`;

  const q = query.trim().toLowerCase();
  const highlight = (text: string): React.ReactNode => {
    if (!q || !text) return text;
    const idx = text.toLowerCase().indexOf(q);
    if (idx < 0) return text;
    return <>{text.slice(0,idx)}<mark className="search-highlight">{text.slice(idx,idx+q.length)}</mark>{text.slice(idx+q.length)}</>;
  };
  const prepResults = q ? prepData.flatMap(sec=>
    sec.items.filter(item=>
      item.title.toLowerCase().includes(q) ||
      (item.tips||[]).some((t: string)=>t.toLowerCase().includes(q))
    ).map(item=>({...item, _section:sec.section}))
  ) : [];
  const tutResults = q ? tutorialData.filter(item=>
    item.title.toLowerCase().includes(q) ||
    (item.subtitle||"").toLowerCase().includes(q)
  ) : [];
  const totalResults = prepResults.length + tutResults.length;

  return (
    <>
      <style>{buildStyle(theme, prefersDark)}</style>
      <div className={appClasses}>

        {/* ── ONBOARDING ── */}
        {showOnboarding && <Onboarding onDone={handleOnboardingDone}/>}

        {/* ── ABOUT PAGE ── */}
        {showAbout && <AboutPage onClose={()=>setShowAbout(false)}/>}

        {/* ── FAQ PAGE ── */}
        {showFAQ && <FAQPage onClose={()=>setShowFAQ(false)}/>}

        <div className="content">
          {/* ── OFFLINE BANNER ── */}
          {isOffline && !offlineDismissed && (
            <div className="offline-banner">
              <span style={{fontSize:"1.05rem"}}>📵</span>
              <span>Anda sedang offline — konten panduan tetap tersedia</span>
              <button className="ob-close" onClick={()=>setOfflineDismissed(true)} aria-label="Tutup">✕</button>
            </div>
          )}

          {/* ── HEADER ── */}
          <div className="header">
            <div className="header-geo"/>
            <div className="header-inner">
              <div className="nav-top">
                <button className={`ham-btn ${drawerOpen?"open":""}`} onClick={()=>setDrawerOpen(p=>!p)} aria-label="Menu">
                  <span className="ham-line"/>
                  <span className="ham-line"/>
                  <span className="ham-line"/>
                </button>
                <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
                <button className="faq-btn" onClick={()=>setShowFAQ(true)}>FAQ</button>
              </div>

              <div className="kaaba-container">
                <div className="kaaba-glow"></div>
                <div className="kaaba-icon" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <img src="assets/kaaba-logo.png" alt="Kaaba Logo" style={{width:'100%', height:'100%', objectFit:'contain'}} />
                </div>
              </div>

              <h1>Umroh Mandiri</h1>
              <div className="subtitle">
                Panduan Lengkap <span style={{opacity: 0.5}}>•</span> <span className="subtitle-arabic">دليل العمرة المستقلة</span>
              </div>
            </div>
          </div>

          <div className="body-container">
            <div className="body-pattern"></div>
            <div className="body-inner">
              {/* ── TABS ── */}
              <div className="tab-bar-modern">
                <button className={`tab-btn-modern ${tab==="persiapan"?"active":""}`} onClick={()=>{setTab("persiapan");setQuery("");}}>
                  <span className="tab-icon-wrap">📋</span> Persiapan
                </button>
                <button className={`tab-btn-modern ${tab==="tutorial"?"active":""}`}  onClick={()=>{setTab("tutorial");setQuery("");}}>
                  <span className="tab-icon-wrap">🕋</span> Tutorial
                </button>
              </div>

              <div className="main" style={{position:"relative", zIndex:20}}>
            {/* ── SEARCH BAR ── */}
            <div className="search-bar-modern">
              <span className="search-icon-modern">🔍</span>
              <input
                className="search-input-modern"
                type="search"
                placeholder="Cari topik, doa, dokumen..."
                value={query}
                onChange={e=>setQuery(e.target.value)}
                autoCorrect="off"
                autoCapitalize="none"
              />
              {query && <button className="search-clear" onClick={()=>setQuery("")} aria-label="Hapus pencarian">✕</button>}
            </div>
            {q && <div className="search-results-count">{totalResults > 0 ? `${totalResults} hasil ditemukan` : "Tidak ada hasil"}</div>}

            {/* ── SEARCH RESULTS ── */}
            {q && (
              <div>
                {totalResults === 0 && (
                  <div className="no-results">
                    <div style={{fontSize:"2rem",marginBottom:8}}>🔍</div>
                    <div>Tidak ada hasil untuk <strong>"{query}"</strong></div>
                    <div style={{fontSize:".8rem",marginTop:6}}>Coba kata kunci lain seperti "paspor", "tawaf", atau "dam"</div>
                  </div>
                )}
                {prepResults.length > 0 && (
                  <div style={{marginBottom:12}}>
                    <div className="section-label" style={{marginBottom:8}}>📋 Persiapan ({prepResults.length})</div>
                    {prepResults.map(item=>(
                      <div key={item.id} className="check-card" style={{padding:"10px 14px",cursor:"pointer"}}
                        onClick={()=>{setTab("persiapan");setQuery("");}}>
                        <div style={{fontWeight:600,fontSize:"1rem",color:"var(--ink)",marginBottom:2}}>{highlight(item.title)}</div>
                        <div style={{fontSize:".78rem",color:"var(--muted)"}}>📂 {item._section}</div>
                        {(item.tips||[]).filter((t: string)=>t.toLowerCase().includes(q)).slice(0,1).map((t: string,i: number)=>(
                          <div key={i} style={{fontSize:".83rem",color:"var(--muted)",marginTop:4,lineHeight:1.5}}>…{highlight(t)}…</div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                {tutResults.length > 0 && (
                  <div>
                    <div className="section-label" style={{marginBottom:8}}>🕋 Tutorial ({tutResults.length})</div>
                    {tutResults.map((item,idx)=>(
                      <div key={idx} className="step-card" style={{padding:"10px 14px",cursor:"pointer"}}
                        onClick={()=>{setTab("tutorial");setQuery("");}}>
                        <div style={{display:"flex",alignItems:"center",gap:10}}>
                          <span style={{fontSize:"1.4rem"}}>{item.emoji}</span>
                          <div>
                            <div style={{fontWeight:700,fontSize:"1rem",color:"var(--ink)"}}>{highlight(item.title)}</div>
                            <div style={{fontSize:".84rem",color:"var(--muted)",marginTop:2}}>{highlight(item.subtitle||"")}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ── PERSIAPAN ── */}
            {!q && tab==="persiapan"&&(
              <>
                <div className="info-banner-modern">
                  <span className="icon">📝</span>
                  <div className="text">
                    <strong>Daftar Persiapan Umroh</strong>
                    <span>Lengkapi dokumen dan persiapan fisik Anda sebelum keberangkatan.</span>
                    <span>Ketuk item untuk melihat tips dan panduan detail.</span>
                  </div>
                </div>

                <div className="progress-card-modern">
                  <div className="progress-header-modern">
                    <span className="progress-title-modern">PROGRESS PERSIAPAN</span>
                    <span className="progress-pct-modern">{pct}%</span>
                  </div>
                  <div className="progress-track-modern">
                    <div className="progress-fill-modern" style={{width:`${pct}%`}}/>
                  </div>
                  <div className="progress-info-modern">
                    <span>{doneCount} dari {allItems.length} item selesai</span>
                    <span className="progress-status-modern">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:6}}><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Tersimpan otomatis
                    </span>
                  </div>
                </div>

                {prepData.map((sec,si)=>(
                  <div className="section" key={si}>
                    <div className="section-label-modern">{sec.section}</div>
                    {sec.items.map(item=>{
                      const isOpen=openPrep===item.id, isDone=!!checked[item.id];
                      return (
                        <div key={item.id} className={`check-card-modern ${isDone?"done":""} ${isOpen?"expanded":""}`}>
                          <div className="check-item-modern" onClick={()=>togglePrep(item.id)}>
                            <div className="checkbox-modern" onClick={e=>toggleCheck(e,item.id)}>
                              {isDone&&<svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            </div>
                            <div className="check-main-modern">
                              <div className="check-title-modern">{item.title}</div>
                            </div>
                            <div className="check-right-modern">
                              <span className={`badge-modern ${item.badge}`}>
                                {item.badge==="penting"?"Wajib":item.badge==="opsional"?"Opsional":"Dianjurkan"}
                              </span>
                              <span className={`expand-arrow-modern ${isOpen?"open":""}`}>▾</span>
                            </div>
                          </div>
                          {isOpen&&(
                            <div className="tips-panel">
                              <div className="tips-header">💡 Tips &amp; Cara Mendapatkan</div>
                              <ul className="tip-list">{item.tips.map((t,ti)=><li key={ti}>{t}</li>)}</ul>
                              {item.links&&<div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:8}}>
                                {item.links.map((lnk,li)=>(
                                  <a key={li} href={lnk.url} target="_blank" rel="noopener noreferrer"
                                    className={`tips-link-btn${lnk.outline?" tips-link-btn-outline":""}`}>
                                    {lnk.icon} {lnk.label}
                                  </a>
                                ))}
                              </div>}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </>
            )}

            {/* ── TUTORIAL ── */}
            {!q && tab==="tutorial"&&(
              <>
                <div className="info-banner-modern">
                  <span className="icon">🕌</span>
                  <div className="text">
                    <strong>Urutan Ibadah Umroh</strong>
                    <span>Ikuti langkah-langkah berikut secara berurutan.</span>
                    <span>Ketuk kartu untuk detail, doa, dan panduan lengkap.</span>
                  </div>
                </div>
                {tutorialData.map((item,idx)=>(
                  <div className="step-card-modern" key={idx}>
                    <div className="step-header-modern" onClick={()=>toggleStep(idx)}>
                      <div className={`step-icon-modern ${item.gold?"gold":""}`}>{item.emoji}</div>
                      <div className="step-info-modern">
                        <div className="step-title-modern">{item.title}</div>
                        <div className="step-subtitle-modern">{item.subtitle}</div>
                      </div>
                      <span className={`chevron-modern ${openStep===idx?"open":""}`}>▾</span>
                    </div>
                    {openStep===idx&&(
                      <div className="step-body">
                        {item.content({D:detailOpen,T:toggleDetail,subTab:subTabs[idx]||item.defaultSubTab||"default",setSubTab:t=>setSubTab(idx,t)})}
                      </div>
                    )}
                  </div>
                ))}
                <div style={{marginTop:16,textAlign:"center",padding:"16px",background:"var(--surface)",borderRadius:14,border:"1px solid var(--closing-border)"}}>
                  <div style={{fontFamily:"Amiri,serif",fontSize:"1.3rem",color:"var(--gold-light)",marginBottom:6}}>تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ</div>
                  <div style={{fontSize:".82rem",color:"var(--muted)"}}>Semoga Allah menerima ibadah dari kami dan dari kalian.<br/>Aamiin Yaa Rabbal 'Aalamiin 🤲</div>
                </div>
              </>
            )}
              </div> {/* End of main */}
            </div> {/* End of body-inner */}
          </div> {/* End of body-container */}
        </div> {/* End of content */}
      </div> {/* End of appClasses */}

      {/* ── BACK TO TOP ── */}
      <button
        className={`back-to-top${showTop?" visible":""}`}
        onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
        aria-label="Kembali ke atas"
      >↑</button>

      {/* ── DRAWER ── */}
      <Drawer
        open={drawerOpen}
        onClose={()=>setDrawerOpen(false)}
        theme={theme} setTheme={setTheme}
        fontSize={fontSize} setFontSize={setFontSize}
        onResetProgress={resetProgress}
        onOpenAbout={()=>setShowAbout(true)}
      />
    </>
  );
}
