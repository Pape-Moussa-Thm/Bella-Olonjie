const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.querySelector("#search");

// Fonction pour afficher les films provenant de l'API
function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img src="${IMGPATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;

    main.appendChild(movieEl);

    // Ajout des événements de survol sur chaque film
    const overviewEl = movieEl.querySelector(".overview");
    movieEl.addEventListener("mouseover", () => {
      overviewEl.style.display = "block";
    });
    movieEl.addEventListener("mouseout", () => {
      overviewEl.style.display = "none";
    });
  });
}

// Fonction pour obtenir la classe de style en fonction de la note du film
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

// Chargement initial des films
getMovies(APIURL);

// Fonction pour obtenir les films depuis l'API
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

// Écouteur d'événements pour le champ de recherche
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCHAPI + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});