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

      <div style={{ position: "relative", padding: "72px 56px 24px", maxWidth: 1320, margin: "0 auto" }}>
        {/* spotlight */}
        <div className="spotlight-gold" style={{ top: -120, right: -80, opacity: 0.6 }}/>
        <div className="spotlight-gold" style={{ bottom: 120, left: -200, opacity: 0.4 }}/>

        {/* Hero grid: text left, viz right */}
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center", position: "relative" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "5px 5px 5px 12px", border: "1px solid var(--hairline-2)", borderRadius: 999, marginBottom: 28, background: "rgba(255,255,255,0.02)" }}>
              <span className="overline" style={{ fontSize: 10 }}>S2 · 2026</span>
              <span className="tag" style={{ borderRadius: 999, padding: "3px 8px" }}>
                <span className="tag-dot pulse" style={{ background: "var(--success)" }}/> 12 cours en ligne
              </span>
            </div>

            <h1 style={{ fontSize: 76, lineHeight: 0.98, fontWeight: 700, letterSpacing: "-0.04em", marginBottom: 22, textWrap: "balance" }}>
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
                {["TE", "IA", "AD", "NO", "FA"].map((i, idx) => (
                  <Avatar key={i} initials={i} size={28} ring style={{ marginLeft: idx === 0 ? 0 : -8, borderColor: "#0E0E0E", background: ["#2a2118", "#1f2620", "#251a1a", "#1a2228", "#2a201f"][idx] }} />
                ))}
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>5 000+ apprenants actifs</div>
                <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>+342 cette semaine</div>
              </div>
            </div>
          </div>

          {/* RIGHT — visual showcase, "now playing" widget */}
          <HeroVisual />
        </div>

        {/* Stats row */}
        <div className="brackets" style={{ marginTop: 56, padding: "28px 32px", border: "1px solid var(--hairline)", borderRadius: 8, background: "rgba(255,255,255,0.015)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { num: "12", label: "Instructeurs vérifiés", sub: "Forbes 30, fondateurs unicornes" },
            { num: "184", label: "Leçons HD", sub: "Tournées 4K · sous-titrées" },
            { num: "5 000+", label: "Apprenants actifs", sub: "23 pays africains" },
            { num: "92%", label: "Taux de complétion", sub: "Top 3 mondial" },
          ].map((s, i) => (
            <div key={i} style={{ borderRight: i < 3 ? "1px solid var(--hairline)" : "none", padding: "0 24px" }}>
              <div className="ic-h" style={{ fontSize: 38, color: "var(--gold)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "#fff", fontWeight: 500, marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>{s.sub}</div>
            </div>
          ))}
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
  return (
    <div style={{ position: "relative", aspectRatio: "1 / 1", maxHeight: 520 }}>
      {/* Main featured course card */}
      <div className="surface" style={{ position: "absolute", inset: 0, padding: 0, overflow: "hidden", borderColor: "rgba(245,200,0,0.3)", boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,200,0,0.1)" }}>
        <Thumb label="" style={{ position: "absolute", inset: 0 }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)" }}/>
        </Thumb>

        {/* top chip */}
        <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 6 }}>
          <span className="tag tag-live"><span className="tag-dot pulse"/> EN LIVE</span>
          <span className="tag">SESSION Q&R · 18:30</span>
        </div>
        <div style={{ position: "absolute", top: 16, right: 16 }}>
          <span className="tag mono">04:32 / 18:30</span>
        </div>

        {/* center play */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 76, height: 76, borderRadius: 999, background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 8px rgba(245,200,0,0.15), 0 0 0 16px rgba(245,200,0,0.07)" }}>
          <Icon.Play size={28} color="#0A0A0A" />
        </div>

        {/* bottom info */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: 20 }}>
          <div className="overline" style={{ marginBottom: 8 }}>Ch. 02 · Identifier une opportunité</div>
          <div className="ic-h" style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.15 }}>
            Construire une entreprise<br/>panafricaine
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Avatar initials="TE" size={28} ring />
              <div>
                <div style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>Tony Elumelu</div>
                <div style={{ fontSize: 10, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>HEIRS HOLDINGS · LAGOS</div>
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
          <div style={{ fontWeight: 600 }}>Note moyenne 4.92 / 5</div>
          <div style={{ fontSize: 10, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>2 134 AVIS VÉRIFIÉS</div>
        </div>
      </div>

      {/* floating chip bottom-right */}
      <div style={{ position: "absolute", bottom: -16, right: -16, background: "var(--bg)", border: "1px solid var(--hairline-2)", borderRadius: 6, padding: 12, width: 200 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span className="overline" style={{ fontSize: 9 }}>En direct</span>
          <Icon.TrendUp size={11} color="var(--success)"/>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
          <span className="ic-h" style={{ fontSize: 20 }}>+342</span>
          <span style={{ fontSize: 10, color: "var(--success)", fontFamily: "JetBrains Mono" }}>+12.4%</span>
        </div>
        <div style={{ fontSize: 10, color: "var(--text-3)" }}>Nouveaux apprenants · 7j</div>
        {/* mini sparkline */}
        <svg viewBox="0 0 100 24" width="100%" height="24" style={{ marginTop: 6 }}>
          <polyline fill="none" stroke="var(--gold)" strokeWidth="1.5" points="0,18 12,16 24,17 36,12 48,14 60,8 72,10 84,5 100,2"/>
        </svg>
      </div>
    </div>
  );
}

window.LandingHero = LandingHero;
