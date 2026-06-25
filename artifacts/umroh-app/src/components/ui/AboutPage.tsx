import React from 'react';

// ─── About Page ───────────────────────────────────────────────────────────────
export const AboutPage = ({onClose}:{onClose:()=>void}) => (
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
