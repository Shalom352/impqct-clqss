/* Screen 5 — Dashboard Apprenant (startup 2026 — bento grid) */

function Dashboard() {
  const [active, setActive] = React.useState("home");
  const { navigate } = useRouter();
  const sideItems = [
    { id: "home", icon: "Grid", label: "Accueil" },
    { id: "user", icon: "User", label: "Profil" },
    { id: "mail", icon: "Mail", label: "Messages" },
    { id: "award", icon: "Award", label: "Certificats" },
    { id: "settings", icon: "Settings", label: "Paramètres" },
  ];

  return (
    <div className="ic-screen" style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{
        width: 64, background: "#121212", borderRight: "1px solid var(--hairline)",
        display: "flex", flexDirection: "column", alignItems: "center",
        padding: "20px 0", gap: 4, flexShrink: 0,
      }}>
        <LogoMark size={32} />
        <div style={{ width: 32, height: 1, background: "var(--hairline)", margin: "16px 0" }}/>
        {sideItems.map(s => {
          const I = Icon[s.icon];
          const isActive = active === s.id;
          return (
            <div key={s.id} onClick={() => setActive(s.id)} style={{
              width: 40, height: 40, borderRadius: 6,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              color: isActive ? "var(--gold)" : "var(--text-3)",
              background: isActive ? "rgba(245,200,0,0.08)" : "transparent",
              position: "relative", transition: "0.15s",
            }}>
              {isActive && <span style={{ position: "absolute", left: -12, top: 8, bottom: 8, width: 2, background: "var(--gold)" }}/>}
              <I />
            </div>
          );
        })}
        <div style={{ flex: 1 }}/>
        <Avatar initials="AK" size={32} />
      </div>

      {/* Main */}
      <div className="no-scrollbar" style={{ flex: 1, overflowY: "auto" }}>
        {/* Top bar */}
        <div style={{ padding: "18px 32px", borderBottom: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(14,14,14,0.6)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "var(--text-3)" }}>
            <span>Tableau de bord</span>
            <span style={{ color: "var(--text-4)" }}>/</span>
            <span style={{ color: "#fff", fontWeight: 500 }}>Accueil</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 11px", border: "1px solid var(--hairline-2)", borderRadius: 6, background: "rgba(255,255,255,0.02)", minWidth: 280 }}>
              <Icon.Search size={13} color="var(--text-3)" />
              <span style={{ fontSize: 12, color: "var(--text-3)" }}>Rechercher cours, leçons, instructeurs…</span>
              <span className="mono" style={{ marginLeft: "auto", fontSize: 9, padding: "1px 5px", border: "1px solid var(--hairline-2)", borderRadius: 3, color: "var(--text-3)" }}>⌘ K</span>
            </div>
            <button className="btn btn-ghost btn-sm" style={{ padding: 7 }}><Icon.Bell size={14} color="#fff"/></button>
          </div>
        </div>

        <div style={{ padding: "28px 32px 56px" }}>
          {/* Greeting + streak strip */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.06em", marginBottom: 6 }}>MERCREDI 29 AVRIL · 2026</div>
              <h2 className="ic-h" style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em" }}>
                Bonjour, <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Amadou</span>.
              </h2>
              <div style={{ fontSize: 14, color: "var(--text-2)", marginTop: 4 }}>
                Reprenez là où vous vous étiez arrêté — chapitre 02 de Tony Elumelu vous attend.
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn btn-ghost btn-sm" onClick={() => navigate("catalogue")}>Catalogue</button>
              <button className="btn btn-gold btn-sm" onClick={() => navigate("course")}>Reprendre la leçon <Icon.ArrowRight size={11} color="#0A0A0A"/></button>
            </div>
          </div>

          {/* BENTO GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoRows: "minmax(120px, auto)", gap: 12, marginBottom: 32 }}>
            {/* Resume — big */}
            <div style={{ gridColumn: "span 4", gridRow: "span 2" }} className="surface brackets" >
              <ResumeCard />
            </div>

            {/* Streak */}
            <div style={{ gridColumn: "span 2" }} className="surface" >
              <StreakCard />
            </div>

            {/* Hours */}
            <div style={{ gridColumn: "span 2" }} className="surface">
              <StatCard label="Heures de formation" value="12" unit="h" delta="+2h cette semaine" mini />
            </div>

            {/* Cours en cours */}
            <div style={{ gridColumn: "span 3" }} className="surface">
              <StatCard label="Cours en cours" value="2" delta="1 nouveau démarré" sub="Tony Elumelu · Ngozi Okonjo-I." />
            </div>

            {/* Certificats */}
            <div style={{ gridColumn: "span 3" }} className="surface">
              <StatCard label="Certificats obtenus" value="1" delta="Prochain dans 8 leçons" sub="Marketing digital · 92/100" gold />
            </div>
          </div>

          {/* Continuer */}
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
            <h3 className="ic-h" style={{ fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", gap: 10 }}>
              Continuer
              <span className="tag mono">02</span>
            </h3>
            <a style={{ fontSize: 12, color: "var(--text-3)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4 }}>Voir tout <Icon.ArrowRight size={11} color="var(--text-3)"/></a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
            <ContinueCard instructor="Tony Elumelu" initials="TE" title="Construire une entreprise panafricaine" chapter="Ch. 02 · Identifier une opportunité" remaining="42min restantes" progress={42} />
            <ContinueCard instructor="Ngozi Okonjo-Iweala" initials="NO" title="Comprendre les marchés financiers" chapter="Ch. 01 · Le rôle d'une banque centrale" remaining="5h 12min restantes" progress={18} />
          </div>

          {/* Certificat */}
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
            <h3 className="ic-h" style={{ fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", gap: 10 }}>
              Vos certificats
              <span className="tag tag-gold">01 obtenu</span>
            </h3>
          </div>
          <CertificateCard />
        </div>
      </div>
    </div>
  );
}

function ResumeCard() {
  const { navigate } = useRouter();
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Thumb style={{ width: 240, flexShrink: 0, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.5))" }}/>
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 56, height: 56, borderRadius: 999, background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 8px rgba(245,200,0,0.15)" }}>
          <Icon.Play size={20} color="#0A0A0A" />
        </div>
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
          <span className="tag tag-gold">EN COURS</span>
        </div>
      </Thumb>
      <div style={{ padding: 22, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div className="overline" style={{ marginBottom: 10 }}>Reprendre · Ch. 02 · Leçon 03</div>
          <div className="ic-h" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 10 }}>
            Identifier une opportunité<br/>africaine.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <Avatar initials="TE" size={26} />
            <div style={{ fontSize: 13, color: "#fff" }}>Tony Elumelu</div>
            <span style={{ width: 3, height: 3, borderRadius: 999, background: "var(--text-4)" }}/>
            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>06:12 / 18:30</span>
          </div>
        </div>
        <div>
          <div className="progress-segmented" style={{ marginBottom: 12 }}>
            <span className="seg done"/><span className="seg done"/><span className="seg current"/>
            <span className="seg"/><span className="seg"/><span className="seg"/><span className="seg"/><span className="seg"/>
          </div>
          <button className="btn btn-gold btn-sm" style={{ padding: "9px 14px" }} onClick={() => navigate("course")}>
            Reprendre <Icon.ArrowRight size={12} color="#0A0A0A"/>
          </button>
        </div>
      </div>
    </div>
  );
}

function StreakCard() {
  const days = [1, 1, 1, 1, 1, 0, 1];
  const labels = ["L", "M", "M", "J", "V", "S", "D"];
  return (
    <div style={{ padding: 18, height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div className="overline overline-mute">Série</div>
        <Icon.Flame size={14} color="var(--gold)"/>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 14 }}>
        <span className="ic-h" style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--gold)" }}>14</span>
        <span style={{ fontSize: 13, color: "var(--text-2)" }}>jours</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {days.map((d, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: d ? "var(--gold)" : "var(--hairline)", marginBottom: 5 }}/>
            <div className="mono" style={{ fontSize: 9, color: "var(--text-3)" }}>{labels[i]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value, unit, delta, sub, mini, gold }) {
  return (
    <div style={{ padding: 18, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div className="overline overline-mute">{label}</div>
        <span className="mono" style={{ fontSize: 10, color: "var(--success)", display: "inline-flex", alignItems: "center", gap: 4 }}>
          <Icon.TrendUp size={10} color="var(--success)"/> {delta}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span className="ic-h" style={{ fontSize: mini ? 36 : 44, fontWeight: 700, letterSpacing: "-0.03em", color: gold ? "var(--gold)" : "#fff" }}>
          {value}
        </span>
        {unit && <span style={{ fontSize: 16, color: "var(--text-2)" }}>{unit}</span>}
      </div>
      {sub && <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 6 }}>{sub}</div>}
    </div>
  );
}

function ContinueCard({ instructor, initials, title, chapter, remaining, progress }) {
  const [hover, setHover] = React.useState(false);
  const { navigate } = useRouter();
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => navigate("course")} style={{
      background: "var(--card)", border: "1px solid " + (hover ? "rgba(245,200,0,0.45)" : "var(--hairline)"),
      borderRadius: 8, padding: 16, display: "flex", gap: 14, cursor: "pointer", transition: "0.15s",
    }}>
      <Thumb style={{ width: 132, height: 84, borderRadius: 4, flexShrink: 0, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ width: 32, height: 32, borderRadius: 999, background: hover ? "var(--gold)" : "rgba(0,0,0,0.5)", border: "1px solid " + (hover ? "var(--gold)" : "rgba(255,255,255,0.15)"), display: "flex", alignItems: "center", justifyContent: "center", transition: "0.15s" }}>
            <Icon.Play size={12} color={hover ? "#0A0A0A" : "#fff"} />
          </span>
        </div>
      </Thumb>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: 0 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <Avatar initials={initials} size={18} />
            <div style={{ fontSize: 11, color: "var(--text-2)", fontWeight: 500 }}>{instructor}</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 4, lineHeight: 1.25, fontFamily: "Space Grotesk", letterSpacing: "-0.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {title}
          </div>
          <div className="mono" style={{ fontSize: 10, color: "var(--text-3)" }}>
            {chapter}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
          <div className="progress" style={{ flex: 1 }}>
            <div className="progress-fill" style={{ width: `${progress}%` }}/>
          </div>
          <div className="mono" style={{ fontSize: 10, color: "var(--text-3)" }}>{remaining}</div>
        </div>
      </div>
    </div>
  );
}

function CertificateCard() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1c1a14 0%, #181818 100%)",
      border: "1px solid var(--gold)", borderRadius: 8, padding: 0,
      display: "grid", gridTemplateColumns: "1fr auto", overflow: "hidden",
      boxShadow: "0 0 0 3px rgba(245,200,0,0.05)",
    }}>
      <div style={{ padding: 24, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, transparent 0, transparent 16px, rgba(245,200,0,0.018) 16px, rgba(245,200,0,0.018) 17px)", pointerEvents: "none" }}/>
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <Logo size={14} />
            <div style={{ display: "flex", gap: 8 }}>
              <span className="tag mono">IC-2026-0481</span>
              <span className="tag tag-success"><Icon.Check size={9} color="var(--success)"/> VÉRIFIÉ</span>
            </div>
          </div>
          <div style={{ height: 1, background: "var(--hairline-2)", marginBottom: 18 }}/>
          <div className="overline" style={{ marginBottom: 10 }}>Certificat de réussite</div>
          <h3 className="ic-h" style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1, marginBottom: 10, letterSpacing: "-0.025em" }}>
            Marketing digital pour PME.
          </h3>
          <div style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 22 }}>
            Délivré à <span style={{ color: "#fff", fontWeight: 500 }}>Amadou Kane</span> · Instructeur <span style={{ color: "var(--gold)" }}>Mossadeck Bally</span>
          </div>
          <div style={{ display: "flex", gap: 28, marginBottom: 22 }}>
            {[
              { l: "Date", v: "14 AVR 2026" },
              { l: "Durée", v: "4H 50MIN" },
              { l: "Note", v: "92 / 100", c: "var(--success)" },
              { l: "Niveau", v: "DÉBUTANT" },
            ].map((x, i) => (
              <div key={i}>
                <div className="mono" style={{ fontSize: 9, color: "var(--text-3)", letterSpacing: "0.08em", marginBottom: 4 }}>{x.l.toUpperCase()}</div>
                <div className="mono" style={{ fontSize: 12, color: x.c || "#fff" }}>{x.v}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn btn-gold btn-sm">
              <Icon.Linkedin /> Partager sur LinkedIn
            </button>
            <button className="btn btn-ghost btn-sm">Télécharger PDF</button>
            <button className="btn btn-ghost btn-sm">Copier le lien</button>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: 24, borderLeft: "1px solid var(--hairline-2)", background: "rgba(0,0,0,0.2)" }}>
        <QRPlaceholder />
        <div className="mono" style={{ fontSize: 9, color: "var(--text-3)", letterSpacing: "0.06em" }}>SCANNEZ POUR VÉRIFIER</div>
      </div>
    </div>
  );
}

function QRPlaceholder() {
  const pattern = [
    [1,1,1,1,1,1,1],
    [1,0,1,0,1,0,1],
    [1,0,0,1,1,1,1],
    [1,1,0,0,1,0,0],
    [1,0,1,1,0,1,1],
    [1,0,0,1,1,0,1],
    [1,1,1,1,0,1,1],
  ];
  const cell = 11;
  return (
    <div style={{ background: "#fff", padding: 8, borderRadius: 4 }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(7, ${cell}px)`, gridTemplateRows: `repeat(7, ${cell}px)` }}>
        {pattern.flat().map((v, i) => (
          <div key={i} style={{ width: cell, height: cell, background: v ? "#0A0A0A" : "#fff" }}/>
        ))}
      </div>
    </div>
  );
}

window.Dashboard = Dashboard;
