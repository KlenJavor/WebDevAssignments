"use strict";
const main = document.querySelector("main");

const heading = document.createElement("h2");
const header = document.createElement("header");
const paragraph = document.createElement("p");
const img = document.createElement("img");
const caption = document.createElement("figcaption");
const figure = document.createElement("figure");
const article = document.createElement("article");

heading.innerHTML = "Article header 2";
paragraph.innerHTML =
  "Here is some text. Here is some text. Here is some text. Here is some text.";
img.src = "http://placekitten.com/322/160";
img.alt = "title 2";
caption.innerHTML = "Caption 2";

header.appendChild(heading);
figure.append(img, caption);
article.append(header, figure, paragraph);
main.appendChild(article);