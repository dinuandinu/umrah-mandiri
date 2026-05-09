import { useState, useEffect } from "react";
import qrisImg from "./assets/qris.jpg";

const buildStyle = (isDark: boolean) => `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Tajawal:wght@300;400;500;700&display=swap');
  * { box-sizing:border-box; margin:0; padding:0; }

  :root {
    --gold:#C9A84C; --gold-light:#E8C97A; --gold-dark:#8B6914;
    --emerald:#1A4A3A; --emerald-mid:#2D6B54; --emerald-light:#3D8A6E;
    --bg:#FAF6EE; --surface:#FFFFFF; --surface-raised:#FFFFFF;
    --surface-done-from:#f4fbf6; --surface-done-to:#eaf6ef;
    --surface-tips-from:#FFFDF5; --surface-tips-to:#FAF4E4;
    --surface-doa-from:#F5EDD8; --surface-doa-to:#EDE3C8;
    --surface-sub:#F0E8D0; --surface-detail-hd:rgba(201,168,76,.08);
    --surface-info:rgba(26,74,58,.06); --surface-warn:rgba(193,90,32,.07);
    --ink:#1C1810; --ink-soft:#2E2416; --muted:#7A6A4A; --parchment:#F0E8D0;
    --border-card:rgba(201,168,76,.13); --border-done:rgba(61,138,110,.28);
    --border-expanded:rgba(201,168,76,.38); --border-detail:rgba(201,168,76,.22);
    --border-dashed:rgba(201,168,76,.32); --border-progress:rgba(201,168,76,.16);
    --shadow-card:0 1px 8px rgba(26,74,58,.05); --shadow-step:0 1px 12px rgba(26,74,58,.06);
    --tab-inactive-bg:rgba(255,255,255,.85); --tab-inactive-color:#26200E;
    --tab-inactive-hover:rgba(255,255,255,.97);
    --badge-penting-bg:#FFF0E8; --badge-penting-color:#C15A20;
    --badge-opsional-bg:#EEEEFF; --badge-opsional-color:#5050B8;
    --badge-rekomendasi-bg:#E4F7EE; --badge-rekomendasi-color:#1E6B3E;
    --sub-tab-active-bg:#FFFFFF; --sub-tab-active-color:#1A4A3A; --sub-tab-inactive-color:#3A2E18;
    --tag-wajib-bg:#FFF0E8; --tag-wajib-color:#C15A20;
    --tag-sah-bg:#E4F7EE; --tag-sah-color:#1E6B3E;
    --info-box-border:#3D8A6E; --info-box-text:#1A3020;
    --warn-box-border:#C15A20; --warn-box-text:#5A1E08;
    --larangan-x:#C15A20; --sunnah-check:#3D8A6E;
    --step-badge-bg:#1A4A3A; --closing-border:rgba(201,168,76,.16);
    --emerald-text:#1A4A3A; --pattern-opacity:1;
    --map-bg:#F8F4EC; --map-grid:rgba(201,168,76,0.1); --map-building:rgba(26,74,58,0.1);
    --map-label:rgba(139,105,20,0.8); --map-mataf:rgba(201,168,76,0.12);
    --drawer-bg:#FFFFFF; --drawer-border:rgba(201,168,76,0.15);
    --drawer-item-hover:rgba(26,74,58,0.04); --drawer-section-label:#7A6A4A;
    --seg-bg:#F0E8D0; --seg-active-bg:#1A4A3A; --seg-active-color:#FFFFFF; --seg-inactive-color:#3A2E18;
  }

  ${isDark ? `
  :root {
    --bg:#17140D; --surface:#222018; --surface-raised:#2A2619;
    --surface-done-from:#1C2820; --surface-done-to:#182418;
    --surface-tips-from:#262214; --surface-tips-to:#2C2610;
    --surface-doa-from:#2A2214; --surface-doa-to:#302818;
    --surface-sub:#2A2418; --surface-detail-hd:rgba(201,168,76,.1);
    --surface-info:rgba(61,138,110,.12); --surface-warn:rgba(193,90,32,.13);
    --ink:#EDE5CE; --ink-soft:#D8CEB4; --muted:#B09A6E; --parchment:#2A2418;
    --border-card:rgba(201,168,76,.18); --border-done:rgba(61,138,110,.35);
    --border-expanded:rgba(201,168,76,.45); --border-detail:rgba(201,168,76,.25);
    --border-dashed:rgba(201,168,76,.25); --border-progress:rgba(201,168,76,.22);
    --shadow-card:0 1px 8px rgba(0,0,0,.35); --shadow-step:0 1px 12px rgba(0,0,0,.4);
    --tab-inactive-bg:rgba(40,36,22,.92); --tab-inactive-color:#D8CEB4;
    --tab-inactive-hover:rgba(50,45,28,.97);
    --badge-penting-bg:#3A1E0A; --badge-penting-color:#F0925A;
    --badge-opsional-bg:#1A1A30; --badge-opsional-color:#9090E0;
    --badge-rekomendasi-bg:#0E2A1A; --badge-rekomendasi-color:#5DC48A;
    --sub-tab-active-bg:#3A3428; --sub-tab-active-color:#E8C97A; --sub-tab-inactive-color:#B09A6E;
    --tag-wajib-bg:#3A1E0A; --tag-wajib-color:#F0925A;
    --tag-sah-bg:#0E2A1A; --tag-sah-color:#5DC48A;
    --info-box-border:#3D8A6E; --info-box-text:#A8D8C0;
    --warn-box-border:#D07040; --warn-box-text:#F0B088;
    --larangan-x:#F0925A; --sunnah-check:#5DC48A;
    --step-badge-bg:#3D8A6E; --closing-border:rgba(201,168,76,.22);
    --emerald-text:#5DC8A0; --pattern-opacity:0.45;
    --map-bg:#1C180E; --map-grid:rgba(201,168,76,0.08); --map-building:rgba(61,138,110,0.15);
    --map-label:rgba(201,168,76,0.7); --map-mataf:rgba(201,168,76,0.08);
    --drawer-bg:#1E1B12; --drawer-border:rgba(201,168,76,0.18);
    --drawer-item-hover:rgba(201,168,76,0.06); --drawer-section-label:#B09A6E;
    --seg-bg:#2A2418; --seg-active-bg:#3D8A6E; --seg-active-color:#FFFFFF; --seg-inactive-color:#B09A6E;
  }` : `
  @media (prefers-color-scheme:dark) {
    :root {
      --bg:#17140D; --surface:#222018; --surface-raised:#2A2619;
      --surface-done-from:#1C2820; --surface-done-to:#182418;
      --surface-tips-from:#262214; --surface-tips-to:#2C2610;
      --surface-doa-from:#2A2214; --surface-doa-to:#302818;
      --surface-sub:#2A2418; --surface-detail-hd:rgba(201,168,76,.1);
      --surface-info:rgba(61,138,110,.12); --surface-warn:rgba(193,90,32,.13);
      --ink:#EDE5CE; --ink-soft:#D8CEB4; --muted:#B09A6E; --parchment:#2A2418;
      --border-card:rgba(201,168,76,.18); --border-done:rgba(61,138,110,.35);
      --border-expanded:rgba(201,168,76,.45); --border-detail:rgba(201,168,76,.25);
      --border-dashed:rgba(201,168,76,.25); --border-progress:rgba(201,168,76,.22);
      --shadow-card:0 1px 8px rgba(0,0,0,.35); --shadow-step:0 1px 12px rgba(0,0,0,.4);
      --tab-inactive-bg:rgba(40,36,22,.92); --tab-inactive-color:#D8CEB4;
      --tab-inactive-hover:rgba(50,45,28,.97);
      --badge-penting-bg:#3A1E0A; --badge-penting-color:#F0925A;
      --badge-opsional-bg:#1A1A30; --badge-opsional-color:#9090E0;
      --badge-rekomendasi-bg:#0E2A1A; --badge-rekomendasi-color:#5DC48A;
      --sub-tab-active-bg:#3A3428; --sub-tab-active-color:#E8C97A; --sub-tab-inactive-color:#B09A6E;
      --tag-wajib-bg:#3A1E0A; --tag-wajib-color:#F0925A;
      --tag-sah-bg:#0E2A1A; --tag-sah-color:#5DC48A;
      --info-box-border:#3D8A6E; --info-box-text:#A8D8C0;
      --warn-box-border:#D07040; --warn-box-text:#F0B088;
      --larangan-x:#F0925A; --sunnah-check:#5DC48A;
      --step-badge-bg:#3D8A6E; --closing-border:rgba(201,168,76,.22);
      --emerald-text:#5DC8A0; --pattern-opacity:0.45;
      --map-bg:#1C180E; --map-grid:rgba(201,168,76,0.08); --map-building:rgba(61,138,110,0.15);
      --map-label:rgba(201,168,76,0.7); --map-mataf:rgba(201,168,76,0.08);
      --drawer-bg:#1E1B12; --drawer-border:rgba(201,168,76,0.18);
      --drawer-item-hover:rgba(201,168,76,0.06); --drawer-section-label:#B09A6E;
      --seg-bg:#2A2418; --seg-active-bg:#3D8A6E; --seg-active-color:#FFFFFF; --seg-inactive-color:#B09A6E;
    }
  }`}

  body { font-family:'Tajawal',system-ui,-apple-system,'Segoe UI',Arial,sans-serif; background:var(--bg); color:var(--ink); }
  .app { min-height:100vh; background:var(--bg); position:relative; overflow-x:hidden; color:var(--ink); }
  .back-to-top {
    position:fixed; bottom:80px; right:16px; z-index:100;
    width:44px; height:44px; border-radius:50%;
    background:var(--emerald-mid); color:#fff;
    border:none; cursor:pointer; font-size:1.3rem; line-height:44px; text-align:center;
    box-shadow:0 3px 12px rgba(26,74,58,.35);
    opacity:0; pointer-events:none;
    transition:opacity .25s, transform .25s;
    -webkit-tap-highlight-color:transparent;
    display:flex; align-items:center; justify-content:center;
  }
  .back-to-top.visible { opacity:1; pointer-events:all; }
  .back-to-top:active { transform:scale(.92); }
  .app::before {
    content:''; position:fixed; inset:0; pointer-events:none; z-index:0;
    opacity:var(--pattern-opacity);
    background-image:
      repeating-linear-gradient(45deg,transparent,transparent 35px,rgba(201,168,76,.04) 35px,rgba(201,168,76,.04) 70px),
      repeating-linear-gradient(-45deg,transparent,transparent 35px,rgba(26,74,58,.04) 35px,rgba(26,74,58,.04) 70px);
  }
  .content { position:relative; z-index:1; }

  /* ── HEADER ── */
  .header { background:linear-gradient(160deg,var(--emerald) 0%,var(--emerald-mid) 60%,#1E5A45 100%); position:relative; overflow:hidden; }
  .header::after { content:''; position:absolute; bottom:-1px; left:0; right:0; height:40px; background:var(--bg); clip-path:ellipse(55% 100% at 50% 100%); }
  .header-geo { position:absolute; inset:0; pointer-events:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpolygon points='40,5 75,25 75,55 40,75 5,55 5,25' fill='none' stroke='rgba(201,168,76,0.12)' stroke-width='1.5'/%3E%3Ccircle cx='40' cy='40' r='15' fill='none' stroke='rgba(201,168,76,0.08)' stroke-width='1'/%3E%3C/svg%3E"); }
  .header-inner { position:relative; z-index:1; padding:32px 24px 52px; text-align:center; }
  .kaaba-icon { width:62px; height:62px; margin:0 auto 10px; filter:drop-shadow(0 3px 10px rgba(201,168,76,.45)); }
  .header h1 { font-family:'Amiri',Georgia,'Times New Roman',serif; font-size:2rem; font-weight:700; color:var(--gold-light); line-height:1.2; }
  .header .subtitle { font-size:.82rem; color:rgba(255,255,255,.6); font-weight:300; margin-top:4px; letter-spacing:2px; text-transform:uppercase; }
  .bismillah { font-family:'Amiri',Georgia,'Times New Roman',serif; font-size:1.4rem; color:var(--gold); margin-bottom:8px; font-style:italic; }

  /* ── HAMBURGER ── */
  .ham-btn {
    position:absolute; top:18px; left:16px; z-index:10;
    width:44px; height:44px; border-radius:10px;
    background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.18);
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    gap:5px; cursor:pointer; padding:0; -webkit-tap-highlight-color:transparent;
    transition:background .2s;
  }
  .ham-btn:active { background:rgba(255,255,255,0.22); }
  .ham-line { width:18px; height:2px; background:rgba(255,255,255,0.9); border-radius:99px; transition:all .25s; }
  .ham-btn.open .ham-line:nth-child(1) { transform:translateY(7px) rotate(45deg); }
  .ham-btn.open .ham-line:nth-child(2) { opacity:0; transform:scaleX(0); }
  .ham-btn.open .ham-line:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

  /* ── DRAWER ── */
  .drawer-overlay {
    position:fixed; inset:0; background:rgba(0,0,0,0.45); z-index:200;
    opacity:0; pointer-events:none; transition:opacity .3s;
  }
  .drawer-overlay.open { opacity:1; pointer-events:all; }
  .drawer {
    position:fixed; top:0; left:0; height:100vh; width:290px; max-width:85vw;
    background:var(--drawer-bg); z-index:201; border-right:1px solid var(--drawer-border);
    box-shadow:4px 0 32px rgba(0,0,0,0.25);
    transform:translateX(-100%); transition:transform .3s cubic-bezier(.4,0,.2,1);
    display:flex; flex-direction:column; overflow:hidden;
  }
  .drawer.open { transform:translateX(0); }
  .drawer-head { background:linear-gradient(160deg,var(--emerald),var(--emerald-mid)); padding:36px 20px 22px; flex-shrink:0; }
  .drawer-head-title { font-family:'Amiri',Georgia,'Times New Roman',serif; font-size:1.25rem; font-weight:700; color:var(--gold-light); }
  .drawer-head-sub { font-size:.72rem; color:rgba(255,255,255,.55); margin-top:3px; letter-spacing:1px; }
  .drawer-head-arabic { font-family:'Amiri',serif; font-size:1rem; color:var(--gold); opacity:.7; margin-top:6px; }
  .drawer-body { flex:1; overflow-y:auto; padding:12px 0 24px; }
  .drawer-section-label {
    font-size:.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1.5px;
    color:var(--drawer-section-label); padding:14px 20px 6px; display:flex; align-items:center; gap:7px;
  }
  .drawer-section-label::after { content:''; flex:1; height:1px; background:var(--drawer-border); }
  .seg-ctrl { display:flex; background:var(--seg-bg); border-radius:9px; padding:3px; margin:0 16px 4px; gap:2px; }
  .seg-btn {
    flex:1; padding:8px 4px; border:none; border-radius:7px;
    font-family:'Tajawal',sans-serif; font-size:.78rem; font-weight:600;
    cursor:pointer; transition:all .2s; text-align:center;
    -webkit-tap-highlight-color:transparent; display:flex; align-items:center; justify-content:center; gap:4px;
    min-height:44px;
  }
  .seg-btn.active { background:var(--seg-active-bg); color:var(--seg-active-color); box-shadow:0 1px 6px rgba(0,0,0,.18); }
  .seg-btn:not(.active) { background:transparent; color:var(--seg-inactive-color); }
  .drawer-item {
    display:flex; align-items:center; gap:13px; padding:12px 20px;
    cursor:pointer; border:none; background:none; width:100%; text-align:left;
    font-family:'Tajawal',sans-serif; color:var(--ink); -webkit-tap-highlight-color:transparent;
    transition:background .15s; min-height:56px;
  }
  .drawer-item:active { background:var(--drawer-item-hover); }
  .drawer-item-icon { width:38px; height:38px; min-width:38px; border-radius:9px; display:flex; align-items:center; justify-content:center; font-size:1.1rem; }
  .drawer-item-icon.em { background:linear-gradient(135deg,var(--emerald),var(--emerald-light)); }
  .drawer-item-icon.gold { background:linear-gradient(135deg,var(--gold-dark),var(--gold)); }
  .drawer-item-icon.warn { background:linear-gradient(135deg,#8B3A0A,#C15A20); }
  .drawer-item-icon.slate { background:linear-gradient(135deg,#2A3A50,#3D5070); }
  .drawer-item-icon.purple { background:linear-gradient(135deg,#3A2060,#6040A0); }
  .drawer-item-text { flex:1; }
  .drawer-item-label { font-size:.87rem; font-weight:600; color:var(--ink); line-height:1.2; }
  .drawer-item-desc { font-size:.74rem; color:var(--muted); margin-top:2px; line-height:1.3; }
  .drawer-item-chev { color:var(--gold); font-size:.8rem; opacity:.6; }
  .drawer-card { background:var(--surface-sub); border-radius:11px; margin:4px 16px 0; overflow:hidden; cursor:pointer; -webkit-tap-highlight-color:transparent; transition:background .15s; }
  .drawer-card:active { background:var(--drawer-item-hover); }
  .drawer-card-row { display:flex; align-items:center; gap:13px; padding:11px 14px; }
  .drawer-expand-body { padding:0 14px 14px; border-top:1px dashed var(--border-dashed); }
  .reset-confirm { background:rgba(193,90,32,.08); border:1px solid rgba(193,90,32,.2); border-radius:10px; padding:12px 14px; margin:4px 16px 0; }
  .reset-confirm-text { font-size:.81rem; color:var(--warn-box-text); line-height:1.5; margin-bottom:10px; }
  .reset-confirm-btns { display:flex; gap:8px; }
  .reset-btn-yes { flex:1; padding:12px; border:none; border-radius:8px; background:linear-gradient(135deg,#8B3A0A,#C15A20); color:white; font-family:'Tajawal',sans-serif; font-size:.82rem; font-weight:700; cursor:pointer; min-height:44px; }
  .reset-btn-no  { flex:1; padding:12px; border:1px solid var(--border-dashed); border-radius:8px; background:transparent; color:var(--muted); font-family:'Tajawal',sans-serif; font-size:.82rem; cursor:pointer; min-height:44px; }

  /* ── TABS ── */
  .tab-bar { display:flex; max-width:480px; margin:-4px auto 0; padding:0 12px; gap:6px; position:relative; z-index:2; }
  .tab-btn { flex:1; padding:11px 6px; border:none; border-radius:12px 12px 0 0; font-family:'Tajawal',sans-serif; font-size:.78rem; font-weight:500; cursor:pointer; transition:all .25s; display:flex; align-items:center; justify-content:center; gap:5px; min-height:44px; }
  .tab-btn.active { background:var(--bg); color:var(--emerald-mid); box-shadow:0 -3px 12px rgba(26,74,58,.1); font-weight:700; }
  .tab-btn.inactive { background:var(--tab-inactive-bg); color:var(--tab-inactive-color); }
  .tab-btn.inactive:hover { background:var(--tab-inactive-hover); color:var(--emerald-mid); }
  .main { max-width:480px; margin:0 auto; padding:16px 16px 80px; }

  /* ── PROGRESS ── */
  .search-bar-wrap { position:relative; margin:0 0 10px; }
  .search-bar { width:100%; padding:11px 40px 11px 38px; border:1.5px solid var(--border-card); border-radius:12px;
    background:var(--surface); color:var(--ink); font-family:'Tajawal',system-ui,sans-serif; font-size:.95rem;
    outline:none; box-sizing:border-box; -webkit-appearance:none; transition:border-color .2s; }
  .search-bar:focus { border-color:var(--emerald-light); }
  .search-bar::placeholder { color:var(--muted); opacity:.7; }
  .search-icon { position:absolute; left:11px; top:50%; transform:translateY(-50%); font-size:1rem; pointer-events:none; }
  .search-clear { position:absolute; right:10px; top:50%; transform:translateY(-50%);
    background:none; border:none; cursor:pointer; color:var(--muted); font-size:1.1rem;
    min-width:44px; min-height:44px; display:flex; align-items:center; justify-content:center;
    -webkit-tap-highlight-color:transparent; line-height:1; }
  .search-results-count { font-size:.74rem; color:var(--muted); margin:-4px 0 10px; padding:0 2px; }
  .search-highlight { background:rgba(201,168,76,0.28); border-radius:3px; padding:0 1px; font-weight:700; color:var(--ink); }
  .no-results { text-align:center; padding:32px 16px; color:var(--muted); font-size:.9rem; }
  .progress-card { background:var(--surface); border-radius:16px; padding:16px 20px; margin-bottom:16px; box-shadow:var(--shadow-step); border:1px solid var(--border-progress); }
  .progress-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
  .progress-title { font-size:.78rem; font-weight:600; color:var(--muted); text-transform:uppercase; letter-spacing:1px; }
  .progress-pct { font-family:'Amiri',serif; font-size:1.4rem; font-weight:700; color:var(--gold); }
  .progress-track { height:8px; background:var(--parchment); border-radius:99px; overflow:hidden; }
  .progress-fill { height:100%; background:linear-gradient(90deg,var(--emerald-light),var(--gold)); border-radius:99px; transition:width .5s ease; }

  /* ── CHECKLIST ── */
  .section { margin-bottom:20px; }
  .section-label { display:flex; align-items:center; gap:8px; font-size:.78rem; font-weight:700; color:var(--muted); text-transform:uppercase; letter-spacing:1.5px; margin-bottom:8px; padding:0 4px; }
  .section-label::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,var(--border-expanded),transparent); }
  .check-card { background:var(--surface); border-radius:14px; margin-bottom:8px; box-shadow:var(--shadow-card); border:1px solid var(--border-card); overflow:hidden; transition:border-color .2s,box-shadow .2s; }
  .check-card.done { border-color:var(--border-done); background:linear-gradient(135deg,var(--surface-done-from),var(--surface-done-to)); }
  .check-card.expanded { border-color:var(--border-expanded); box-shadow:var(--shadow-step); }
  .check-item { padding:10px 6px 10px 10px; display:flex; align-items:center; gap:6px; }
  /* Checkbox wrapper: 44×44 touch target */
  .checkbox-wrap { width:44px; height:44px; min-width:44px; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0; -webkit-tap-highlight-color:transparent; border-radius:8px; }
  .checkbox-wrap:active { background:rgba(201,168,76,.08); }
  .checkbox { width:24px; height:24px; min-width:24px; border-radius:6px; border:2px solid var(--border-dashed); background:var(--parchment); display:flex; align-items:center; justify-content:center; transition:all .25s; pointer-events:none; flex-shrink:0; }
  .check-card.done .checkbox { background:var(--emerald-mid); border-color:var(--emerald-mid); }
  .check-main { flex:1; cursor:pointer; min-width:0; padding:8px 0; }
  .check-title { font-size:1.01rem; font-weight:600; color:var(--ink); line-height:1.3; }
  .check-card.done .check-title { text-decoration:line-through; text-decoration-color:rgba(61,138,110,.55); }
  .check-right { display:flex; flex-direction:column; align-items:flex-end; gap:3px; flex-shrink:0; }
  .check-badge { font-size:.65rem; padding:2px 7px; border-radius:99px; font-weight:700; letter-spacing:.3px; text-transform:uppercase; white-space:nowrap; }
  .badge-penting { background:var(--badge-penting-bg); color:var(--badge-penting-color); }
  .badge-opsional { background:var(--badge-opsional-bg); color:var(--badge-opsional-color); }
  .badge-rekomendasi { background:var(--badge-rekomendasi-bg); color:var(--badge-rekomendasi-color); }
  /* Expand button: 44×44 touch target */
  .expand-btn { background:none; border:none; cursor:pointer; min-width:44px; min-height:44px; padding:0 8px; color:var(--gold); font-size:.9rem; display:flex; align-items:center; justify-content:center; font-family:'Tajawal',sans-serif; font-weight:700; -webkit-tap-highlight-color:transparent; border-radius:8px; }
  .expand-btn:active { background:rgba(201,168,76,.08); }
  .expand-arrow { transition:transform .25s; display:inline-block; }
  .expand-arrow.open { transform:rotate(180deg); }
  .tips-panel { border-top:1px dashed var(--border-dashed); background:linear-gradient(135deg,var(--surface-tips-from),var(--surface-tips-to)); padding:11px 13px 13px; animation:slideDown .2s ease; }
  .tips-link-btn { display:inline-flex; align-items:center; gap:6px; margin-top:10px; padding:11px 16px;
    background:var(--emerald); color:#fff; border-radius:10px; font-family:'Tajawal',system-ui,sans-serif;
    font-size:.88rem; font-weight:700; text-decoration:none; border:none; cursor:pointer;
    -webkit-tap-highlight-color:transparent; transition:opacity .15s; min-height:44px; }
  .tips-link-btn:active { opacity:.8; }
  .tips-link-btn-outline { background:transparent; color:var(--emerald-text); border:1.5px solid var(--emerald-light); }
  .tips-header { font-size:.74rem; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:var(--gold); margin-bottom:8px; }
  .tip-list { list-style:none; }
  .tip-list li { font-size:.95rem; color:var(--ink); padding:3px 0; display:flex; gap:7px; align-items:flex-start; line-height:1.6; }
  .tip-list li::before { content:'◆'; color:var(--gold); font-size:.42rem; margin-top:7px; min-width:8px; flex-shrink:0; }

  /* ── FONT SIZE LARGE ── */
  .fs-large .tip-list li { font-size:.97rem; }
  .fs-large .larangan-list li { font-size:.95rem; }
  .fs-large .check-title { font-size:1.02rem; }
  .fs-large .detail-header { font-size:.98rem; }
  .fs-large .step-title { font-size:1.06rem; }
  .fs-large .step-subtitle { font-size:.93rem; }
  .fs-large .step-body p { font-size:.95rem; }
  .fs-large .doa-latin, .fs-large .doa-arti { font-size:.91rem; }
  .fs-large .info-box p, .fs-large .warn-box p { font-size:.92rem; }
  .fs-large .sub-tab-btn { font-size:.9rem; }
  .fs-large .detail-body p { font-size:.93rem; }

  /* ── TUTORIAL ── */
  .step-card { background:var(--surface); border-radius:16px; margin-bottom:10px; overflow:hidden; box-shadow:var(--shadow-step); border:1px solid var(--border-card); }
  .step-header { display:flex; align-items:center; gap:14px; padding:15px 16px; cursor:pointer; -webkit-tap-highlight-color:transparent; transition:background .2s; min-height:60px; }
  .step-header:active { background:var(--parchment); }
  .step-num { width:40px; height:40px; min-width:40px; border-radius:10px; background:linear-gradient(135deg,var(--emerald),var(--emerald-light)); display:flex; align-items:center; justify-content:center; font-size:1.15rem; box-shadow:0 2px 8px rgba(26,74,58,.3); }
  .step-num.gold { background:linear-gradient(135deg,var(--gold-dark),var(--gold)); }
  .step-info { flex:1; }
  .step-title { font-size:1.06rem; font-weight:700; color:var(--ink); line-height:1.3; }
  .step-subtitle { font-size:.94rem; color:var(--muted); margin-top:3px; font-weight:500; line-height:1.4; }
  .chevron { color:var(--gold); font-size:1.1rem; transition:transform .25s; }
  .chevron.open { transform:rotate(180deg); }
  .step-body { padding:0 14px 16px; border-top:1px solid var(--border-card); animation:slideDown .2s ease; }
  .step-body p { font-size:.96rem; color:var(--ink); line-height:1.7; margin:10px 0; }
  .step-body .tip-list li { font-size:.94rem; }
  .step-body .tip-list li::before { font-size:.5rem; margin-top:6px; min-width:10px; }

  /* ── DOA ── */
  .doa-box { background:linear-gradient(135deg,var(--surface-doa-from),var(--surface-doa-to)); border-radius:12px; padding:12px 14px; margin:10px 0; border-left:3px solid var(--gold); }
  .doa-label { font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:var(--gold); margin-bottom:5px; }
  .doa-arabic { font-family:'Amiri',serif; font-size:1.2rem; color:var(--emerald-light); line-height:2; text-align:right; direction:rtl; margin-bottom:5px; }
  .doa-latin { font-size:.9rem; color:var(--muted); font-style:italic; line-height:1.55; }
  .doa-arti { font-size:.9rem; color:var(--ink-soft); margin-top:3px; line-height:1.55; }

  /* ── SUB TABS ── */
  .sub-tabs { display:flex; flex-wrap:wrap; gap:5px; background:var(--surface-sub); border-radius:10px; padding:4px; margin:12px 0; }
  .sub-tab-btn { flex:1 1 auto; min-width:calc(50% - 7px); min-height:44px; padding:9px 6px; border:none; border-radius:7px; font-family:'Tajawal',sans-serif; font-size:.85rem; font-weight:600; cursor:pointer; transition:all .2s; -webkit-tap-highlight-color:transparent; text-align:center; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .sub-tabs[data-count="2"] .sub-tab-btn, .sub-tabs[data-count="3"] .sub-tab-btn { min-width:unset; flex:1; }
  .sub-tab-btn.active { background:var(--sub-tab-active-bg); color:var(--sub-tab-active-color); box-shadow:0 1px 6px rgba(26,74,58,.14); }
  .sub-tab-btn:not(.active) { background:transparent; color:var(--sub-tab-inactive-color); }

  /* ── DETAIL ── */
  .detail-section { border:1px solid var(--border-detail); border-radius:10px; margin-bottom:8px; overflow:hidden; }
  .detail-header { min-height:48px; width:100%; display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:var(--surface-detail-hd); border:none; cursor:pointer; font-family:'Tajawal',sans-serif; font-size:.97rem; font-weight:700; color:var(--ink); text-align:left; gap:8px; -webkit-tap-highlight-color:transparent; }
  .detail-arrow { transition:transform .2s; color:var(--gold); flex-shrink:0; font-size:.85rem; }
  .detail-arrow.open { transform:rotate(180deg); }
  .detail-body { padding:10px 12px; border-top:1px solid var(--border-detail); background:var(--surface-raised); }
  .detail-body p { font-size:.94rem; color:var(--ink); line-height:1.68; margin-bottom:8px; }
  .detail-body .tip-list li { font-size:.93rem; }

  .larangan-list { list-style:none; margin-top:4px; }
  .larangan-list li { font-size:.94rem; color:var(--ink); padding:5px 0; display:flex; gap:7px; align-items:flex-start; line-height:1.55; border-bottom:1px dashed var(--border-dashed); }
  .larangan-list li:last-child { border-bottom:none; }
  .larangan-list li::before { content:'✗'; color:var(--larangan-x); font-size:.75rem; margin-top:2px; min-width:12px; flex-shrink:0; font-weight:700; }
  .sunnah-list li::before { content:'✓'; color:var(--sunnah-check) !important; }

  .info-box { background:var(--surface-info); border-radius:8px; padding:9px 11px; margin:8px 0; border-left:3px solid var(--info-box-border); }
  .info-box p { font-size:.92rem; color:var(--info-box-text); margin:0; line-height:1.6; }
  .warn-box { background:var(--surface-warn); border-radius:8px; padding:9px 11px; margin:8px 0; border-left:3px solid var(--warn-box-border); }
  .warn-box p { font-size:.92rem; color:var(--warn-box-text); margin:0; line-height:1.6; }

  .tag-wajib { display:inline-block; background:var(--tag-wajib-bg); color:var(--tag-wajib-color); font-size:.62rem; font-weight:700; padding:1px 7px; border-radius:99px; margin-right:6px; text-transform:uppercase; }
  .tag-sah { display:inline-block; background:var(--tag-sah-bg); color:var(--tag-sah-color); font-size:.62rem; font-weight:700; padding:1px 7px; border-radius:99px; margin-right:6px; text-transform:uppercase; }
  .info-banner { background:linear-gradient(135deg,var(--emerald),var(--emerald-mid)); border-radius:14px; padding:13px 15px; margin-bottom:16px; color:white; display:flex; gap:10px; align-items:flex-start; }
  .info-banner .icon { font-size:1.3rem; margin-top:1px; }
  .info-banner .text { flex:1; }
  .info-banner .text strong { font-size:.86rem; display:block; margin-bottom:2px; }
  .info-banner .text span { font-size:.79rem; opacity:.85; line-height:1.45; }
  .step-badge { display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; background:var(--step-badge-bg); color:white; border-radius:50%; font-size:.7rem; font-weight:700; margin-right:6px; flex-shrink:0; }
  .transit-heading { font-size:.86rem; font-weight:700; color:var(--emerald-text); margin:10px 0 5px; }

  /* ── MAP ── */
  .map-kota-tabs { display:flex; gap:10px; margin-bottom:10px; }
  .map-kota-btn { flex:1; display:flex; flex-direction:column; align-items:center; gap:2px; padding:12px 8px; border:2px solid var(--border-card); border-radius:14px; background:var(--surface); cursor:pointer; transition:all .2s; -webkit-tap-highlight-color:transparent; font-family:'Tajawal',sans-serif; min-height:60px; }
  .map-kota-btn.active { border-color:var(--gold); background:linear-gradient(135deg,var(--emerald),var(--emerald-mid)); box-shadow:0 3px 14px rgba(26,74,58,.25); }
  .map-kota-btn:not(.active):active { background:var(--parchment); }
  .map-kota-icon { font-size:1.6rem; line-height:1; }
  .map-kota-label { font-size:.88rem; font-weight:700; color:var(--ink); }
  .map-kota-btn.active .map-kota-label { color:var(--gold-light); }
  .map-kota-sub { font-size:.68rem; color:var(--muted); }
  .map-kota-btn.active .map-kota-sub { color:rgba(255,255,255,.55); }
  .map-sub-nav { display:flex; gap:6px; background:var(--surface-sub); border-radius:10px; padding:4px; margin-bottom:12px; }
  .map-sub-nav-btn { flex:1; min-height:44px; padding:9px 6px; border:none; border-radius:7px; font-family:'Tajawal',sans-serif; font-size:.82rem; font-weight:600; cursor:pointer; transition:all .2s; -webkit-tap-highlight-color:transparent; text-align:center; }
  .map-sub-nav-btn.active { background:var(--sub-tab-active-bg); color:var(--sub-tab-active-color); box-shadow:0 1px 6px rgba(26,74,58,.14); }
  .map-sub-nav-btn:not(.active) { background:transparent; color:var(--sub-tab-inactive-color); }
  .map-wrap { border-radius:14px; overflow:hidden; border:1.5px solid var(--border-card); box-shadow:var(--shadow-step); background:var(--map-bg); }
  .map-pin-card { background:var(--surface); border-radius:12px; padding:12px 14px; margin-top:10px; border:1px solid var(--border-expanded); animation:slideDown .2s ease; box-shadow:var(--shadow-step); }
  .map-pin-card-title { font-size:.95rem; font-weight:700; color:var(--ink); margin-bottom:4px; display:flex; align-items:center; gap:6px; }
  .map-pin-card-desc { font-size:.84rem; color:var(--ink); line-height:1.6; }
  .map-legend { background:var(--surface); border-radius:12px; padding:12px 14px; margin-top:10px; border:1px solid var(--border-card); }
  .map-legend-title { font-size:.74rem; font-weight:700; color:var(--muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px; }
  .map-legend-grid { display:grid; grid-template-columns:1fr 1fr; gap:5px 8px; }

  /* Author */
  .author-avatar { width:56px; height:56px; border-radius:50%; background:linear-gradient(135deg,var(--emerald),var(--emerald-light)); display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin:12px auto 8px; box-shadow:0 2px 10px rgba(26,74,58,.3); }
  .author-name { text-align:center; font-size:.95rem; font-weight:700; color:var(--ink); margin-bottom:8px; }
  .author-bio { font-size:.78rem; color:var(--muted); line-height:1.65; text-align:center; margin-bottom:12px; }
  .author-links { display:flex; gap:8px; margin-bottom:12px; }
  .author-link-btn { flex:1; display:flex; align-items:center; justify-content:center; gap:5px; padding:12px; border-radius:10px; background:var(--surface-sub); border:1px solid var(--border-card); font-family:'Tajawal',sans-serif; font-size:.82rem; font-weight:600; color:var(--emerald-text); text-decoration:none; -webkit-tap-highlight-color:transparent; min-height:48px; }
  .author-doa { background:var(--surface-doa-from); border-radius:10px; padding:12px; text-align:center; }
  .qris-wrap { padding:4px 0 8px; }
  .qris-label { font-size:.78rem; font-weight:700; color:var(--muted); text-align:center; text-transform:uppercase; letter-spacing:1px; margin-bottom:10px; }
  .qris-box { background:white; border-radius:14px; padding:16px; border:2px solid var(--border-expanded); display:flex; flex-direction:column; align-items:center; gap:8px; box-shadow:0 2px 12px rgba(26,74,58,.1); }
  .qris-note { font-size:.7rem; color:#999; text-align:center; font-style:italic; }

  /* ── ONBOARDING ── */
  .ob-overlay { position:fixed; inset:0; z-index:600; background:var(--bg); display:flex; flex-direction:column; }
  .ob-topbar { background:linear-gradient(160deg,var(--emerald),var(--emerald-mid)); padding:40px 24px 28px; text-align:center; flex-shrink:0; position:relative; overflow:hidden; }
  .ob-topbar::after { content:''; position:absolute; bottom:-1px; left:0; right:0; height:32px; background:var(--bg); clip-path:ellipse(55% 100% at 50% 100%); }
  .ob-topbar-arabic { font-family:'Amiri',serif; font-size:1.2rem; color:var(--gold); }
  .ob-topbar-sub { font-size:.72rem; color:rgba(255,255,255,.55); letter-spacing:1.5px; text-transform:uppercase; margin-top:3px; }
  .ob-skip { position:absolute; top:18px; right:14px; border:none; background:rgba(255,255,255,.16); color:white; padding:8px 16px; border-radius:99px; font-family:'Tajawal',sans-serif; font-size:.8rem; cursor:pointer; -webkit-tap-highlight-color:transparent; min-height:44px; }
  .ob-body { flex:1; overflow:hidden; position:relative; }
  .ob-slides { display:flex; height:100%; transition:transform .35s cubic-bezier(.4,0,.2,1); }
  .ob-slide { flex:0 0 100%; padding:28px 28px 12px; display:flex; flex-direction:column; align-items:center; text-align:center; overflow-y:auto; }
  .ob-illus { font-size:4.5rem; line-height:1; margin-bottom:20px; }
  .ob-title { font-family:'Amiri',Georgia,'Times New Roman',serif; font-size:1.5rem; font-weight:700; color:var(--ink); margin-bottom:12px; line-height:1.3; max-width:320px; }
  .ob-desc { font-size:.95rem; color:var(--ink); line-height:1.75; max-width:340px; }
  .ob-tip { background:var(--surface-info); border-radius:10px; padding:12px 14px; margin-top:16px; border-left:3px solid var(--info-box-border); max-width:340px; width:100%; text-align:left; }
  .ob-tip p { font-size:.86rem; color:var(--info-box-text); line-height:1.6; margin:0; }
  .ob-footer { padding:16px 24px 36px; flex-shrink:0; }
  .ob-dots { display:flex; gap:8px; justify-content:center; margin-bottom:18px; }
  .ob-dot { height:8px; border-radius:4px; transition:all .3s cubic-bezier(.4,0,.2,1); background:var(--border-dashed); cursor:pointer; }
  .ob-dot.active { width:28px; background:var(--emerald-mid); }
  .ob-dot:not(.active) { width:8px; }
  .ob-btn-row { display:flex; gap:10px; }
  .ob-btn-primary { flex:1; min-height:52px; border:none; border-radius:14px; background:linear-gradient(135deg,var(--emerald),var(--emerald-mid)); color:white; font-family:'Tajawal',sans-serif; font-size:1rem; font-weight:700; cursor:pointer; -webkit-tap-highlight-color:transparent; box-shadow:0 4px 16px rgba(26,74,58,.3); }
  .ob-btn-primary:active { opacity:.88; transform:scale(.98); }
  .ob-btn-prev { min-height:52px; min-width:52px; padding:0 18px; border:1.5px solid var(--border-expanded); border-radius:14px; background:transparent; color:var(--emerald-text); font-family:'Tajawal',sans-serif; font-size:1.1rem; cursor:pointer; -webkit-tap-highlight-color:transparent; display:flex; align-items:center; justify-content:center; }

  /* ── ABOUT PAGE ── */
  .about-overlay { position:fixed; inset:0; z-index:400; background:var(--bg); overflow-y:auto; display:flex; flex-direction:column; animation:slideInRight .28s cubic-bezier(.4,0,.2,1); }
  @keyframes slideInRight { from{transform:translateX(40px);opacity:0} to{transform:translateX(0);opacity:1} }
  .about-header { background:linear-gradient(160deg,var(--emerald),var(--emerald-mid)); padding:40px 24px 52px; text-align:center; position:relative; overflow:hidden; flex-shrink:0; }
  .about-header::after { content:''; position:absolute; bottom:-1px; left:0; right:0; height:40px; background:var(--bg); clip-path:ellipse(55% 100% at 50% 100%); }
  .about-back-btn { position:absolute; top:18px; left:16px; width:44px; height:44px; border-radius:11px; background:rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.22); display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:1.15rem; color:white; -webkit-tap-highlight-color:transparent; }
  .about-back-btn:active { background:rgba(255,255,255,.24); }
  .about-header-arabic { font-family:'Amiri',serif; font-size:1.4rem; color:var(--gold); margin-bottom:6px; }
  .about-header-title { font-family:'Amiri',Georgia,'Times New Roman',serif; font-size:1.45rem; font-weight:700; color:var(--gold-light); }
  .about-header-sub { font-size:.72rem; color:rgba(255,255,255,.55); margin-top:5px; letter-spacing:1.5px; text-transform:uppercase; }
  .about-body { padding:16px 16px 48px; max-width:480px; margin:0 auto; width:100%; flex:1; }
  .about-card { background:var(--surface); border-radius:16px; padding:20px; margin-bottom:14px; border:1px solid var(--border-card); box-shadow:var(--shadow-card); }
  .about-card-label { font-size:.68rem; font-weight:700; text-transform:uppercase; letter-spacing:1.8px; color:var(--muted); margin-bottom:16px; display:flex; align-items:center; gap:8px; }
  .about-card-label::after { content:''; flex:1; height:1px; background:var(--border-card); }
  .about-version-badge { display:inline-flex; align-items:center; gap:6px; background:linear-gradient(135deg,var(--emerald),var(--emerald-mid)); color:white; padding:6px 14px; border-radius:99px; font-size:.82rem; font-weight:700; margin-bottom:8px; }
  .about-desc { font-size:.85rem; color:var(--muted); line-height:1.7; }

  @keyframes slideDown { from{opacity:0;transform:translateY(-5px)} to{opacity:1;transform:translateY(0)} }

  /* ── GOOGLE MAPS BUTTON ── */
  .gmap-btn { display:inline-flex; align-items:center; gap:7px; margin-top:10px; padding:11px 16px; background:linear-gradient(135deg,#1A73E8,#1255B0); color:white; border-radius:10px; font-family:'Tajawal',system-ui,sans-serif; font-size:.88rem; font-weight:700; text-decoration:none; -webkit-tap-highlight-color:transparent; transition:opacity .15s; min-height:44px; width:100%; justify-content:center; box-shadow:0 2px 8px rgba(26,115,232,.3); }
  .gmap-btn:active { opacity:.82; }

  /* ── OFFLINE / PWA ── */
  .offline-banner { display:flex; align-items:center; gap:9px; background:#7A3A10; color:rgba(255,255,255,.92); padding:10px 16px; font-size:.83rem; font-weight:600; position:relative; z-index:2; }
  .offline-banner .ob-close { margin-left:auto; border:none; background:rgba(255,255,255,.18); color:white; border-radius:50%; width:26px; height:26px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:.95rem; -webkit-tap-highlight-color:transparent; flex-shrink:0; }
  .pwa-badge { display:inline-flex; align-items:center; gap:5px; background:rgba(61,138,110,.12); border:1px solid rgba(61,138,110,.35); border-radius:99px; padding:4px 11px; font-size:.72rem; font-weight:700; color:var(--sunnah-check); }
  .pwa-dot { width:7px; height:7px; border-radius:50%; background:var(--sunnah-check); flex-shrink:0; }

  /* ── FAQ BUTTON ── */
  .faq-btn {
    position:absolute; top:18px; right:16px; z-index:10;
    width:44px; height:44px; border-radius:50%;
    background:rgba(255,255,255,0.12); border:1.5px solid rgba(201,168,76,0.55);
    display:flex; align-items:center; justify-content:center;
    cursor:pointer; padding:0; -webkit-tap-highlight-color:transparent;
    transition:background .2s, transform .15s;
    font-size:1.15rem; font-weight:800; color:var(--gold);
    font-family:'Tajawal',sans-serif; line-height:1;
    box-shadow:0 2px 10px rgba(0,0,0,.18);
  }
  .faq-btn:active { background:rgba(255,255,255,.22); transform:scale(.93); }

  /* ── FAQ PAGE ── */
  .faq-overlay { position:fixed; inset:0; z-index:400; background:var(--bg); overflow-y:auto; display:flex; flex-direction:column; animation:slideInRight .28s cubic-bezier(.4,0,.2,1); }
  .faq-header { background:linear-gradient(160deg,var(--emerald),var(--emerald-mid)); padding:40px 24px 52px; text-align:center; position:relative; overflow:hidden; flex-shrink:0; }
  .faq-header::after { content:''; position:absolute; bottom:-1px; left:0; right:0; height:40px; background:var(--bg); clip-path:ellipse(55% 100% at 50% 100%); }
  .faq-back-btn { position:absolute; top:18px; left:16px; width:44px; height:44px; border-radius:11px; background:rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.22); display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:1.15rem; color:white; -webkit-tap-highlight-color:transparent; }
  .faq-back-btn:active { background:rgba(255,255,255,.24); }
  .faq-header-badge { display:inline-flex; align-items:center; justify-content:center; width:56px; height:56px; border-radius:50%; background:rgba(201,168,76,.18); border:2px solid rgba(201,168,76,.45); font-size:1.7rem; margin:8px auto 12px; }
  .faq-header-title { font-family:'Amiri',Georgia,'Times New Roman',serif; font-size:1.45rem; font-weight:700; color:var(--gold-light); }
  .faq-header-sub { font-size:.72rem; color:rgba(255,255,255,.55); margin-top:5px; letter-spacing:1.5px; text-transform:uppercase; }
  .faq-body { padding:16px 16px 48px; max-width:480px; margin:0 auto; width:100%; flex:1; }
  .faq-cat-label { font-size:.65rem; font-weight:700; text-transform:uppercase; letter-spacing:1.8px; color:var(--muted); margin:18px 0 8px; display:flex; align-items:center; gap:8px; }
  .faq-cat-label::after { content:''; flex:1; height:1px; background:var(--border-card); }
  .faq-item { background:var(--surface); border-radius:13px; margin-bottom:7px; border:1px solid var(--border-card); box-shadow:var(--shadow-card); overflow:hidden; }
  .faq-q { display:flex; align-items:flex-start; gap:10px; padding:13px 14px; cursor:pointer; min-height:52px; -webkit-tap-highlight-color:transparent; transition:background .15s; }
  .faq-q:active { background:var(--parchment); }
  .faq-q-num { min-width:22px; height:22px; border-radius:50%; background:linear-gradient(135deg,var(--emerald),var(--emerald-light)); color:white; font-size:.65rem; font-weight:700; display:flex; align-items:center; justify-content:center; margin-top:1px; flex-shrink:0; }
  .faq-q-text { flex:1; font-size:.97rem; font-weight:700; color:var(--ink); line-height:1.4; }
  .faq-arrow { color:var(--gold); font-size:.85rem; flex-shrink:0; transition:transform .2s; margin-top:3px; }
  .faq-arrow.open { transform:rotate(180deg); }
  .faq-a { padding:0 14px 13px 46px; font-size:.92rem; color:var(--ink-soft); line-height:1.75; border-top:1px dashed var(--border-dashed); padding-top:11px; background:linear-gradient(135deg,var(--surface-tips-from),var(--surface-tips-to)); animation:slideDown .18s ease; }
  .faq-a strong { color:var(--emerald-text); }
  .faq-a .faq-note { display:flex; gap:7px; align-items:flex-start; margin-top:8px; padding:8px 10px; background:var(--surface-info); border-radius:8px; border-left:3px solid var(--info-box-border); font-size:.85rem; color:var(--info-box-text); line-height:1.6; }
`;

