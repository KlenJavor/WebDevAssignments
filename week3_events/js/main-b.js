"use strict";
const main = document.querySelector("main");
const html = `<article>
                <header>
                    <h2>Article header 2</h2>
                </header>
                <figure>
                    <img src="http://placekitten.com/322/160" alt="title">
                    <figcaption>Caption 2</figcaption>
                </figure>
                <p>Here is some more text. Here is some text. Here is some text. Here is some text.</p>
            </article>`;
            
main.innerHTML += html;

// when main element is clicked, og 'hello to console
main.addEventListener("click", () => {
  console.log("hello");
});

// when main element is clickes, log event object to console
const image = document.getElementsByTagName("img")[1];
image.addEventListener("click", () => {
  console.log(image);
});

// when main element is clickes, log event object to console
document.images("click", (evt) => {
  console.log(evt.currentTarget.querySelector);
});