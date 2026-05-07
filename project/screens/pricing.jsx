/* Screen 4 — Pricing (startup 2026) */

function Pricing() {
  const [billing, setBilling] = React.useState("annual");

  const plans = {
    monthly: { price: "10 000", suffix: "FCFA / mois", billed: "Sans engagement · annulation à tout moment" },
    annual:  { price: "8 000",  suffix: "FCFA / mois", billed: "Facturé 96 000 FCFA / an · 24 000 économisés" },
  };

  const features = [
    { label: "Accès illimité à tous les cours", monthly: true, annual: true },
    { label: "Visionnage HD 1080p · 4K sur les nouveaux", monthly: true, annual: true },
    { label: "Sous-titres FR · ENG · SW", monthly: true, annual: true },
    { label: "Application mobile iOS & Android", monthly: true, annual: true },
    { label: "Téléchargement hors-ligne", monthly: true, annual: true },
    { label: "Certificats partageables LinkedIn", monthly: true, annual: true },
    { label: "Sessions live mensuelles avec instructeurs", monthly: false, annual: true, bonus: true },
    { label: "Accès anticipé · 14j avant tout le monde", monthly: false, annual: true, bonus: true },
  ];

  return (
    <div className="ic-screen no-scrollbar" style={{ overflowY: "auto" }}>
      <Navbar active="tarifs" />

      <div style={{ padding: "56px 56px 40px", maxWidth: 1200, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div className="spotlight-gold" style={{ top: 0, left: "50%", transform: "translateX(-50%)", opacity: 0.5 }}/>
        <div style={{ position: "relative" }}>
          <div className="overline" style={{ marginBottom: 16 }}>/ Tarifs</div>
          <h2 className="ic-h" style={{ fontSize: 56, fontWeight: 700, letterSpacing: "-0.035em", marginBottom: 14, lineHeight: 1 }}>
            Choisissez votre <span style={{ color: "var(--gold)", fontStyle: "italic" }}>plan</span>.
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-2)", maxWidth: 520, margin: "0 auto 32px" }}>
            Investissez dans votre formation. Annulez à tout moment.
          </p>

          {/* Billing toggle */}
          <div style={{ display: "inline-flex", padding: 4, border: "1px solid var(--hairline-2)", borderRadius: 999, background: "rgba(255,255,255,0.02)", marginBottom: 48 }}>
            {[
              { id: "monthly", label: "Mensuel" },
              { id: "annual", label: "Annuel", save: "−20%" },
            ].map(b => (
              <button key={b.id} onClick={() => setBilling(b.id)} className="btn btn-sm" style={{
                background: billing === b.id ? "var(--gold)" : "transparent",
                color: billing === b.id ? "#0A0A0A" : "var(--text-2)",
                borderColor: "transparent",
                fontWeight: 600,
                padding: "8px 16px",
                borderRadius: 999,
                gap: 8,
              }}>
                {b.label}
                {b.save && <span className="mono" style={{ fontSize: 10, padding: "1px 6px", borderRadius: 3, background: billing === b.id ? "rgba(0,0,0,0.15)" : "rgba(245,200,0,0.15)", color: billing === b.id ? "#0A0A0A" : "var(--gold)" }}>{b.save}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, textAlign: "left", maxWidth: 920, margin: "0 auto" }}>
          {/* Plan Standard (always uses billing toggle for price) */}
          <PlanCard
            name="Standard"
            tagline="Pour les apprenants individuels"
            plan={plans[billing]}
            features={features.map(f => ({ ...f, included: f.monthly }))}
            cta="Commencer"
            ctaType="ghost"
          />

          {/* Plan Pro — highlighted */}
          <PlanCard
            name="Pro"
            tagline="Pour les bâtisseurs sérieux"
            plan={plans[billing]}
            features={features.map(f => ({ ...f, included: f.annual }))}
            cta="Commencer l'essai gratuit"
            ctaType="gold"
            highlighted
            saving={billing === "annual" ? "Économisez 24 000 FCFA / an" : null}
          />
        </div>

        {/* Trust strip */}
        <div style={{ marginTop: 36, fontSize: 13, color: "var(--text-2)", display: "inline-flex", gap: 18, alignItems: "center", padding: "12px 22px", border: "1px solid var(--hairline)", borderRadius: 999, background: "rgba(255,255,255,0.015)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon.Check size={12} color="var(--gold)"/> 7 jours gratuits</span>
          <span style={{ width: 1, height: 12, background: "var(--hairline-2)" }}/>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon.Check size={12} color="var(--gold)"/> Sans engagement</span>
          <span style={{ width: 1, height: 12, background: "var(--hairline-2)" }}/>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon.Check size={12} color="var(--gold)"/> Mobile Money · Carte · Wave</span>
        </div>

        {/* Enterprise strip */}
        <div className="surface" style={{ marginTop: 32, padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span className="tag tag-gold">ENTERPRISE</span>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>Vous formez une équipe ou une entreprise ?</div>
            </div>
            <div style={{ fontSize: 13, color: "var(--text-2)" }}>
              Tableaux de bord, SSO, facturation centralisée. À partir de 10 sièges.
            </div>
          </div>
          <button className="btn btn-ghost-gold btn-sm">Parler à l'équipe ventes <Icon.ArrowUpRight size={12} color="var(--gold)"/></button>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ name, tagline, plan, features, cta, ctaType, highlighted, saving }) {
  const { navigate } = useRouter();
  return (
    <div style={{
      background: highlighted ? "linear-gradient(180deg, #1f1c14 0%, #1a1a1a 60%)" : "var(--card)",
      border: highlighted ? "1px solid var(--gold)" : "1px solid var(--hairline)",
      borderRadius: 8,
      padding: 28,
      position: "relative",
      boxShadow: highlighted ? "0 0 0 4px rgba(245,200,0,0.06), 0 24px 60px -16px rgba(245,200,0,0.18)" : "none",
    }}>
      {highlighted && (
        <div style={{ position: "absolute", top: -11, right: 24, background: "var(--gold)", color: "#0A0A0A", padding: "4px 10px", borderRadius: 4, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", fontFamily: "JetBrains Mono", textTransform: "uppercase" }}>
            Recommandé
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="overline" style={{ color: highlighted ? "var(--gold)" : "var(--text-3)" }}>Plan</span>
          <span className="ic-h" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>{name}</span>
        </div>
        {highlighted && <Icon.Sparkle size={14} color="var(--gold)"/>}
      </div>
      <div style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 22 }}>{tagline}</div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
        <span className="ic-h" style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.04em", color: highlighted ? "var(--gold)" : "#fff" }}>
          {plan.price}
        </span>
        <span style={{ fontSize: 13, color: "var(--text-2)" }}>{plan.suffix}</span>
      </div>
      <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginBottom: 6, letterSpacing: "0.02em" }}>
        {plan.billed}
      </div>
      {saving && (
        <div style={{ display: "inline-flex", marginBottom: 16 }}>
          <span className="tag tag-success">{saving}</span>
        </div>
      )}

      <button className={"btn " + (ctaType === "gold" ? "btn-gold" : "btn-ghost")} style={{ width: "100%", padding: "12px 16px", margin: "20px 0 24px" }} onClick={() => navigate("dashboard")}>
        {cta} {ctaType === "gold" && <Icon.ArrowRight size={13} color="#0A0A0A"/>}
      </button>

      <div className="overline overline-mute" style={{ marginBottom: 14 }}>Ce qui est inclus</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: f.included ? (f.bonus ? "#fff" : "var(--text-2)") : "var(--text-4)", fontWeight: f.bonus ? 500 : 400, textDecoration: f.included ? "none" : "line-through", textDecorationColor: "var(--text-4)" }}>
            <span style={{ width: 14, height: 14, borderRadius: 999, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: f.included ? "rgba(245,200,0,0.12)" : "transparent", border: f.included ? "none" : "1px solid var(--hairline-2)" }}>
              {f.included && <Icon.Check size={10} color="var(--gold)" />}
            </span>
            <span style={{ flex: 1 }}>{f.label}</span>
            {f.bonus && f.included && <span className="tag tag-gold" style={{ padding: "1px 6px", fontSize: 9 }}>BONUS</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

window.Pricing = Pricing;
