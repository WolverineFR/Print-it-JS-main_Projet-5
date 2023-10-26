const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

var arrow_left = document.querySelector(".arrow_left");
var arrow_right = document.querySelector(".arrow_right");

arrow_left.addEventListener("click", function (event) {
  console.log("Ca click à gauche");
});

arrow_right.addEventListener("click", function (event) {
  console.log("Ca click à droite");
});

const dotsContainer = document.querySelector(".dots");

slides.forEach((slide, index) => {
  // Créez une nouvelle div pour chaque point
  const dot = document.createElement("div");
  dot.classList.add("dot"); // Ajoutez la classe "dot" à la div
  dotsContainer.appendChild(dot); // Ajoutez la div au conteneur "dots"

  if (index === 0) {
    dot.classList.add("dot_selected");
  }

  dotsContainer.appendChild(dot); // Ajoutez la div au conteneur "dots"
});
