import React, { useState, useEffect } from "react";
import './styles/main.css';
import { Onboarding } from './components/ui/Onboarding';
import { AboutPage } from './components/ui/AboutPage';
import { Drawer } from './components/ui/Drawer';
import { FAQPage } from './components/tabs/FAQPage';
import { KaabaSVG } from './components/ui/Icons';
import { prepData } from './data/prepData';
import { tutorialData } from './data/tutorialData';

export default function UmrohApp() {
  const [tab, setTab]               = useState(()=>{ try{return localStorage.getItem("umrah-tab")||"persiapan";}catch{return "persiapan";} });
  const [checked, setChecked]       = useState<Record<number,boolean>>(()=>{try{return JSON.parse(localStorage.getItem("umrah-checked")||"{}");}catch{return {};}});
  const [openStep, setOpenStep]     = useState<number|null>(null);
  const [openPrep, setOpenPrep]     = useState<number|null>(null);
  const [subTabs, setSubTabs]       = useState<Record<number,string>>(()=>{try{return JSON.parse(localStorage.getItem("umrah-subtabs")||"{}");}catch{return {};}});
  const [detailOpen, setDetailOpen] = useState<Record<string,boolean>>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme]           = useState(()=>{ try{return localStorage.getItem("umrah-theme")||"auto";}catch{return "auto";} });
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
      
      <div className={`${appClasses} ${isDark ? 'dark' : ''}`}>

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
            <button className="ham-btn" onClick={()=>setDrawerOpen(p=>!p)} aria-label="Menu">
              <span className="ham-line"/>
              <span className="ham-line"/>
              <span className="ham-line"/>
            </button>
            <button className="faq-btn" onClick={()=>setShowFAQ(true)} aria-label="Pertanyaan Umum (FAQ)">FAQ</button>
            <div className="header-inner">
              <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
              <div className="kaaba-icon-wrap">
                <KaabaSVG/>
              </div>
              <h1>Umroh Mandiri</h1>
              <div className="subtitle">PANDUAN LENGKAP  •  دليل العمرة المستقلة</div>
            </div>
          </div>

          {/* ── TABS ── */}
          <div className="tab-bar">
            <button className={`tab-btn ${tab==="persiapan"?"active":"inactive"}`} onClick={()=>{setTab("persiapan");setQuery("");}}>
              <span className="tab-btn-icon">📔</span> Persiapan
            </button>
            <button className={`tab-btn ${tab==="tutorial"?"active":"inactive"}`}  onClick={()=>{setTab("tutorial");setQuery("");}}>
              <span className="tab-btn-icon">🕋</span> Tutorial
            </button>
          </div>

          <div className="main">
            {/* ── SEARCH BAR ── */}
            <div className="search-bar-wrap">
              <span className="search-icon">🔍</span>
              <input
                className="search-bar"
                type="search"
                placeholder="Cari topik, doa, dokumen..."
                value={query}
                onChange={e=>setQuery(e.target.value)}
                aria-label="Cari konten"
              />
              {query && <button className="search-clear" onClick={()=>setQuery("")} aria-label="Hapus pencarian">×</button>}
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
                <div className="info-banner">
                  <span className="icon">📝</span>
                  <div className="text">
                    <strong>Daftar Persiapan Umroh</strong>
                    <span>Lengkapi dokumen dan persiapan fisik Anda sebelum keberangkatan. Ketuk item untuk melihat tips dan panduan detail.</span>
                  </div>
                </div>
                <div className="progress-card">
                  <div className="progress-header">
                    <span className="progress-title">Progress Persiapan</span>
                    <span className="progress-pct">{pct}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{width:`${pct}%`}}/>
                  </div>
                  <div className="progress-footer">
                    <span className="progress-footer-done">{doneCount} dari {allItems.length} item selesai</span>
                    <span className="progress-footer-save">✓ Tersimpan otomatis</span>
                  </div>
                </div>
                {prepData.map((sec,si)=>(
                  <div className="section" key={si}>
                    <div className="section-label">{sec.section}</div>
                    {sec.items.map(item=>{
                      const isOpen=openPrep===item.id, isDone=!!checked[item.id];
                      return (
                        <div key={item.id} className={`check-card ${isDone?"done":""} ${isOpen?"expanded":""}`}>
                          <div className="check-item">
                            {/* Checkbox with 44×44 touch target */}
                            <div className="checkbox-wrap" onClick={e=>toggleCheck(e,item.id)}>
                              <div className="checkbox">
                                {isDone&&<svg width="13" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                              </div>
                            </div>
                            <div className="check-main" onClick={()=>togglePrep(item.id)}>
                              <div className="check-title">{item.title}</div>
                            </div>
                            <div className="check-right">
                              <span className={`check-badge badge-${item.badge}`}>
                                {item.badge==="penting"?"Wajib":item.badge==="opsional"?"Opsional":"Dianjurkan"}
                              </span>
                              {/* Expand button with 44×44 touch target */}
                              <button className="expand-btn" onClick={()=>togglePrep(item.id)} aria-label={isOpen?"Tutup detail":"Buka detail"}>
                                <span className={`expand-arrow ${isOpen?"open":""}`}>▾</span>
                              </button>
                            </div>
                          </div>
                          {isOpen&&(
                            <div className="tips-panel">
                              <div className="tips-header">💡 Tips &amp; Cara Mendapatkan</div>
                              <ul className="tip-list">
                                {item.tips.map((t,ti)=>{
                                  const trimmed = t.trim();
                                  const isHeader = trimmed.startsWith('[') && trimmed.endsWith(']');
                                  const isSub = trimmed.startsWith('-');
                                  
                                  if (isHeader) {
                                    return <li key={ti} className="tip-header">{trimmed.replace(/^\[|\]$/g, '')}</li>;
                                  } else if (isSub) {
                                    return <li key={ti} className="tip-sub">{trimmed.substring(1).trim()}</li>;
                                  } else {
                                    return <li key={ti}>{t}</li>;
                                  }
                                })}
                              </ul>
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
                <div className="info-banner">
                  <span className="icon">🕋</span>
                  <div className="text">
                    <strong>Urutan Ibadah Umroh</strong>
                    <span>Ikuti langkah-langkah berikut secara berurutan. Ketuk kartu untuk detail, doa, dan panduan lengkap.</span>
                  </div>
                </div>
                {tutorialData.map((item,idx)=>(
                  <div className="step-card" key={idx}>
                    <div className="step-header" onClick={()=>toggleStep(idx)}>
                      <div className={`step-num ${item.gold?"gold":""}`}>{item.emoji}</div>
                      <div className="step-info">
                        <div className="step-title">{item.title}</div>
                        <div className="step-subtitle">{item.subtitle}</div>
                      </div>
                      <span className={`chevron ${openStep===idx?"open":""}`}>▾</span>
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
          </div>
        </div>

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
      </div>
    </>
  );
}
