"use strict";
const main = document.querySelector("main");

// <Header>
const heading = document.createElement("h2");
heading.innerHTML = "Article header";

const header = document.createElement("header");
header.appendChild(heading);

// <p>
const paragraph = document.createElement("p");
paragraph.innerHTML =
  "Here is some text. Here is some text. Here is some text. Here is some text.";

// <figure>
const img = document.createElement("img");
img.src = "http://placekitten.com/320/160";
img.alt = "title";

const caption = document.createElement("figcaption");
caption.innerHTML = "Caption";

const figure = document.createElement("figure");
figure.append(img, caption);

//<Article>
const article = document.createElement("article");
article.append(header, figure, paragraph);

main.appendChild(article);