// ─── Ka'bah SVG ───────────────────────────────────────────────────────────────
const KaabaSVG = () => (
  <svg className="kaaba-icon" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="34" r="26" fill="rgba(201,168,76,0.09)"/>
    <rect x="8" y="16" width="46" height="40" rx="2" fill="#111111"/>
    <rect x="6" y="13" width="50" height="5" rx="2" fill="#C9A84C"/>
    <rect x="8" y="22" width="46" height="9" fill="#8B6914"/>
    <rect x="8" y="22" width="46" height="9" fill="#C9A84C" opacity="0.5"/>
    <line x1="11" y1="25.5" x2="51" y2="25.5" stroke="#FFE08A" strokeWidth="0.7" opacity="0.6"/>
    <rect x="22" y="36" width="14" height="20" rx="1.5" fill="#8B6914"/>
    <path d="M22 40 Q29 33 36 40" fill="#8B6914"/>
    <rect x="23" y="37" width="12" height="19" rx="1" fill="#C9A84C" opacity="0.55"/>
    <ellipse cx="54" cy="42" rx="6" ry="5" fill="#C9A84C"/>
    <ellipse cx="54" cy="42" rx="4.3" ry="3.6" fill="#110500"/>
    <path d="M8 58 Q32 63 56 58" stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.3" strokeDasharray="3 2" strokeLinecap="round"/>
  </svg>
);

