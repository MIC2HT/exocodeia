// CinéVerse — logique de l'application (JavaScript vanilla)

const MOVIES = [
  { id: 1, title: "Inception", year: 2010, director: "Christopher Nolan", genres: ["Science-fiction", "Thriller"], rating: 8.8, duration: 148, emoji: "🌀", colors: ["#1d2b64", "#f8cdda"], synopsis: "Un voleur spécialisé dans l'extraction de secrets au cœur des rêves reçoit une mission inverse : implanter une idée dans l'esprit d'une cible." },
  { id: 2, title: "Le Voyage de Chihiro", year: 2001, director: "Hayao Miyazaki", genres: ["Animation", "Fantastique"], rating: 8.6, duration: 125, emoji: "🏮", colors: ["#ff9966", "#ff5e62"], synopsis: "Une fillette se retrouve piégée dans un monde d'esprits et doit travailler dans des bains publics pour sauver ses parents." },
  { id: 3, title: "Parasite", year: 2019, director: "Bong Joon-ho", genres: ["Thriller", "Drame"], rating: 8.5, duration: 132, emoji: "🪜", colors: ["#134e5e", "#71b280"], synopsis: "Une famille pauvre s'infiltre peu à peu dans le quotidien d'une riche famille, jusqu'à ce que tout bascule." },
  { id: 4, title: "Interstellar", year: 2014, director: "Christopher Nolan", genres: ["Science-fiction", "Drame"], rating: 8.7, duration: 169, emoji: "🪐", colors: ["#0f2027", "#2c5364"], synopsis: "Alors que la Terre se meurt, un groupe d'explorateurs traverse un trou de ver pour chercher un nouveau foyer à l'humanité." },
  { id: 5, title: "Amélie Poulain", year: 2001, director: "Jean-Pierre Jeunet", genres: ["Comédie", "Romance"], rating: 8.3, duration: 122, emoji: "🍓", colors: ["#cb2d3e", "#ef473a"], synopsis: "Une jeune serveuse parisienne décide d'améliorer en secret la vie des gens qui l'entourent." },
  { id: 6, title: "Mad Max : Fury Road", year: 2015, director: "George Miller", genres: ["Action", "Science-fiction"], rating: 8.1, duration: 120, emoji: "🔥", colors: ["#f12711", "#f5af19"], synopsis: "Dans un désert post-apocalyptique, une guerrière et un fugitif tentent d'échapper à un tyran lors d'une course-poursuite effrénée." },
  { id: 7, title: "La La Land", year: 2016, director: "Damien Chazelle", genres: ["Romance", "Comédie"], rating: 8.0, duration: 128, emoji: "🎹", colors: ["#8e2de2", "#ff6ec4"], synopsis: "Une actrice en devenir et un pianiste de jazz tombent amoureux à Los Angeles, entre rêves et sacrifices." },
  { id: 8, title: "Le Parrain", year: 1972, director: "Francis Ford Coppola", genres: ["Drame", "Policier"], rating: 9.2, duration: 175, emoji: "🌹", colors: ["#232526", "#7b4b2a"], synopsis: "Le patriarche d'une dynastie mafieuse new-yorkaise transmet son empire à son fils réticent." },
  { id: 9, title: "Coco", year: 2017, director: "Lee Unkrich", genres: ["Animation", "Fantastique"], rating: 8.4, duration: 105, emoji: "💀", colors: ["#f7971e", "#8e2de2"], synopsis: "Miguel, passionné de musique, voyage dans le Pays des Morts pour percer le secret de sa famille." },
  { id: 10, title: "Blade Runner 2049", year: 2017, director: "Denis Villeneuve", genres: ["Science-fiction", "Thriller"], rating: 8.0, duration: 164, emoji: "🌆", colors: ["#ff512f", "#1a2a6c"], synopsis: "Un jeune officier découvre un secret enfoui qui pourrait plonger la société dans le chaos." },
  { id: 11, title: "Les Intouchables", year: 2011, director: "Olivier Nakache & Éric Toledano", genres: ["Comédie", "Drame"], rating: 8.5, duration: 112, emoji: "🤝", colors: ["#2193b0", "#6dd5ed"], synopsis: "Un riche tétraplégique engage comme aide à domicile un jeune homme des cités : une amitié improbable naît." },
  { id: 12, title: "Gladiator", year: 2000, director: "Ridley Scott", genres: ["Action", "Drame"], rating: 8.5, duration: 155, emoji: "⚔️", colors: ["#614385", "#516395"], synopsis: "Trahi par l'empereur, un général romain devient gladiateur et jure de venger sa famille." }
];

