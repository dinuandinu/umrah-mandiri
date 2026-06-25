import React, { useState } from 'react';

// ─── Onboarding ───────────────────────────────────────────────────────────────
type OBSlide = { emoji: string; title: string; desc: string; tip: string };

export const Onboarding = ({onDone, slides}:{onDone:()=>void; slides: OBSlide[]}) => {
  const [slide, setSlide] = useState(0);
  const total = slides.length;
  const s = slides[slide];
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
          {slides.map((sl,i)=>(
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
          {slides.map((_,i)=>(
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