// ─── Map Data ─────────────────────────────────────────────────────────────────
const MAP_DATA: Record<string, {title:string;hint:string;pins:{id:string;x:number;y:number;lat:number;lng:number;emoji:string;name:string;desc:string}[]}> = {
  haram: {
    title:"🕋 Masjidil Haram", hint:"Ketuk penanda untuk detail lokasi.",
    pins:[
      {id:"kaabah",  x:152,y:208,lat:21.42251,lng:39.82616,emoji:"🕋",name:"Ka'bah",          desc:"Kiblat seluruh umat Islam. Titik pusat tawaf — mengelilingi Ka'bah 7× berlawanan jarum jam."},
      {id:"hajar",   x:173,y:227,lat:21.42253,lng:39.82637,emoji:"⚫",name:"Hajar Aswad",      desc:"Batu hitam dari surga di sudut tenggara Ka'bah. Istilam setiap awal putaran tawaf."},
      {id:"hijr",    x:131,y:186,lat:21.42328,lng:39.82569,emoji:"🌙",name:"Hijr Ismail",      desc:"Bagian Ka'bah yang tidak terdinding. Shalat 2 rakaat di sini = shalat di dalam Ka'bah."},
      {id:"multazam",x:174,y:210,lat:21.42241,lng:39.82637,emoji:"🤲",name:"Multazam",         desc:"Dinding antara Hajar Aswad & pintu Ka'bah. Tempelkan dada & tangan, berdoa — sangat mustajab."},
      {id:"maqam",   x:172,y:182,lat:21.42286,lng:39.82641,emoji:"🪨",name:"Maqam Ibrahim",    desc:"Bekas pijakan Nabi Ibrahim AS. Shalat 2 rakaat di belakangnya setelah selesai tawaf."},
      {id:"zamzam",  x:188,y:206,lat:21.42294,lng:39.82665,emoji:"💧",name:"Sumur Zamzam",     desc:"Air suci yang terus mengalir. Minum berdiri menghadap kiblat dengan doa niat yang baik."},
      {id:"shafa",   x:275,y:315,lat:21.42193,lng:39.82785,emoji:"🏁",name:"Bukit Shafa",      desc:"Titik awal sa'i. Naiki bukit, hadap Ka'bah, baca doa pembuka, lalu berjalan ke Marwah."},
      {id:"marwah",  x:275,y:110,lat:21.42396,lng:39.82787,emoji:"🏁",name:"Bukit Marwah",     desc:"Titik akhir sa'i. Perjalanan ke-7 berakhir di sini, lalu lanjut ke tahallul."},
      {id:"bab",     x:30, y:212,lat:21.42319,lng:39.82491,emoji:"🚪",name:"Bab As-Salam",     desc:"Pintu masuk utama. Masuk kaki kanan, baca: Allāhummaftaḥ lī abwāba raḥmatik."},
    ]
  },
  nabawi: {
    title:"🕌 Masjid Nabawi", hint:"Ketuk penanda untuk detail lokasi.",
    pins:[
      {id:"makam",  x:260,y:100,lat:24.46731,lng:39.61110,emoji:"🌿",name:"Makam Rasulullah ﷺ",desc:"Makam Nabi ﷺ, Abu Bakar RA & Umar RA di bawah kubah hijau. Ucapkan salam dengan adab."},
      {id:"raudhah",x:215,y:128,lat:24.46721,lng:39.61082,emoji:"⭐",name:"Raudhah",            desc:"Taman surga (karpet hijau). Sangat mustajab berdoa. Booking slot via aplikasi Nusuk."},
      {id:"mimbar", x:173,y:128,lat:24.46710,lng:39.61068,emoji:"📖",name:"Mimbar Nabawi",      desc:"Mimbar asli Rasulullah ﷺ. Perbanyak shalawat saat berada di dekat sini."},
      {id:"bab2",   x:162,y:350,lat:24.46651,lng:39.61083,emoji:"🚪",name:"Bab As-Salam",       desc:"Pintu masuk utama dari selatan. Masuk kaki kanan, salam kepada Nabi ﷺ saat mendekati makam."},
      {id:"baqi",   x:330,y:195,lat:24.46613,lng:39.61219,emoji:"🪦",name:"Makam Baqi'",        desc:"Di luar masjid (timur). Pemakaman sahabat, istri & keluarga Nabi. Buka pagi & sore."},
      {id:"dome",   x:258,y:72, lat:24.46738,lng:39.61113,emoji:"🟢",name:"Kubah Hijau",        desc:"Kubah ikonik di atas makam Rasulullah ﷺ. Landmark utama Masjid Nabawi."},
    ]
  },
  makkah: {
    title:"🗺️ Kota Makkah", hint:"Peta radial — angka menunjukkan jarak dari Haram.",
    pins:[
      {id:"haram",  x:152,y:220,lat:21.42251,lng:39.82616,emoji:"🕋",name:"Masjidil Haram",     desc:"Pusat ibadah umroh. 100.000× pahala shalat. Terdapat Ka'bah, Zamzam, Shafa-Marwah."},
      {id:"mualla", x:163,y:196,lat:21.42534,lng:39.82832,emoji:"🪦",name:"Janatul Mu'alla",    desc:"Makam Siti Khadijah RA & leluhur Nabi. ±500m utara Haram. Buka pagi & sore."},
      {id:"jabnur", x:210,y:148,lat:21.45841,lng:39.86363,emoji:"⛰️",name:"Jabal Nur (Gua Hira)",desc:"Wahyu pertama Al-Qur'an turun di sini. ±4.5km NNE. Pendakian 45 menit, ±1.700 anak tangga."},
      {id:"jabtsur",x:172,y:295,lat:21.37564,lng:39.83582,emoji:"⛰️",name:"Jabal Tsur",         desc:"Nabi bersembunyi saat hijrah. ±4km selatan. Pendakian lebih terjal dari Jabal Nur."},
      {id:"jiranah",x:283,y:150,lat:21.51012,lng:39.92814,emoji:"🕌",name:"Masjid Ji'ranah",    desc:"Titik miqat umroh sunnah. ±24km NE. Rasulullah ﷺ berihram dari sini setelah Perang Hunain."},
      {id:"mina",   x:255,y:220,lat:21.41330,lng:39.89334,emoji:"🏕️",name:"Mina",               desc:"Area lempar jumrah saat haji. ±7km timur Haram."},
      {id:"muzdal", x:295,y:245,lat:21.39193,lng:39.93674,emoji:"🌙",name:"Muzdalifah",         desc:"Mabit & kumpul batu jumrah saat haji. ±12km timur Haram."},
      {id:"arafah", x:325,y:285,lat:21.35492,lng:39.98422,emoji:"🌅",name:"Padang Arafah",      desc:"Puncak ibadah haji — wukuf 9 Dzulhijjah. ±22km dari Haram."},
      {id:"hhr-makkah", x:310,y:318,lat:21.38131,lng:39.88357,emoji:"🚄",name:"Stasiun HHR Makkah", desc:"Haramain High Speed Railway — ±4km tenggara Haram. Kereta ke Madinah ±2 jam, SAR 65–150. Beli tiket via Haramain Train app."},
    ]
  },
  madinah: {
    title:"🗺️ Kota Madinah", hint:"Peta radial — angka menunjukkan jarak dari Nabawi.",
    pins:[
      {id:"nabawi",   x:152,y:212,lat:24.46728,lng:39.61109,emoji:"🕌",name:"Masjid Nabawi",   desc:"Pusat ziarah. 1.000× pahala shalat. Terdapat Raudhah & makam Rasulullah ﷺ."},
      {id:"baqimd",   x:202,y:207,lat:24.46613,lng:39.61219,emoji:"🪦",name:"Makam Baqi'",     desc:"Tepat di timur Nabawi. Makam sahabat & keluarga Nabi. ±200m. Pria boleh masuk."},
      {id:"quba",     x:100,y:298,lat:24.44028,lng:39.61720,emoji:"🕌",name:"Masjid Quba",     desc:"Masjid pertama Islam. 2 rakaat = 1 umroh (HR. Tirmidzi). ±3.5km barat daya."},
      {id:"qiblatayn",x:62, y:197,lat:24.47440,lng:39.59510,emoji:"🕌",name:"Masjid Qiblatayn",desc:"Tempat kiblat berpindah saat Shalat Dzuhur. ±5km barat."},
      {id:"uhud",     x:168,y:95, lat:24.50682,lng:39.61942,emoji:"⛰️",name:"Jabal Uhud",      desc:"Perang Uhud & makam 70 syuhada termasuk Hamzah RA. ±5km utara."},
      {id:"ghamamah", x:147,y:232,lat:24.46551,lng:39.60978,emoji:"🕌",name:"Masjid Ghamamah", desc:"Tempat Rasulullah ﷺ shalat Ied. ±300m selatan Nabawi."},
      {id:"hhr-madinah", x:32,y:312,lat:24.46165,lng:39.49568,emoji:"🚄",name:"Stasiun HHR Madinah", desc:"Haramain High Speed Railway — ±14km barat daya Nabawi. Gunakan taksi/Uber ±20 menit. Kereta ke Makkah ±2 jam (SAR 65–150)."},
    ]
  },
};

