const body = document.querySelector("body");
const h1 = document.createElement("h1");
const section = document.createElement("section");
const article = document.createElement("article");
const button = document.createElement("button");
const img1 = document.createElement("img");
const img2 = document.createElement("img");

let nuevoLink = document.createElement("link");
nuevoLink.rel = "stylesheet";
nuevoLink.href = "index.css";
document.head.appendChild(nuevoLink);

h1.textContent = "Title";
img1.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQZ3CsN-KABwSUsvCtmhyycyOEZWoMNU6Ug&s";
img2.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPqbQJUtmsncoxlBkqWr2rwlgk3MXBFEd4Q&s";
article.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic modi officia sit laboriosam voluptatem facilis! Reprehenderit laborum quisquam magnam eius culpa. kajshdjkashdujsakhbdksajbcjkfsabfajkbfsajkfbajksfcbjksafbasjkfbcasjkb fuineyufianchucaen.";
section.appendChild(img1);
section.appendChild(img2);
button.textContent = "Button";
body.appendChild(h1);
body.appendChild(section);
body.appendChild(article);
body.appendChild(button);