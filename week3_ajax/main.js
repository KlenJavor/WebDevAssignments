"use strict";
const main = document.querySelector("main");
const form = document.querySelector("#search-form");
const input = document.querySelector("[name=search-field]");
const state = document.querySelector("h3");

let name;
let summary;
let image;
let genres;
let link;

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(input.value);
  doFetch3();
});

// async/await
const doFetch1 = async () => {
  state.innerText = "Loading movies ...";
  try {
    const res = await fetch(
      `http://api.tvmaze.com/search/shows?q=${input.value}`
    );
    if (!res.ok) throw new Error("Data not fetched!");
    const data = await res.json();
    state.innerText = "";
    publish(data);
  } catch (err) {
    console.warn(err);
  }
};

// fetch/promises
function doFetch2() {
  state.innerText = "Loading movies ...";
  fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`)
    .then((response) => {
      if (response.status !== 200) throw new Error(response.status);
      return response.json();
    })
    .then((data) => {
      state.innerText = "";
      publish(data);
      console.log("Data loaded");
    })
    .catch((error) => {
      console.error("Error when loading: ", error);
    });
}

// ajax
function doFetch3() {
  state.innerText = "Loading movies ...";
  const ajax = new XMLHttpRequest();
  ajax.open("GET", `http://api.tvmaze.com/search/shows?q=${input.value}`, true);
  ajax.addEventListener("load", (e) => {
    if (e.target.status !== 200) {
      console.log("Error!", e.target.status);
      return;
    }
    console.log(ajax);
    state.innerText = "";
    publish(JSON.parse(ajax.responseText));
  });
  ajax.send();
  console.log("got here");
}

function publish(data) {
  data.forEach((movie) => {
    !movie.show.image
      ? (image = "default.png")
      : (image = movie.show.image.medium);
    !movie.show.summary
      ? (summary = "Summary not available")
      : (summary = movie.show.summary);
    !movie.show.name
      ? (name = "Show name not available")
      : (name = movie.show.name);
    !movie.show.genres ? (genres = "") : (genres = movie.show.genres);
    !movie.show.url ? (link = "") : (link = movie.show.url);

    const html = `<hr>
        <article>
            <header>
                <h2>${movie.show.name}</h2>
                <h4>Genres: ${genres}</h4>
            </header>
            <figure>
                <img src="${image}" alt=${movie.show.name}>
            </figure>
            <p>${movie.show.summary}</p>
            <a href=${link}>${link}</>
        </article>`;
    main.innerHTML += html;
  });
}
