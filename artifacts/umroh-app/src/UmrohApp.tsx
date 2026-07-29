import { useState, useEffect } from "react";
import "./UmrohApp.css";
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavigationBar } from '@capawesome/capacitor-navigation-bar';
import { Capacitor } from '@capacitor/core';

// Import Logo Gambar
import kaabaLogo from "./assets/kaaba-logo.png";

// Impor Komponen UI Dasar
import { DS, SubTabs } from "./components/ui/Common";
import { MiniMap } from "./components/ui/Maps";
import { Drawer, Onboarding, FAQPage, AboutPage } from "./components/Layout/Components";

// Impor Data & Types
import { prepData, tutorialData, FAQ_DATA, OB_SLIDES } from "./data/content";

export default function UmrohApp() {
  // --- 1. STATE MANAGEMENT ---
  const [tab, setTab]               = useState(() => localStorage.getItem("umrah-tab") || "persiapan");
  const [checked, setChecked]       = useState<Record<number, boolean>>(() => JSON.parse(localStorage.getItem("umrah-checked") || "{}"));
  const [openStep, setOpenStep]     = useState<number | null>(null);
  const [openPrep, setOpenPrep]     = useState<number | null>(null);
  const [subTabs, setSubTabs]       = useState<Record<number, string>>(() => JSON.parse(localStorage.getItem("umrah-subtabs") || "{}"));
  const [detailOpen, setDetailOpen] = useState<Record<string, boolean>>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme]           = useState(() => { try { return localStorage.getItem("umrah-theme") || "auto"; } catch { return "auto"; } });
  const [fontSize, setFontSize]     = useState(() => { try { return localStorage.getItem("umrah-fontsize") || "normal"; } catch { return "normal"; } });
  const [showTop, setShowTop]       = useState(false);
  const [query, setQuery]           = useState("");
  const [showAbout, setShowAbout]   = useState(false);
  const [showFAQ, setShowFAQ]       = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(() => {
    try { return !localStorage.getItem("umrah-onboarded"); } catch { return false; }
  });
  const [isOffline, setIsOffline]   = useState(() => typeof navigator !== "undefined" && !navigator.onLine);
  const [offlineDismissed, setOfflineDismissed] = useState(false);

  // --- 2. LOGIKA TEMA & DARK MODE ---
  const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme:dark)").matches;
  const isDark = theme === "dark" || (theme === "auto" && prefersDark);

  useEffect(() => {
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem("umrah-checked", JSON.stringify(checked));
      localStorage.setItem("umrah-theme", theme);
      localStorage.setItem("umrah-fontsize", fontSize);
      localStorage.setItem("umrah-tab", tab);
      localStorage.setItem("umrah-subtabs", JSON.stringify(subTabs));
    } catch (e) { console.error("Storage save failed", e); }
  }, [checked, theme, fontSize, tab, subTabs]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const goOffline = () => { setIsOffline(true); setOfflineDismissed(false); };
    const goOnline  = () => setIsOffline(false);
    window.addEventListener("offline", goOffline);
    window.addEventListener("online",  goOnline);
    return () => { window.removeEventListener("offline", goOffline); window.removeEventListener("online", goOnline); };
  }, []);

  // --- 2.5 SYSTEM UI SYNC (STATUS BAR & NAV BAR) ---
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    const syncSystemUI = async () => {
      try {
        // Status Bar: Samakan dengan Header (Emerald)
        // #1A4A3A adalah warna --emerald
        await StatusBar.setBackgroundColor({ color: '#1A4A3A' });
        await StatusBar.setStyle({ style: Style.Dark }); // Ikon Putih

        // Navigation Bar: Transparan
        await NavigationBar.setTransparency({ isTransparent: true });

        // Memastikan tombol navigasi tetap terlihat (Light/Dark style)
        // Di Android, "Dark" berarti ikon terang di background gelap
        await NavigationBar.setStyle({ style: isDark ? 'DARK' : 'DARK' });
        // Karena header kita selalu hijau/gelap, kita gunakan DARK (ikon putih)
        // Tapi jika konten bawah kita putih di light mode, mungkin butuh penyesuaian.
        // Namun user minta transparan, jadi biasanya mengikuti background konten.
      } catch (e) {
        console.error('System UI sync failed', e);
      }
    };

    syncSystemUI();
  }, [isDark]);

  // --- 3. HANDLER ---
  const handleOnboardingDone = () => {
    try { localStorage.setItem("umrah-onboarded", "1"); } catch {}
    setShowOnboarding(false);
  };

  const toggleCheck = (e: React.MouseEvent, id: number) => { e.stopPropagation(); setChecked(p => ({ ...p, [id]: !p[id] })); };
  const togglePrep = (id: number) => setOpenPrep(p => p === id ? null : id);
  const toggleStep = (i: number) => setOpenStep(p => p === i ? null : i);
  const toggleDetail = (key: string) => setDetailOpen(p => ({ ...p, [key]: !p[key] }));
  const setSubTab = (i: number, t: string) => setSubTabs(p => ({ ...p, [i]: t }));
  const resetProgress = () => { setChecked({}); localStorage.removeItem("umrah-checked"); };

  const handleQuickMenu = (type: "prep" | "tut", id: number) => {
    setQuery("");
    if (type === "prep") {
      setTab("persiapan");
      setOpenPrep(id);
      setOpenStep(null);
    } else {
      setTab("tutorial");
      setOpenStep(id);
      setOpenPrep(null);
    }
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  // --- 4. SEARCH & PROGRESS LOGIC ---
  const q = query.trim().toLowerCase();
  const allItems = prepData.flatMap(s => s.items);
  const doneCount = allItems.filter(i => checked[i.id]).length;
  const pct = Math.round((doneCount / allItems.length) * 100);

  const highlight = (text: string): React.ReactNode => {
    if (!q || !text) return text;
    const idx = text.toLowerCase().indexOf(q);
    if (idx < 0) return text;
    return <>{text.slice(0, idx)}<mark className="search-highlight">{text.slice(idx, idx + q.length)}</mark>{text.slice(idx + q.length)}</>;
  };

  const prepResults = q ? prepData.flatMap(sec => sec.items.filter(item => item.title.toLowerCase().includes(q) || (item.tips || []).some((t: string) => t.toLowerCase().includes(q))).map(item => ({ ...item, _section: sec.section }))) : [];
  const tutResults = q ? tutorialData.filter(item => item.title.toLowerCase().includes(q) || (item.subtitle || "").toLowerCase().includes(q)) : [];
  const totalResults = prepResults.length + tutResults.length;

  // Prepare data untuk ditampilkan berdasarkan query
  const displayPrepData = q
    ? prepResults.reduce((acc, item) => {
        const section = item._section;
        const existing = acc.find(s => s.section === section);
        if (existing) {
          existing.items.push(item);
        } else {
          acc.push({ section, items: [item] });
        }
        return acc;
      }, [] as { section: string; items: any[] }[])
    : prepData;

  const displayTutData = q ? tutResults : tutorialData;

  // --- 5. RENDER UTAMA ---
  return (
    <div className={`app ${fontSize === "large" ? " fs-large" : ""}`}>
      {showOnboarding && <Onboarding onDone={handleOnboardingDone} slides={OB_SLIDES} />}
      {showAbout && <AboutPage onClose={() => setShowAbout(false)} />}
      {showFAQ && <FAQPage onClose={() => setShowFAQ(false)} data={FAQ_DATA} />}

      <div className="content">
        {isOffline && !offlineDismissed && (
          <div className="offline-banner">
            <span>Anda sedang offline</span>
            <button onClick={() => setOfflineDismissed(true)}>✕</button>
          </div>
        )}

        <div className="header">
          <div className="header-geo" />
          <div className="header-inner">
            <div className="nav-top">
              <button className={`ham-btn ${drawerOpen ? "open" : ""}`} onClick={() => setDrawerOpen(!drawerOpen)}>
                <span className="ham-line"/>
                <span className="ham-line"/>
                <span className="ham-line"/>
              </button>
              <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
              <button className="faq-btn" onClick={() => setShowFAQ(true)}>FAQ</button>
            </div>
            <div className="kaaba-container">
              <img src={kaabaLogo} className="kaaba-icon" alt="Logo Ka'bah" />
            </div>
            <h1>Umroh Mandiri</h1>
            <div className="subtitle">
              <span>PANDUAN LENGKAP</span>
              <span className="subtitle-arabic">دليل العمرة المستقلة</span>
            </div>
          </div>
        </div>

        <div className="body-container">
          <div className="body-pattern"></div>
          <div className="body-inner">
            <div className="tab-bar-modern">
              <button className={`tab-btn-modern ${tab === "persiapan" ? "active" : ""}`} onClick={() => setTab("persiapan")}>📋 Persiapan</button>
              <button className={`tab-btn-modern ${tab === "tutorial" ? "active" : ""}`} onClick={() => setTab("tutorial")}>🕋 Tutorial</button>
            </div>

            <div className="quick-menu-container">
              <div className="quick-menu-label">MENU CEPAT</div>
              <div className="quick-menu-items">
                <button className="quick-menu-btn" onClick={() => handleQuickMenu("prep", 2)}>
                  <span className="icon">🛂</span>
                  <span className="label">Paspor</span>
                </button>
                <button className="quick-menu-btn" onClick={() => handleQuickMenu("prep", 9)}>
                  <span className="icon">🎫</span>
                  <span className="label">Visa</span>
                </button>
                <button className="quick-menu-btn" onClick={() => handleQuickMenu("tut", 0)}>
                  <span className="icon">🕌</span>
                  <span className="label">Miqat</span>
                </button>
                <button className="quick-menu-btn" onClick={() => handleQuickMenu("tut", 2)}>
                  <span className="icon">🔄</span>
                  <span className="label">Thowaf</span>
                </button>
                <button className="quick-menu-btn" onClick={() => handleQuickMenu("tut", 3)}>
                  <span className="icon">🏃</span>
                  <span className="label">Sa'i</span>
                </button>
              </div>
            </div>

            <div className="main">
              <div className="search-bar-modern">
                <div className="search-icon-modern">🔍</div>
                <input
                  type="search"
                  className="search-input-modern"
                  placeholder="Cari topik, doa, dokumen..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                {query && (
                  <button className="search-clear-btn" onClick={() => setQuery("")} aria-label="Hapus pencarian">
                    ✕
                  </button>
                )}
              </div>
              {query && totalResults > 0 && (
                <div className="search-results-info">
                  <span className="search-results-count">
                    Ditemukan {totalResults} hasil untuk "{query}"
                  </span>
                </div>
              )}

              {tab === "persiapan" ? (
                <div className="view-persiapan">
                   {!query && (
                     <>
                       <div className="info-banner-modern">
                         <div className="icon">📝</div>
                         <div className="text">
                           <strong>Daftar Persiapan Umroh</strong>
                           <span>Lengkapi dokumen dan persiapan fisik Anda sebelum keberangkatan. Ketuk item untuk melihat tips dan panduan detail.</span>
                         </div>
                       </div>
                       <div className="progress-card-modern">
                         <div className="progress-header-modern">
                           <span className="progress-title-modern">PROGRESS PERSIAPAN</span>
                           <span className="progress-pct-modern">{pct}%</span>
                         </div>
                         <div className="progress-track-modern">
                            <div className="progress-fill-modern" style={{ width: `${pct}%` }} />
                         </div>
                         <div className="progress-info-modern">
                           <span>{doneCount} dari {allItems.length} item selesai</span>
                           <span className="progress-status-modern">
                             <span style={{ marginRight: 6 }}>✓</span>
                             Tersimpan otomatis
                           </span>
                         </div>
                       </div>
                     </>
                   )}
                   {displayPrepData.length === 0 && query ? (
                     <div className="empty-state">
                       <div className="empty-icon">🔍</div>
                       <div className="empty-title">Tidak ada hasil ditemukan di tab Persiapan</div>
                       {tutResults.length > 0 && (
                         <div className="empty-hint">
                           Ditemukan {tutResults.length} hasil di tab <strong>Tutorial</strong>.
                           <button className="switch-tab-link" onClick={() => setTab("tutorial")}>Lihat Hasil Tutorial →</button>
                         </div>
                       )}
                       <div className="empty-desc">Coba gunakan kata kunci lain atau periksa ejaan Anda</div>
                     </div>
                   ) : (
                     displayPrepData.map((sec, si) => (
                     <div key={si} className="section">
                       <div className="section-label-modern">{sec.section}</div>
                       {sec.items.map(item => (
                         <div key={item.id} className={`check-card-modern ${checked[item.id] ? "done" : ""}`}>
                           <div className="check-item-modern" onClick={() => togglePrep(item.id)}>
                             <div className="checkbox-modern" onClick={(e) => toggleCheck(e, item.id)}>
                               {checked[item.id] && "✓"}
                             </div>
                             <div className="check-main-modern">
                               <div className="check-title-modern">{highlight(item.title)}</div>
                             </div>
                             <div className="check-right-modern">
                               {item.badge && <span className={`badge-modern ${item.badge}`}>{item.badge}</span>}
                               <span className={`expand-arrow-modern ${openPrep === item.id ? "open" : ""}`}>▾</span>
                             </div>
                           </div>
                           {openPrep === item.id && (
                             <div className="tips-panel">
                               <div className="tips-panel-title">
                                 <span>💡</span>
                                 <span>TIPS & CARA MENDAPATKAN</span>
                               </div>
                               <ul className="tip-list">
                                 {item.tips.map((t: string, i: number) => {
                                   const trimmed = t.trim();
                                   const isSub = t.startsWith("  -") || t.startsWith("- ");
                                   const isHeader = trimmed.startsWith("[") || trimmed.startsWith("📌") ||
                                                    trimmed.startsWith("⏰") || trimmed.startsWith("💸") ||
                                                    trimmed.startsWith("🟢") || trimmed.startsWith("🔴") ||
                                                    trimmed.startsWith("════");

                                   let className = "";
                                   if (isSub) className = "sub-item";
                                   else if (isHeader) className = "no-bullet header-item";

                                   const content = isSub ? t.replace(/^\s*-\s*/, "") : t;
                                   return <li key={i} className={className}>{highlight(content)}</li>;
                                 })}
                               </ul>
                             </div>
                           )}
                         </div>
                       ))}
                     </div>
                   ))
                 )}
                </div>
              ) : (
                <div className="view-tutorial">
                   {!query && (
                     <div className="info-banner-modern">
                       <div className="icon">🕌</div>
                       <div className="text">
                         <strong>Urutan Ibadah Umroh</strong>
                         <span>Ikuti langkah-langkah berikut secara berurutan. Ketuk kartu untuk detail, doa, dan panduan lengkap.</span>
                       </div>
                     </div>
                   )}
                   {displayTutData.length === 0 && query ? (
                     <div className="empty-state">
                       <div className="empty-icon">🔍</div>
                       <div className="empty-title">Tidak ada hasil ditemukan di tab Tutorial</div>
                       {prepResults.length > 0 && (
                         <div className="empty-hint">
                           Ditemukan {prepResults.length} hasil di tab <strong>Persiapan</strong>.
                           <button className="switch-tab-link" onClick={() => setTab("persiapan")}>Lihat Hasil Persiapan →</button>
                         </div>
                       )}
                       <div className="empty-desc">Coba gunakan kata kunci lain atau periksa ejaan Anda</div>
                     </div>
                   ) : (
                     displayTutData.map((item, idx) => (
                     <div key={idx} className="step-card-modern">
                       <div className="step-header-modern" onClick={() => toggleStep(idx)}>
                         <div className="step-icon-modern">{item.emoji}</div>
                         <div className="step-info-modern">
                           <div className="step-title-modern">{highlight(item.title)}</div>
                           <div className="step-subtitle-modern">{item.subtitle}</div>
                         </div>
                         <span className={`chevron-modern ${openStep === idx ? "open" : ""}`}>▾</span>
                       </div>
                       {openStep === idx && (
                         <div className="step-body">
                           {item.content({ D: detailOpen, T: toggleDetail, subTab: subTabs[idx] || item.defaultSubTab || "default", setSubTab: t => setSubTab(idx, t) })}
                         </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Drawer
        open={drawerOpen} onClose={() => setDrawerOpen(false)}
        theme={theme} setTheme={setTheme}
        fontSize={fontSize} setFontSize={setFontSize}
        onResetProgress={resetProgress} onOpenAbout={() => setShowAbout(true)}
      />

      <button className={`back-to-top ${showTop ? "visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
    </div>
  );
}