import React from 'react';

// ─── Ka'bah SVG ───────────────────────────────────────────────────────────────
export const KaabaSVG = () => (
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
