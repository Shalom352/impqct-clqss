/* Screen 6 — Partenaires */

function Partners() {
  const { navigate } = useRouter();

  const partners = [
    { initials: "BAD",  name: "Banque Africaine de Développement", type: "Institution",    color: "#F5C800" },
    { initials: "OCP",  name: "OCP Group",                          type: "Entreprise",     color: "#22C55E" },
    { initials: "MTN",  name: "MTN Group",                          type: "Télécom",        color: "#F97316" },
    { initials: "ERA",  name: "Eranove",                            type: "Énergie",        color: "#38BDF8" },
    { initials: "BOA",  name: "Bank of Africa",                     type: "Finance",        color: "#A78BFA" },
    { initials: "JEA",  name: "Jeune Afrique Media Group",          type: "Médias",         color: "#F472B6" },
    { initials: "AF50", name: "Africa50",                           type: "Infrastructure", color: "#34D399" },
    { initials: "UBA",  name: "United Bank for Africa",             type: "Finance",        color: "#FB923C" },
  ];

  const temoignages = [
    {
      quote: "ImpactClass nous permet de former nos cadres intermédiaires directement en français avec des contenus pertinents pour le contexte africain.",
      author: "Directeur RH",
      org: "Banque de l'Habitat",
      initials: "DH",
    },
    {
      quote: "La qualité des intervenants est remarquable. Nos équipes apprécient apprendre auprès de décideurs qui connaissent nos réalités.",
      author: "DG Formation",
      org: "Société Nationale d'Assurances",
      initials: "SN",
    },
  ];

  return (
    <div className="ic-screen no-scrollbar" style={{ overflowY: "auto" }}>
      <Navbar active="partenaires" />

      {/* Hero section */}
      <div style={{ position: "relative", padding: "64px 56px 48px", maxWidth: 1320, margin: "0 auto" }}>
        <div className="spotlight-gold" style={{ top: -80, right: -80, opacity: 0.5 }}/>
        <div style={{ position: "relative", maxWidth: 720 }}>
          <div className="overline" style={{ marginBottom: 16 }}>/ Partenaires</div>
          <h2 className="ic-h" style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 20 }}>
            Formez vos équipes avec les <span style={{ color: "var(--gold)", fontStyle: "italic" }}>meilleurs</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.6, marginBottom: 36, maxWidth: 560 }}>
            ImpactClass accompagne les entreprises, institutions et organisations africaines dans le renforcement des capacités de leurs équipes. Contenus en français, intervenants locaux, formats adaptés.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn btn-gold btn-lg">
              Devenir partenaire <Icon.ArrowRight size={14} color="#0A0A0A" />
            </button>
            <button className="btn btn-ghost btn-lg">
              Parler à l'équipe <Icon.ArrowUpRight size={14} color="#fff" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats partenaires */}
      <div style={{ padding: "0 56px 48px", maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, border: "1px solid var(--hairline)", borderRadius: 8, overflow: "hidden", background: "var(--hairline)" }}>
          {[
            { num: "40+",  label: "Partenaires actifs",   sub: "Entreprises & institutions" },
            { num: "23",   label: "Pays couverts",        sub: "Afrique francophone & anglophone" },
            { num: "8 000+", label: "Salariés formés",   sub: "Via nos partenaires entreprises" },
          ].map((s, i) => (
            <div key={i} style={{ background: "var(--bg)", padding: "28px 32px" }}>
              <div className="ic-h" style={{ fontSize: 40, color: "var(--gold)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 6 }}>{s.num}</div>
              <div style={{ fontSize: 15, color: "#fff", fontWeight: 500, marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Grille partenaires */}
      <div style={{ padding: "0 56px 56px", maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <span className="overline">/ Ils nous font confiance</span>
          <div style={{ flex: 1, height: 1, background: "var(--hairline)" }}/>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {partners.map((p, i) => (
            <PartnerCard key={i} {...p} />
          ))}
        </div>
      </div>

      {/* Témoignages */}
      <div style={{ padding: "0 56px 48px", maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <span className="overline">/ Témoignages</span>
          <div style={{ flex: 1, height: 1, background: "var(--hairline)" }}/>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {temoignages.map((t, i) => (
            <div key={i} className="surface" style={{ padding: 28 }}>
              <div style={{ fontSize: 32, color: "var(--gold)", fontFamily: "Space Grotesk", lineHeight: 1, marginBottom: 16, opacity: 0.6 }}>"</div>
              <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.65, marginBottom: 20, fontStyle: "italic" }}>{t.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid var(--hairline)" }}>
                <Avatar initials={t.initials} size={40} ring />
                <div>
                  <div style={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{t.author}</div>
                  <div style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>{t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offre Enterprise */}
      <div style={{ padding: "0 56px 64px", maxWidth: 1320, margin: "0 auto" }}>
        <div className="brackets" style={{ background: "linear-gradient(135deg, #1a1a14 0%, #1a1a1a 100%)", border: "1px solid var(--gold)", borderRadius: 8, padding: "40px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span className="tag tag-gold" style={{ marginBottom: 16, display: "inline-flex" }}>ENTERPRISE</span>
            <h3 className="ic-h" style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12, marginTop: 8 }}>
              Vous formez une équipe ou une organisation ?
            </h3>
            <p style={{ fontSize: 15, color: "var(--text-2)", maxWidth: 500, lineHeight: 1.55 }}>
              Tableau de bord administrateur, suivi de progression par équipe, facturation centralisée et contenus sur mesure. À partir de 10 accès.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0, marginLeft: 48 }}>
            <button className="btn btn-gold btn-lg">
              Demander un devis <Icon.ArrowRight size={14} color="#0A0A0A" />
            </button>
            <button className="btn btn-ghost btn-lg">
              Voir la démo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnerCard({ initials, name, type, color }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? `${color}0a` : "var(--card)",
        border: `1px solid ${hover ? color + "66" : "var(--hairline)"}`,
        borderRadius: 8,
        padding: "24px 20px",
        cursor: "pointer",
        transition: "all 0.2s",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 14, textAlign: "center",
      }}
    >
      {/* Logo placeholder */}
      <div style={{
        width: 64, height: 64, borderRadius: 12,
        background: `${color}18`,
        border: `1px solid ${color}33`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 14,
        color: color,
        letterSpacing: "-0.02em",
      }}>
        {initials}
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 4, fontFamily: "Space Grotesk" }}>{name}</div>
        <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "JetBrains Mono", letterSpacing: "0.06em", textTransform: "uppercase" }}>{type}</div>
      </div>
    </div>
  );
}

window.Partners = Partners;
