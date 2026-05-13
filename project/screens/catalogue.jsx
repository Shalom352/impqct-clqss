/* Screen 2 — Catalogue V2 — vraies photos intervenants + responsive mobile */

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
    { title: "Leadership politique & Vision stratégique pour bâtir un pays", instructor: "Kacou Diagou", role: "POLITICAL LEADER · CÔTE D'IVOIRE", photo: "photos/kacou-diagou.jpg", initials: "KD", duration: "7h 00min", level: "Avancé", lessons: 22, cat: "Business Starter", rating: 4.95, hot: true, badge: "Top S2", accent: "#F5C800" },
    { title: "Construire un empire industriel en Afrique : de l'agro au trading", instructor: "Jean Louis Billon", role: "PDG · GROUPE SIFCA", photo: "photos/jeqn-louis-billon.jpg", initials: "JB", duration: "6h 30min", level: "Intermédiaire", lessons: 20, cat: "Business Starter", rating: 4.92, accent: "#F5C800" },
    { title: "Vendre et convaincre : fondamentaux du commerce en Afrique", instructor: "Kouassi Parfait", role: "BUSINESS TITAN · ABIDJAN", photo: "photos/kouassi-parfait.jpg", initials: "KP", duration: "5h 00min", level: "Débutant", lessons: 17, cat: "Business Starter", rating: 4.85, badge: "NOUVEAU", accent: "#F5C800" },
    { title: "L'accès au financement des PME africaines", instructor: "Jean Luc Konan", role: "BUSINESS TITAN · DAKAR", photo: "photos/jean-luc-konan.jpg", initials: "JLK", duration: "6h 20min", level: "Débutant", lessons: 21, cat: "Financial Mastery", rating: 4.96, hot: true, accent: "#22C55E" },
    { title: "Assainissement financier PME & Corporate", instructor: "Stan Zeze", role: "BUSINESS TITAN · ABIDJAN", photo: "photos/stan-zeze.jpg", initials: "SZ", duration: "5h 40min", level: "Intermédiaire", lessons: 18, cat: "Financial Mastery", rating: 4.90, accent: "#22C55E" },
    { title: "Construire et gérer une chaîne hôtelière panafricaine", instructor: "Mossadeck Bally", role: "PDG · AZALAÏ HOTELS", photo: "photos/mossadeck-bailly.jpg", initials: "MB", duration: "5h 15min", level: "Avancé", lessons: 17, cat: "Financial Mastery", rating: 4.88, accent: "#22C55E" },
    { title: "Communication, influence et personal branding à l'ère digitale", instructor: "Fabrice Sawegnon", role: "FONDATEUR · VOODOO AGENCY", photo: "photos/fabrice-sawegnon.jpg", initials: "FS", duration: "4h 50min", level: "Débutant", lessons: 16, cat: "Marketing Principles", rating: 4.83, badge: "NOUVEAU", accent: "#F97316" },
    { title: "Créativité & Entrepreneuriat culturel africain", instructor: "Asalfo", role: "FONDATEUR · MAGIC SYSTEM", photo: "photos/asalfo.jpg", initials: "AS", duration: "4h 20min", level: "Débutant", lessons: 14, cat: "Marketing Principles", rating: 4.81, accent: "#F97316" },
    { title: "Leadership & Mental gagnant", instructor: "Didier Drogba", role: "LÉGENDE DU SPORT · CHAMPION AFRICA", photo: "photos/Didier-Drogba.jpg", initials: "DD", duration: "5h 00min", level: "Intermédiaire", lessons: 18, cat: "Compétences numériques", rating: 4.87, hot: true, accent: "#A78BFA" },
    { title: "Taekwondo & Développement de soi pour entrepreneurs", instructor: "Cheick Sallah Cissé", role: "CHAMPION OLYMPIQUE · CÔTE D'IVOIRE", photo: "photos/Cheick-Sallah-Cissé.jpg", initials: "CS", duration: "3h 50min", level: "Débutant", lessons: 13, cat: "Compétences numériques", rating: 4.78, accent: "#A78BFA" },
    { title: "Construction de carrière & Leadership au féminin", instructor: "Fatoumata Mbalou Sanogo", role: "BUSINESS TITAN · ABIDJAN", photo: "photos/Fatoumata-Mbalou-Sanogo.jpg", initials: "FM", duration: "4h 45min", level: "Débutant", lessons: 16, cat: "Comptabilité & Finance", rating: 4.84, accent: "#38BDF8" },
  ];

  const visible = activeFilter === "Tous" ? courses : courses.filter(c => c.cat === activeFilter);
  const activeTrack = tracks.find(t => t.id === activeFilter);

  return (
    <div className="ic-screen no-scrollbar" style={{ overflowY: "auto" }}>
      <Navbar active="cours" />

      <div className="catalogue-wrap">

        {/* Header */}
        <div className="catalogue-header">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span className="overline">/ Catalogue</span>
              <span className="tag mono">11 COURS · 6 PARCOURS</span>
            </div>
            <h2 className="ic-h" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
              Cours à la <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Une</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-2)", maxWidth: 540 }}>
              Apprenez auprès des figures qui façonnent l'Afrique. Mis à jour chaque mardi.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <div className="search-box">
              <Icon.Search size={14} color="var(--text-3)" />
              <span style={{ fontSize: 14, color: "var(--text-3)" }}>Rechercher…</span>
            </div>
          </div>
        </div>

        {/* Parcours tracks grid */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, color: "var(--text-3)", fontFamily: "JetBrains Mono", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Parcours thématiques</div>
          <div className="tracks-grid">
            {tracks.map(t => {
              const isActive = activeFilter === t.id;
              return (
                <button key={t.id} onClick={() => setActiveFilter(isActive ? "Tous" : t.id)} className="track-btn" style={{
                  background: isActive ? `rgba(${hexToRgb(t.color)}, 0.12)` : "var(--card)",
                  border: `1px solid ${isActive ? t.color : "var(--hairline)"}`,
                  transform: isActive ? "translateY(-2px)" : "none",
                  boxShadow: isActive ? `0 8px 24px -8px ${t.color}55` : "none",
                }}>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{t.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: isActive ? t.color : "#fff", lineHeight: 1.2, fontFamily: "Space Grotesk" }}>{t.id}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter info + count */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 10 }}>
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
        <div className="course-grid">
          {visible.map((c, i) => <CourseCard key={i} {...c} />)}
        </div>
      </div>
    </div>
  );
}

