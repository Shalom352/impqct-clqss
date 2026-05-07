# ImpactClass Navigation Site — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Créer `site.html`, point d'entrée d'un vrai site navigable reliant les 5 écrans ImpactClass via un routeur React hash-based — sans toucher au canvas design existant (`ImpactClass.html`).

**Architecture:** Un `RouterCtx` React avec valeur par défaut no-op (compatibilité canvas), synchronisé sur `window.location.hash`. `router.jsx` est chargé en premier, expose `useRouter()` + `Router`. Les composants existants sont modifiés minimalement pour appeler `useRouter().navigate(page)` sur les boutons clés.

**Tech Stack:** React 18 (UMD), Babel Standalone, HTML/CSS vanilla, pas de bundler.

---

## Fichiers

| Fichier | Action | Rôle |
|---|---|---|
| `project/router.jsx` | **Créer** | RouterCtx, `useRouter()`, `Router` |
| `project/shared.jsx` | **Modifier** | Navbar avec navigation |
| `project/screens/landing.jsx` | **Modifier** | CTAs branchés |
| `project/screens/catalogue.jsx` | **Modifier** | Clic CourseCard branché |
| `project/screens/pricing.jsx` | **Modifier** | CTAs PlanCard branchés |
| `project/screens/dashboard.jsx` | **Modifier** | Boutons "Reprendre" / "Catalogue" / ContinueCard |
| `project/site.html` | **Créer** | Point d'entrée site navigable |

---

## Task 1 : Créer router.jsx

**Files:**
- Create: `project/router.jsx`

- [ ] **Créer `project/router.jsx` avec le contenu complet suivant :**

```jsx
// router.jsx — RouterCtx + useRouter + Router (hash sync)
// Valeur par défaut no-op : les composants fonctionnent sans Router (canvas design).
const RouterCtx = React.createContext({ page: 'landing', navigate: () => {} });

function useRouter() {
  return React.useContext(RouterCtx);
}

function Router({ children }) {
  const getPage = () => window.location.hash.slice(1) || 'landing';
  const [page, setPage] = React.useState(getPage);

  React.useEffect(() => {
    const onHash = () => setPage(getPage());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = React.useCallback((p) => {
    window.location.hash = p;
    setPage(p);
  }, []);

  return (
    <RouterCtx.Provider value={{ page, navigate }}>
      {children}
    </RouterCtx.Provider>
  );
}

Object.assign(window, { useRouter, Router });
```

- [ ] **Vérifier :** ouvrir `ImpactClass.html` dans le navigateur (il ne charge PAS `router.jsx`) — le canvas doit s'afficher normalement sans erreur console. Les composants utilisent le contexte no-op par défaut.

---

## Task 2 : Modifier shared.jsx — Navbar navigable

**Files:**
- Modify: `project/shared.jsx`

La Navbar actuelle a des `<a>` sans onClick et des boutons sans action. On ajoute `useRouter()` et on branche chaque lien.

- [ ] **Remplacer la fonction `Navbar` dans `project/shared.jsx` par :**

```jsx
function Navbar({ active = "" }) {
  const { navigate } = useRouter();
  const links = [
    { id: "cours",        label: "Cours",         route: "catalogue" },
    { id: "instructeurs", label: "Instructeurs",   route: "catalogue" },
    { id: "tarifs",       label: "Tarifs",         route: "pricing"   },
    { id: "blog",         label: "Blog",           route: "landing"   },
  ];
  return (
    <div className="nav">
      <div className="nav-left">
        <span style={{ cursor: "pointer" }} onClick={() => navigate("landing")}>
          <Logo />
        </span>
        <span className="tag" style={{ padding: "3px 6px", fontSize: 9 }}>v2.4 · 2026</span>
      </div>
      <nav className="nav-mid">
        {links.map(l => (
          <a
            key={l.id}
            className={active === l.id ? "active" : ""}
            onClick={() => navigate(l.route)}
            style={{ cursor: "pointer" }}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav-right">
        <button className="btn btn-ghost btn-sm" onClick={() => navigate("dashboard")}>
          Se connecter
        </button>
        <button className="btn btn-ghost-gold btn-sm" onClick={() => navigate("pricing")}>
          Essayer 7j gratuits
          <span className="kbd" style={{ background: "rgba(245,200,0,0.15)", border: "1px solid rgba(245,200,0,0.3)", color: "var(--gold)" }}>⌘ E</span>
        </button>
      </div>
    </div>
  );
}
```

