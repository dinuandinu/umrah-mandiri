import React, { useState } from 'react';

// ─── Onboarding ───────────────────────────────────────────────────────────────
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

export const Onboarding = ({onDone}:{onDone:()=>void}) => {
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
