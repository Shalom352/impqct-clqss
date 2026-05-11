/* Screen 3 — Page Cours (startup 2026 — control room vibe) */

function CoursePage() {
  const [tab, setTab] = React.useState("Leçons");
  const [playing, setPlaying] = React.useState(false);
  const [openChapter, setOpenChapter] = React.useState(0);

  const chapters = [
    { title: "Fondations", duration: "35min", lessons: [
      { name: "Bienvenue dans le cours", dur: "04:12", state: "done" },
      { name: "Penser comme un bâtisseur", dur: "12:48", state: "done" },
      { name: "Identifier une opportunité africaine", dur: "18:30", state: "current" },
    ]},
    { title: "Construire l'équipe", duration: "36min", lessons: [
      { name: "Recruter ses cofondateurs", dur: "15:22", state: "todo" },
      { name: "La culture d'entreprise", dur: "11:05", state: "todo" },
      { name: "Déléguer sans perdre la vision", dur: "09:41", state: "todo" },
    ]},
    { title: "Lever des fonds", duration: "30min", lessons: [
      { name: "Capital local vs international", dur: "16:18", state: "locked" },
      { name: "Préparer son dossier", dur: "13:50", state: "locked" },
    ]},
  ];

  return (
    <div className="ic-screen no-scrollbar" style={{ overflowY: "auto" }}>
      <Navbar active="cours" />

      {/* Course header strip */}
      <div style={{ padding: "20px 56px", borderBottom: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1400, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span className="tag mono">COURS / S2 / EP 03</span>
          <div className="ic-h" style={{ fontSize: 16, fontWeight: 600 }}>Construire une entreprise panafricaine</div>
          <span className="tag tag-success"><span className="tag-dot pulse"/> En cours</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-ghost btn-sm"><Icon.Bookmark size={12} color="#fff"/> Marquer</button>
          <button className="btn btn-ghost btn-sm">Notes <span className="kbd mono" style={{ fontSize: 9, padding: "1px 4px", borderRadius: 3, background: "rgba(255,255,255,0.05)", border: "1px solid var(--hairline-2)" }}>N</span></button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "65fr 35fr", gap: 24, padding: "24px 56px 56px", maxWidth: 1400, margin: "0 auto", alignItems: "start" }}>
        {/* LEFT */}
        <div>
          {/* Video player */}
          <div style={{ background: "#000", borderRadius: 8, aspectRatio: "16 / 9", position: "relative", overflow: "hidden", border: "1px solid var(--hairline-2)" }}>
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, #0a0a0a 0px, #0a0a0a 14px, #060606 14px, #060606 28px)" }}/>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 50% at 50% 50%, rgba(245,200,0,0.06), transparent 70%)" }}/>

            {/* Top HUD */}
            <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: 6 }}>
                <span className="tag" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}>CH 02 · LEÇON 03</span>
                <span className="tag tag-gold" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}>4K</span>
              </div>
              <span className="tag mono" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}>06:12 / 18:30</span>
            </div>

            {/* play button */}
            <div style={{
              position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
              width: 84, height: 84, borderRadius: 999,
              background: playing ? "rgba(0,0,0,0.5)" : "var(--gold)",
              border: playing ? "1px solid rgba(255,255,255,0.2)" : "none",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
              boxShadow: playing ? "none" : "0 0 0 8px rgba(245,200,0,0.15), 0 0 0 16px rgba(245,200,0,0.06)",
            }} onClick={() => setPlaying(p => !p)}>
              {playing ? <Icon.Pause size={26} color="#fff"/> : <Icon.Play size={28} color="#0A0A0A" />}
            </div>

            {/* control bar */}
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "16px 18px 14px", background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))" }}>
              <div style={{ height: 3, background: "rgba(255,255,255,0.15)", borderRadius: 2, overflow: "hidden", marginBottom: 12, position: "relative" }}>
                <div style={{ width: "32%", height: "100%", background: "var(--gold)" }}/>
                <div style={{ position: "absolute", left: "32%", top: "50%", transform: "translate(-50%, -50%)", width: 12, height: 12, borderRadius: 999, background: "var(--gold)", boxShadow: "0 0 0 4px rgba(245,200,0,0.25)" }}/>
                {/* chapter markers */}
                {[12, 28, 55, 78].map(p => (
                  <div key={p} style={{ position: "absolute", left: `${p}%`, top: 0, width: 1, height: "100%", background: "rgba(255,255,255,0.4)" }}/>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "rgba(255,255,255,0.85)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Icon.Play size={14} color="#fff" />
                  <Icon.Volume size={16} color="#fff" />
                  <span className="mono" style={{ fontSize: 11 }}>06:12 / 18:30</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 11 }}>
                  <span className="mono" style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>VF · ST FR <Icon.ChevronDown size={11} color="rgba(255,255,255,0.7)"/></span>
                  <span className="mono" style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>1.0×</span>
                  <span className="mono" style={{ display: "inline-flex", alignItems: "center", gap: 3, color: "var(--gold)" }}>1080p</span>
                  <Icon.Maximize size={14} color="#fff"/>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginTop: 24, marginBottom: 18, padding: 4, border: "1px solid var(--hairline)", borderRadius: 8, background: "rgba(255,255,255,0.015)", width: "fit-content" }}>
            {[
              { id: "Leçons", count: 8 },
              { id: "Notes", count: 12 },
              { id: "Q&R", count: 23 },
              { id: "Ressources", count: 5 },
            ].map(t => (
              <div key={t.id} onClick={() => setTab(t.id)} style={{
                padding: "7px 14px", cursor: "pointer", fontSize: 13, fontWeight: 500,
                color: tab === t.id ? "#0A0A0A" : "var(--text-2)",
                background: tab === t.id ? "var(--gold)" : "transparent",
                borderRadius: 5,
                display: "inline-flex", alignItems: "center", gap: 6,
                transition: "all 0.15s",
              }}>
                {t.id} <span className="mono" style={{ fontSize: 10, opacity: 0.7 }}>{t.count}</span>
              </div>
            ))}
          </div>

          {tab === "Leçons" && (
            <div>
              {chapters.map((ch, ci) => (
                <div key={ci} style={{ marginBottom: 8, border: "1px solid var(--hairline)", borderRadius: 8, overflow: "hidden", background: "var(--card)" }}>
                  <div onClick={() => setOpenChapter(openChapter === ci ? -1 : ci)} style={{ padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                      <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>CH {String(ci + 1).padStart(2, "0")}</span>
                      <span style={{ fontFamily: "Space Grotesk", fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em" }}>{ch.title}</span>
                      <span className="tag mono">{ch.lessons.length} LEÇONS · {ch.duration}</span>
                    </div>
                    <span style={{ transform: openChapter === ci ? "rotate(180deg)" : "none", transition: "transform 0.2s", color: "var(--text-3)" }}>
                      <Icon.ChevronDown size={14} color="var(--text-3)"/>
                    </span>
                  </div>
                  {openChapter === ci && (
                    <div style={{ borderTop: "1px solid var(--hairline)" }}>
                      {ch.lessons.map((l, li) => {
                        const isCurrent = l.state === "current";
                        return (
                          <div key={li} style={{
                            padding: "12px 18px 12px 50px",
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            borderTop: li > 0 ? "1px solid var(--hairline)" : "none",
                            background: isCurrent ? "rgba(245,200,0,0.05)" : "transparent",
                            color: l.state === "locked" ? "var(--text-4)" : "var(--text-2)",
                            cursor: "pointer",
                          }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                              {l.state === "done" && <Icon.Check size={13} color="var(--gold)" />}
                              {l.state === "current" && <span style={{ width: 14, height: 14, background: "var(--gold)", borderRadius: 2, display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon.Play size={8} color="#0A0A0A" /></span>}
                              {l.state === "locked" && <Icon.Lock size={12} color="var(--text-4)" />}
                              {l.state === "todo" && <span style={{ width: 12, height: 12, borderRadius: 999, border: "1.5px solid var(--text-4)" }}/>}
                              <span style={{ fontSize: 13, color: isCurrent ? "#fff" : (l.state === "locked" ? "var(--text-4)" : "var(--text-2)"), fontWeight: isCurrent ? 500 : 400 }}>
                                {l.name}
                              </span>
                              {isCurrent && <span className="tag tag-gold" style={{ padding: "1px 6px", fontSize: 9 }}>EN COURS</span>}
                            </div>
                            <span className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>{l.dur}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {tab === "Notes" && (
            <div className="surface" style={{ padding: 18 }}>
              <div className="overline" style={{ marginBottom: 8, color: "var(--gold)" }}>06:12 — Note</div>
              <div style={{ color: "#fff", fontSize: 14, marginBottom: 6, fontWeight: 500 }}>"L'Afrique est un continent de marchés, pas un seul marché."</div>
              <div style={{ color: "var(--text-2)", fontSize: 13 }}>Penser local d'abord. Scaler en archipel, jamais en bloc.</div>
            </div>
          )}
          {tab === "Q&R" && (
            <div className="surface" style={{ padding: 18, color: "var(--text-2)", fontSize: 13 }}>
              23 questions de la communauté. Soyez le premier à répondre.
            </div>
          )}
          {tab === "Ressources" && (
            <div className="surface" style={{ padding: 18, color: "var(--text-2)", fontSize: 13 }}>
              Slides PDF, modèles Excel et lectures recommandées.
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div style={{ position: "sticky", top: 16, display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="surface brackets" style={{ padding: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <Avatar initials="LZ" size={48} ring />
              <div>
                <div style={{ fontSize: 15, color: "#fff", fontWeight: 600 }}>Lionel Zinsou</div>
                <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", letterSpacing: "0.06em" }}>EX-PREMIER MINISTRE · BÉNIN</div>
              </div>
              <button className="btn btn-ghost btn-sm" style={{ marginLeft: "auto" }}>Suivre</button>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18, padding: "16px 0", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}>
              <ProgressRing percent={42} size={72} />
              <div>
                <div style={{ fontSize: 12, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>Progression</div>
                <div className="ic-h" style={{ fontSize: 20, fontWeight: 700 }}>10 / 24 leçons</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2 }}>3H 24MIN RESTANTES</div>
              </div>
            </div>

            <button className="btn btn-gold" style={{ width: "100%", padding: "12px 16px", marginBottom: 10 }}>
              Continuer la leçon <Icon.ArrowRight size={13} color="#0A0A0A"/>
            </button>
            <button className="btn btn-ghost" style={{ width: "100%", padding: "10px 16px" }}>
              Passer l'examen final
            </button>
          </div>

          <div className="surface" style={{ padding: 18 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <span className="overline">Aperçu certificat</span>
              <span className="mono" style={{ fontSize: 10, color: "var(--text-3)" }}>VERROUILLÉ · 58%</span>
            </div>
            <CertificatePreview />
          </div>

          <div className="surface">
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 16 }}>
              <span style={{ width: 36, height: 36, borderRadius: 6, background: "rgba(245,200,0,0.1)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <Icon.Globe size={16} color="var(--gold)"/>
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, color: "#fff", fontWeight: 500 }}>Session live mardi 19h</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--text-3)" }}>Q&R AVEC LIONEL · 60 PLACES</div>
              </div>
              <Icon.ArrowUpRight size={14} color="var(--gold)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressRing({ percent = 42, size = 72 }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--hairline)" strokeWidth="3"/>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--gold)" strokeWidth="3"
          strokeDasharray={circ} strokeDashoffset={circ * (1 - percent / 100)} strokeLinecap="round"/>
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 16, color: "#fff" }}>
        {percent}<span style={{ fontSize: 10, color: "var(--text-3)" }}>%</span>
      </div>
    </div>
  );
}

function CertificatePreview() {
  return (
    <div style={{ border: "1px solid var(--hairline-2)", borderRadius: 6, padding: 14, background: "linear-gradient(135deg, #1a1a1a, #161616)", position: "relative", aspectRatio: "1.55 / 1", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, transparent 0, transparent 8px, rgba(245,200,0,0.03) 8px, rgba(245,200,0,0.03) 9px)" }}/>
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <Logo size={11} />
          <span className="mono" style={{ fontSize: 8, color: "var(--text-3)" }}>IC-2026-0481</span>
        </div>
        <div style={{ height: 1, background: "var(--hairline)", marginBottom: 10 }}/>
        <div style={{ fontSize: 8, color: "var(--gold)", letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: "JetBrains Mono", marginBottom: 4 }}>Certificat de réussite</div>
        <div style={{ fontSize: 12, fontFamily: "Space Grotesk", fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
          Construire une entreprise<br/>panafricaine.
        </div>
      </div>
    </div>
  );
}

window.CoursePage = CoursePage;