---

## Task 3 : Modifier landing.jsx — CTAs branchés

**Files:**
- Modify: `project/screens/landing.jsx`

- [ ] **Dans la fonction `LandingHero`, ajouter `useRouter()` et brancher les 3 éléments cliquables.**

Remplacer l'ouverture de `LandingHero` :

```jsx
function LandingHero() {
  const { navigate } = useRouter();
  return (
```

- [ ] **Brancher l'annonce bar — trouver ce span et ajouter `onClick` :**

```jsx
<span
  style={{ color: "var(--gold)", display: "inline-flex", alignItems: "center", gap: 4, cursor: "pointer", fontWeight: 500 }}
  onClick={() => navigate("catalogue")}
>
  Voir le programme <Icon.ArrowRight size={11} color="var(--gold)" />
</span>
```

- [ ] **Brancher le bouton "Découvrir les cours" :**

```jsx
<button className="btn btn-gold btn-lg" onClick={() => navigate("catalogue")}>
  Découvrir les cours
  <Icon.ArrowRight size={14} color="#0A0A0A" />
</button>
```

- [ ] **Brancher le bouton "Voir les instructeurs" :**

```jsx
<button className="btn btn-ghost btn-lg" onClick={() => navigate("catalogue")}>
  <Icon.Play size={12} color="#fff" />
  Voir les instructeurs
</button>
```

---

## Task 4 : Modifier catalogue.jsx — clic CourseCard

**Files:**
- Modify: `project/screens/catalogue.jsx`

- [ ] **Dans la fonction `CourseCard`, ajouter `useRouter()` et un `onClick` sur le div racine.**

Remplacer l'ouverture de `CourseCard` :

```jsx
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
```

Le reste de `CourseCard` reste identique.

---

## Task 5 : Modifier pricing.jsx — CTAs PlanCard

**Files:**
- Modify: `project/screens/pricing.jsx`

- [ ] **Dans la fonction `PlanCard`, ajouter `useRouter()` et un `onClick` sur le bouton CTA.**

Remplacer l'ouverture de `PlanCard` :

```jsx
function PlanCard({ name, tagline, plan, features, cta, ctaType, highlighted, saving }) {
  const { navigate } = useRouter();
```

- [ ] **Trouver le bouton CTA dans `PlanCard` et ajouter `onClick` :**

```jsx
<button
  className={"btn " + (ctaType === "gold" ? "btn-gold" : "btn-ghost")}
  style={{ width: "100%", padding: "12px 16px", margin: "20px 0 24px" }}
  onClick={() => navigate("dashboard")}
>
  {cta} {ctaType === "gold" && <Icon.ArrowRight size={13} color="#0A0A0A"/>}
</button>
```

---

## Task 6 : Modifier dashboard.jsx — boutons de navigation

**Files:**
- Modify: `project/screens/dashboard.jsx`

Trois points à brancher : bouton "Reprendre la leçon" (header), bouton "Catalogue", et les `ContinueCard`.

- [ ] **Dans la fonction `Dashboard`, ajouter `useRouter()` :**

```jsx
function Dashboard() {
  const [active, setActive] = React.useState("home");
  const { navigate } = useRouter();
```

- [ ] **Brancher le bouton "Catalogue" dans le greeting strip :**

```jsx
<button className="btn btn-ghost btn-sm" onClick={() => navigate("catalogue")}>Catalogue</button>
```

- [ ] **Brancher le bouton "Reprendre la leçon" dans le greeting strip :**

```jsx
<button className="btn btn-gold btn-sm" onClick={() => navigate("course")}>
  Reprendre la leçon <Icon.ArrowRight size={11} color="#0A0A0A"/>
</button>
```

- [ ] **Dans la fonction `ResumeCard`, ajouter `useRouter()` et `onClick` sur le bouton "Reprendre" :**

