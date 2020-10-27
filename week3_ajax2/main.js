"use strict";
const form = document.querySelector("#search-form");
const input = document.querySelector("[name=search-field]");

const doFetch = async () => {
  const response = await fetch("http://api.tvmaze.com/search/shows?q=girls");
  const data = await response.json();
  console.log(data);
};

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(input.value);
  doFetch();
});
