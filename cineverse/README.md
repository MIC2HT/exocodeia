# 🎬 CinéVerse — Application cinéma

Une application web élégante qui présente une sélection de films sous forme de **cartes** : recherche instantanée, filtres par genre, tri, fiche détaillée et favoris.

🔗 **Démo en ligne :** `https://VOTRE-NOM-UTILISATEUR.github.io/cineverse/`
📦 **Dépôt :** `https://github.com/VOTRE-NOM-UTILISATEUR/cineverse`

## ✨ Fonctionnalités

- Cartes de films avec affiches illustrées en CSS (dégradés, motifs, emoji) — aucune image protégée
- Recherche par titre ou réalisateur
- Filtres par genre et tri (note, année, titre)
- Fiche détaillée dans une modale (synopsis, durée, note, genres)
- Favoris sauvegardés dans le navigateur (`localStorage`)
- Design sombre, responsive (mobile → desktop), animations douces, respect de `prefers-reduced-motion`

## 🧱 Stack technique

HTML5 · CSS3 (variables, grid, `backdrop-filter`) · JavaScript vanilla (ES6+) · Google Fonts (Fraunces, Inter). Aucune dépendance, aucun build.

## 📁 Structure

```
├── index.html   # Structure de la page
├── style.css    # Thème et composants
├── app.js       # Données des films et logique
├── SPEC.md      # Spécification du projet
└── README.md
```

## 🚀 Lancer en local

```bash
git clone https://github.com/VOTRE-NOM-UTILISATEUR/cineverse.git
cd cineverse
# Ouvrez index.html dans le navigateur, ou :
python3 -m http.server 8000
```

## 🌍 Déploiement (GitHub Pages)

1. Poussez le code sur la branche `main`.
2. Dépôt → **Settings → Pages**.
3. *Source* : **Deploy from a branch** → branche `main`, dossier `/ (root)` → **Save**.
4. Après environ une minute, le site est disponible à l'URL de démo ci-dessus.

## 🤖 Utilisation de l'IA

Le design, le code et la documentation de ce projet ont été conçus avec l'assistance de Claude (Anthropic), puis relus et ajustés manuellement.

## 🔭 Pistes d'évolution

- Récupérer de vrais films via l'API TMDB
- Page des favoris et mode clair
- Bandes-annonces intégrées

## 📄 Licence

MIT
