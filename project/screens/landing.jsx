/* Screen 1 — Landing Hero — mobile-first */

function LandingHero() {
  const { navigate } = useRouter();
  return (
    <div className="ic-screen" style={{ overflowY: "auto", overflowX: "hidden" }}>
      <Navbar active="cours" />

      {/* Announcement bar */}
      <div className="announce-bar" style={{ borderBottom: "1px solid var(--hairline)", padding: "10px 20px", display: "flex", justifyContent: "center", alignItems: "center", gap: 10, fontSize: 12, color: "var(--text-2)", background: "rgba(245,200,0,0.025)", flexWrap: "wrap", textAlign: "center" }}>
        <span className="tag tag-gold" style={{ padding: "2px 6px", flexShrink: 0 }}>NEW</span>
        <span>Saison 2 — 4 nouveaux instructeurs, 38 leçons</span>
        <span style={{ color: "var(--gold)", display: "inline-flex", alignItems: "center", gap: 4, cursor: "pointer", fontWeight: 500, flexShrink: 0 }} onClick={() => navigate("catalogue")}>
          Voir <Icon.ArrowRight size={11} color="var(--gold)" />
        </span>
      </div>

      {/* ====== HERO SECTION ====== */}
      <div className="hero-wrap" style={{ position: "relative", overflow: "hidden" }}>
        <div className="spotlight-gold" style={{ top: -120, right: -80, opacity: 0.5 }}/>

        {/* Badge pill */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "5px 5px 5px 12px", border: "1px solid var(--hairline-2)", borderRadius: 999, marginBottom: 24, background: "rgba(255,255,255,0.02)" }}>
          <span className="overline" style={{ fontSize: 10 }}>S2 · 2026</span>
          <span className="tag" style={{ borderRadius: 999, padding: "3px 8px" }}>
            <span className="tag-dot" style={{ background: "var(--success)" }}/> 12 cours disponibles
          </span>
        </div>

        {/* H1 */}
        <h1 className="ic-h hero-h1" style={{ fontWeight: 700, letterSpacing: "-0.04em", marginBottom: 18, lineHeight: 1.05 }}>
          Apprenez des <br className="mobile-br"/>
          bâtisseurs{" "}
          <span style={{ color: "var(--gold)", fontStyle: "italic", fontFamily: "Space Grotesk" }}>qui ont</span>
          <br /> réussi.
        </h1>

        {/* Subtitle */}
        <p className="hero-sub" style={{ fontSize: 16, color: "var(--text-2)", marginBottom: 28, lineHeight: 1.6 }}>
          Cours filmés en haute qualité, animés par les grands leaders africains.{" "}
          <span style={{ color: "#fff" }}>Format MasterClass — accent panafricain.</span>
        </p>

        {/* CTA buttons */}
        <div className="hero-ctas" style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
          <button className="btn btn-gold btn-lg" onClick={() => navigate("catalogue")} style={{ flex: "1 1 auto", justifyContent: "center" }}>
            Découvrir les cours <Icon.ArrowRight size={14} color="#0A0A0A" />
          </button>
          <button className="btn btn-ghost btn-lg" onClick={() => navigate("catalogue")} style={{ flex: "1 1 auto", justifyContent: "center" }}>
            <Icon.Play size={12} color="#fff" /> Voir les instructeurs
          </button>
        </div>

        {/* Trust strip */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <div style={{ display: "flex" }}>
            {["KD", "JB", "DD", "SZ", "AS"].map((ini, idx) => (
              <Avatar key={ini} initials={ini} size={28} ring style={{ marginLeft: idx === 0 ? 0 : -8, borderColor: "#0E0E0E", background: ["#2a2118", "#1f2620", "#251a1a", "#1a2228", "#2a201f"][idx] }} />
            ))}
          </div>
          <div>
            <div style={{ fontSize: 13, color: "#fff", fontWeight: 500 }}>+5 000 apprenants formés</div>
            <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>23 PAYS AFRICAINS · CERTIFIÉS</div>
          </div>
        </div>

        {/* Hero visual card — cours phare */}
        <div className="hero-course-card" onClick={() => navigate("catalogue")} style={{ cursor: "pointer", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(245,200,0,0.3)", marginBottom: 40, position: "relative", background: "#111" }}>
          {/* Photo */}
          <img src="photos/kacou-diagou.jpg" alt="Kacou Diagou" style={{ width: "100%", height: 220, objectFit: "cover", objectPosition: "top center", display: "block" }} />
          {/* Gradient */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 220, background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)" }} />
          {/* Badges top */}
          <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
            <span className="tag tag-gold"><Icon.Sparkle size={9} color="var(--gold)" /> COURS PHARE</span>
            <span className="tag">BUSINESS STARTER</span>
          </div>
          <div style={{ position: "absolute", top: 12, right: 12 }}>
            <span className="tag mono">22 LEÇONS · 7H</span>
          </div>
          {/* Play button */}
          <div style={{ position: "absolute", left: "50%", top: 100, transform: "translateX(-50%)", width: 56, height: 56, borderRadius: 999, background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 8px rgba(245,200,0,0.15)" }}>
            <Icon.Play size={22} color="#0A0A0A" />
          </div>
          {/* Bottom info */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px" }}>
            <div className="overline" style={{ marginBottom: 4 }}>Ch. 01 · Vision stratégique</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "Space Grotesk", marginBottom: 10 }}>Leadership politique & Vision pour bâtir un pays</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <img src="photos/kacou-diagou.jpg" alt="KD" style={{ width: 26, height: 26, borderRadius: 999, objectFit: "cover", border: "1.5px solid var(--gold)" }} />
                <div>
                  <div style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>Kacou Diagou</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", fontFamily: "JetBrains Mono" }}>POLITICAL LEADER · CÔTE D'IVOIRE</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--gold)", fontWeight: 500 }}>
                4.95 <Icon.Sparkle size={10} color="var(--gold)" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="stats-grid" style={{ borderRadius: 8, border: "1px solid var(--hairline)", overflow: "hidden", marginBottom: 48 }}>
          {[
            { num: "12",     label: "Instructeurs vérifiés", sub: "Ministres, PDG, fondateurs" },
            { num: "184",    label: "Leçons HD",             sub: "Tournées 4K · sous-titrées" },
            { num: "5 000+", label: "Apprenants formés",     sub: "23 pays africains" },
            { num: "92%",    label: "Taux de complétion",    sub: "Top 3 mondial" },
          ].map((s, i) => (
            <div key={i} className="stat-cell" style={{ padding: "20px 16px", background: "rgba(255,255,255,0.015)" }}>
              <div className="ic-h" style={{ fontSize: 32, color: "var(--gold)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: "#fff", fontWeight: 500, marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Section Parcours */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
            <div>
              <div className="overline" style={{ marginBottom: 8 }}>/ Parcours thématiques</div>
              <h2 className="ic-h" style={{ fontSize: "clamp(22px, 5vw, 34px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0 }}>
                6 parcours pour <span style={{ color: "var(--gold)", fontStyle: "italic" }}>votre PME</span>
              </h2>
            </div>
            <button className="btn btn-ghost-gold btn-sm" onClick={() => navigate("catalogue")} style={{ flexShrink: 0 }}>
              Voir tous <Icon.ArrowRight size={12} color="var(--gold)" />
            </button>
          </div>

          <div className="parcours-grid">
            {[
              { id: "Business Starter",       icon: "🚀", color: "#F5C800", desc: "Lancer son activité", count: 3 },
              { id: "Financial Mastery",      icon: "📊", color: "#22C55E", desc: "Financement & chiffres", count: 3 },
              { id: "Marketing Principles",   icon: "📣", color: "#F97316", desc: "Faire connaître sa marque", count: 2 },
              { id: "Compétences numériques", icon: "💻", color: "#A78BFA", desc: "Outils digitaux PME", count: 2 },
              { id: "Comptabilité & Finance",  icon: "🧾", color: "#38BDF8", desc: "Finance d'entreprise", count: 1 },
              { id: "Gestion de projet",       icon: "🗂", color: "#F472B6", desc: "Planifier & piloter", count: 1 },
            ].map((t, i) => (
              <div key={i} onClick={() => navigate("catalogue")} style={{
                background: "var(--card)", border: "1px solid #242424", borderRadius: 10,
                padding: "16px 14px", cursor: "pointer", transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#242424"; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ fontSize: 24, marginBottom: 10 }}>{t.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", fontFamily: "Space Grotesk", marginBottom: 4, lineHeight: 1.2 }}>{t.id}</div>
                <div style={{ fontSize: 11, color: "var(--text-3)", lineHeight: 1.4, marginBottom: 8 }}>{t.desc}</div>
                <span style={{ fontSize: 10, color: t.color, fontFamily: "JetBrains Mono", fontWeight: 600 }}>{t.count} COURS</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div style={{ textAlign: "center", padding: "24px 0 40px" }}>
          <button className="btn btn-gold btn-lg" onClick={() => navigate("catalogue")} style={{ width: "100%", maxWidth: 400, justifyContent: "center" }}>
            Commencer maintenant — gratuit 7 jours <Icon.ArrowRight size={14} color="#0A0A0A" />
          </button>
          <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 12 }}>Aucune carte bancaire requise · Annulez à tout moment</div>
        </div>
      </div>

      {/* Marquee */}
      <div style={{ borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", padding: "16px 0", overflow: "hidden" }}>
        <div className="marquee">
          {[..."JEUNE AFRIQUE · FORBES AFRICA · BLOOMBERG · TECHCABAL · LE MONDE AFRIQUE · WIRED · QUARTZ AFRICA · "
            .repeat(2).split(" · ")].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

window.LandingHero = LandingHero;