// Images : placez vos fichiers dans le dossier "images/" avec exactement ces noms.
// Changez l'extension ici si besoin (.jpg, .png, .webp).
const IMAGES = {
  1: "inception.jpg",
  2: "chihiro.jpg",
  3: "parasite.jpg",
  4: "interstellar.jpg",
  5: "amelie.jpg",
  6: "mad-max.jpg",
  7: "la-la-land.jpg",
  8: "le-parrain.jpg",
  9: "coco.jpg",
  10: "blade-runner-2049.jpg",
  11: "les-intouchables.jpg",
  12: "gladiator.jpg"
};
MOVIES.forEach((m) => (m.image = `images/${IMAGES[m.id]}`));

const $ = (s) => document.querySelector(s);
const grid = $("#grid"), chipsEl = $("#chips"), modal = $("#modal");

const state = { genre: "Tous", query: "", sort: "rating", favs: new Set(JSON.parse(localStorage.getItem("cv-favs") || "[]")) };

const genres = ["Tous", ...new Set(MOVIES.flatMap((m) => m.genres))];

function posterHTML(m) {
  return `<div class="poster" style="background:linear-gradient(160deg, ${m.colors[0]}, ${m.colors[1]})">
    <img class="poster-img" src="${m.image}" alt="Affiche de ${m.title}" loading="lazy"
      onload="this.parentElement.classList.add('has-img')" onerror="this.remove()">
    <span class="poster-emoji">${m.emoji}</span>
    <span class="poster-title">${m.title}</span>
  </div>`;
}

function renderChips() {
  chipsEl.innerHTML = genres.map((g) => `<button class="chip ${g === state.genre ? "active" : ""}" data-g="${g}">${g}</button>`).join("");
}

function filtered() {
  const q = state.query.trim().toLowerCase();
  return MOVIES
    .filter((m) => state.genre === "Tous" || m.genres.includes(state.genre))
    .filter((m) => !q || (m.title + m.director).toLowerCase().includes(q))
    .sort((a, b) => state.sort === "title" ? a.title.localeCompare(b.title, "fr") : state.sort === "year" ? b.year - a.year : b.rating - a.rating);
}

function renderGrid() {
  const list = filtered();
  grid.innerHTML = list.map((m, i) => `
    <button class="card" data-id="${m.id}" style="animation-delay:${i * 50}ms" aria-label="Ouvrir la fiche de ${m.title}">
      ${posterHTML(m)}
      <span class="rating">★ ${m.rating}</span>
      <div class="card-info">
        <h3>${m.title}${state.favs.has(m.id) ? " ♥" : ""}</h3>
        <p>${m.year} · ${m.genres.join(", ")}</p>
      </div>
    </button>`).join("");
  $("#empty").hidden = list.length > 0;
  $("#count").textContent = `${list.length} film${list.length > 1 ? "s" : ""}`;
}

function openModal(id) {
  const m = MOVIES.find((x) => x.id === id);
  $("#m-poster").innerHTML = posterHTML(m);
  $("#m-meta").textContent = `${m.year} · ${Math.floor(m.duration / 60)} h ${String(m.duration % 60).padStart(2, "0")} · ★ ${m.rating}/10`;
  $("#m-title").textContent = m.title;
  $("#m-dir").textContent = `Réalisé par ${m.director}`;
  $("#m-tags").innerHTML = m.genres.map((g) => `<span class="tag">${g}</span>`).join("");
  $("#m-syn").textContent = m.synopsis;
  const fav = $("#m-fav");
  const sync = () => (fav.textContent = state.favs.has(m.id) ? "♥ Dans vos favoris" : "♡ Ajouter aux favoris");
  sync();
  fav.onclick = () => {
    state.favs.has(m.id) ? state.favs.delete(m.id) : state.favs.add(m.id);
    localStorage.setItem("cv-favs", JSON.stringify([...state.favs]));
    sync(); renderGrid();
  };
  modal.showModal();
}

chipsEl.addEventListener("click", (e) => {
  const b = e.target.closest(".chip"); if (!b) return;
  state.genre = b.dataset.g; renderChips(); renderGrid();
});
$("#search").addEventListener("input", (e) => { state.query = e.target.value; renderGrid(); });
$("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderGrid(); });
grid.addEventListener("click", (e) => { const c = e.target.closest(".card"); if (c) openModal(+c.dataset.id); });
$("#close").addEventListener("click", () => modal.close());
$("#m-close2").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

renderChips();
renderGrid();
