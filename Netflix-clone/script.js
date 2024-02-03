window.addEventListener("scroll", function () {
    var nav = document.querySelector(".nav"); // Corrected 'document'
    nav.classList.toggle("active", window.scrollY > 0);
});

//api key from TMDB

const api = "api_key=fa6139f4f3e8908974c7d16bcd5078c9";

// base url of the site

const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

// request for movies data

const requests = {

    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

//used to truncate the string

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// banner

fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())

    .then((data) => {
        console.log(data.results);
        //with every refresh movie will change 

        const setMovie =
            data.results[Math.floor(Math.random() * data.results.length - 1)];

        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner__title");
        var banner__desc = document.getElementById("banner__description");

        banner.style.backgroundImage =
            "url(" + banner_url + setMovie.backdrop_path + ")";
        banner__desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
    });

// Netflix Original rows

fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row__title";
        title.innerHTML = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__largePosters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s2 = movie.name.replace(/\s+/g, "");

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


// Top Rated

fetch(requests.fetchTrending)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "Top Rated";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

//action movies section

fetch(requests.fetchActionMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "Action Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row___poster";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

// Comedy movies section

fetch(requests.fetchComedyMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "Comedy Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

//horror movies section

fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "Horrer Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

//Romance Movie Section

fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "Romance Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

//Documentaries

fetch(requests.fetchDocumentaries)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerHTML = "Documentaries";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            console.log(movie);

            const poster = document.createElement("img");
            poster.className = "row__poster";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.backdrop_path;
            row_posters.appendChild(poster);
        });
    });