function CourseCard({ title, instructor, role, photo, initials, duration, level, lessons, rating, hot, badge, accent }) {
  const accentColor = accent || "var(--gold)";
  const [hover, setHover] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);
  const { navigate } = useRouter();

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate("course")}
      className="course-card"
      style={{
        border: "1px solid " + (hover ? accentColor : "var(--hairline)"),
        transform: hover ? "translateY(-3px)" : "none",
        boxShadow: hover ? `0 16px 32px -8px rgba(0,0,0,0.6)` : "none",
      }}
    >
      {/* Thumbnail / photo */}
      <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden", background: "var(--card-2)" }}>
        {/* accent top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: accentColor, opacity: 0.85, zIndex: 2 }}/>

        {/* Photo de l'instructeur en arrière-plan */}
        {photo && !imgError ? (
          <img
            src={photo}
            alt={instructor}
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg, ${accentColor}18, #1a1a1a)` }}>
            <span style={{ fontSize: 48, fontFamily: "Space Grotesk", fontWeight: 700, color: accentColor, opacity: 0.4 }}>{initials}</span>
          </div>
        )}

        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)", zIndex: 1 }}/>

        {/* Badges */}
        <div style={{ position: "absolute", top: 14, left: 12, display: "flex", gap: 6, zIndex: 3 }}>
          {hot && <span className="tag tag-gold"><Icon.Flame size={10} color="var(--gold)" /> Populaire</span>}
          {badge && <span className="tag">{badge}</span>}
        </div>
        <div style={{ position: "absolute", top: 14, right: 12, zIndex: 3 }}>
          <span className="tag mono">EP {String(lessons).padStart(2, "0")}</span>
        </div>

        {/* Play button */}
        <div style={{
          position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
          width: 50, height: 50, borderRadius: 999,
          background: hover ? accentColor : "rgba(0,0,0,0.5)",
          backdropFilter: "blur(6px)",
          border: "1px solid " + (hover ? accentColor : "rgba(255,255,255,0.2)"),
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s", zIndex: 3,
        }}>
          <Icon.Play size={18} color={hover ? "#0A0A0A" : "#fff"} />
        </div>

        {/* Instructor name overlay bottom */}
        <div style={{ position: "absolute", left: 12, bottom: 10, right: 12, zIndex: 3 }}>
          <div style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>{instructor}</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", fontFamily: "JetBrains Mono", letterSpacing: "0.04em" }}>{role}</div>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 12, lineHeight: 1.3, fontFamily: "Space Grotesk", letterSpacing: "-0.01em", minHeight: 40 }}>
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--text-3)", fontFamily: "JetBrains Mono", marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid var(--hairline)", flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}><Icon.Clock size={10} color="var(--text-3)"/> {duration}</span>
          <span style={{ width: 2, height: 2, borderRadius: 999, background: "var(--text-4)" }}/>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}><Icon.Signal size={10} color="var(--text-3)"/> {level}</span>
          <span style={{ width: 2, height: 2, borderRadius: 999, background: "var(--text-4)" }}/>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3, color: accentColor }}><Icon.Sparkle size={9} color={accentColor}/> {rating}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "JetBrains Mono" }}>{lessons} LEÇONS</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, color: hover ? accentColor : "var(--text-2)", fontWeight: 500, transition: "0.15s" }}>
            Commencer <Icon.ArrowUpRight size={12} color={hover ? accentColor : "var(--text-2)"} />
          </span>
        </div>
      </div>
    </div>
  );
}

window.Catalogue = Catalogue;
