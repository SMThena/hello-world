# Hello World

Projet minimal en HTML / CSS / JavaScript : un « Hello World » animé.

## Structure

```
hello-world/
├── index.html   # Structure de la page
├── style.css    # Styles et animations CSS (fond dégradé, apparition des lettres)
├── script.js    # Animations JS (lettres une par une, vague, relance au clic)
└── README.md
```

## Prérequis

Aucun outil obligatoire : un navigateur web récent suffit (Chrome, Firefox, Edge, Safari).

Optionnel (pour un serveur local) :
- [Node.js](https://nodejs.org/) **ou**
- [Python 3](https://www.python.org/) **ou**
- l'extension VS Code **Live Server**

## Setup

```bash
git clone <url-du-repo>
cd hello-world
```

Il n'y a aucune dépendance à installer.

## Lancer le projet

### Option 1 — Ouvrir directement le fichier
Double-clique sur `index.html`, ou :

```bash
# Windows
start index.html
# macOS
open index.html
# Linux
xdg-open index.html
```

### Option 2 — Serveur local avec Node.js
```bash
npx serve .
```
Puis ouvre l'URL affichée (par défaut http://localhost:3000).

### Option 3 — Serveur local avec Python
```bash
python -m http.server 8000
```
Puis ouvre http://localhost:8000.

### Option 4 — VS Code Live Server
Installe l'extension **Live Server**, clic droit sur `index.html` → **Open with Live Server**.
La page se recharge automatiquement à chaque modification.

## Fonctionnalités

- Fond en dégradé animé (CSS)
- Apparition des lettres une par une avec effet rebond (JS + CSS)
- Vague sur le texte toutes les 4 secondes (Web Animations API)
- Survol d'une lettre : elle change de couleur et se soulève
- Clic sur le titre : relance l'animation
