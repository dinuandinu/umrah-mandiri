import React, { useState } from 'react';
import { FAQ_DATA } from '../../data/faqData';

// ─── FAQ Page ─────────────────────────────────────────────────────────────────
function highlight(text: string, query: string) {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx < 0) return <>{text}</>;
  return <>{text.slice(0, idx)}<mark>{text.slice(idx, idx + query.length)}</mark>{text.slice(idx + query.length)}</>;
}

export const FAQPage = ({onClose}:{onClose:()=>void}) => {
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
