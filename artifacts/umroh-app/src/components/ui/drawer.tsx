import React, { useState } from 'react';

// ─── Drawer Component ─────────────────────────────────────────────────────────
export const Drawer = ({open,onClose,theme,setTheme,fontSize,setFontSize,onResetProgress,onOpenAbout}:{
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
