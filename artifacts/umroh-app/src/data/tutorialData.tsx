import React from 'react';
import { SubTabs, DS } from '../components/ui/TutorialUI';
import { MiniMap } from '../components/ui/MapComponents';

export type TutItem = {
  emoji:string;title:string;subtitle:string;gold:boolean;defaultSubTab:string|null;
  content:(props:{D:Record<string,boolean>;T:(k:string)=>void;subTab:string;setSubTab:(t:string)=>void})=>React.ReactNode;
};

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
              • <strong>Transit Qatar (DOH)</strong> → Berihramlah di bandara Doha sebelum boarding ke Jeddah.<br/>
              • <strong>Transit Dubai (DXB)</strong> → Berihramlah di bandara Dubai sebelum naik penerbangan ke Jeddah.<br/>
              • <strong>Transit Kuwait (KWI)</strong> → Kenakan ihram sebelum boarding dari Kuwait menuju Jeddah.<br/>
              • <strong>Transit Oman (MCT)</strong> → Berihramlah di bandara Muscat sebelum terbang ke Jeddah.<br/>
              ⚠️ Jika terlewat miqat tanpa ihram, wajib membayar <strong>dam (denda)</strong>.</p></div>
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
              <div className="doa-arabic">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ</div>
              <div className="doa-latin">Labbaik Allāhumma labbaik, labbaik lā syarīka laka labbaik, innal-ḥamda wan-ni'mata laka wal-mulk, lā syarīka lak</div>
              <div className="doa-arti">"Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Tiada sekutu bagi-Mu."</div>
            </div>
          </DS>
          <DS id="mq4" title="4. Umroh Kedua & Seterusnya — Miqat & Cara Ihram" open={D["mq4"]} onToggle={T}>
            <p>Bagi yang ingin melakukan <strong>umroh lebih dari sekali dalam satu perjalanan</strong> (umroh sunnah), setelah umroh pertama selesai (tahallul), ihram tidak lagi aktif dan harus dimulai ulang dari miqat.</p>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Miqat yang digunakan:</strong> Karena Anda sudah berada di Mekkah, miqat makani (batas wilayah) tidak bisa dilalui lagi. Gantinya, gunakan salah satu <strong>miqat di dalam atau dekat Mekkah</strong> yang diizinkan syariat:</li>
            </ul>
            <div className="info-box">
              <p>🕌 <strong>Masjid Ji'ranah (Al-Ji'ranah)</strong> — ±24 km dari Masjidil Haram, arah timur laut. <em>Paling utama</em> — Rasulullah ﷺ berihram dari sini setelah Perang Hunain.<br/>
              🕌 <strong>Masjid Tan'im (Al-Miqat)</strong> — ±6 km dari Masjidil Haram, arah utara. Paling dekat dan paling sering digunakan jamaah karena mudah dijangkau dengan taksi. Juga disebut "Masjid Aisyah" karena Aisyah r.a. pernah berihram di sini.<br/>
              🕌 <strong>Masjid Hudaibiyah (Asy-Syumaisi)</strong> — ±22 km dari Masjidil Haram, arah barat.</p>
            </div>
            <ul className="tip-list">
              <li><span className="step-badge">2</span><strong>Cara pergi ke miqat:</strong> Naik taksi atau ojek online (Uber/Careem) dari area hotel ke Masjid Tan'im atau Ji'ranah. Beritahu sopir: <em>"Masjid Tan'im"</em> atau <em>"Miqat Ji'ranah"</em>. Ongkos taksi sekitar SAR 20–50 pulang-pergi.</li>
              <li><span className="step-badge">3</span><strong>Di miqat:</strong> Mandi sunnah ihram (jika memungkinkan), kenakan pakaian ihram, shalat sunnah 2 rakaat (jika bukan waktu terlarang), lalu ucapkan niat ihram umroh dan mulailah bertalbiyah.</li>
              <li><span className="step-badge">4</span><strong>Kembali ke Masjidil Haram:</strong> Dalam kondisi ihram, jaga semua larangan ihram selama perjalanan kembali ke Haram untuk memulai tawaf.</li>
            </ul>
            <div className="warn-box"><p>⚠️ <strong>Tidak boleh berihram dari dalam Masjidil Haram atau dari kamar hotel di Mekkah</strong> — ini melewati batas miqat tanpa ihram dan wajib dam. Wajib keluar dulu ke salah satu miqat di atas sebelum berniat.</p></div>
            <div className="info-box"><p>💡 <strong>Tips:</strong> Sebagian jamaah memilih pergi ke Masjid Tan'im setelah shalat Isya atau sebelum Subuh agar Masjidil Haram tidak terlalu padat saat memulai umroh berikutnya.</p></div>
          </DS>
        </div>}
        {subTab==="ihram"&&<div>
          <DS id="ih1" title="Larangan Saat Ihram (Pria & Wanita)" open={D["ih1"]} onToggle={T}>
            <ul className="larangan-list">
              <li>Memotong/mencabut rambut atau bulu tubuh</li>
              <li>Memotong kuku</li>
              <li>Memakai wewangian/parfum setelah niat ihram</li>
              <li>Berhubungan suami-istri dan segala mukadimahnya</li>
              <li>Berburu atau membunuh binatang darat</li>
              <li>Menikah atau menikahkan</li>
              <li>Berkata-kata kotor, bertengkar, atau berbuat fasik</li>
            </ul>
          </DS>
          <DS id="ih2" title="Larangan Khusus Pria" open={D["ih2"]} onToggle={T}>
            <ul className="larangan-list">
              <li>Menutup kepala dengan topi, peci, atau sejenisnya</li>
              <li>Memakai pakaian berjahit yang mengikuti lekuk tubuh</li>
              <li>Memakai sepatu yang menutup mata kaki dan tumit</li>
            </ul>
          </DS>
          <DS id="ih3" title="Larangan Khusus Wanita" open={D["ih3"]} onToggle={T}>
            <ul className="larangan-list">
              <li>Memakai sarung tangan (cakar)</li>
              <li>Memakai niqab (penutup wajah) — wajah harus terbuka</li>
            </ul>
          </DS>
        </div>}
        {subTab==="dam-sebab"&&<div>
          <DS id="dam1" title="Apa itu Dam?" open={D["dam1"]} onToggle={T}>
            <p><strong>Dam</strong> adalah denda berupa penyembelihan hewan yang wajib dibayar ketika jamaah melanggar ketentuan ihram atau meninggalkan salah satu wajib umroh/haji.</p>
            <div className="info-box"><p>📌 Dam bukan berarti umroh/haji tidak sah. Ibadah tetap sah, namun ada kewajiban tambahan yang harus dipenuhi sebagai kafarat (penebus).</p></div>
          </DS>
          <DS id="dam2" title="Penyebab Wajib Dam" open={D["dam2"]} onToggle={T}>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Rafast (hubungan suami-istri)</strong> saat ihram — dam berupa 1 ekor unta/sapi atau 7 ekor kambing</li>
              <li><span className="step-badge">2</span><strong>Melewati miqat tanpa ihram</strong> — dam 1 ekor kambing</li>
              <li><span className="step-badge">3</span><strong>Mencukur rambut/memotong kuku</strong> saat ihram — dam fidyah: puasa 3 hari, atau sedekah 3 sha' makanan, atau sembelih 1 kambing</li>
              <li><span className="step-badge">4</span><strong>Memakai wewangian/pakaian berjahit</strong> — sama dengan poin 3</li>
              <li><span className="step-badge">5</span><strong>Tawaf Wada' ditinggalkan</strong> — dam 1 ekor kambing</li>
            </ul>
          </DS>
        </div>}
        {subTab==="dam-cara"&&<div>
          <DS id="dam3" title="Cara Membayar Dam" open={D["dam3"]} onToggle={T}>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Via Bank Al-Rajhi / Bank Saudi:</strong> Transfer ke rekening resmi penyembelihan dam yang ditunjuk pemerintah Saudi. Tanyakan kepada muthawwif atau petugas masjid setempat untuk rekening yang valid dan terpercaya</li>
              <li><span className="step-badge">2</span><strong>Via Lembaga Resmi Saudi:</strong> Yayasan penyembelihan hewan kurban resmi yang beroperasi di Makkah menerima pembayaran dam</li>
              <li><span className="step-badge">3</span><strong>Via PPIU/Agen Perjalanan Anda:</strong> Beberapa agen memiliki layanan pembayaran dam — tanyakan sebelum berangkat</li>
            </ul>
            <div className="warn-box"><p>⚠️ Dam HARUS disembelih di dalam wilayah tanah haram (Mekkah dan sekitarnya). Dagingnya harus diberikan kepada fakir miskin setempat.</p></div>
          </DS>
          <DS id="dam5" title="Estimasi Biaya Dam" open={D["dam5"]} onToggle={T}>
            <ul className="tip-list">
              <li><strong>Kambing/Domba:</strong> SAR 300–600 (±Rp1.350.000–2.700.000)</li>
              <li><strong>Sapi (1/7 bagian):</strong> SAR 1.000–2.500</li>
              <li><strong>Fidyah makanan:</strong> SAR 30–50 per orang (×6 = SAR 180–300)</li>
              <li>Siapkan dana cadangan SAR 400–700 untuk kemungkinan dam</li>
            </ul>
          </DS>
        </div>}
      </div>
    )
  },
  {emoji:"🕋",title:"Masuk & Sholat di Masjidil Haram",subtitle:"Adab masuk, keutamaan & panduan sholat berjamaah",gold:true,defaultSubTab:"sh-masuk",
    content:({D,T,subTab,setSubTab})=>(
      <div>
        <SubTabs tabs={[{id:"sh-masuk",label:"🚪 Masuk"},{id:"sh-panduan",label:"📋 Sholat"},{id:"sh-waktu",label:"🕐 Waktu"},{id:"sh-adab",label:"🤲 Adab"}]} active={subTab} onChange={setSubTab}/>
        {subTab==="sh-masuk"&&<div>
          <DS id="sh-masuk1" title="🚪 Tata Cara Memasuki Masjidil Haram" open={D["sh-masuk1"]} onToggle={T}>
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
          </DS>
        </div>}
        {subTab==="sh-panduan"&&<div>
          <DS id="sh1" title="🕋 Keutamaan Sholat di Masjidil Haram" open={D["sh1"]} onToggle={T}>
            <div className="info-box"><p>💎 Satu rakaat sholat di Masjidil Haram setara dengan <strong>100.000 rakaat</strong> di masjid lain (HR. Ibnu Majah). Jangan lewatkan satu pun sholat fardhu berjamaah selama di Makkah.</p></div>
            <ul className="tip-list">
              <li>Utamakan sholat fardhu langsung di dalam Masjidil Haram, bukan di hotel</li>
              <li>Usahakan hadir <strong>20–30 menit sebelum iqamah</strong> — masjid sangat padat</li>
              <li>Sholat Jum'at: datang minimal 2 jam sebelum waktu untuk dapat shaf dekat</li>
            </ul>
          </DS>
          <DS id="sh3" title="📿 Sholat Sunnah Khusus di Masjidil Haram" open={D["sh3"]} onToggle={T}>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Sholat Tahiyatul Masjid:</strong> 2 rakaat saat pertama kali masuk</li>
              <li><span className="step-badge">2</span><strong>Sholat di Hijr Ismail:</strong> 2 rakaat — pahala setara sholat di dalam Ka'bah</li>
              <li><span className="step-badge">3</span><strong>Sholat 2 rakaat di Maqam Ibrahim:</strong> Dianjurkan setelah selesai tawaf</li>
            </ul>
          </DS>
        </div>}
        {subTab==="sh-waktu"&&<div>
          <DS id="sh4" title="🕐 Jadwal Sholat & Strategi Waktu" open={D["sh4"]} onToggle={T}>
            <div className="warn-box"><p>⏰ Jadwal sholat di Arab Saudi berbeda dengan Indonesia. Set aplikasi Muslim Pro/Athan ke lokasi Makkah sebelum berangkat.</p></div>
            <ul className="tip-list">
              <li><strong>Subuh:</strong> ±05:00–05:30 — paling tenang, shaf lebih longgar</li>
              <li><strong>Dzuhur:</strong> ±12:15–12:30 — sangat panas di musim panas</li>
              <li><strong>Ashar:</strong> ±15:30–16:00 — mulai ramai</li>
              <li><strong>Maghrib:</strong> ±18:00–18:15 — paling padat, datang 30 menit lebih awal</li>
              <li><strong>Isya:</strong> ±19:30–20:00</li>
            </ul>
            <div className="info-box"><p>💡 Manfaatkan waktu antara Maghrib–Isya (±1,5 jam) untuk tawaf sunnah karena suhu sudah turun.</p></div>
          </DS>
        </div>}
        {subTab==="sh-adab"&&<div>
          <DS id="sh6" title="🚫 Adab & Larangan di Area Sholat" open={D["sh6"]} onToggle={T}>
            <ul className="larangan-list">
              <li>Dilarang berjalan di depan orang yang sedang sholat</li>
              <li>Matikan atau silent HP sebelum masuk area sholat</li>
              <li>Dilarang foto/video di dalam masjid saat sholat berlangsung</li>
            </ul>
            <ul className="larangan-list sunnah-list" style={{marginTop:8}}>
              <li>Berwudhu dari hotel sebelum berangkat ke masjid — antrian wudhu bisa panjang</li>
              <li>Bawa Al-Quran kecil atau murojaah hafalan saat menunggu iqamah</li>
            </ul>
          </DS>
          <DS id="sh7" title="🤲 Doa Setelah Sholat di Masjidil Haram" open={D["sh7"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Doa Memasuki Masjid</div>
              <div className="doa-arabic">اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ</div>
              <div className="doa-latin">Allāhummaftaḥ lī abwāba raḥmatik</div>
              <div className="doa-arti">"Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu."</div>
            </div>
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
            <li><span className="step-badge">1</span><strong>Tawaf Qudum</strong> — Saat pertama tiba di Makkah. Hukum: <em>sunnah</em>.</li>
            <li><span className="step-badge">2</span><strong>Tawaf Umroh (Rukun)</strong> — Bagian inti ibadah umroh. Hukum: <em>rukun</em> — tidak bisa digantikan dam.</li>
            <li><span className="step-badge">3</span><strong>Tawaf Wada' (Perpisahan)</strong> — Dilakukan sesaat sebelum meninggalkan Makkah. Hukum: <em>wajib</em>.</li>
            <li><span className="step-badge">4</span><strong>Tawaf Sunnah</strong> — Kapan saja selama di Makkah. Sangat dianjurkan.</li>
          </ul>
        </DS>
        <DS id="tw3" title="✅ Syarat Sahnya Tawaf" open={D["tw3"]} onToggle={T}>
          <ul className="tip-list">
            <li>Suci dari hadas kecil (wudhu) dan hadas besar</li>
            <li>Ka'bah berada di sebelah kiri selama tawaf</li>
            <li>Dimulai tepat dari garis sejajar Hajar Aswad</li>
            <li>Dilakukan genap 7 putaran penuh</li>
          </ul>
          <div className="warn-box"><p>⚠️ Wanita haid tidak boleh tawaf. Sa'i boleh dilakukan dalam keadaan haid.</p></div>
        </DS>
        <DS id="tw5" title="📖 Cara Pelaksanaan" open={D["tw5"]} onToggle={T}>
          <ul className="tip-list">
            <li><span className="step-badge">1</span>Wudhu. Pria: idhtiba (buka bahu kanan).</li>
            <li><span className="step-badge">2</span>Berdiri sejajar bahu kiri dengan Hajar Aswad.</li>
            <li><span className="step-badge">3</span>Istilam: "Bismillahi Allahu Akbar"</li>
            <li><span className="step-badge">4</span>Berjalan berlawanan jarum jam (Ka'bah di kiri).</li>
            <li><span className="step-badge">5</span>Rukun Yamani: usap tangan kanan jika bisa.</li>
            <li><span className="step-badge">6</span>Antara Rukun Yamani–Hajar Aswad: baca doa sapu jagad.</li>
            <li><span className="step-badge">7</span>Selesai 7 putaran → shalat 2 rakaat di Maqam Ibrahim.</li>
          </ul>
          <div className="doa-box">
            <div className="doa-label">Doa antara Rukun Yamani & Hajar Aswad</div>
            <div className="doa-arabic">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</div>
            <div className="doa-latin">Rabbanā ātinā fid-dunyā ḥasanah, wa fil-ākhirati ḥasanah, wa qinā 'adzāban-nār</div>
            <div className="doa-arti">"Ya Tuhan kami, berikanlah kebaikan di dunia dan di akhirat, dan peliharalah kami dari azab neraka."</div>
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
        <p>Sa'i adalah berjalan bolak-balik antara bukit Shafa dan Marwah sebanyak <strong>7 kali</strong>, dimulai dari Shafa dan diakhiri di Marwah.</p>
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
            <div className="doa-arabic">إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ</div>
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
        <p>Tahallul adalah mencukur atau memotong rambut sebagai tanda berakhirnya ihram dan selesainya umroh.</p>
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
        <div className="info-box"><p>🎉 Selamat! Umroh Anda telah selesai. Perbanyak tawaf sunnah, doa, dan dzikir selama masih di Mekkah.</p></div>
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
              <div className="doa-arabic">اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ</div>
              <div className="doa-latin">Allāhumma innī as'aluka 'ilman nāfi'an wa rizqan wāsi'an wa syifā'an min kulli dā'</div>
              <div className="doa-arti">"Ya Allah, aku memohon ilmu yang bermanfaat, rezeki yang luas, dan kesembuhan dari segala penyakit."</div>
            </div>
          </DS>
        </div>}
        {subTab==="mk-sunnah"&&<div>
          <DS id="mk4" title="🕌 Sunnah di Masjidil Haram" open={D["mk4"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Memperbanyak tawaf sunnah — waktu terbaik dini hari 02.00–05.00</li>
              <li>Berdoa di Multazam (tempelkan dada dan tangan ke dinding)</li>
              <li>Membaca Al-Qur'an dan i'tikaf di dalam masjid</li>
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
          <MiniMap maps={[{id:"haram",label:"🕋 Masjidil Haram"},{id:"makkah",label:"🗺️ Kota Makkah"}]}/>
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
              <li>"Antara rumahku dan mimbarku adalah taman dari taman-taman surga." (HR. Bukhari)</li>
            </ul>
          </DS>
          <DS id="md3" title="🤍 Keutamaan Raudhah" open={D["md3"]} onToggle={T}>
            <ul className="tip-list">
              <li>Doa di Raudhah sangat mustajab — panjatkan doa terbaik Anda</li>
              <li>Booking slot Raudhah wajib via aplikasi <strong>Nusuk</strong> sebelum berangkat</li>
            </ul>
            <div className="doa-box">
              <div className="doa-label">Salam kepada Rasulullah ﷺ</div>
              <div className="doa-arabic">اَلسَّلاَمُ عَلَيْكَ يَا رَسُوْلَ اللهِ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</div>
              <div className="doa-latin">As-salāmu 'alaika yā Rasūlallāh wa raḥmatullāhi wa barakātuh</div>
              <div className="doa-arti">"Semoga keselamatan, rahmat, dan berkah Allah terlimpah kepadamu, wahai Rasulullah."</div>
            </div>
          </DS>
        </div>}
        {subTab==="md-sunnah"&&<div>
          <DS id="md4" title="🕌 Sunnah di Masjid Nabawi" open={D["md4"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Melaksanakan <strong>Arbain</strong> — 40 shalat fardhu berturut-turut (min. 8 hari)</li>
              <li>Shalat di Raudhah dan memperbanyak doa</li>
              <li>Memperbanyak shalawat kepada Nabi ﷺ</li>
            </ul>
          </DS>
          <DS id="md5" title="🌿 Sunnah di Kota Madinah" open={D["md5"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Berziarah ke Masjid Quba — 2 rakaat = 1 umroh (HR. Tirmidzi)</li>
              <li>Ziarah ke Makam Baqi' dan mendoakan para penghuninya</li>
              <li>Mengunjungi Masjid Qiblatayn — tempat kiblat berpindah</li>
            </ul>
          </DS>
        </div>}
        {subTab==="md-kegiatan"&&<div>
          <DS id="md7" title="🕌 Masjid Quba" open={D["md7"]} onToggle={T}>
            <ul className="tip-list">
              <li>Masjid pertama Islam — shalat 2 rakaat = pahala 1 umroh</li>
              <li>Jarak dari Masjid Nabawi: ±3.5 km</li>
            </ul>
          </DS>
          <DS id="md10" title="⚔️ Jabal Uhud & Makam Syuhada" open={D["md10"]} onToggle={T}>
            <ul className="tip-list">
              <li>Makam Hamzah RA dan 70 syuhada. Jarak: ±5 km utara</li>
              <li>Rasulullah ﷺ rutin berziarah ke sini — sangat dianjurkan</li>
            </ul>
          </DS>
        </div>}
        {subTab==="md-peta"&&(
          <MiniMap maps={[{id:"nabawi",label:"🕌 Masjid Nabawi"},{id:"madinah",label:"🗺️ Kota Madinah"}]}/>
        )}
      </div>
    )
  },
  {emoji:"💡",title:"Tips Penting Umroh Mandiri",subtitle:"Hal-hal yang wajib diperhatikan",gold:false,defaultSubTab:null,
    content:()=>(
      <div>
        <ul className="tip-list">
          <li><strong>Aplikasi wajib install:</strong> Nusuk, Google Maps offline, Uber/Careem, HHR Haramain Train, Al-Qur'an Indonesia</li>
          <li><strong>Cuaca:</strong> 35–45°C. Minum minimal 3 liter/hari termasuk air zamzam</li>
          <li><strong>Waktu terbaik tawaf:</strong> Dini hari (02.00–05.00) lebih lengang dan sejuk</li>
          <li><strong>Internet:</strong> Pilih E-SIM, roaming, atau beli SIM Card STC/Zain/Mobily setibanya di Jeddah</li>
          <li><strong>Transportasi:</strong> Kereta HHR Makkah–Madinah ±2 jam. Bus Saptco ±5 jam (lebih murah)</li>
          <li><strong>Keamanan:</strong> Simpan paspor asli di safe deposit hotel</li>
          <li><strong>Tawaf sunnah:</strong> Manfaatkan setiap waktu luang — pahala berlipat ganda</li>
        </ul>
        <div style={{marginTop:12,background:"var(--surface-doa-from)",borderRadius:11,padding:"11px 13px",border:"1px solid var(--border-dashed)"}}>
          <div style={{fontSize:".72rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"1.5px",color:"var(--gold)",marginBottom:8}}>🚺 Khusus Wanita — Panduan Haid</div>
          <ul className="tip-list" style={{marginTop:0}}>
            <li>Wanita yang haid sebelum atau saat tawaf: <strong>tunda tawaf hingga suci</strong> — tawaf dalam keadaan haid tidak sah</li>
            <li>Boleh melakukan semua ibadah lain saat haid: sa'i, dzikir, berdoa, dan ziarah</li>
            <li>Jika masa haid panjang, boleh menggunakan <strong>obat penunda haid</strong> — wajib konsultasi dokter minimal 2 minggu sebelum berangkat</li>
          </ul>
        </div>
      </div>
    )
  },
];

// ─── APP ───────────────────────────────────────────────────────────────────────