// ─── SVG Pin ──────────────────────────────────────────────────────────────────
const SvgPin = ({x,y,emoji,selected,onClick}:{x:number;y:number;emoji:string;selected:boolean;onClick:()=>void}) => (
  <g style={{cursor:"pointer"}} onClick={onClick}>
    <rect x={x-22} y={y-22} width={44} height={44} fill="transparent" style={{pointerEvents:"all"}}/>
    {selected && <circle cx={x} cy={y} r={28} fill="rgba(201,168,76,0.18)" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" strokeDasharray="3,2"/>}
    <circle cx={x} cy={y} r={18} fill={selected?"#C9A84C":"#1A4A3A"} stroke="#C9A84C" strokeWidth={selected?2.5:1.5}
      style={{filter:selected?"drop-shadow(0 2px 8px rgba(201,168,76,0.5))":"drop-shadow(0 1px 4px rgba(0,0,0,0.3))"}}/>
    <text x={x} y={y+1} textAnchor="middle" dominantBaseline="middle" fontSize="13" style={{userSelect:"none",pointerEvents:"none"}}>{emoji}</text>
  </g>
);

const HaramBg = () => (
  <>
    <rect x="16" y="12" width="328" height="396" rx="16" fill="var(--map-building)" stroke="rgba(201,168,76,0.2)" strokeWidth="1.5"/>
    <rect x="252" y="95" width="46" height="228" rx="10" fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.25)" strokeWidth="1" strokeDasharray="4,3"/>
    <circle cx="152" cy="208" r="84" fill="var(--map-mataf)" stroke="rgba(201,168,76,0.18)" strokeWidth="1.5" strokeDasharray="5,3"/>
    <rect x="126" y="186" width="52" height="44" rx="3" fill="#0D0D0D" stroke="#C9A84C" strokeWidth="2.5"/>
    <rect x="126" y="200" width="52" height="10" fill="rgba(201,168,76,0.3)"/>
    <path d="M 126 186 Q 152 158 178 186" fill="none" stroke="rgba(201,168,76,0.55)" strokeWidth="1.5"/>
    <text x="338" y="28" textAnchor="end" fontSize="11" fill="rgba(139,105,20,0.7)" fontFamily="Tajawal,sans-serif">N ↑</text>
    <text x="275" y="83" textAnchor="middle" fontSize="11" fill="var(--map-label)" fontFamily="Tajawal,sans-serif" fontWeight="600">Marwah</text>
    <text x="275" y="336" textAnchor="middle" fontSize="11" fill="var(--map-label)" fontFamily="Tajawal,sans-serif" fontWeight="600">Shafa</text>
    <text x="273" y="218" textAnchor="middle" fontSize="9.5" fill="rgba(139,105,20,0.5)" fontFamily="Tajawal,sans-serif" transform="rotate(-90,273,218)">Mas'a (Sa'i)</text>
    <text x="95" y="168" textAnchor="middle" fontSize="9.5" fill="rgba(139,105,20,0.45)" fontFamily="Tajawal,sans-serif">Mataf</text>
    <text x="152" y="214" textAnchor="middle" fontSize="8.5" fill="rgba(201,168,76,0.8)" fontFamily="Tajawal,sans-serif" fontWeight="700">Ka'bah</text>
  </>
);

