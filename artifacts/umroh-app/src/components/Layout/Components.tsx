// src/components/Layout/Components.tsx
import React, { useState } from "react";

// ─── Onboarding Component ───
export const Onboarding = ({ onDone, slides }: { onDone: () => void; slides: any[] }) => {
  const [slide, setSlide] = useState(0);
  const total = slides.length;
  const isLast = slide === total - 1;

  const next = () => { if (isLast) onDone(); else setSlide(p => p + 1); };
  const prev = () => { if (slide > 0) setSlide(p => p - 1); };

  return (
    <div className="ob-overlay">
      <div className="ob-topbar">
        <div className="ob-topbar-arabic">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
        <div className="ob-topbar-sub">Selamat datang di Umroh Mandiri</div>
        <button className="ob-skip" onClick={onDone}>Lewati</button>
      </div>
      <div className="ob-body">
        <div className="ob-slides" style={{ transform: `translateX(-${slide * 100}%)` }}>
          {slides.map((sl, i) => (
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
          {slides.map((_, i) => (
            <div key={i} className={`ob-dot ${slide === i ? "active" : ""}`} onClick={() => setSlide(i)} />
          ))}
        </div>
        <div className="ob-btn-row">
          {slide > 0 && <button className="ob-btn-prev" onClick={prev}>‹</button>}
          <button className="ob-btn-primary" onClick={next}>
            {isLast ? "Mulai Sekarang 🌙" : "Lanjut →"}
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── About Page Component ───
export const AboutPage = ({ onClose }: { onClose: () => void }) => (
  <div className="about-overlay">
    <div className="about-header">
      <button className="about-back-btn" onClick={onClose} aria-label="Kembali">‹</button>
      <div className="about-header-arabic">جَزَاكَ اللَّهُ خَيْرًا</div>
      <div className="about-header-title">Tentang Aplikasi</div>
    </div>
    <div className="about-body">
      <div className="about-card">
        <div className="author-avatar">🕌</div>
        <div className="author-name">Andinu</div>
        <div className="author-bio">Dibuat sebagai amal jariyah — semoga bermanfaat bagi saudara Muslim.</div>
        <div className="author-doa">
          <span style={{ fontFamily: "Amiri,serif", fontSize: "1.1rem", color: "var(--gold)" }}>جَزَاكَ اللَّهُ خَيْرًا</span>
        </div>
      </div>
    </div>
  </div>
);

// ─── FAQ Page Component ───
export const FAQPage = ({ onClose, data }: { onClose: () => void; data: any[] }) => {
  const [openIdx, setOpenIdx] = useState<string | null>(null);
  const [searchQ, setSearchQ] = useState('');
  const toggleItem = (key: string) => setOpenIdx(p => p === key ? null : key);
  const trimmed = searchQ.trim();

  const filtered = trimmed ? data.map(cat => ({
    ...cat,
    items: cat.items.filter((item: any) =>
      item.q.toLowerCase().includes(trimmed.toLowerCase()) ||
      item.a.toLowerCase().includes(trimmed.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0) : data;

  function highlightText(text: string, query: string) {
    if (!query) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx < 0) return text;
    return <>{text.slice(0, idx)}<mark>{text.slice(idx, idx + query.length)}</mark>{text.slice(idx + query.length)}</>;
  }

  return (
    <div className="faq-overlay">
      <div className="faq-header">
        <button className="faq-back-btn" onClick={onClose}>‹</button>
        <div className="faq-header-title">Pertanyaan Umum</div>
      </div>
      <div className="faq-search-wrap">
        <div className="faq-search-box">
          <input
            className="faq-search-input"
            placeholder="Cari pertanyaan..."
            value={searchQ}
            onChange={e => setSearchQ(e.target.value)}
          />
        </div>
      </div>
      <div className="faq-body">
        {filtered.map((cat, ci) => (
          <div key={ci}>
            <div className="faq-cat-label">{cat.cat}</div>
            {cat.items.map((item: any, ii: number) => {
              const key = `${ci}-${ii}`;
              return (
                <div className="faq-item" key={key}>
                  <div className="faq-q" onClick={() => toggleItem(key)}>
                    <div className="faq-q-text">{highlightText(item.q, trimmed)}</div>
                    <span className={`faq-arrow ${openIdx === key ? "open" : ""}`}>▾</span>
                  </div>
                  {openIdx === key && (
                    <div className="faq-a">
                      <span dangerouslySetInnerHTML={{ __html: item.a }} />
                      {item.note && <div className="faq-note">📌 {item.note}</div>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};