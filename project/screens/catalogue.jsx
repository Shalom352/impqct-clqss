/* Screen 2 — Catalogue (V2 — vrais intervenants doc Word + 6 parcours PME) */

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

function Catalogue() {
  const [activeFilter, setActiveFilter] = React.useState("Tous");
  const [sort, setSort] = React.useState("Populaires");

  const tracks = [
    { id: "Business Starter",       icon: "🚀", color: "#F5C800", desc: "Les fondamentaux pour lancer son activité" },
    { id: "Financial Mastery",      icon: "📊", color: "#22C55E", desc: "Maîtrise des chiffres et mécanismes de financement" },
    { id: "Marketing Principles",   icon: "📣", color: "#F97316", desc: "Stratégies pour faire connaître son entreprise en Afrique" },
    { id: "Compétences numériques", icon: "💻", color: "#A78BFA", desc: "Outils digitaux et transformation numérique pour PME" },
    { id: "Comptabilité & Finance",  icon: "🧾", color: "#38BDF8", desc: "Gestion comptable et finance d'entreprise" },
    { id: "Gestion de projet",       icon: "🗂", color: "#F472B6", desc: "Planifier, organiser et piloter ses projets" },
  ];

  const courses = [
    // --- Business Starter ---
    {
      title: "Leadership politique & Vision stratégique pour bâtir un pays",
      instructor: "Kacou Diagou",
      role: "POLITICAL LEADER · CÔTE D'IVOIRE",
      initials: "KD", duration: "7h 00min", level: "Avancé", lessons: 22,
      cat: "Business Starter", rating: 4.95, hot: true, badge: "Top S2", accent: "#F5C800",
      desc: "Décision publique, gestion de crise et vision long terme applicable aux entrepreneurs.",
    },
    {
      title: "Construire un empire industriel en Afrique : de l'agro au trading",
      instructor: "Jean Louis Billon",
      role: "PDG · GROUPE SIFCA",
      initials: "JB", duration: "6h 30min", level: "Intermédiaire", lessons: 20,
      cat: "Business Starter", rating: 4.92, accent: "#F5C800",
      desc: "Croissance multi-sectorielle, gestion familiale d'entreprise, expansion panafricaine.",
    },
    {
      title: "Vendre et convaincre : fondamentaux du commerce en Afrique",
      instructor: "Kouassi Parfait",
      role: "BUSINESS TITAN · ABIDJAN",
      initials: "KP", duration: "5h 00min", level: "Débutant", lessons: 17,
      cat: "Business Starter", rating: 4.85, badge: "NOUVEAU", accent: "#F5C800",
      desc: "Techniques de vente, négociation B2B, portefeuille clients durable.",
    },
    // --- Financial Mastery ---
    {
      title: "L'accès au financement des PME africaines",
      instructor: "Jean Luc Konan",
      role: "BUSINESS TITAN · DAKAR",
      initials: "JLK", duration: "6h 20min", level: "Débutant", lessons: 21,
      cat: "Financial Mastery", rating: 4.96, hot: true, accent: "#22C55E",
      desc: "Comment une PME africaine accède aux financements bancaires et institutionnels.",
    },
    {
      title: "Assainissement financier PME & Corporate",
      instructor: "Stan Zeze",
      role: "BUSINESS TITAN · ABIDJAN",
      initials: "SZ", duration: "5h 40min", level: "Intermédiaire", lessons: 18,
      cat: "Financial Mastery", rating: 4.90, accent: "#22C55E",
      desc: "Structurer la finance d'une entreprise africaine, préparer une levée de fonds.",
    },
    {
      title: "Construire et gérer une chaîne hôtelière panafricaine",
      instructor: "Mossadeck Bally",
      role: "PDG · AZALAÏ HOTELS",
      initials: "MB", duration: "5h 15min", level: "Avancé", lessons: 17,
      cat: "Financial Mastery", rating: 4.88, accent: "#22C55E",
      desc: "Expansion panafricaine, hospitality business, levée de fonds dans l'hôtellerie.",
    },
    // --- Marketing Principles ---
    {
      title: "Communication, influence et personal branding à l'ère digitale",
      instructor: "Fabrice Sawegnon",
      role: "FONDATEUR · VOODOO AGENCY",
      initials: "FS", duration: "4h 50min", level: "Débutant", lessons: 16,
      cat: "Marketing Principles", rating: 4.83, badge: "NOUVEAU", accent: "#F97316",
      desc: "Construire sa marque personnelle, stratégie de communication pour entrepreneurs africains.",
    },
    {
      title: "Créativité & Entrepreneuriat culturel africain",
      instructor: "Asalfo",
      role: "FONDATEUR · MAGIC SYSTEM",
      initials: "AS", duration: "4h 20min", level: "Débutant", lessons: 14,
      cat: "Marketing Principles", rating: 4.81, accent: "#F97316",
      desc: "Monétiser sa créativité, construire une marque personnelle, l'industrie musicale comme modèle.",
    },
    // --- Compétences numériques ---
    {
      title: "Leadership & Mental gagnant",
      instructor: "Didier Drogba",
      role: "LÉGENDE DU SPORT · CHAMPION AFRICA",
      initials: "DD", duration: "5h 00min", level: "Intermédiaire", lessons: 18,
      cat: "Compétences numériques", rating: 4.87, hot: true, accent: "#A78BFA",
      desc: "Principes du sport de haut niveau appliqués à l'entrepreneuriat et au leadership.",
    },
    {
      title: "Taekwondo & Développement de soi pour entrepreneurs",
      instructor: "Cheick Sallah Cissé",
      role: "CHAMPION OLYMPIQUE · CÔTE D'IVOIRE",
      initials: "CS", duration: "3h 50min", level: "Débutant", lessons: 13,
      cat: "Compétences numériques", rating: 4.78, accent: "#A78BFA",
      desc: "Discipline mentale, dépassement de soi, rigueur sportive forge un entrepreneur.",
    },
    // --- Comptabilité & Finance ---
    {
      title: "Construction de carrière & Leadership au féminin",
      instructor: "Fatoumata Mbalou Sanogo",
      role: "BUSINESS TITAN · ABIDJAN",
      initials: "FM", duration: "4h 45min", level: "Débutant", lessons: 16,
      cat: "Comptabilité & Finance", rating: 4.84, accent: "#38BDF8",
      desc: "Stratégie de carrière, leadership au féminin, négociation salariale, personal branding.",
    },
    // --- Gestion de projet ---
    {
      title: "Construire et gérer une chaîne hôtelière panafricaine (Gestion)",
      instructor: "Mossadeck Bally",
      role: "PDG · AZALAÏ HOTELS",
      initials: "MB", duration: "4h 00min", level: "Intermédiaire", lessons: 14,
      cat: "Gestion de projet", rating: 4.80, accent: "#F472B6",
      desc: "Gestion multi-pays, coordination d'équipes, pilotage de projets d'expansion.",
    },
  ];

  const visible = activeFilter === "Tous" ? courses : courses.filter(c => c.cat === activeFilter);
  const activeTrack = tracks.find(t => t.id === activeFilter);

  return (
    <div className="ic-screen no-scrollbar" style={{ overflowY: "auto" }}>
      <Navbar active="cours" />

      <div style={{ padding: "40px 56px 64px", maxWidth: 1320, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid var(--hairline)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span className="overline">/ Catalogue</span>
              <span className="tag mono">11 COURS · 6 PARCOURS</span>
            </div>
            <h2 className="ic-h" style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
              Cours à la <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Une</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-2)", maxWidth: 540 }}>
              Apprenez auprès des figures qui façonnent l'Afrique. Mis à jour chaque mardi.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", border: "1px solid var(--hairline-2)", borderRadius: 6, background: "rgba(255,255,255,0.02)", minWidth: 240 }}>
              <Icon.Search size={14} color="var(--text-3)" />
              <span style={{ fontSize: 14, color: "var(--text-3)" }}>Rechercher un cours, un instructeur…</span>
              <span className="kbd mono" style={{ marginLeft: "auto", fontSize: 10, padding: "2px 5px", border: "1px solid var(--hairline-2)", borderRadius: 3, color: "var(--text-3)" }}>⌘ K</span>
            </div>
            <button className="btn btn-ghost btn-sm">
              {sort} <Icon.ChevronDown size={11} color="#fff"/>
            </button>
          </div>
        </div>

        {/* Parcours tracks grid */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "JetBrains Mono", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Parcours thématiques</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
            {tracks.map(t => {
              const isActive = activeFilter === t.id;
              return (
                <button key={t.id} onClick={() => setActiveFilter(isActive ? "Tous" : t.id)} style={{
                  background: isActive ? `rgba(${hexToRgb(t.color)}, 0.12)` : "var(--card)",
                  border: `1px solid ${isActive ? t.color : "var(--hairline)"}`,
                  borderRadius: 8, padding: "14px", cursor: "pointer", textAlign: "left",
                  transition: "all 0.2s", transform: isActive ? "translateY(-2px)" : "none",
                  boxShadow: isActive ? `0 8px 24px -8px ${t.color}55` : "none",
                }}>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{t.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: isActive ? t.color : "#fff", lineHeight: 1.2, fontFamily: "Space Grotesk" }}>{t.id}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active filter banner */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            {activeTrack ? (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 14px", background: `rgba(${hexToRgb(activeTrack.color)}, 0.08)`, border: `1px solid ${activeTrack.color}44`, borderRadius: 6 }}>
                <span style={{ fontSize: 18 }}>{activeTrack.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: activeTrack.color }}>{activeTrack.id}</div>
                  <div style={{ fontSize: 12, color: "var(--text-3)" }}>{activeTrack.desc}</div>
                </div>
                <button onClick={() => setActiveFilter("Tous")} style={{ marginLeft: 8, background: "none", border: "none", color: "var(--text-3)", cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
              </div>
            ) : (
              <span style={{ fontSize: 15, color: "var(--text-2)" }}>Tous les parcours</span>
            )}
          </div>
          <div style={{ fontSize: 13, color: "var(--text-3)", fontFamily: "JetBrains Mono", letterSpacing: "0.04em" }}>
            {String(visible.length).padStart(2, "0")} / {String(courses.length).padStart(2, "0")} COURS
          </div>
        </div>

        {/* Course grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {visible.map((c, i) => <CourseCard key={i} {...c} />)}
        </div>
      </div>
    </div>
  );
}

function CourseCard({ title, instructor, role, initials, duration, level, lessons, rating, hot, badge, accent }) {
  const accentColor = accent || "var(--gold)";
  const [hover, setHover] = React.useState(false);
  const { navigate } = useRouter();
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate("course")}
      style={{
        background: "var(--card)",
        border: "1px solid " + (hover ? accentColor : "var(--hairline)"),
        borderRadius: 8, overflow: "hidden", cursor: "pointer",
        transition: "all 0.2s ease",
        transform: hover ? "translateY(-3px)" : "none",
        boxShadow: hover ? `0 16px 32px -8px rgba(0,0,0,0.6)` : "none",
      }}
    >
      <Thumb style={{ aspectRatio: "16 / 10", width: "100%", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: accentColor, opacity: 0.85 }}/>
        <div style={{ position: "absolute", top: 14, left: 12, display: "flex", gap: 6 }}>
          {hot && <span className="tag tag-gold"><Icon.Flame size={10} color="var(--gold)" /> Populaire</span>}
          {badge && <span className="tag">{badge}</span>}
        </div>
        <div style={{ position: "absolute", top: 14, right: 12 }}>
          <span className="tag mono">EP {String(lessons).padStart(2, "0")}</span>
        </div>
        <div style={{
          position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
          width: 56, height: 56, borderRadius: 999,
          background: hover ? accentColor : "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)",
          border: "1px solid " + (hover ? accentColor : "rgba(255,255,255,0.15)"),
          display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s",
        }}>
          <Icon.Play size={20} color={hover ? "#0A0A0A" : "#fff"} />
        </div>
        <div style={{ position: "absolute", left: 12, bottom: 12, right: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Avatar initials={initials} size={34} ring />
            <div>
              <div style={{ fontSize: 13, color: "#fff", fontWeight: 600, lineHeight: 1.2 }}>{instructor}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", fontFamily: "JetBrains Mono", letterSpacing: "0.05em", marginTop: 1 }}>{role}</div>
            </div>
          </div>
        </div>
      </Thumb>

      <div style={{ padding: 18 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 12, lineHeight: 1.3, fontFamily: "Space Grotesk", letterSpacing: "-0.01em", minHeight: 42 }}>
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "var(--text-3)", fontFamily: "JetBrains Mono", marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid var(--hairline)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon.Clock size={11} color="var(--text-3)"/> {duration}</span>
          <span style={{ width: 3, height: 3, borderRadius: 999, background: "var(--text-4)" }}/>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon.Signal size={11} color="var(--text-3)"/> {level}</span>
          <span style={{ width: 3, height: 3, borderRadius: 999, background: "var(--text-4)" }}/>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: accentColor }}><Icon.Sparkle size={10} color={accentColor}/> {rating}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>{lessons} LEÇONS</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, color: hover ? accentColor : "var(--text-2)", fontWeight: 500, transition: "0.15s" }}>
            Commencer <Icon.ArrowUpRight size={12} color={hover ? accentColor : "var(--text-2)"} />
          </span>
        </div>
      </div>
    </div>
  );
}

window.Catalogue = Catalogue;
