---
name: ImpactClass — Navigation inter-pages
description: Câblage de la navigation entre les 5 écrans du design ImpactClass en un site web navigable
type: design
date: 2026-04-30
---

## Objectif

Transformer les 5 maquettes ImpactClass (actuellement affichées sur un canvas Figma-like) en un site web navigable, sans toucher au canvas de design existant (`ImpactClass.html`).

## Architecture

### Fichiers créés / modifiés

| Fichier | Action | Rôle |
|---|---|---|
| `project/router.jsx` | Créer | RouterCtx, `useRouter()`, composant `Router` |
| `project/shared.jsx` | Modifier | Navbar branché sur `useRouter()` |
| `project/screens/landing.jsx` | Modifier | Boutons CTA branchés |
| `project/screens/catalogue.jsx` | Modifier | Clic CourseCard branché |
| `project/screens/pricing.jsx` | Modifier | Boutons CTA branchés |
| `project/screens/dashboard.jsx` | Modifier | Boutons "Reprendre" et "Catalogue" branchés |
| `project/site.html` | Créer | Point d'entrée du site navigable |

`ImpactClass.html`, `design-canvas.jsx` et `screens/course.jsx` ne sont **pas modifiés**.

### Router (router.jsx)

- `RouterCtx` avec valeur par défaut `{ page: 'landing', navigate: () => {} }` — permet aux composants de fonctionner sans contexte (dans le canvas design)
- `useRouter()` hook — accès au contexte depuis n'importe quel composant
- `Router` composant — synchronise `currentPage` avec `window.location.hash` ; écoute `hashchange` pour que le bouton Retour fonctionne
- `navigate(page)` — met à jour hash + état React simultanément

### Rendu dans site.html

```
Router
  └─ App
       └─ switch(page)
            ├─ 'landing'    → <LandingHero />
            ├─ 'catalogue'  → <Catalogue />
            ├─ 'course'     → <CoursePage />
            ├─ 'pricing'    → <Pricing />
            └─ 'dashboard'  → <Dashboard />
```

Chaque page occupe `100vw × 100vh`, overflow géré par chaque composant (déjà le cas).

## Liens câblés

### Navbar (toutes pages)
- Logo → `landing`
- "Cours" → `catalogue`
- "Instructeurs" → `catalogue` (pas de page dédiée)
- "Tarifs" → `pricing`
- "Blog" → `landing` (pas de page dédiée)
- "Se connecter" → `dashboard`
- "Essayer 7j gratuits" → `pricing`

### Landing
- Annonce bar "Voir le programme" → `catalogue`
- Bouton "Découvrir les cours" → `catalogue`
- Bouton "Voir les instructeurs" → `catalogue`

### Catalogue
- Clic sur `CourseCard` → `course`

### Pricing
- Bouton "Commencer" (Standard) → `dashboard`
- Bouton "Commencer l'essai gratuit" (Pro) → `dashboard`

### Dashboard
- Bouton "Catalogue" → `catalogue`
- Bouton "Reprendre la leçon" (header) → `course`
- Clic sur `ContinueCard` → `course`

## Compatibilité canvas design

Les composants utilisent `useRouter()` qui retourne un no-op par défaut quand aucun `Router` n'est présent. Les maquettes dans `ImpactClass.html` restent fonctionnelles et inchangées.

## Ordre de chargement dans site.html

```html
<script> react </script>
<script> react-dom </script>
<script> babel </script>
<script type="text/babel" src="router.jsx"></script>
<script type="text/babel" src="design-canvas.jsx"></script>
<script type="text/babel" src="screens/shared.jsx"></script>
<script type="text/babel" src="screens/landing.jsx"></script>
<script type="text/babel" src="screens/catalogue.jsx"></script>
<script type="text/babel" src="screens/course.jsx"></script>
<script type="text/babel" src="screens/pricing.jsx"></script>
<script type="text/babel" src="screens/dashboard.jsx"></script>
<script type="text/babel"> App + ReactDOM.createRoot </script>
```

`router.jsx` est chargé **avant** `shared.jsx` pour que `RouterCtx` soit disponible quand Navbar est défini.
