/* Screen 1 — Landing Hero (startup 2026) */

function LandingHero() {
  const { navigate } = useRouter();
  return (
    <div className="ic-screen no-scrollbar" style={{ overflowY: "auto" }}>
      <Navbar active="cours" />

      {/* announcement bar */}
      <div style={{ borderBottom: "1px solid var(--hairline)", padding: "10px 28px", display: "flex", justifyContent: "center", alignItems: "center", gap: 12, fontSize: 12, color: "var(--text-2)", background: "rgba(245,200,0,0.025)" }}>
        <span className="tag tag-gold" style={{ padding: "2px 6px" }}>NEW</span>
        <span>Saison 2 disponible — 4 nouveaux instructeurs, 38 leçons inédites</span>
        <span style={{ color: "var(--gold)", display: "inline-flex", alignItems: "center", gap: 4, cursor: "pointer", fontWeight: 500 }} onClick={() => navigate("catalogue")}>
          Voir le programme <Icon.ArrowRight size={11} color="var(--gold)" />
        </span>
      </div>

      <div className="hero-wrap" style={{ position: "relative" }}>
        {/* spotlight */}
        <div className="spotlight-gold" style={{ top: -120, right: -80, opacity: 0.6 }}/>
        <div className="spotlight-gold" style={{ bottom: 120, left: -200, opacity: 0.4 }}/>

        {/* Hero grid: text left, viz right */}
        <div className="hero-grid" style={{ position: "relative" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "5px 5px 5px 12px", border: "1px solid var(--hairline-2)", borderRadius: 999, marginBottom: 28, background: "rgba(255,255,255,0.02)" }}>
              <span className="overline" style={{ fontSize: 10 }}>S2 · 2026</span>
              <span className="tag" style={{ borderRadius: 999, padding: "3px 8px" }}>
                <span className="tag-dot" style={{ background: "var(--success)"}}/> 12 cours disponibles
              </span>
            </div>

            <h1 className="ic-h hero-h1" style={{ fontWeight: 700, letterSpacing: "-0.04em", marginBottom: 22 }}>
              Apprenez des<br/>
              bâtisseurs <span style={{ color: "var(--gold)", fontStyle: "italic", fontFamily: "Space Grotesk" }}>qui ont</span><br/>
              <span style={{ position: "relative", display: "inline-block" }}>
                réussi.
                <span style={{ position: "absolute", right: -4, bottom: 12, width: 10, height: 10, background: "var(--gold)" }}/>
              </span>
            </h1>

            <p style={{ fontSize: 17, color: "var(--text-2)", maxWidth: 480, marginBottom: 36, lineHeight: 1.55 }}>
              Cours filmés en haute qualité, animés par les grands leaders africains du business, du leadership et de la finance. <span style={{ color: "#fff" }}>Format MasterClass — accent panafricain.</span>
            </p>

            <div style={{ display: "flex", gap: 10, marginBottom: 40 }}>
              <button className="btn btn-gold btn-lg" onClick={() => navigate("catalogue")}>
                Découvrir les cours
                <Icon.ArrowRight size={14} color="#0A0A0A" />
              </button>
              <button className="btn btn-ghost btn-lg" onClick={() => navigate("catalogue")}>
                <Icon.Play size={12} color="#fff" />
                Voir les instructeurs
              </button>
            </div>

            {/* Trust strip — inline */}
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <div style={{ display: "flex" }}>
                {["KD", "AM", "FO", "BT", "SR"].map((i, idx) => (
                  <Avatar key={i} initials={i} size={28} ring style={{ marginLeft: idx === 0 ? 0 : -8, borderColor: "#0E0E0E", background: ["#2a2118", "#1f2620", "#251a1a", "#1a2228", "#2a201f"][idx] }} />
                ))}
              </div>
              <div>
                <div style={{ fontSize: 13, color: "#fff", fontWeight: 500 }}>+5 000 apprenants formés</div>
                <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>23 PAYS AFRICAINS · CERTIFIÉS</div>
              </div>
            </div>
          </div>

          {/* RIGHT — visual showcase */}
          <div className="hero-visual">
            <HeroVisual />
          </div>
        </div>

        {/* Stats row */}
        <div className="brackets stats-grid" style={{ marginTop: 56, padding: "28px 32px", border: "1px solid var(--hairline)", borderRadius: 8, background: "rgba(255,255,255,0.015)" }}>
          {[
            { num: "12", label: "Instructeurs vérifiés", sub: "Ministres, PDG, fondateurs" },
            { num: "184", label: "Leçons HD", sub: "Tournées 4K · sous-titrées" },
            { num: "5 000+", label: "Apprenants formés", sub: "23 pays africains" },
            { num: "92%", label: "Taux de complétion", sub: "Top 3 mondial" },
          ].map((s, i) => (
            <div key={i} style={{ borderRight: i < 3 ? "1px solid var(--hairline)" : "none", padding: "0 24px" }}>
              <div className="ic-h" style={{ fontSize: 40, color: "var(--gold)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 6 }}>{s.num}</div>
              <div style={{ fontSize: 14, color: "#fff", fontWeight: 500, marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Section Parcours */}
        <div style={{ marginTop: 64 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28 }}>
            <div>
              <div className="overline" style={{ marginBottom: 12 }}>/ Parcours thématiques</div>
              <h3 className="ic-h" style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                6 parcours pour <span style={{ color: "var(--gold)", fontStyle: "italic" }}>renforcer votre PME</span>
              </h3>
            </div>
            <button className="btn btn-ghost-gold btn-sm" style={{ marginBottom: 4 }} onClick={() => navigate("catalogue")}>
              Voir tous les cours <Icon.ArrowRight size={12} color="var(--gold)" />
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }} className="parcours-grid">
            {[
              { id: "Business Starter",       icon: "🚀", color: "#F5C800", desc: "Les fondamentaux pour lancer son activité", count: 3 },
              { id: "Financial Mastery",      icon: "📊", color: "#22C55E", desc: "Maîtrise des chiffres et mécanismes de financement", count: 3 },
              { id: "Marketing Principles",   icon: "📣", color: "#F97316", desc: "Stratégies pour faire connaître son entreprise", count: 2 },
              { id: "Compétences numériques", icon: "💻", color: "#A78BFA", desc: "Outils digitaux et transformation numérique", count: 2 },
              { id: "Comptabilité & Finance", icon: "🧾", color: "#38BDF8", desc: "Gestion comptable et finance d'entreprise", count: 1 },
              { id: "Gestion de projet",      icon: "🗂", color: "#F472B6", desc: "Planifier, organiser et piloter ses projets", count: 1 },
            ].map((t, i) => (
              <div key={i} style={{
                background: "var(--card)",
                border: `1px solid #242424`,
                borderRadius: 8,
                padding: "20px 22px",
                display: "flex", alignItems: "flex-start", gap: 16,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#242424"; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 10, background: `${t.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                  {t.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", fontFamily: "Space Grotesk" }}>{t.id}</div>
                    <span style={{ fontSize: 11, color: t.color, fontFamily: "JetBrains Mono", fontWeight: 600 }}>{t.count} COURS</span>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-3)", lineHeight: 1.45 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee — "as featured in" */}
      <div style={{ borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", padding: "20px 0", overflow: "hidden", marginTop: 40 }}>
        <div className="marquee">
          {[..."JEUNE AFRIQUE · FORBES AFRICA · BLOOMBERG · TECHCABAL · LE MONDE AFRIQUE · WIRED · QUARTZ AFRICA · "
            .split(" · "), ..."JEUNE AFRIQUE · FORBES AFRICA · BLOOMBERG · TECHCABAL · LE MONDE AFRIQUE · WIRED · QUARTZ AFRICA · "
            .split(" · ")].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  const { navigate } = useRouter();
  return (
    <div style={{ position: "relative", aspectRatio: "1 / 1", maxHeight: 520 }}>
      {/* Main featured course card — Kacou Diagou */}
      <div className="surface" style={{ position: "absolute", inset: 0, padding: 0, overflow: "hidden", borderColor: "rgba(245,200,0,0.3)", boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,200,0,0.1)", cursor: "pointer" }} onClick={() => navigate("catalogue")}>

        {/* Vraie photo de l'instructeur */}
        <img
          src="photos/kacou-diagou.jpg"
          alt="Kacou Diagou"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", position: "absolute", inset: 0 }}
        />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.88) 100%)" }}/>

        {/* top chip */}
        <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 6 }}>
          <span className="tag tag-gold"><Icon.Sparkle size={9} color="var(--gold)" /> COURS PHARE</span>
          <span className="tag">BUSINESS STARTER</span>
        </div>
        <div style={{ position: "absolute", top: 16, right: 16 }}>
          <span className="tag mono">22 LEÇONS · 7H</span>
        </div>

        {/* center play */}
        <div style={{ position: "absolute", left: "50%", top: "45%", transform: "translate(-50%, -50%)", width: 76, height: 76, borderRadius: 999, background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 8px rgba(245,200,0,0.15), 0 0 0 16px rgba(245,200,0,0.07)" }}>
          <Icon.Play size={28} color="#0A0A0A" />
        </div>

        {/* bottom info */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: 20 }}>
          <div className="overline" style={{ marginBottom: 8 }}>Ch. 01 · Vision stratégique</div>
          <div className="ic-h" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, lineHeight: 1.2 }}>
            Leadership politique &<br/>Vision pour bâtir un pays
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img src="photos/kacou-diagou.jpg" alt="Kacou Diagou" style={{ width: 28, height: 28, borderRadius: 999, objectFit: "cover", border: "1.5px solid var(--gold)" }} />
              <div>
                <div style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>Kacou Diagou</div>
                <div style={{ fontSize: 10, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>POLITICAL LEADER · CÔTE D'IVOIRE</div>
              </div>
            </div>
            <div className="progress-segmented" style={{ maxWidth: 100 }}>
              <span className="seg done"/><span className="seg done"/><span className="seg current"/><span className="seg"/><span className="seg"/>
            </div>
          </div>
        </div>
      </div>

      {/* floating badge top-left */}
      <div style={{ position: "absolute", top: -18, left: -18, background: "var(--bg)", border: "1px solid var(--hairline-2)", borderRadius: 6, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#fff" }}>
        <Icon.Sparkle size={12} color="var(--gold)" />
        <div>
          <div style={{ fontWeight: 600 }}>Note moyenne 4.95 / 5</div>
          <div style={{ fontSize: 10, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>2 134 AVIS VÉRIFIÉS</div>
        </div>
      </div>

      {/* floating chip bottom-right — stats certifiés */}
      <div style={{ position: "absolute", bottom: -16, right: -16, background: "var(--bg)", border: "1px solid var(--hairline-2)", borderRadius: 6, padding: 12, width: 200 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span className="overline" style={{ fontSize: 9 }}>Certifiés</span>
          <Icon.Award size={11} color="var(--gold)"/>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
          <span className="ic-h" style={{ fontSize: 20 }}>92%</span>
          <span style={{ fontSize: 10, color: "var(--success)", fontFamily: "JetBrains Mono" }}>taux de complétion</span>
        </div>
        <div style={{ fontSize: 11, color: "var(--text-3)" }}>Top 3 mondial · 23 pays</div>
        <svg viewBox="0 0 100 24" width="100%" height="24" style={{ marginTop: 6 }}>
          <polyline fill="none" stroke="var(--gold)" strokeWidth="1.5" points="0,18 12,16 24,17 36,12 48,14 60,8 72,10 84,5 100,2"/>
        </svg>
      </div>
    </div>
  );
}

window.LandingHero = LandingHero;