const NabawiBg = () => (
  <>
    <rect x="22" y="22" width="295" height="340" rx="12" fill="var(--map-building)" stroke="rgba(201,168,76,0.2)" strokeWidth="1.5"/>
    <rect x="22" y="22" width="295" height="340" rx="12" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="8"/>
    <rect x="145" y="88" width="130" height="88" rx="8" fill="rgba(61,138,110,0.18)" stroke="rgba(61,138,110,0.45)" strokeWidth="1.5" strokeDasharray="4,2"/>
    <text x="210" y="108" textAnchor="middle" fontSize="9.5" fill="rgba(45,107,84,0.8)" fontFamily="Tajawal,sans-serif" fontWeight="700">Raudhah</text>
    <text x="210" y="121" textAnchor="middle" fontSize="8.5" fill="rgba(45,107,84,0.6)" fontFamily="Tajawal,sans-serif">(Karpet Hijau)</text>
    <ellipse cx="258" cy="62" rx="32" ry="22" fill="rgba(26,90,55,0.7)" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5"/>
    <text x="258" y="65" textAnchor="middle" fontSize="9" fill="rgba(201,168,76,0.9)" fontFamily="Tajawal,sans-serif" fontWeight="700">Kubah</text>
    {[55,85,115,145,175,205,235,265,295].map(cx=>[60,120,180,240,300].map(cy=><circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8"/>))}
    <rect x="315" y="155" width="52" height="80" rx="8" fill="rgba(90,74,58,0.1)" stroke="rgba(90,74,58,0.3)" strokeWidth="1" strokeDasharray="3,2"/>
    <text x="341" y="190" textAnchor="middle" fontSize="9" fill="rgba(90,74,58,0.6)" fontFamily="Tajawal,sans-serif" transform="rotate(-90,341,190)">Baqi'</text>
    <text x="335" y="28" textAnchor="end" fontSize="11" fill="rgba(139,105,20,0.7)" fontFamily="Tajawal,sans-serif">N ↑</text>
  </>
);

const CityBg = ({cx, cy}:{cx:number;cy:number}) => (
  <>
    {[40,80,120,165].map((r,i)=><circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="var(--map-grid)" strokeWidth="1" strokeDasharray={i%2===0?"4,3":"2,3"}/>)}
    <line x1={cx} y1="20" x2={cx} y2="410" stroke="var(--map-grid)" strokeWidth="0.8"/>
    <line x1="10" y1={cy} x2="350" y2={cy} stroke="var(--map-grid)" strokeWidth="0.8"/>
    <text x={cx} y="18" textAnchor="middle" fontSize="12" fill="rgba(201,168,76,0.7)" fontFamily="Tajawal,sans-serif" fontWeight="700">N</text>
    <text x="345" y={cy+4} textAnchor="end" fontSize="11" fill="rgba(201,168,76,0.6)" fontFamily="Tajawal,sans-serif">E →</text>
    <text x="193" y={cy-37} fontSize="9" fill="rgba(139,105,20,0.45)" fontFamily="Tajawal,sans-serif">1km</text>
    <text x="233" y={cy-77} fontSize="9" fill="rgba(139,105,20,0.45)" fontFamily="Tajawal,sans-serif">5km</text>
    <text x="275" y={cy-115} fontSize="9" fill="rgba(139,105,20,0.45)" fontFamily="Tajawal,sans-serif">10km</text>
  </>
);

const SchematicMap = ({mapId, selectedPin, onPinSelect}:{mapId:string;selectedPin:string|null;onPinSelect:(id:string|null)=>void}) => {
  const data = MAP_DATA[mapId];
  const backgrounds: Record<string,React.ReactNode> = {
    haram:   <HaramBg/>,
    nabawi:  <NabawiBg/>,
    makkah:  <CityBg cx={152} cy={220}/>,
    madinah: <CityBg cx={152} cy={212}/>,
  };
  return (
    <div className="map-wrap">
      <svg viewBox="0 0 360 420" style={{width:"100%",display:"block"}}>
        {backgrounds[mapId]}
        {data.pins.map(p=>(
          <SvgPin key={p.id} x={p.x} y={p.y} emoji={p.emoji}
            selected={selectedPin===p.id}
            onClick={()=>onPinSelect(selectedPin===p.id?null:p.id)}/>
        ))}
      </svg>
    </div>
  );
};

const MiniMap = ({maps}:{maps:{id:string;label:string}[]}) => {
  const [activeMap, setActiveMap] = useState(maps[0].id);
  const [selPin, setSelPin]       = useState<string|null>(null);
  const data = MAP_DATA[activeMap];
  const activePin = selPin ? data.pins.find(p=>p.id===selPin) : null;
  return (
    <div style={{marginTop:4}}>
      {maps.length>1 && (
        <div className="map-sub-nav" style={{marginTop:0,marginBottom:10}}>
          {maps.map(m=>(
            <button key={m.id}
              className={`map-sub-nav-btn ${activeMap===m.id?"active":""}`}
              onClick={()=>{setActiveMap(m.id);setSelPin(null);}}>
              {m.label}
            </button>
          ))}
        </div>
      )}
      <div style={{fontSize:".82rem",fontWeight:700,color:"var(--ink)",marginBottom:6}}>{data.title}</div>
      <SchematicMap mapId={activeMap} selectedPin={selPin} onPinSelect={id=>setSelPin(selPin===id?null:id)}/>
      <div style={{fontSize:".74rem",color:"var(--muted)",marginTop:6,lineHeight:1.5}}>ℹ️ {data.hint}</div>
      {activePin && (
        <div className="map-pin-card" style={{marginTop:8}}>
          <div className="map-pin-card-title"><span style={{fontSize:"1.1rem"}}>{activePin.emoji}</span>{activePin.name}</div>
          <div className="map-pin-card-desc">{activePin.desc}</div>
          <a
            className="gmap-btn"
            href={`https://www.google.com/maps/dir/?api=1&destination=${activePin.lat},${activePin.lng}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Buka di Google Maps
          </a>
        </div>
      )}
      <div className="map-legend" style={{marginTop:8}}>
        <div className="map-legend-title">📍 Lokasi</div>
        <div className="map-legend-grid">
          {data.pins.map(p=>(
            <button key={p.id} onClick={()=>setSelPin(selPin===p.id?null:p.id)}
              style={{background:selPin===p.id?"rgba(201,168,76,0.1)":"none",border:selPin===p.id?"1px solid rgba(201,168,76,0.25)":"1px solid transparent",
                borderRadius:8,cursor:"pointer",textAlign:"left",
                padding:"6px 8px",fontFamily:"inherit",display:"flex",alignItems:"center",gap:5,
                color:selPin===p.id?"var(--gold)":"var(--ink)",minHeight:44,
                WebkitTapHighlightColor:"transparent"}}>
              <span style={{fontSize:".95rem"}}>{p.emoji}</span>
              <span style={{fontSize:".78rem",fontWeight:selPin===p.id?700:400}}>{p.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Sub-components ───────────────────────────────────────────────────────────
const DS = ({id,title,open,onToggle,children}:{id:string;title:string;open:boolean;onToggle:(id:string)=>void;children:React.ReactNode}) => (
  <div className="detail-section">
    <button className="detail-header" onClick={()=>onToggle(id)}>
      <span>{title}</span>
      <span className={`detail-arrow ${open?"open":""}`}>▾</span>
    </button>
    {open && <div className="detail-body">{children}</div>}
  </div>
);

const SubTabs = ({tabs,active,onChange}:{tabs:{id:string;label:string}[];active:string;onChange:(id:string)=>void}) => (
  <div className="sub-tabs" data-count={tabs.length}>
    {tabs.map(t=><button key={t.id} className={`sub-tab-btn ${active===t.id?"active":""}`} onClick={()=>onChange(t.id)}>{t.label}</button>)}
  </div>
);

// ─── Onboarding ───────────────────────────────────────────────────────────────
const OB_SLIDES = [
  {
    emoji:"📋",
    title:"Persiapkan Perjalanan Anda",
    desc:"Centang setiap item di tab Persiapan — mulai dari paspor, visa, vaksin, hingga perlengkapan ibadah.",
    tip:"Progress tersimpan otomatis di perangkat Anda. Kapan saja buka aplikasi, centang langsung lanjut dari terakhir kali.",
  },
  {
    emoji:"🕋",
    title:"Panduan Ibadah Lengkap",
    desc:"Tab Tutorial berisi panduan step-by-step seluruh ritual umroh — dari miqat, tawaf, sa'i, hingga tahallul — lengkap dengan doa dan transliterasi.",
    tip:"Ketuk judul kartu untuk membuka detail. Gunakan sub-tab untuk melihat bagian berbeda seperti doa, adab, dan panduan praktis.",
  },
  {
    emoji:"🗺️",
    title:"Peta Interaktif",
    desc:"Temukan peta Masjidil Haram, Masjid Nabawi, serta kota Makkah dan Madinah. Ketuk penanda untuk melihat detail lokasi.",
    tip:"Peta tersedia di dalam kartu Tutorial (tab Mekah & Madinah → sub-tab Peta).",
  },
  {
    emoji:"⚙️",
    title:"Pengaturan & Informasi",
    desc:"Ketuk ☰ di pojok kiri atas untuk mengatur tema gelap/terang, ukuran teks, atau mereset progress. Cari topik dengan cepat lewat kotak pencarian.",
    tip:"Gunakan fitur pencarian untuk langsung menemukan topik seperti 'paspor', 'tawaf', atau 'dam' tanpa harus scroll manual.",
  },
];

const Onboarding = ({onDone}:{onDone:()=>void}) => {
  const [slide, setSlide] = useState(0);
  const total = OB_SLIDES.length;
  const s = OB_SLIDES[slide];
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
          {OB_SLIDES.map((sl,i)=>(
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
          {OB_SLIDES.map((_,i)=>(
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

// ─── About Page ───────────────────────────────────────────────────────────────
const AboutPage = ({onClose}:{onClose:()=>void}) => (
  <div className="about-overlay">
    <div className="about-header">
      <button className="about-back-btn" onClick={onClose} aria-label="Kembali">‹</button>
      <div className="about-header-arabic">جَزَاكَ اللَّهُ خَيْرًا</div>
      <div className="about-header-title">Tentang & Donasi</div>
      <div className="about-header-sub">Umroh Mandiri v9.1</div>
    </div>

    <div className="about-body">
      {/* Author */}
      <div className="about-card">
        <div className="about-card-label">👤 Tentang Pembuat</div>
        <div className="author-avatar">🕌</div>
        <div className="author-name">Hamba Allah</div>
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

      {/* Donasi */}
      <div className="about-card">
        <div className="about-card-label">💝 Dukung Pengembangan</div>
        <div style={{textAlign:"center",marginBottom:12}}>
          <div style={{fontFamily:"Amiri,serif",fontSize:"1.2rem",color:"var(--gold)",marginBottom:6}}>بَارَكَ اللَّهُ فِيكُمْ</div>
          <div style={{fontSize:".84rem",color:"var(--muted)",lineHeight:1.65}}>
            Setiap donasi Anda membantu menjaga dan mengembangkan aplikasi ini agar terus gratis dan bermanfaat.
          </div>
        </div>
        <div className="qris-wrap">
          <div className="qris-label">Scan QRIS untuk Berdonasi</div>
          <div className="qris-box">
            <img
              src={qrisImg}
              alt="QRIS Donasi"
              style={{width:"100%",maxWidth:220,borderRadius:10,display:"block",margin:"0 auto"}}
            />
            <div className="qris-note">QRIS berlaku untuk semua dompet digital & m-banking Indonesia</div>
          </div>
        </div>
      </div>

      {/* Tentang */}
      <div className="about-card">
        <div className="about-card-label">ℹ️ Tentang Aplikasi</div>
        <div style={{textAlign:"center",marginBottom:10}}>
          <div className="about-version-badge">🕋 Umroh Mandiri <span style={{opacity:.75}}>v9.1</span></div>
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

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQ_DATA: {cat:string; items:{q:string;a:string;note?:string}[]}[] = [
  {
    cat:"🕌 Dasar Ibadah Umroh",
    items:[
      {
        q:"Apa saja rukun umroh yang wajib dipenuhi?",
        a:"Rukun umroh ada 5: <strong>niat ihram, tawaf, sa'i, tahallul (cukur rambut)</strong>, dan <strong>tertib</strong> (dilakukan berurutan). Jika salah satu rukun ditinggalkan, umroh tidak sah dan tidak bisa digantikan dengan dam.",
        note:"Berbeda dengan wajib umroh — jika wajib dilanggar, bisa ditebus dengan dam."
      },
      {
        q:"Apa perbedaan rukun, wajib, dan sunnah umroh?",
        a:"<strong>Rukun</strong>: wajib dikerjakan, tidak bisa diganti dam. <strong>Wajib</strong>: harus dikerjakan, jika ditinggalkan wajib membayar dam (denda). <strong>Sunnah</strong>: dianjurkan untuk menambah pahala, tidak mempengaruhi keabsahan ibadah.",
      },
      {
        q:"Berapa lama waktu ideal perjalanan umroh mandiri?",
        a:"Minimal <strong>10–14 hari</strong>: sekitar 5–7 hari di Mekkah dan 4–8 hari di Madinah. Waktu ideal ini memberi kesempatan untuk Arbain (40 shalat berturut-turut) di Nabawi dan eksplorasi situs-situs penting.",
        note:"Durasi bisa disesuaikan — sebagian jamaah mandiri memilih 21 hari agar lebih tenang beribadah."
      },
      {
        q:"Apakah umroh bisa dilakukan lebih dari sekali dalam satu perjalanan?",
        a:"Ya, boleh. Caranya: setelah umroh pertama selesai (tahallul), pergi ke salah satu titik miqat seperti <strong>Masjid Ji'ranah (±24km NE Mekkah)</strong> untuk berihram kembali, lalu lakukan tawaf, sa'i, dan tahallul lagi. Ini disebut <strong>umroh sunnah</strong>.",
      },
    ]
  },
  {
    cat:"🧳 Persiapan & Keberangkatan",
    items:[
      {
        q:"Dokumen apa saja yang wajib disiapkan untuk umroh?",
        a:"<strong>Wajib</strong>: Paspor (minimal 6 bulan aktif), visa umroh, tiket pesawat, bukti akomodasi hotel, sertifikat vaksin meningitis, dan kartu BPJS Kesehatan aktif (atau asuransi perjalanan).",
        note:"Visa umroh kini bisa diurus mandiri melalui platform Nusuk (nusuk.sa) atau melalui penyedia visa terpercaya."
      },
      {
        q:"Apakah vaksin meningitis wajib?",
        a:"<strong>Ya, wajib</strong>. Pemerintah Arab Saudi mewajibkan vaksin meningitis untuk semua jamaah. Suntikan harus dilakukan minimal <strong>10 hari sebelum keberangkatan</strong>. Tersedia di klinik kesehatan haji/umroh atau puskesmas tertentu.",
      },
      {
        q:"Berapa biaya minimal umroh mandiri dari Indonesia?",
        a:"Estimasi minimal (ekonomis): tiket PP sekitar Rp 5–8 juta, akomodasi 10 malam Rp 3–5 juta, visa Rp 1,5–2 juta, transportasi & makan Rp 2–4 juta. <strong>Total sekitar Rp 12–20 juta</strong>, jauh lebih hemat dibanding paket travel yang berkisar Rp 25–40 juta.",
        note:"Harga tiket sangat berfluktuasi. Pesan tiket 3–6 bulan lebih awal untuk mendapatkan harga terbaik."
      },
      {
        q:"Aplikasi apa saja yang wajib dipasang sebelum berangkat?",
        a:"<strong>Wajib</strong>: Nusuk (booking Raudhah & izin masuk haram), Google Maps (unduh offline Mekkah & Madinah), Uber/Careem (transportasi), Haramain Train (kereta HHR). <strong>Sangat disarankan</strong>: WhatsApp, Al-Qur'an Indonesia, dan aplikasi kurs mata uang.",
      },
      {
        q:"Pakaian apa yang boleh dipakai wanita saat ihram?",
        a:"Wanita mengenakan <strong>pakaian longgar menutup aurat</strong> — tidak ada ketentuan warna khusus. Boleh menggunakan gamis, abaya, atau baju biasa yang syar'i. <strong>Wajah dan telapak tangan harus terbuka</strong>, tidak boleh memakai cadar atau sarung tangan saat berihram.",
      },
    ]
  },
  {
    cat:"🤍 Ihram & Miqat",
    items:[
      {
        q:"Di mana miqat bagi jamaah Indonesia yang terbang via Jeddah?",
        a:"Jamaah yang mendarat di Bandara Internasional King Abdulaziz (Jeddah) menggunakan miqat <strong>Yalamlam</strong> (disebut juga As-Sa'diyah). Karena pesawat melewati kawasan miqat di udara, jamaah harus berihram <strong>sebelum boarding atau saat di pesawat</strong> sebelum melintas garis miqat.",
        note:"Diumumkan pilot di pesawat saat mendekati kawasan miqat. Jangan tunggu sampai mendarat!"
      },
      {
        q:"Bolehkah berpakaian ihram sejak dari bandara Indonesia?",
        a:"<strong>Boleh dan dianjurkan</strong> untuk memakai pakaian ihram sejak di bandara Indonesia, karena lebih praktis dan menghindari risiko kelewat miqat. Namun niat ihram (niat + talbiyah) baru dilakukan saat mendekati miqat di atas pesawat.",
      },
      {
        q:"Apa saja larangan saat berihram?",
        a:"<strong>Larangan ihram</strong> meliputi: memotong rambut/kuku, memakai wewangian, berburu binatang darat, berhubungan suami-istri, melamar/menikah, bertengkar/berbicara kotor. Pria dilarang menutup kepala dan memakai pakaian berjahit. Wanita dilarang memakai sarung tangan dan cadar.",
      },
      {
        q:"Apa hukum dan konsekuensi melanggar larangan ihram?",
        a:"Tergantung jenis pelanggarannya: <strong>Fidyah</strong> (memilih: puasa 3 hari, atau memberi makan 6 orang miskin, atau menyembelih 1 ekor kambing) untuk pelanggaran seperti memotong rambut/kuku atau memakai wewangian. Pelanggaran hubungan suami-istri sebelum tahallul pertama <strong>merusak keabsahan umroh</strong>.",
      },
      {
        q:"Apakah wanita yang sedang haid tetap bisa berihram?",
        a:"<strong>Ya, boleh dan tetap harus berihram</strong> dari miqat. Wanita haid bisa melakukan semua rangkaian perjalanan dan ibadah kecuali <strong>tawaf dan shalat</strong>. Sa'i boleh dilakukan. Tawaf ditunda hingga suci.",
        note:"Jika khawatir waktu tidak cukup, konsultasikan dengan dokter mengenai obat penunda haid, minimal 2 minggu sebelum berangkat."
      },
    ]
  },
  {
    cat:"🕋 Tawaf",
    items:[
      {
        q:"Apakah tawaf harus dalam kondisi suci (berwudhu)?",
        a:"<strong>Ya, wajib berwudhu</strong> untuk tawaf. Jika batal wudhu di tengah tawaf, keluar dari area mataf, wudhu kembali, lalu sambung putaran yang tertinggal dari titik yang sama (tidak perlu mulai dari awal).",
        note:"Wanita haid tidak boleh tawaf. Sa'i boleh dilakukan tanpa syarat suci."
      },
      {
        q:"Apa yang harus dilakukan jika tawaf terganggu oleh waktu shalat?",
        a:"Jika iqamah shalat dikumandangkan saat tawaf berlangsung, <strong>berhenti dan ikut shalat berjemaah</strong>. Setelah salam, lanjutkan putaran dari titik terakhir berhenti. Putaran yang sudah selesai tidak perlu diulang.",
      },
      {
        q:"Berapa minimal putaran tawaf yang sah?",
        a:"<strong>Tepat 7 putaran penuh</strong>, dimulai dan diakhiri di Hajar Aswad. Putaran yang tidak sampai garis Hajar Aswad tidak dihitung. Tawaf yang kurang dari 7 putaran tidak sah.",
      },
      {
        q:"Bolehkah berdoa dengan bahasa Indonesia saat tawaf?",
        a:"<strong>Boleh</strong>. Tidak ada doa tawaf yang sifatnya wajib dengan teks tertentu. Anda bebas berdoa dengan bahasa apa pun. Namun membaca doa yang diajarkan Rasulullah ﷺ tentu lebih afdhal, terutama doa sapu jagad antara Rukun Yamani dan Hajar Aswad.",
      },
    ]
  },
  {
    cat:"🏃 Sa'i & Tahallul",
    items:[
      {
        q:"Apakah sa'i harus langsung dilakukan setelah tawaf?",
        a:"Tidak harus langsung, tetapi <strong>sa'i harus dilakukan pada hari yang sama</strong> setelah tawaf. Jamaah boleh istirahat sebentar, minum zamzam, dan shalat 2 rakaat di Maqam Ibrahim sebelum memulai sa'i.",
      },
      {
        q:"Apakah wanita juga harus lari-lari kecil (harwalah) di antara dua tanda hijau saat sa'i?",
        a:"<strong>Tidak</strong>. Harwalah (lari-lari kecil) di antara dua tanda lampu hijau hanya disunnahkan bagi <strong>pria</strong>. Wanita cukup berjalan biasa sepanjang sa'i.",
      },
      {
        q:"Apakah sa'i sah jika dilakukan oleh wanita yang sedang haid?",
        a:"<strong>Ya, sa'i tetap sah</strong> bagi wanita haid karena sa'i tidak mensyaratkan kesucian/wudhu. Wanita haid boleh sa'i, namun tetap tidak boleh melakukan tawaf.",
      },
      {
        q:"Apa perbedaan tahallul asghar dan tahallur akbar?",
        a:"Untuk umroh, hanya ada <strong>satu tahallul</strong> — yaitu menggunting rambut setelah sa'i. Setelah itu semua larangan ihram gugur. Konsep tahallul asghar dan akbar (dua tahap) berlaku untuk <strong>ibadah haji</strong>, bukan umroh.",
      },
    ]
  },
  {
    cat:"🗺️ Praktis & Teknis",
    items:[
      {
        q:"Bagaimana cara booking slot Raudhah di Masjid Nabawi?",
        a:"Wajib melalui aplikasi <strong>Nusuk</strong> (nusuk.sa). Buat akun, masukkan data paspor, pilih lokasi 'Raudhah', lalu pilih jadwal yang tersedia. Slot sangat terbatas — booking <strong>segera setelah tiba di Madinah</strong> atau bahkan sebelum berangkat dari Indonesia.",
        note:"Jamaah pria dan wanita memiliki slot waktu yang berbeda. Wanita mendapat akses tertentu."
      },
      {
        q:"Bagaimana cara terbaik perjalanan Mekkah–Madinah?",
        a:"Ada dua pilihan utama: <strong>Kereta HHR (Haramain High Speed Railway)</strong> — durasi ±2 jam, harga SAR 65–150, nyaman dan cepat. Stasiun Makkah ±4km dari Haram. <strong>Bus Saptco</strong> — durasi ±5 jam, lebih murah sekitar SAR 30, tersedia dari Terminal Bus Mekkah.",
      },
      {
        q:"Di mana sebaiknya menginap agar dekat Masjidil Haram?",
        a:"Pilih hotel di <strong>ring 1 atau ring 2 Haram</strong> — dalam radius 500m–1km. Area Ajyad, Masa, dan Abraj Al-Bait (Clock Tower) adalah lokasi terpopuler. Semakin dekat, semakin mahal. Manfaatkan aplikasi Booking.com atau Agoda, filter dengan jarak ke Haram.",
      },
      {
        q:"Kartu SIM mana yang terbaik untuk dipakai di Arab Saudi?",
        a:"Tiga operator utama: <strong>STC, Zain, dan Mobily</strong>. Beli di bandara atau minimarket setibanya di Jeddah. Harga SIM perdana dengan data ±SAR 50–100 untuk 30 hari. Alternatif: gunakan <strong>eSIM</strong> (Airalo, Nomad) yang bisa diaktifkan sebelum boarding dari Indonesia.",
      },
      {
        q:"Apakah wanita boleh umroh mandiri tanpa mahram?",
        a:"Per kebijakan Arab Saudi terbaru (2021), <strong>wanita di atas 18 tahun boleh umroh tanpa mahram</strong> jika tergabung dalam rombongan resmi atau bersama kelompok wanita yang terorganisir. Namun kebijakan ini dapat berubah — selalu cek informasi terkini dari Kemenag atau KJRI Jeddah sebelum berangkat.",
        note:"Meski secara regulasi diperbolehkan, dari sisi fiqih sebagian ulama tetap menganjurkan mahram untuk keselamatan."
      },
      {
        q:"Apa yang harus dilakukan jika paspor hilang di Arab Saudi?",
        a:"Segera laporkan ke <strong>kantor polisi setempat</strong> untuk mendapatkan surat laporan kehilangan. Kemudian hubungi <strong>KJRI Jeddah</strong> (untuk jamaah dari Indonesia) atau Kedubes Indonesia di Riyadh untuk pengurusan Surat Perjalanan Laksana Paspor (SPLP). Selalu simpan fotokopi paspor dan data diri di email atau cloud.",
      },
      {
        q:"Bagaimana cara mendapatkan air zamzam untuk dibawa pulang ke Indonesia?",
        a:"Di Bandara King Abdulaziz Jeddah (terminal haji/umroh), tersedia <strong>paket air zamzam resmi 5 liter</strong> yang dijual seharga sekitar SAR 20–30. Ini adalah cara resmi dan legal. Batas bawaan: satu botol per penumpang. Memindahkan zamzam ke botol pribadi dan membawanya dalam bagasi kabin tidak diperbolehkan.",
      },
    ]
  },
];

// ─── FAQ Page ─────────────────────────────────────────────────────────────────
const FAQPage = ({onClose}:{onClose:()=>void}) => {
  const [openIdx, setOpenIdx] = useState<string|null>(null);

  const toggleItem = (key: string) => setOpenIdx(p => p===key ? null : key);

  let globalNum = 0;

  return (
    <div className="faq-overlay">
      <div className="faq-header">
        <button className="faq-back-btn" onClick={onClose} aria-label="Kembali">‹</button>
        <div className="faq-header-badge">❓</div>
        <div className="faq-header-title">Pertanyaan Umum</div>
        <div className="faq-header-sub">FAQ Ibadah Umroh Mandiri</div>
      </div>

      <div className="faq-body">
        {FAQ_DATA.map((cat, ci) => (
          <div key={ci}>
            <div className="faq-cat-label">{cat.cat}</div>
            {cat.items.map((item, ii) => {
              globalNum++;
              const key = `${ci}-${ii}`;
              const isOpen = openIdx === key;
              return (
                <div className="faq-item" key={key}>
                  <div className="faq-q" onClick={() => toggleItem(key)}>
                    <div className="faq-q-num">{globalNum}</div>
                    <div className="faq-q-text">{item.q}</div>
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
        ))}
        <div style={{marginTop:20,textAlign:"center",padding:"16px",background:"var(--surface)",borderRadius:14,border:"1px solid var(--closing-border)"}}>
          <div style={{fontFamily:"Amiri,serif",fontSize:"1.2rem",color:"var(--gold)",marginBottom:5}}>وَاللَّهُ أَعْلَمُ</div>
          <div style={{fontSize:".8rem",color:"var(--muted)",lineHeight:1.65}}>Wallahu a'lam bishawab — Hanya Allah yang Maha Mengetahui.<br/>Bila ragu, konsultasikan dengan ustadz atau pembimbing ibadah. 🤲</div>
        </div>
      </div>
    </div>
  );
};

// ─── Drawer Component ─────────────────────────────────────────────────────────
const Drawer = ({open,onClose,theme,setTheme,fontSize,setFontSize,onResetProgress,onOpenAbout}:{
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
              <div className="drawer-item-label">Tentang & Donasi</div>
              <div className="drawer-item-desc">Profil author, QRIS donasi, info aplikasi</div>
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

// ─── PREP DATA ────────────────────────────────────────────────────────────────
type PrepItem = {id:number;title:string;badge:string;tips:string[];links?:{url:string;icon:string;label:string;outline?:boolean}[]};
type PrepSection = {section:string;items:PrepItem[]};

const prepData: PrepSection[] = [
  {
    section:"Dokumen & Administrasi",
    items:[
      {id:1,title:"Paspor aktif (min. 6 bulan sejak keberangkatan)",badge:"penting",tips:["Buat atau perpanjang di kantor Imigrasi terdekat atau via aplikasi M-Paspor","Biaya: Rp350.000 (biasa 48 hal) atau Rp650.000 (elektronik). Proses ±4 hari kerja","Paspor wajib masih berlaku minimal 6 bulan terhitung dari tanggal keberangkatan — bukan tanggal pengajuan visa","Pastikan foto paspor tidak lebih dari 5 tahun dan masih mirip wajah saat ini","Cek masa berlaku sekarang — jangan menunggu H-14 keberangkatan"]},
      {id:2,title:"Visa Umroh",badge:"penting",tips:["Ajukan via platform resmi nusuk.sa atau agen PPIU terdaftar Kemenag","⚠️ Biaya visa terkini berkisar Rp2.000.000 – Rp4.000.000 (bervariasi tergantung agen & musim)","Dokumen wajib: paspor asli, tiket PP confirmed, voucher hotel, foto background putih 3x4, KTP, kartu vaksin meningitis","Proses 3–7 hari kerja. Ajukan minimal 3 minggu sebelum keberangkatan","Simpan visa digital di HP dan cetak salinan fisik sebagai cadangan"],links:[{url:"https://nusuk.sa",icon:"🔗",label:"Buka Nusuk.sa"}]},
      {id:25,title:"Registrasi Siskopatuh (Kemenag)",badge:"penting",tips:["Siskopatuh adalah sistem wajib Kemenag RI untuk verifikasi jamaah umroh mandiri","✅ Umroh mandiri adalah hak sah setiap warga negara — legal secara hukum. Namun tetap WAJIB melakukan registrasi melalui PPIU yang terdaftar di Kemenag","Registrasi di: siskopatuh.kemenag.go.id — gunakan NIK dan data paspor Anda","Dokumen yang diunggah: scan paspor, foto 3x4, bukti visa, tiket PP, dan voucher hotel","⚠️ Tanpa Siskopatuh, jamaah bisa ditolak boarding di bandara Indonesia","Lakukan registrasi setelah visa terbit dan minimal 7 hari sebelum keberangkatan"],links:[{url:"https://siskopatuh.kemenag.go.id",icon:"🔗",label:"Buka Siskopatuh"},{url:"https://haji.kemenag.go.id/umrah/",icon:"📋",label:"Info PPIU Resmi",outline:true}]},
      {id:3,title:"Kartu Keluarga & KTP",badge:"penting",tips:["Bawa fotokopi KK dan KTP minimal 5 lembar untuk berbagai keperluan","Scan dan simpan di Google Drive agar bisa diakses kapanpun meski HP hilang"]},
      {id:4,title:"Buku Nikah (jika sudah menikah)",badge:"opsional",tips:["Wanita di bawah 45 tahun wajib disertai mahram (suami/ayah/saudara laki-laki)","Wanita 45 tahun ke atas bisa berangkat tanpa mahram jika bersama rombongan resmi"]},
      {id:5,title:"Asuransi Saudi (otomatis via visa)",badge:"penting",tips:["Asuransi ini OTOMATIS aktif saat visa terbit — tidak perlu aksi terpisah","Mencakup: darurat kesehatan, kecelakaan, kematian selama di Arab Saudi","⚠️ Tidak mencakup: transit di negara lain, pembatalan penerbangan, bagasi hilang"]},
      {id:6,title:"Asuransi perjalanan tambahan",badge:"rekomendasi",tips:["Pilih yang mencakup: pembatalan penerbangan, bagasi hilang, medis di negara transit","Rekomendasi: Traveloka Insurance, Tokio Marine, atau Allianz Travel Care","Harga mulai Rp150.000–400.000 untuk 10–14 hari perjalanan"]},
    ]
  },
  {
    section:"Kesehatan & Vaksinasi",
    items:[
      {id:7,title:"Vaksin Meningitis ACYW135",badge:"penting",tips:["Dapatkan di klinik vaksinasi resmi, RS pemerintah/swasta, atau Kantor Kesehatan Pelabuhan","Biaya: Rp350.000–600.000. Akan mendapat kartu ICV (kartu kuning internasional)","Vaksin berlaku 5 tahun. Lakukan minimal 10 hari sebelum berangkat"]},
      {id:26,title:"Vaksin Polio (IPV/OPV)",badge:"rekomendasi",tips:["Arab Saudi mewajibkan bukti vaksin polio bagi jamaah dari negara endemis termasuk Indonesia","Vaksin polio tipe IPV (suntik) tersedia di puskesmas, klinik, dan rumah sakit","Biaya: Rp50.000–150.000 di fasilitas kesehatan pemerintah","Lakukan minimal 4 minggu sebelum keberangkatan"]},
      {id:8,title:"Vaksin Influenza",badge:"rekomendasi",tips:["Tersedia di puskesmas, klinik, dan rumah sakit. Biaya ±Rp200.000–400.000","Lakukan minimal 2 minggu sebelum berangkat agar proteksi optimal"]},
      {id:9,title:"Medical Check-Up",badge:"rekomendasi",tips:["Periksa tekanan darah, gula darah, fungsi jantung, dan kondisi fisik umum","Jamaah kondisi khusus (jantung, diabetes) wajib bawa catatan medis lengkap"]},
      {id:10,title:"Obat-obatan pribadi",badge:"penting",tips:["Bawa obat rutin untuk 2x durasi perjalanan — apotek di Saudi mahal","Wajib bawa: paracetamol, antidiare, oralit, obat maag, vitamin C, plester","Masker N95 sangat penting saat area tawaf padat — bawa minimal 10 lembar"]},
    ]
  },
  {
    section:"Tiket & Penginapan",
    items:[
      {id:11,title:"Tiket Pesawat PP (confirmed)",badge:"penting",tips:["Maskapai langsung dari Indonesia: Garuda, Saudi Airlines, Lion Air, Batik Air","Tiket harus confirmed (bukan open ticket) untuk keperluan pengajuan visa","Tiba di Jeddah (JED) lebih dekat ke Mekkah. Madinah (MED) untuk mulai ziarah dulu"]},
      {id:12,title:"Booking Hotel Mekkah (dengan voucher)",badge:"penting",tips:["Gunakan Booking.com, Agoda, atau nusuk.sa — filter 'near Masjid al-Haram'","Radius 200–500m dari Masjidil Haram sangat ideal — hemat tenaga dan waktu","Simpan voucher digital + cetak fisik — wajib ditunjukkan saat imigrasi Saudi"]},
      {id:13,title:"Bukti Transport Bandara ↔ Hotel",badge:"penting",tips:["Bukti pemesanan transportasi bandara–hotel–bandara wajib untuk pengajuan visa","Bisa berupa: konfirmasi shuttle hotel, booking Uber/Careem, atau surat agen transport"]},
      {id:14,title:"Hotel di Madinah",badge:"opsional",tips:["Pilih hotel di area Anbariyyah atau Central Area — dekat Masjid Nabawi","Booking slot Raudhah via aplikasi Nusuk sebelum berangkat dari Indonesia"]},
    ]
  },
  {
    section:"Persiapan Keuangan",
    items:[
      {id:15,title:"Riyal Arab Saudi (SAR)",badge:"penting",tips:["Tukar rupiah ke SAR di money changer Indonesia — kurs lebih baik dari di Saudi","1 SAR ≈ Rp4.200–4.400. Rata-rata SAR 3.000–5.000 cukup untuk 10 hari (belum termasuk oleh-oleh)"]},
      {id:16,title:"Kartu Debit/Kredit Internasional",badge:"rekomendasi",tips:["Aktifkan fitur transaksi internasional di mobile banking sebelum berangkat","Kartu GPN (logo lokal) tidak bisa dipakai di Saudi — pastikan Visa/Mastercard"]},
      {id:17,title:"Simpan nomor penting (darurat, KJRI & bank)",badge:"penting",tips:["🏛️ KJRI Jeddah: +966-12-671-1271 (24 jam)","🏛️ KJRI Jeddah WhatsApp Darurat: +966-53-831-0077","📞 Call Center Kemenag Umroh: 021-3811-546 / 1500025","🚑 Darurat Umum Arab Saudi: 911 | 997 (kebakaran)","💡 Simpan semua nomor ini di kontak HP dan catatan kertas di dompet"]},
    ]
  },
  {
    section:"Perlengkapan Ibadah & Bawaan",
    items:[
      {id:18,title:"Pakaian Ihram & Sandal",badge:"penting",tips:["Pilih bahan terry cotton atau turkish cotton — kuat, tidak mudah melar","Ukuran ideal: 90×150 cm (bawah) dan 90×200 cm (atas)","Wanita: gamis + khimar putih menutup seluruh tubuh kecuali wajah & telapak tangan","Latihan pakai ihram sebelum berangkat agar tidak kerepotan di miqat","Sandal Hawalaki atau sandal kulit: nyaman, awet, tidak licin di marmer basah","Pria saat ihram: tidak boleh menutup mata kaki dan jari-jari kaki","Bawa spidol kecil untuk menandai sandal agar tidak tertukar di masjid"]},
      {id:21,title:"Pakaian sopan & nyaman (min. 5 set)",badge:"penting",tips:["Bahan terbaik: linen, katun, atau dry-fit. Cuaca Mekkah 35–45°C","Pria: kurta/gamis adalah pilihan terbaik. Wanita: gamis longgar + bergo nyaman"]},
      {id:22,title:"Power bank & adaptor tipe G",badge:"penting",tips:["Arab Saudi pakai colokan Tipe G (3 pin kotak). Beli adaptor universal sebelum berangkat","Power bank min. 20.000 mAh sangat berguna saat seharian di masjid"]},
      {id:23,title:"Fotokopi & scan dokumen penting",badge:"penting",tips:["Fotokopi: paspor, visa, tiket, voucher hotel, kartu vaksin, KTP","Simpan satu set di tas kabin dan satu set di koper — pisah dari dokumen asli","Upload ke Google Drive atau email sendiri agar bisa diakses kapanpun"]},
    ]
  },
  {
    section:"Komunikasi, Internet & Aplikasi",
    items:[
      {id:27,title:"Siapkan koneksi internet di Arab Saudi",badge:"penting",tips:[
        "Ada 3 pilihan — pilih salah satu atau kombinasi:",
        "① E-SIM (paling praktis): beli via Airalo/Holafly/Nomad sebelum berangkat. Paket Saudi 10–15 hari ±Rp150.000–350.000. Syarat: HP mendukung E-SIM",
        "② Paket Roaming: aktifkan via MyTelkomsel / myXL / myIM3. Biaya Rp100.000–300.000/hari",
        "③ SIM Card Lokal (paling hemat): beli STC/Zain/Mobily di bandara. Harga SAR 30–60, data 10–20 GB",
        "Rekomendasi: STC memiliki sinyal terkuat di area Masjidil Haram dan Masjid Nabawi",
      ]},
      {id:30,title:"Install aplikasi penting & panduan doa offline",badge:"penting",tips:[
        "① Nusuk (nusuk.sa) — WAJIB: booking slot Raudhah. Buat akun minimal 2 hari sebelum berangkat",
        "② Google Maps — download peta offline Makkah & Madinah sebelum berangkat",
        "③ Uber / Careem — daftarkan akun + kartu kredit internasional sebelum berangkat",
        "④ HHR Haramain Train — tiket kereta cepat Makkah–Madinah (±2 jam, SAR 65–150)",
        "⑤ Al-Qur'an Indonesia / Muslim Pro — aktifkan mode offline untuk doa & dzikir lengkap",
        "📖 Hafal minimal sebelum berangkat: niat ihram, talbiyah, dan doa antara Rukun Yamani–Hajar Aswad",
        "Semua aplikasi ini GRATIS — install dan coba sebelum berangkat agar familiar",
      ]},
    ]
  },
];

// ─── TUTORIAL DATA ─────────────────────────────────────────────────────────────
type TutItem = {
  emoji:string;title:string;subtitle:string;gold:boolean;defaultSubTab:string|null;
  content:(props:{D:Record<string,boolean>;T:(k:string)=>void;subTab:string;setSubTab:(t:string)=>void})=>React.ReactNode;
};

const tutorialData: TutItem[] = [
  {emoji:"🕌",title:"Miqat & Ihram",subtitle:"Titik awal & tata cara berihram",gold:false,defaultSubTab:"miqat",
    content:({D,T,subTab,setSubTab})=>(
      <div>
        <SubTabs tabs={[{id:"miqat",label:"🗺️ Miqat"},{id:"ihram",label:"🤍 Ihram"},{id:"dam-sebab",label:"⚠️ Sebab Dam"},{id:"dam-cara",label:"🐑 Cara Bayar"}]} active={subTab} onChange={setSubTab}/>
        {subTab==="miqat"&&<div>
          <DS id="mq1" title="1. Mengenal Miqat Makani" open={D["mq1"]} onToggle={T}>
            <p><strong>Miqat Makani</strong> adalah batas geografis tempat jamaah wajib memulai ihram:</p>
            <ul className="tip-list">
              <li><strong>Qarnul Manazil</strong> — jamaah dari Indonesia (via Jeddah) & negara Teluk</li>
              <li><strong>Bir Ali (Dzulhulaifah)</strong> — jamaah dari arah Madinah. ±450 km dari Mekkah</li>
              <li><strong>Yalamlam</strong> — jamaah dari arah Yaman & sebagian Asia Tenggara</li>
              <li><strong>Juhfah (Rabigh)</strong> — jamaah dari arah barat (Mesir, Maroko)</li>
              <li><strong>Dzatu 'Irq</strong> — jamaah dari arah Irak</li>
            </ul>
            <div className="info-box"><p>🗺️ Terbang Jakarta → Jeddah (langsung): niat ihram wajib diucapkan sesaat sebelum pesawat melewati titik miqat Qarnul Manazil. Maskapai biasanya mengumumkan 15–30 menit sebelumnya.</p></div>
            <div className="warn-box"><p>✈️ <strong>Khusus penerbangan transit:</strong><br/>
              • <strong>Transit Qatar (DOH)</strong> → Berihramlah di bandara Doha sebelum boarding ke Jeddah.<br/>
              • <strong>Transit Dubai (DXB)</strong> → Berihramlah di bandara Dubai sebelum naik penerbangan ke Jeddah.<br/>
              • <strong>Transit Kuwait (KWI)</strong> → Kenakan ihram sebelum boarding dari Kuwait menuju Jeddah.<br/>
              • <strong>Transit Oman (MCT)</strong> → Berihramlah di bandara Muscat sebelum terbang ke Jeddah.<br/>
              ⚠️ Jika terlewat miqat tanpa ihram, wajib membayar <strong>dam (denda)</strong>.</p></div>
          </DS>
          <DS id="mq2" title="2. Strategi Ihram di Pesawat" open={D["mq2"]} onToggle={T}>
            <p><strong>Direkomendasikan:</strong> Pria — pakai kain ihram bawah sejak bandara asal, ganti Rida' di toilet pesawat 1 jam sebelum mendarat. Wanita — pakai muslimah syar'i sejak awal.</p>
            <div className="warn-box"><p>⚠️ Hindari ganti pakaian saat turbulensi.</p></div>
          </DS>
          <DS id="mq3" title="3. Niat Ihram & Talbiyah" open={D["mq3"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Niat Ihram Umroh</div>
              <div className="doa-arabic">لَبَّيْكَ اللَّهُمَّ عُمْرَةً</div>
              <div className="doa-latin">Labbaik Allāhumma 'umratan</div>
              <div className="doa-arti">"Ya Allah, aku memenuhi panggilan-Mu untuk mengerjakan umroh."</div>
            </div>
            <div className="doa-box">
              <div className="doa-label">Talbiyah</div>
              <div className="doa-arabic">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ</div>
              <div className="doa-latin">Labbaik Allāhumma labbaik, labbaik lā syarīka laka labbaik, innal-ḥamda wan-ni'mata laka wal-mulk, lā syarīka lak</div>
              <div className="doa-arti">"Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Tiada sekutu bagi-Mu."</div>
            </div>
          </DS>
        </div>}
        {subTab==="ihram"&&<div>
          <DS id="ih1" title="Larangan Saat Ihram (Pria & Wanita)" open={D["ih1"]} onToggle={T}>
            <ul className="larangan-list">
              <li>Memotong/mencabut rambut atau bulu tubuh</li>
              <li>Memotong kuku</li>
              <li>Memakai wewangian/parfum setelah niat ihram</li>
              <li>Berhubungan suami-istri dan segala mukadimahnya</li>
              <li>Berburu atau membunuh binatang darat</li>
              <li>Menikah atau menikahkan</li>
              <li>Berkata-kata kotor, bertengkar, atau berbuat fasik</li>
            </ul>
          </DS>
          <DS id="ih2" title="Larangan Khusus Pria" open={D["ih2"]} onToggle={T}>
            <ul className="larangan-list">
              <li>Menutup kepala dengan topi, peci, atau sejenisnya</li>
              <li>Memakai pakaian berjahit yang mengikuti lekuk tubuh</li>
              <li>Memakai sepatu yang menutup mata kaki dan tumit</li>
            </ul>
          </DS>
          <DS id="ih3" title="Larangan Khusus Wanita" open={D["ih3"]} onToggle={T}>
            <ul className="larangan-list">
              <li>Memakai sarung tangan (cakar)</li>
              <li>Memakai niqab (penutup wajah) — wajah harus terbuka</li>
            </ul>
          </DS>
        </div>}
        {subTab==="dam-sebab"&&<div>
          <DS id="dam1" title="Apa itu Dam?" open={D["dam1"]} onToggle={T}>
            <p><strong>Dam</strong> adalah denda berupa penyembelihan hewan yang wajib dibayar ketika jamaah melanggar ketentuan ihram atau meninggalkan salah satu wajib umroh/haji.</p>
            <div className="info-box"><p>📌 Dam bukan berarti umroh/haji tidak sah. Ibadah tetap sah, namun ada kewajiban tambahan yang harus dipenuhi sebagai kafarat (penebus).</p></div>
          </DS>
          <DS id="dam2" title="Penyebab Wajib Dam" open={D["dam2"]} onToggle={T}>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Rafast (hubungan suami-istri)</strong> saat ihram — dam berupa 1 ekor unta/sapi atau 7 ekor kambing</li>
              <li><span className="step-badge">2</span><strong>Melewati miqat tanpa ihram</strong> — dam 1 ekor kambing</li>
              <li><span className="step-badge">3</span><strong>Mencukur rambut/memotong kuku</strong> saat ihram — dam fidyah: puasa 3 hari, atau sedekah 3 sha' makanan, atau sembelih 1 kambing</li>
              <li><span className="step-badge">4</span><strong>Memakai wewangian/pakaian berjahit</strong> — sama dengan poin 3</li>
              <li><span className="step-badge">5</span><strong>Tawaf Wada' ditinggalkan</strong> — dam 1 ekor kambing</li>
            </ul>
          </DS>
        </div>}
        {subTab==="dam-cara"&&<div>
          <DS id="dam3" title="Cara Membayar Dam" open={D["dam3"]} onToggle={T}>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Via Bank Al-Rajhi / Bank Saudi:</strong> Transfer ke rekening resmi penyembelihan dam yang ditunjuk pemerintah Saudi. Tanyakan kepada muthawwif atau petugas masjid setempat untuk rekening yang valid dan terpercaya</li>
              <li><span className="step-badge">2</span><strong>Via Lembaga Resmi Saudi:</strong> Yayasan penyembelihan hewan kurban resmi yang beroperasi di Makkah menerima pembayaran dam</li>
              <li><span className="step-badge">3</span><strong>Via PPIU/Agen Perjalanan Anda:</strong> Beberapa agen memiliki layanan pembayaran dam — tanyakan sebelum berangkat</li>
            </ul>
            <div className="warn-box"><p>⚠️ Dam HARUS disembelih di dalam wilayah tanah haram (Mekkah dan sekitarnya). Dagingnya harus diberikan kepada fakir miskin setempat.</p></div>
          </DS>
          <DS id="dam5" title="Estimasi Biaya Dam" open={D["dam5"]} onToggle={T}>
            <ul className="tip-list">
              <li><strong>Kambing/Domba:</strong> SAR 300–600 (±Rp1.350.000–2.700.000)</li>
              <li><strong>Sapi (1/7 bagian):</strong> SAR 1.000–2.500</li>
              <li><strong>Fidyah makanan:</strong> SAR 30–50 per orang (×6 = SAR 180–300)</li>
              <li>Siapkan dana cadangan SAR 400–700 untuk kemungkinan dam</li>
            </ul>
          </DS>
        </div>}
      </div>
    )
  },
  {emoji:"🕋",title:"Masuk & Sholat di Masjidil Haram",subtitle:"Adab masuk, keutamaan & panduan sholat berjamaah",gold:true,defaultSubTab:"sh-masuk",
    content:({D,T,subTab,setSubTab})=>(
      <div>
        <SubTabs tabs={[{id:"sh-masuk",label:"🚪 Masuk"},{id:"sh-panduan",label:"📋 Sholat"},{id:"sh-waktu",label:"🕐 Waktu"},{id:"sh-adab",label:"🤲 Adab"}]} active={subTab} onChange={setSubTab}/>
        {subTab==="sh-masuk"&&<div>
          <DS id="sh-masuk1" title="🚪 Tata Cara Memasuki Masjidil Haram" open={D["sh-masuk1"]} onToggle={T}>
            <p>Masuk melalui pintu <strong>Bab As-Salam</strong> dengan kaki kanan terlebih dahulu.</p>
            <div className="doa-box">
              <div className="doa-label">Doa Masuk Masjid</div>
              <div className="doa-arabic">اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ</div>
              <div className="doa-latin">Allāhummaftaḥ lī abwāba raḥmatik</div>
              <div className="doa-arti">"Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu."</div>
            </div>
            <ul className="tip-list">
              <li>Saat pertama kali melihat Ka'bah, berdiri sejenak dan panjatkan doa — waktu mustajab</li>
              <li>Simpan sandal di dalam tas, bukan di rak masjid agar tidak tertukar</li>
              <li>Baca talbiyah terus hingga siap memulai tawaf</li>
            </ul>
          </DS>
        </div>}
        {subTab==="sh-panduan"&&<div>
          <DS id="sh1" title="🕋 Keutamaan Sholat di Masjidil Haram" open={D["sh1"]} onToggle={T}>
            <div className="info-box"><p>💎 Satu rakaat sholat di Masjidil Haram setara dengan <strong>100.000 rakaat</strong> di masjid lain (HR. Ibnu Majah). Jangan lewatkan satu pun sholat fardhu berjamaah selama di Makkah.</p></div>
            <ul className="tip-list">
              <li>Utamakan sholat fardhu langsung di dalam Masjidil Haram, bukan di hotel</li>
              <li>Usahakan hadir <strong>20–30 menit sebelum iqamah</strong> — masjid sangat padat</li>
              <li>Sholat Jum'at: datang minimal 2 jam sebelum waktu untuk dapat shaf dekat</li>
            </ul>
          </DS>
          <DS id="sh3" title="📿 Sholat Sunnah Khusus di Masjidil Haram" open={D["sh3"]} onToggle={T}>
            <ul className="tip-list">
              <li><span className="step-badge">1</span><strong>Sholat Tahiyatul Masjid:</strong> 2 rakaat saat pertama kali masuk</li>
              <li><span className="step-badge">2</span><strong>Sholat di Hijr Ismail:</strong> 2 rakaat — pahala setara sholat di dalam Ka'bah</li>
              <li><span className="step-badge">3</span><strong>Sholat 2 rakaat di Maqam Ibrahim:</strong> Dianjurkan setelah selesai tawaf</li>
            </ul>
          </DS>
        </div>}
        {subTab==="sh-waktu"&&<div>
          <DS id="sh4" title="🕐 Jadwal Sholat & Strategi Waktu" open={D["sh4"]} onToggle={T}>
            <div className="warn-box"><p>⏰ Jadwal sholat di Arab Saudi berbeda dengan Indonesia. Set aplikasi Muslim Pro/Athan ke lokasi Makkah sebelum berangkat.</p></div>
            <ul className="tip-list">
              <li><strong>Subuh:</strong> ±05:00–05:30 — paling tenang, shaf lebih longgar</li>
              <li><strong>Dzuhur:</strong> ±12:15–12:30 — sangat panas di musim panas</li>
              <li><strong>Ashar:</strong> ±15:30–16:00 — mulai ramai</li>
              <li><strong>Maghrib:</strong> ±18:00–18:15 — paling padat, datang 30 menit lebih awal</li>
              <li><strong>Isya:</strong> ±19:30–20:00</li>
            </ul>
            <div className="info-box"><p>💡 Manfaatkan waktu antara Maghrib–Isya (±1,5 jam) untuk tawaf sunnah karena suhu sudah turun.</p></div>
          </DS>
        </div>}
        {subTab==="sh-adab"&&<div>
          <DS id="sh6" title="🚫 Adab & Larangan di Area Sholat" open={D["sh6"]} onToggle={T}>
            <ul className="larangan-list">
              <li>Dilarang berjalan di depan orang yang sedang sholat</li>
              <li>Matikan atau silent HP sebelum masuk area sholat</li>
              <li>Dilarang foto/video di dalam masjid saat sholat berlangsung</li>
            </ul>
            <ul className="larangan-list sunnah-list" style={{marginTop:8}}>
              <li>Berwudhu dari hotel sebelum berangkat ke masjid — antrian wudhu bisa panjang</li>
              <li>Bawa Al-Quran kecil atau murojaah hafalan saat menunggu iqamah</li>
            </ul>
          </DS>
          <DS id="sh7" title="🤲 Doa Setelah Sholat di Masjidil Haram" open={D["sh7"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Doa Memasuki Masjid</div>
              <div className="doa-arabic">اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ</div>
              <div className="doa-latin">Allāhummaftaḥ lī abwāba raḥmatik</div>
              <div className="doa-arti">"Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu."</div>
            </div>
          </DS>
        </div>}
      </div>
    )
  },
  {emoji:"🔄",title:"Tawaf — Mengelilingi Ka'bah",subtitle:"7 putaran berlawanan arah jarum jam",gold:true,defaultSubTab:null,
    content:({D,T})=>(
      <div>
        <p>Tawaf adalah mengelilingi Ka'bah sebanyak <strong>7 putaran berlawanan arah jarum jam</strong>. Ka'bah selalu di sebelah kiri.</p>
        <DS id="tw-jenis" title="📚 Jenis-Jenis Tawaf" open={D["tw-jenis"]} onToggle={T}>
          <ul className="tip-list">
            <li><span className="step-badge">1</span><strong>Tawaf Qudum</strong> — Saat pertama tiba di Makkah. Hukum: <em>sunnah</em>.</li>
            <li><span className="step-badge">2</span><strong>Tawaf Umroh (Rukun)</strong> — Bagian inti ibadah umroh. Hukum: <em>rukun</em> — tidak bisa digantikan dam.</li>
            <li><span className="step-badge">3</span><strong>Tawaf Wada' (Perpisahan)</strong> — Dilakukan sesaat sebelum meninggalkan Makkah. Hukum: <em>wajib</em>.</li>
            <li><span className="step-badge">4</span><strong>Tawaf Sunnah</strong> — Kapan saja selama di Makkah. Sangat dianjurkan.</li>
          </ul>
        </DS>
        <DS id="tw3" title="✅ Syarat Sahnya Tawaf" open={D["tw3"]} onToggle={T}>
          <ul className="tip-list">
            <li>Suci dari hadas kecil (wudhu) dan hadas besar</li>
            <li>Ka'bah berada di sebelah kiri selama tawaf</li>
            <li>Dimulai tepat dari garis sejajar Hajar Aswad</li>
            <li>Dilakukan genap 7 putaran penuh</li>
          </ul>
          <div className="warn-box"><p>⚠️ Wanita haid tidak boleh tawaf. Sa'i boleh dilakukan dalam keadaan haid.</p></div>
        </DS>
        <DS id="tw5" title="📖 Cara Pelaksanaan" open={D["tw5"]} onToggle={T}>
          <ul className="tip-list">
            <li><span className="step-badge">1</span>Wudhu. Pria: idhtiba (buka bahu kanan).</li>
            <li><span className="step-badge">2</span>Berdiri sejajar bahu kiri dengan Hajar Aswad.</li>
            <li><span className="step-badge">3</span>Istilam: "Bismillahi Allahu Akbar"</li>
            <li><span className="step-badge">4</span>Berjalan berlawanan jarum jam (Ka'bah di kiri).</li>
            <li><span className="step-badge">5</span>Rukun Yamani: usap tangan kanan jika bisa.</li>
            <li><span className="step-badge">6</span>Antara Rukun Yamani–Hajar Aswad: baca doa sapu jagad.</li>
            <li><span className="step-badge">7</span>Selesai 7 putaran → shalat 2 rakaat di Maqam Ibrahim.</li>
          </ul>
          <div className="doa-box">
            <div className="doa-label">Doa antara Rukun Yamani & Hajar Aswad</div>
            <div className="doa-arabic">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</div>
            <div className="doa-latin">Rabbanā ātinā fid-dunyā ḥasanah, wa fil-ākhirati ḥasanah, wa qinā 'adzāban-nār</div>
            <div className="doa-arti">"Ya Tuhan kami, berikanlah kebaikan di dunia dan di akhirat, dan peliharalah kami dari azab neraka."</div>
          </div>
        </DS>
        <DS id="tw7" title="⚠️ Kesalahan Umum" open={D["tw7"]} onToggle={T}>
          <ul className="tip-list">
            <li><strong>Tawaf searah jarum jam</strong> — TIDAK SAH</li>
            <li><strong>Tawaf tanpa wudhu</strong> — tidak sah, wajib diulang</li>
            <li><strong>Memaksakan menyentuh Hajar Aswad</strong> hingga menyakiti orang — DILARANG</li>
          </ul>
        </DS>
      </div>
    )
  },
  {emoji:"🏃",title:"Sa'i — Shafa & Marwah",subtitle:"7 kali bolak-balik, total ±3,15 km",gold:false,defaultSubTab:null,
    content:({D,T})=>(
      <div>
        <p>Sa'i adalah berjalan bolak-balik antara bukit Shafa dan Marwah sebanyak <strong>7 kali</strong>, dimulai dari Shafa dan diakhiri di Marwah.</p>
        <DS id="si2" title="⚖️ Hukum Sa'i" open={D["si2"]} onToggle={T}>
          <p>Wajib — rukun umroh. Tidak bisa digantikan dam.</p>
          <div className="info-box"><p>📌 Wanita haid boleh sa'i tanpa harus suci terlebih dahulu.</p></div>
        </DS>
        <DS id="si3" title="📖 Cara Pelaksanaan" open={D["si3"]} onToggle={T}>
          <ul className="tip-list">
            <li><span className="step-badge">1</span>Selesai tawaf → shalat 2 rakaat → minum zamzam.</li>
            <li><span className="step-badge">2</span>Naiki bukit Shafa, hadap Ka'bah, baca doa pembuka.</li>
            <li><span className="step-badge">3</span>Berjalan ke Marwah. Pria: lari kecil di area lampu hijau.</li>
            <li><span className="step-badge">4</span>Lanjutkan 7 kali. <strong>Ke-7 berakhir di Marwah.</strong></li>
          </ul>
          <div className="doa-box">
            <div className="doa-label">Doa di Shafa & Marwah</div>
            <div className="doa-arabic">إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ</div>
            <div className="doa-latin">Innaṣ-ṣafā wal-marwata min sya'ā'irillāh</div>
            <div className="doa-arti">"Sesungguhnya Shafa dan Marwah adalah sebagian dari syi'ar Allah." (QS. 2:158)</div>
          </div>
        </DS>
      </div>
    )
  },
  {emoji:"✂️",title:"Tahallul — Menggunting Rambut",subtitle:"Penanda selesainya ibadah umroh",gold:true,defaultSubTab:null,
    content:()=>(
      <div>
        <p>Tahallul adalah mencukur atau memotong rambut sebagai tanda berakhirnya ihram dan selesainya umroh.</p>
        <ul className="tip-list">
          <li><strong>Pria:</strong> Afdhal mencukur habis (gundul/halq), atau minimal potong ±3 cm dari seluruh rambut</li>
          <li><strong>Wanita:</strong> Cukup memotong ±2–3 cm dari ujung rambut</li>
          <li>Setelah tahallul, semua larangan ihram hilang — berpakaian normal kembali</li>
        </ul>
        <div className="doa-box">
          <div className="doa-label">Doa Tahallul</div>
          <div className="doa-arabic">اللَّهُمَّ اغْفِرْ لِلْمُحَلِّقِينَ</div>
          <div className="doa-latin">Allāhummagh-fir lil-muḥalliqīn</div>
          <div className="doa-arti">"Ya Allah, ampunilah orang-orang yang mencukur rambut mereka."</div>
        </div>
        <div className="info-box"><p>🎉 Selamat! Umroh Anda telah selesai. Perbanyak tawaf sunnah, doa, dan dzikir selama masih di Mekkah.</p></div>
      </div>
    )
  },
  {emoji:"🕋",title:"Mekah — Kota Suci Pertama",subtitle:"Keutamaan, sunnah & aktivitas selama di Mekah",gold:true,defaultSubTab:"mk-keutamaan",
    content:({D,T,subTab,setSubTab})=>(
      <div>
        <SubTabs tabs={[{id:"mk-keutamaan",label:"⭐ Keutamaan"},{id:"mk-sunnah",label:"🌿 Sunnah"},{id:"mk-kegiatan",label:"🗺️ Kegiatan"},{id:"mk-peta",label:"📍 Peta"}]} active={subTab} onChange={setSubTab}/>
        {subTab==="mk-keutamaan"&&<div>
          <DS id="mk1" title="🕋 Keutamaan Kota Mekah" open={D["mk1"]} onToggle={T}>
            <ul className="tip-list">
              <li>Shalat di Masjidil Haram = <strong>100.000× pahala</strong> dibanding masjid lain</li>
              <li>Di sinilah Ka'bah berdiri — kiblat seluruh umat Islam di dunia</li>
              <li>Tempat turunnya wahyu pertama Al-Qur'an di Gua Hira</li>
            </ul>
          </DS>
          <DS id="mk2" title="💧 Keutamaan Air Zamzam" open={D["mk2"]} onToggle={T}>
            <div className="doa-box">
              <div className="doa-label">Doa Minum Air Zamzam</div>
              <div className="doa-arabic">اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ</div>
              <div className="doa-latin">Allāhumma innī as'aluka 'ilman nāfi'an wa rizqan wāsi'an wa syifā'an min kulli dā'</div>
              <div className="doa-arti">"Ya Allah, aku memohon ilmu yang bermanfaat, rezeki yang luas, dan kesembuhan dari segala penyakit."</div>
            </div>
          </DS>
        </div>}
        {subTab==="mk-sunnah"&&<div>
          <DS id="mk4" title="🕌 Sunnah di Masjidil Haram" open={D["mk4"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Memperbanyak tawaf sunnah — waktu terbaik dini hari 02.00–05.00</li>
              <li>Berdoa di Multazam (tempelkan dada dan tangan ke dinding)</li>
              <li>Membaca Al-Qur'an dan i'tikaf di dalam masjid</li>
            </ul>
          </DS>
          <DS id="mk6" title="🌿 Sunnah di Kota Mekah" open={D["mk6"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Berziarah ke Jabal Nur (Gua Hira)</li>
              <li>Berziarah ke Jabal Tsur — tempat Nabi bersembunyi saat hijrah</li>
              <li>Mengunjungi Masjid Ji'ranah untuk umroh sunnah</li>
              <li>Ziarah ke Janatul Mu'alla (makam Siti Khadijah RA)</li>
            </ul>
          </DS>
        </div>}
        {subTab==="mk-kegiatan"&&<div>
          <DS id="mk8" title="⛰️ Jabal Nur & Gua Hira" open={D["mk8"]} onToggle={T}>
            <ul className="tip-list">
              <li>Jarak: ±4.5km. Pendakian ±45 menit, ±1.700 anak tangga</li>
              <li>Berangkat dini hari atau sore untuk menghindari terik matahari</li>
            </ul>
          </DS>
          <DS id="mk10" title="🕌 Masjid Ji'ranah" open={D["mk10"]} onToggle={T}>
            <ul className="tip-list">
              <li>Jarak: ±24km NE. Titik miqat untuk umroh sunnah</li>
              <li>Waktu terbaik: malam hari agar bisa langsung tawaf setelah ihram</li>
            </ul>
          </DS>
        </div>}
        {subTab==="mk-peta"&&(
          <MiniMap maps={[{id:"haram",label:"🕋 Masjidil Haram"},{id:"makkah",label:"🗺️ Kota Makkah"}]}/>
        )}
      </div>
    )
  },
  {emoji:"🕌",title:"Madinah — Kota Cahaya",subtitle:"Keutamaan, sunnah & aktivitas selama di Madinah",gold:false,defaultSubTab:"md-keutamaan",
    content:({D,T,subTab,setSubTab})=>(
      <div>
        <SubTabs tabs={[{id:"md-keutamaan",label:"⭐ Keutamaan"},{id:"md-sunnah",label:"🌿 Sunnah"},{id:"md-kegiatan",label:"🗺️ Kegiatan"},{id:"md-peta",label:"📍 Peta"}]} active={subTab} onChange={setSubTab}/>
        {subTab==="md-keutamaan"&&<div>
          <DS id="md2" title="🌟 Keutamaan Masjid Nabawi" open={D["md2"]} onToggle={T}>
            <ul className="tip-list">
              <li>Shalat di Masjid Nabawi = <strong>1.000× pahala</strong> (HR. Bukhari & Muslim)</li>
              <li>"Antara rumahku dan mimbarku adalah taman dari taman-taman surga." (HR. Bukhari)</li>
            </ul>
          </DS>
          <DS id="md3" title="🤍 Keutamaan Raudhah" open={D["md3"]} onToggle={T}>
            <ul className="tip-list">
              <li>Doa di Raudhah sangat mustajab — panjatkan doa terbaik Anda</li>
              <li>Booking slot Raudhah wajib via aplikasi <strong>Nusuk</strong> sebelum berangkat</li>
            </ul>
            <div className="doa-box">
              <div className="doa-label">Salam kepada Rasulullah ﷺ</div>
              <div className="doa-arabic">اَلسَّلاَمُ عَلَيْكَ يَا رَسُوْلَ اللهِ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</div>
              <div className="doa-latin">As-salāmu 'alaika yā Rasūlallāh wa raḥmatullāhi wa barakātuh</div>
              <div className="doa-arti">"Semoga keselamatan, rahmat, dan berkah Allah terlimpah kepadamu, wahai Rasulullah."</div>
            </div>
          </DS>
        </div>}
        {subTab==="md-sunnah"&&<div>
          <DS id="md4" title="🕌 Sunnah di Masjid Nabawi" open={D["md4"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Melaksanakan <strong>Arbain</strong> — 40 shalat fardhu berturut-turut (min. 8 hari)</li>
              <li>Shalat di Raudhah dan memperbanyak doa</li>
              <li>Memperbanyak shalawat kepada Nabi ﷺ</li>
            </ul>
          </DS>
          <DS id="md5" title="🌿 Sunnah di Kota Madinah" open={D["md5"]} onToggle={T}>
            <ul className="larangan-list sunnah-list">
              <li>Berziarah ke Masjid Quba — 2 rakaat = 1 umroh (HR. Tirmidzi)</li>
              <li>Ziarah ke Makam Baqi' dan mendoakan para penghuninya</li>
              <li>Mengunjungi Masjid Qiblatayn — tempat kiblat berpindah</li>
            </ul>
          </DS>
        </div>}
        {subTab==="md-kegiatan"&&<div>
          <DS id="md7" title="🕌 Masjid Quba" open={D["md7"]} onToggle={T}>
            <ul className="tip-list">
              <li>Masjid pertama Islam — shalat 2 rakaat = pahala 1 umroh</li>
              <li>Jarak dari Masjid Nabawi: ±3.5 km</li>
            </ul>
          </DS>
          <DS id="md10" title="⚔️ Jabal Uhud & Makam Syuhada" open={D["md10"]} onToggle={T}>
            <ul className="tip-list">
              <li>Makam Hamzah RA dan 70 syuhada. Jarak: ±5 km utara</li>
              <li>Rasulullah ﷺ rutin berziarah ke sini — sangat dianjurkan</li>
            </ul>
          </DS>
        </div>}
        {subTab==="md-peta"&&(
          <MiniMap maps={[{id:"nabawi",label:"🕌 Masjid Nabawi"},{id:"madinah",label:"🗺️ Kota Madinah"}]}/>
        )}
      </div>
    )
  },
  {emoji:"💡",title:"Tips Penting Umroh Mandiri",subtitle:"Hal-hal yang wajib diperhatikan",gold:false,defaultSubTab:null,
    content:()=>(
      <div>
        <ul className="tip-list">
          <li><strong>Aplikasi wajib install:</strong> Nusuk, Google Maps offline, Uber/Careem, HHR Haramain Train, Al-Qur'an Indonesia</li>
          <li><strong>Cuaca:</strong> 35–45°C. Minum minimal 3 liter/hari termasuk air zamzam</li>
          <li><strong>Waktu terbaik tawaf:</strong> Dini hari (02.00–05.00) lebih lengang dan sejuk</li>
          <li><strong>Internet:</strong> Pilih E-SIM, roaming, atau beli SIM Card STC/Zain/Mobily setibanya di Jeddah</li>
          <li><strong>Transportasi:</strong> Kereta HHR Makkah–Madinah ±2 jam. Bus Saptco ±5 jam (lebih murah)</li>
          <li><strong>Keamanan:</strong> Simpan paspor asli di safe deposit hotel</li>
          <li><strong>Tawaf sunnah:</strong> Manfaatkan setiap waktu luang — pahala berlipat ganda</li>
        </ul>
        <div style={{marginTop:12,background:"var(--surface-doa-from)",borderRadius:11,padding:"11px 13px",border:"1px solid var(--border-dashed)"}}>
          <div style={{fontSize:".72rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"1.5px",color:"var(--gold)",marginBottom:8}}>🚺 Khusus Wanita — Panduan Haid</div>
          <ul className="tip-list" style={{marginTop:0}}>
            <li>Wanita yang haid sebelum atau saat tawaf: <strong>tunda tawaf hingga suci</strong> — tawaf dalam keadaan haid tidak sah</li>
            <li>Boleh melakukan semua ibadah lain saat haid: sa'i, dzikir, berdoa, dan ziarah</li>
            <li>Jika masa haid panjang, boleh menggunakan <strong>obat penunda haid</strong> — wajib konsultasi dokter minimal 2 minggu sebelum berangkat</li>
          </ul>
        </div>
      </div>
    )
  },
];

// ─── APP ───────────────────────────────────────────────────────────────────────
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
      <style>{buildStyle(isDark)}</style>
      <div className={appClasses}>

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
            <div className="header-geo"/>
            <button className={`ham-btn ${drawerOpen?"open":""}`} onClick={()=>setDrawerOpen(p=>!p)} aria-label="Menu">
              <span className="ham-line"/>
              <span className="ham-line"/>
              <span className="ham-line"/>
            </button>
            <button className="faq-btn" onClick={()=>setShowFAQ(true)} aria-label="Pertanyaan Umum (FAQ)">?</button>
            <div className="header-inner">
              <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
              <KaabaSVG/>
              <h1>Umroh Mandiri</h1>
              <div className="subtitle">Panduan Lengkap • دليل العمرة المستقلة</div>
            </div>
          </div>

          {/* ── TABS ── */}
          <div className="tab-bar">
            <button className={`tab-btn ${tab==="persiapan"?"active":"inactive"}`} onClick={()=>{setTab("persiapan");setQuery("");}}>📋 Persiapan</button>
            <button className={`tab-btn ${tab==="tutorial"?"active":"inactive"}`}  onClick={()=>{setTab("tutorial");setQuery("");}}>🕋 Tutorial</button>
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
                <div className="progress-card">
                  <div className="progress-header">
                    <span className="progress-title">Progress Persiapan</span>
                    <span className="progress-pct">{pct}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{width:`${pct}%`}}/>
                  </div>
                  <div style={{marginTop:8,fontSize:".75rem",color:"var(--muted)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:4}}>
                    <span>{doneCount} dari {allItems.length} item selesai{pct===100&&" · Masya Allah, siap berangkat! 🌙"}</span>
                    <span style={{fontSize:".7rem",color:"var(--sunnah-check)",opacity:.8}}>✓ Tersimpan otomatis</span>
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
                              <ul className="tip-list">{item.tips.map((t,ti)=><li key={ti}>{t}</li>)}</ul>
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
                  <span className="icon">🕌</span>
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