```jsx
function ResumeCard() {
  const { navigate } = useRouter();
  return (
    // ... (garder le reste identique jusqu'au bouton)
```

Trouver le bouton "Reprendre" dans `ResumeCard` et ajouter `onClick` :

```jsx
<button className="btn btn-gold btn-sm" style={{ padding: "9px 14px" }} onClick={() => navigate("course")}>
  Reprendre <Icon.ArrowRight size={12} color="#0A0A0A"/>
</button>
```

- [ ] **Dans la fonction `ContinueCard`, ajouter `useRouter()` et `onClick` sur le div racine :**

```jsx
function ContinueCard({ instructor, initials, title, chapter, remaining, progress }) {
  const [hover, setHover] = React.useState(false);
  const { navigate } = useRouter();
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate("course")}
      style={{
        background: "var(--card)",
        border: "1px solid " + (hover ? "rgba(245,200,0,0.45)" : "var(--hairline)"),
        borderRadius: 8, padding: 16, display: "flex", gap: 14, cursor: "pointer", transition: "0.15s",
      }}
    >
```

Le reste de `ContinueCard` reste identique.

---

## Task 7 : Créer site.html

**Files:**
- Create: `project/site.html`

- [ ] **Créer `project/site.html` avec le contenu complet suivant :**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>ImpactClass</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css" />
<style>
  html, body, #root { height: 100%; margin: 0; padding: 0; overflow: hidden; }
</style>
</head>
<body>

<div id="root"></div>

<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>

<!-- router AVANT shared pour que RouterCtx soit disponible dans Navbar -->
<script type="text/babel" src="router.jsx"></script>
<script type="text/babel" src="screens/shared.jsx"></script>
<script type="text/babel" src="screens/landing.jsx"></script>
<script type="text/babel" src="screens/catalogue.jsx"></script>
<script type="text/babel" src="screens/course.jsx"></script>
<script type="text/babel" src="screens/pricing.jsx"></script>
<script type="text/babel" src="screens/dashboard.jsx"></script>

<script type="text/babel">
function App() {
  const { page } = useRouter();
  const pages = {
    landing:   <LandingHero />,
    catalogue: <Catalogue />,
    course:    <CoursePage />,
    pricing:   <Pricing />,
    dashboard: <Dashboard />,
  };
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {pages[page] || <LandingHero />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
</script>

</body>
</html>
```

---

## Task 8 : Vérification manuelle complète

- [ ] **Ouvrir `site.html` dans le navigateur** (via un serveur local ou directement). La Landing Hero doit s'afficher. L'URL doit contenir `#landing`.

- [ ] **Tester la Navbar :**
  - Cliquer Logo → Landing
  - Cliquer "Cours" → Catalogue (URL = `#catalogue`)
  - Cliquer "Tarifs" → Pricing (URL = `#pricing`)
  - Cliquer "Se connecter" → Dashboard (URL = `#dashboard`)
  - Cliquer "Essayer 7j gratuits" → Pricing

- [ ] **Tester Landing → Catalogue :**
  - Cliquer "Voir le programme" dans la barre d'annonce → Catalogue
  - Depuis Landing, cliquer "Découvrir les cours" → Catalogue
  - Depuis Landing, cliquer "Voir les instructeurs" → Catalogue

- [ ] **Tester Catalogue → CoursePage :**
  - Cliquer n'importe quelle card → CoursePage (URL = `#course`)

- [ ] **Tester Pricing → Dashboard :**
  - Cliquer "Commencer" (Standard) → Dashboard
  - Cliquer "Commencer l'essai gratuit" (Pro) → Dashboard

- [ ] **Tester Dashboard → navigation :**
  - Cliquer "Catalogue" → Catalogue
  - Cliquer "Reprendre la leçon" (header) → CoursePage
  - Cliquer une ContinueCard → CoursePage

- [ ] **Tester le bouton Retour du navigateur :** naviguer Landing → Catalogue → Course, puis appuyer Retour deux fois → revenir à Catalogue puis Landing.

- [ ] **Vérifier `ImpactClass.html` toujours intact :** ouvrir le canvas design, vérifier qu'aucune erreur console n'apparaît et que tous les artboards s'affichent correctement.
