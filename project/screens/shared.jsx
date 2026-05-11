/* Shared bits — startup 2026 redesign */
const { useState, useEffect, useMemo, useRef } = React;

function LogoMark({ size = 22 }) {
  return (
    <span className="logo-mark" style={{ width: size, height: size, fontSize: size * 0.55 }}>
      ✦
    </span>
  );
}

function Logo({ size = 18 }) {
  return (
    <div className="logo" style={{ fontSize: size }}>
      <LogoMark size={size + 4} />
      <span>Impact<span className="gold">Class</span></span>
    </div>
  );
}

function Navbar({ active = "" }) {
  const { navigate } = useRouter();
  const links = [
    { id: "cours",        label: "Cours",         route: "catalogue"   },
    { id: "instructeurs", label: "Instructeurs",   route: "catalogue"   },
    { id: "partenaires",  label: "Partenaires",    route: "partenaires" },
    { id: "tarifs",       label: "Tarifs",         route: "pricing"     },
  ];
  return (
    <div className="nav">
      <div className="nav-left">
        <span style={{ cursor: "pointer" }} onClick={() => navigate("landing")}>
          <Logo />
        </span>
        <span className="tag" style={{ padding: "3px 6px", fontSize: 9 }}>v2.4 · 2026</span>
      </div>
      <nav className="nav-mid">
        {links.map(l => (
          <a
            key={l.id}
            className={active === l.id ? "active" : ""}
            onClick={() => navigate(l.route)}
            style={{ cursor: "pointer" }}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav-right">
        <button className="btn btn-ghost btn-sm" onClick={() => navigate("dashboard")}>
          Se connecter
        </button>
        <button className="btn btn-ghost-gold btn-sm" onClick={() => navigate("pricing")}>
          Essayer 7j gratuits
          <span className="kbd" style={{ background: "rgba(245,200,0,0.15)", border: "1px solid rgba(245,200,0,0.3)", color: "var(--gold)" }}>⌘ E</span>
        </button>
      </div>
    </div>
  );
}

/* avatar that uses initials with a varied dark background */
function Avatar({ initials = "AK", size = 36, ring = false, style }) {
  const palette = {
    A: "#2a2118", B: "#1f2620", C: "#251a1a", D: "#1a2228", E: "#2a201f",
    F: "#231e2a", G: "#1c2520", H: "#2a2520", I: "#1f1f1f", J: "#222a1f",
    K: "#2a1f23", L: "#202a26", M: "#26201a", N: "#2a261f", O: "#1f2a2a",
    P: "#26251a", Q: "#1a2024", R: "#2a1a26", S: "#1f2a1f", T: "#2a2a1f",
    U: "#251f2a", V: "#1f262a", W: "#2a201f", X: "#1f1a2a", Y: "#2a261c",
    Z: "#1c2a26",
  };
  const bg = palette[initials[0]] || "#222";
  return (
    <div
      className="avatar"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: bg,
        color: "rgba(255,255,255,0.55)",
        border: ring ? `1.5px solid #F5C800` : `1.5px solid #1A1A1A`,
        ...style,
      }}
    >
      {initials}
    </div>
  );
}

function Thumb({ label = "", style, children }) {
  return (
    <div className="thumb" style={style}>
      <div className="thumb-label">{label}</div>
      {children}
    </div>
  );
}

/* tiny line icons (24px viewbox, 1.5 stroke) */
const Icon = {
  Play: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M8 5v14l11-7z" /></svg>
  ),
  Check: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
  ),
  Lock: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><rect x="5" y="11" width="14" height="10" rx="1.5" /><path d="M8 11V7a4 4 0 1 1 8 0v4" /></svg>
  ),
  Clock: ({ size = 12, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
  ),
  Signal: ({ size = 12, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M4 18v-3M10 18V9M16 18V3" strokeLinecap="round" /></svg>
  ),
  Grid: ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
  ),
  User: ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></svg>
  ),
  Mail: ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M3 7l9 7 9-7" /></svg>
  ),
  Settings: ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  ),
  Award: ({ size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><circle cx="12" cy="9" r="6" /><path d="M8.5 14L7 22l5-3 5 3-1.5-8" /></svg>
  ),
  Bookmark: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
  ),
  Linkedin: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18H5.7V10h2.6v8zM7 8.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18.3 18h-2.6v-4.2c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.7V18H10.3v-8h2.5v1.1c.4-.6 1-1.3 2.4-1.3 1.7 0 3 1.1 3 3.5V18z"/></svg>
  ),
  ChevronDown: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  ArrowUpRight: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  ArrowRight: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Pause: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>
  ),
  Volume: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M11 5L6 9H2v6h4l5 4V5z" fill={color}/><path d="M19 12c0-2-1-4-3-5M16 8a3 3 0 0 1 0 8" strokeLinecap="round"/></svg>
  ),
  Maximize: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>
  ),
  Search: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><circle cx="11" cy="11" r="7" /><path d="M16 16l5 5" strokeLinecap="round"/></svg>
  ),
  Bell: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M6 9a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21a2 2 0 0 0 4 0"/></svg>
  ),
  Flame: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M12 2s4 5 4 9a4 4 0 0 1-8 0c0-1 .5-2 1-3-2 1-3 3-3 6a6 6 0 0 0 12 0c0-5-6-12-6-12z"/></svg>
  ),
  Sparkle: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5z"/></svg>
  ),
  TrendUp: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M3 17l6-6 4 4 8-8M14 7h7v7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Globe: ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"/></svg>
  ),
};

Object.assign(window, { Logo, LogoMark, Navbar, Avatar, Thumb, Icon });
