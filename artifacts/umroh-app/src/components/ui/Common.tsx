import React from "react";

export const DS = ({id,title,open,onToggle,children}:{id:string;title:string;open:boolean;onToggle:(id:string)=>void;children:React.ReactNode}) => (
  <div className="detail-section">
    <button className="detail-header" onClick={()=>onToggle(id)}>
      <span>{title}</span>
      <span className={`detail-arrow ${open?"open":""}`}>▾</span>
    </button>
    {open && <div className="detail-body">{children}</div>}
  </div>
);

export const SubTabs = ({tabs,active,onChange}:{tabs:{id:string;label:string}[];active:string;onChange:(id:string)=>void}) => (
  <div className="sub-tabs" data-count={tabs.length}>
    {tabs.map(t=><button key={t.id} className={`sub-tab-btn ${active===t.id?"active":""}`} onClick={()=>onChange(t.id)}>{t.label}</button>)}
  </div>
);

export const KaabaSVG = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kaabaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#222" />
        <stop offset="100%" stopColor="#000" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FCE7BE" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#8B6914" />
      </linearGradient>
    </defs>
    <rect x="15" y="20" width="70" height="70" rx="4" fill="url(#kaabaGrad)" />
    <rect x="15" y="35" width="70" height="12" fill="url(#goldGrad)" />
    <rect x="15" y="38" width="70" height="1" fill="rgba(0,0,0,0.2)" />
    <rect x="15" y="44" width="70" height="1" fill="rgba(0,0,0,0.2)" />
    <rect x="55" y="55" width="18" height="28" rx="2" fill="url(#goldGrad)" />
    <rect x="58" y="58" width="12" height="22" rx="1" fill="rgba(0,0,0,0.1)" />
    <circle cx="25" cy="41" r="1.5" fill="#FCE7BE" opacity="0.8" />
    <circle cx="35" cy="41" r="1.5" fill="#FCE7BE" opacity="0.8" />
    <circle cx="45" cy="41" r="1.5" fill="#FCE7BE" opacity="0.8" />
  </svg>
);
