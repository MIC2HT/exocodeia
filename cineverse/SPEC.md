# Spécification du projet — CinéVerse

## 1. Objectif
Proposer une application web de découverte de films où chaque film est présenté sous forme de carte, simple à parcourir et agréable visuellement.

## 2. Public cible
Cinéphiles occasionnels souhaitant parcourir rapidement une sélection et choisir un film.

## 3. Fonctionnalités (MVP)
| # | Fonctionnalité | Priorité |
|---|----------------|----------|
| F1 | Grille de cartes (affiche, titre, année, genres, note) | Haute |
| F2 | Recherche par titre / réalisateur | Haute |
| F3 | Filtre par genre | Haute |
| F4 | Tri par note, année, titre | Moyenne |
| F5 | Fiche détaillée en modale | Haute |
| F6 | Favoris persistants (localStorage) | Moyenne |

## 4. Exigences non fonctionnelles
- Responsive (320 px → 1920 px)
- Accessible : navigation clavier, `aria-label`, contrastes, `prefers-reduced-motion`
- Sans dépendance ni étape de build ; hébergement statique
- Chargement rapide (< 100 Ko hors polices)

## 5. Modèle de données
```
Movie { id, title, year, director, genres[], rating, duration, emoji, colors[2], synopsis }
```

## 6. Architecture
Application monopage statique : `index.html` (structure), `style.css` (thème), `app.js` (données + état + rendu).

## 7. Livrables
1. Code source sur GitHub
2. README.md et SPEC.md générés avec l'IA
3. Déploiement GitHub Pages
4. Soumission : lien du dépôt + URL du site

## 8. Évolutions possibles
API TMDB, page favoris, mode clair, bandes-annonces.
