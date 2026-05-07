/* Screen 2 — Catalogue (startup 2026) */

function Catalogue() {
  const [activeFilter, setActiveFilter] = React.useState("Tous");
  const [sort, setSort] = React.useState("Populaires");

  const filters = [
    { id: "Tous", count: 12 },
    { id: "Entrepreneuriat", count: 4 },
    { id: "Finance", count: 3 },
    { id: "Leadership", count: 3 },
    { id: "Marketing", count: 2 },
  ];

  const courses = [
    { title: "Construire une entreprise panafricaine", instructor: "Tony Elumelu", role: "FONDATEUR · HEIRS HOLDINGS", initials: "TE", duration: "8h 12min", level: "Intermédiaire", lessons: 24, cat: "Entrepreneuriat", rating: 4.96, students: 1840, hot: true, badge: "Top S2" },
    { title: "Leadership conscient en Afrique", instructor: "Ibukun Awosika", role: "EX-CHAIR · FIRST BANK NG", initials: "IA", duration: "5h 40min", level: "Avancé", lessons: 18, cat: "Leadership", rating: 4.88, students: 1240 },
    { title: "Comprendre les marchés financiers", instructor: "Ngozi Okonjo-Iweala", role: "DG · OMC", initials: "NO", duration: "6h 20min", level: "Débutant", lessons: 22, cat: "Finance", rating: 4.92, students: 2110, hot: true },
    { title: "Marketing digital pour PME", instructor: "Mossadeck Bally", role: "AZALAÏ HOTELS", initials: "MB", duration: "4h 50min", level: "Débutant", lessons: 16, cat: "Marketing", rating: 4.81, students: 980 },
    { title: "Industrialiser à grande échelle", instructor: "Aliko Dangote", role: "DANGOTE GROUP", initials: "AD", duration: "7h 30min", level: "Avancé", lessons: 20, cat: "Entrepreneuriat", rating: 4.94, students: 1620, badge: "NOUVEAU" },
    { title: "Finance personnelle & investissement", instructor: "Folorunsho Alakija", role: "FAMFA OIL", initials: "FA", duration: "5h 10min", level: "Débutant", lessons: 19, cat: "Finance", rating: 4.85, students: 1320 },
  ];

  const visible = activeFilter === "Tous" ? courses : courses.filter(c => c.cat === activeFilter);

  return (
    <div className="ic-screen no-scrollbar" style={{ overflowY: "auto" }}>
      <Navbar active="cours" />

      <div style={{ padding: "40px 56px 64px", maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid var(--hairline)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span className="overline">/ Catalogue</span>
              <span className="tag mono">12 COURS · 184 LEÇONS</span>
            </div>
            <h2 className="ic-h" style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
              Cours à la <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Une</span>
            </h2>
            <p style={{ fontSize: 14, color: "var(--text-2)", maxWidth: 540 }}>
              Sélection éditoriale par notre équipe. Mise à jour chaque mardi.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", border: "1px solid var(--hairline-2)", borderRadius: 6, background: "rgba(255,255,255,0.02)", minWidth: 220 }}>
              <Icon.Search size={13} color="var(--text-3)" />
              <span style={{ fontSize: 13, color: "var(--text-3)" }}>Rechercher un cours, un instructeur…</span>
              <span className="kbd mono" style={{ marginLeft: "auto", fontSize: 10, padding: "2px 5px", border: "1px solid var(--hairline-2)", borderRadius: 3, color: "var(--text-3)" }}>⌘ K</span>
            </div>
            <button className="btn btn-ghost btn-sm">
              {sort} <Icon.ChevronDown size={11} color="#fff"/>
            </button>
          </div>
        </div>

        {/* Filter pills + meta */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {filters.map(f => (
              <button key={f.id} className={"pill" + (activeFilter === f.id ? " active" : "")} onClick={() => setActiveFilter(f.id)}>
                {f.id} <span className="count">{String(f.count).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "JetBrains Mono", letterSpacing: "0.04em" }}>
            {String(visible.length).padStart(2, "0")} / {String(courses.length).padStart(2, "0")} VISIBLES
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

function CourseCard({ title, instructor, role, initials, duration, level, lessons, rating, students, hot, badge }) {
  const [hover, setHover] = React.useState(false);
  const { navigate } = useRouter();
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate("course")}
      style={{
        background: "var(--card)",
        border: "1px solid " + (hover ? "rgba(245,200,0,0.5)" : "var(--hairline)"),
        borderRadius: 8,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.2s ease",
        transform: hover ? "translateY(-3px)" : "none",
        boxShadow: hover ? "0 16px 32px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,200,0,0.1)" : "none",
      }}
    >
      <Thumb style={{ aspectRatio: "16 / 10", width: "100%", position: "relative" }}>
        {/* Top-left badges */}
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
          {hot && <span className="tag tag-gold"><Icon.Flame size={10} color="var(--gold)" /> Populaire</span>}
          {badge && <span className="tag">{badge}</span>}
        </div>
        {/* Top-right */}
        <div style={{ position: "absolute", top: 12, right: 12, display: "flex", gap: 6 }}>
          <span className="tag mono">EP {String(lessons).padStart(2, "0")}</span>
        </div>
        {/* Center play overlay on hover */}
        <div style={{
          position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
          width: 56, height: 56, borderRadius: 999,
          background: hover ? "var(--gold)" : "rgba(0,0,0,0.4)",
          backdropFilter: "blur(6px)",
          border: "1px solid " + (hover ? "var(--gold)" : "rgba(255,255,255,0.15)"),
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s",
        }}>
          <Icon.Play size={20} color={hover ? "#0A0A0A" : "#fff"} />
        </div>
        {/* Bottom-left instructor */}
        <div style={{ position: "absolute", left: 12, bottom: 12, right: 12, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Avatar initials={initials} size={32} ring />
            <div>
              <div style={{ fontSize: 12, color: "#fff", fontWeight: 600, lineHeight: 1.2 }}>{instructor}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", fontFamily: "JetBrains Mono", letterSpacing: "0.06em", marginTop: 1 }}>{role}</div>
            </div>
          </div>
        </div>
      </Thumb>

      <div style={{ padding: 18 }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 14, lineHeight: 1.25, fontFamily: "Space Grotesk", letterSpacing: "-0.01em", textWrap: "balance", minHeight: 40 }}>
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "var(--text-3)", fontFamily: "JetBrains Mono", marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid var(--hairline)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon.Clock size={11} color="var(--text-3)"/> {duration}</span>
          <span style={{ width: 3, height: 3, borderRadius: 999, background: "var(--text-4)" }}/>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon.Signal size={11} color="var(--text-3)"/> {level}</span>
          <span style={{ width: 3, height: 3, borderRadius: 999, background: "var(--text-4)" }}/>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon.Sparkle size={10} color="var(--gold)"/> {rating}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 11, color: "var(--text-3)" }}>
            <span style={{ color: "#fff", fontFamily: "JetBrains Mono" }}>{students.toLocaleString("fr")}</span> apprenants
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: hover ? "var(--gold)" : "var(--text-2)", fontWeight: 500, transition: "0.15s" }}>
            Commencer <Icon.ArrowUpRight size={12} color={hover ? "var(--gold)" : "var(--text-2)"} />
          </span>
        </div>
      </div>
    </div>
  );
}

window.Catalogue = Catalogue;
