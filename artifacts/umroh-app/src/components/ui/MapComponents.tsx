import React, { useState } from 'react';
import { MAP_DATA } from '../../data/mapData';

// ─── SVG Pin ──────────────────────────────────────────────────────────────────
export const SvgPin = ({x,y,emoji,selected,onClick}:{x:number;y:number;emoji:string;selected:boolean;onClick:()=>void}) => (
  <g style={{cursor:"pointer"}} onClick={onClick}>
    <rect x={x-22} y={y-22} width={44} height={44} fill="transparent" style={{pointerEvents:"all"}}/>
    {selected && <circle cx={x} cy={y} r={28} fill="rgba(201,168,76,0.18)" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" strokeDasharray="3,2"/>}
    <circle cx={x} cy={y} r={18} fill={selected?"#C9A84C":"#1A4A3A"} stroke="#C9A84C" strokeWidth={selected?2.5:1.5}
      style={{filter:selected?"drop-shadow(0 2px 8px rgba(201,168,76,0.5))":"drop-shadow(0 1px 4px rgba(0,0,0,0.3))"}}/>
    <text x={x} y={y+1} textAnchor="middle" dominantBaseline="middle" fontSize="13" style={{userSelect:"none",pointerEvents:"none"}}>{emoji}</text>
  </g>
);

export const HaramBg = () => (
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

export const NabawiBg = () => (
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

export const CityBg = ({cx, cy}:{cx:number;cy:number}) => (
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

export const SchematicMap = ({mapId, selectedPin, onPinSelect}:{mapId:string;selectedPin:string|null;onPinSelect:(id:string|null)=>void}) => {
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

export const MiniMap = ({maps}:{maps:{id:string;label:string}[]}) => {
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
