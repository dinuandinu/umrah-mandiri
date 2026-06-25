import React from 'react';

// ─── Sub-components ───────────────────────────────────────────────────────────
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
