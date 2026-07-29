// src/components/Layout/Components.tsx
import React, { useState } from "react";
import { useBilling, COFFEE_TIERS, CoffeeTier } from "../../hooks/useBilling";

// ─── 1. DRAWER COMPONENT ───
export const Drawer = ({ open, onClose, theme, setTheme, fontSize, setFontSize, onResetProgress }: {
  open: boolean; onClose: () => void; theme: string; setTheme: (t: string) => void;
  fontSize: string; setFontSize: (s: string) => void; onResetProgress: () => void; onOpenAbout?: () => void;
}) => {
  const [confirmReset, setConfirmReset] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showCoffeeMenu, setShowCoffeeMenu] = useState(false);
  const { purchaseTier, loading } = useBilling();

  const handleReset = () => {
    if (!confirmReset) { setConfirmReset(true); return; }
    onResetProgress();
    setConfirmReset(false);
    onClose();
  };

  const handleCoffeeClick = async (tier: CoffeeTier) => {
    const success = await purchaseTier(tier);
    if (success) setShowCoffeeMenu(false);
  };

  return (
    <>
      <div className={`drawer-overlay ${open ? "open" : ""}`} onClick={onClose} />
      <div className={`drawer ${open ? "open" : ""}`}>
        <div className="drawer-head">
          <div className="header-geo" />
          <div className="drawer-head-arabic">بِسْمِ اللَّهِ</div>
          <div className="drawer-head-title">Umroh Mandiri</div>
          <div className="drawer-head-sub">Pengaturan & Referensi</div>
        </div>

        <div className="drawer-body">
          {/* 🎨 SECTION TAMPILAN */}
          <div className="drawer-section-label">🎨 Tampilan</div>
          <div style={{ padding: "0 16px 12px" }}>
            <div style={{ fontSize: ".74rem", fontWeight: 600, color: "var(--muted)", marginBottom: 5 }}>Mode Tema</div>
            <div className="seg-ctrl">
              {([["auto", "🖥️ Auto"], ["light", "☀️ Terang"], ["dark", "🌙 Gelap"]] as [string, string][]).map(([v, l]) => (
                <button key={v} className={`seg-btn ${theme === v ? "active" : ""}`} onClick={() => setTheme(v)}>{l}</button>
              ))}
            </div>
            <div style={{ fontSize: ".74rem", fontWeight: 600, color: "var(--muted)", marginBottom: 5, marginTop: 10 }}>Ukuran Teks</div>
            <div className="seg-ctrl">
              {([["normal", "🔤 Normal"], ["large", "🔡 Besar"]] as [string, string][]).map(([v, l]) => (
                <button key={v} className={`seg-btn ${fontSize === v ? "active" : ""}`} onClick={() => setFontSize(v)}>{l}</button>
              ))}
            </div>
          </div>

          {/* ☕ SECTION APRESIASI */}
          <div className="drawer-section-label">☕ Apresiasi</div>
          <div style={{ padding: "0 16px 12px" }}>
            {!showCoffeeMenu ? (
              <div className="drawer-card" style={{ background: "var(--surface-tips-from)", border: "1.5px dashed var(--gold)" }}>
                <div style={{ padding: "14px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.2rem", marginBottom: "4px" }}>🤲</div>
                  <div style={{ fontWeight: 700, fontSize: ".82rem", color: "var(--ink)" }}>Dukung Project Ini?</div>
                  <p style={{ fontSize: ".7rem", color: "var(--muted)", marginBottom: "10px" }}>Dukungan Anda membantu aplikasi ini tetap gratis dan terus diperbarui.</p>
                  <button
                    className="seg-btn active"
                    style={{ background: "var(--gold)", width: "100%", borderRadius: "8px", color: "#fff" }}
                    onClick={() => setShowCoffeeMenu(true)}
                  >
                    ☕ Berikan Apresiasi
                  </button>
                </div>
              </div>
            ) : (
              <div className="drawer-card" style={{ background: "var(--surface)", border: "1px solid var(--gold)", padding: "8px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 8px 8px' }}>
                   <span style={{ fontSize: '.75rem', fontWeight: 700, color: 'var(--gold)' }}>PILIH PAKET</span>
                   <button onClick={() => setShowCoffeeMenu(false)} style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '1rem' }}>✕</button>
                </div>
                {COFFEE_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    disabled={loading}
                    className="drawer-item"
                    style={{ padding: '8px 12px', minHeight: '44px', borderBottom: '1px solid var(--border-detail)' }}
                    onClick={() => handleCoffeeClick(tier)}
                  >
                    <span style={{ fontSize: '1.2rem', marginRight: '10px' }}>{tier.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '.85rem', fontWeight: 600 }}>{tier.label}</div>
                      <div style={{ fontSize: '.7rem', color: 'var(--gold)' }}>{tier.price}</div>
                    </div>
                    {loading ? <span style={{ fontSize: '.7rem' }}>...</span> : <span style={{ color: 'var(--gold)' }}>›</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ⚙️ SECTION ALAT & INFO */}
          <div className="drawer-section-label">⚙️ Alat & Info</div>

          {/* Profil Pembuat */}
          <button className="drawer-item" onClick={() => setShowAuthor(!showAuthor)}>
            <div className="drawer-item-icon gold">👤</div>
            <div className="drawer-item-text">
              <div className="drawer-item-label">Profil Pembuat</div>
              <div className="drawer-item-desc">andinu · andinu@duck.com</div>
            </div>
            <span className="drawer-item-chev" style={{ transform: showAuthor ? "rotate(90deg)" : "none", transition: "transform .2s" }}>›</span>
          </button>
          {showAuthor && (
            <div className="drawer-expand-body">
              <div className="author-avatar">👨‍💻</div>
              <div className="author-name">andinu</div>
              <div className="author-bio">
                Aplikasi ini dikembangkan untuk memudahkan saudara-saudara Muslim melaksanakan ibadah Umroh secara mandiri.
              </div>
            </div>
          )}

          {/* Tentang Aplikasi */}
          <button className="drawer-item" onClick={() => setShowAbout(!showAbout)}>
            <div className="drawer-item-icon em">ℹ️</div>
            <div className="drawer-item-text">
              <div className="drawer-item-label">Tentang Aplikasi</div>
              <div className="drawer-item-desc">Versi & informasi detail</div>
            </div>
            <span className="drawer-item-chev" style={{ transform: showAbout ? "rotate(90deg)" : "none", transition: "transform .2s" }}>›</span>
          </button>
          {showAbout && (
            <div className="drawer-expand-body" style={{
              fontSize: '.82rem',
              color: 'var(--muted)',
              lineHeight: '1.7',
              paddingTop: '14px',
              paddingBottom: '18px'
            }}>
              <p style={{ marginBottom: '12px' }}>
                <strong>Umroh Mandiri</strong> adalah panduan digital komprehensif yang mencakup checklist persiapan, tutorial ibadah, dan peta interaktif.
              </p>
              <div style={{ textAlign: 'center', margin: '14px 0' }}>
                <span style={{ fontSize: '.7rem', fontWeight: 700, color: 'var(--gold)', background: 'var(--surface-sub)', padding: '4px 12px', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
                  VERSI {import.meta.env.VITE_APP_VERSION}
                </span>
              </div>
            </div>
          )}

          {/* Reset Progress */}
          <button className="drawer-item" onClick={handleReset}>
            <div className="drawer-item-icon warn">🔄</div>
            <div className="drawer-item-text">
              <div className="drawer-item-label">Reset Progress</div>
              <div className="drawer-item-desc">Hapus centang persiapan</div>
            </div>
          </button>
          {confirmReset && (
            <div className="reset-confirm">
              <div className="reset-confirm-text">⚠️ Hapus semua progress?</div>
              <div className="reset-confirm-btns">
                <button className="reset-btn-yes" onClick={handleReset}>Ya</button>
                <button className="reset-btn-no" onClick={() => setConfirmReset(false)}>Batal</button>
              </div>
            </div>
          )}

          <div style={{ padding: "10px 20px 20px" }}>
            <span className="pwa-badge">
              <span className="pwa-dot" />
              Tersedia Offline
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

// ─── 2. ONBOARDING COMPONENT ───
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

// ─── 3. ABOUT PAGE COMPONENT (Fallback) ───
export const AboutPage = ({ onClose }: { onClose: () => void }) => (
  <div className="about-overlay">
    <div className="about-header">
      <div className="header-geo" />
      <button className="about-back-btn" onClick={onClose} aria-label="Kembali">‹</button>
      <div className="about-header-arabic">تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ</div>
      <div className="about-header-title">Tentang Aplikasi</div>
    </div>
    <div className="about-body">
      <div className="about-card">
        <div className="author-avatar">🕌</div>
        <div className="author-name">Umroh Mandiri</div>
        <div className="author-bio">Panduan umroh mandiri untuk jamaah Indonesia.</div>
      </div>
    </div>
  </div>
);

// ─── 4. FAQ PAGE COMPONENT ───
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
        <div className="header-geo" />
        <button className="faq-back-btn" onClick={onClose}>‹</button>
        <div className="faq-header-badge">❓</div>
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
                    <div className="faq-q-num">{ii + 1}</div>
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
