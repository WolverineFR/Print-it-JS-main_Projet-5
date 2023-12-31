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

// les variables
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const ImageTitle = document.querySelector(".ImageTitle");
let currentSlideIndex = 0;

// fonction pour changer img et texte
function showSlide(index) {
  bannerImg.src = `assets/images/slideshow/${slides[index].image}`;
  ImageTitle.innerHTML = slides[index].tagLine;
}

// ecouteur evenement fleche gauche droite
arrow_left.addEventListener("click", function () {
  console.log("Ca click à gauche");
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
  updateDotSelection(currentSlideIndex);
});
// % slides.length permet de verifier si l'index est toujours dans la limite du nombre total de diapositive
// si il devient negatif alors il affichera la derniere diapo

arrow_right.addEventListener("click", function () {
  console.log("Ca click à droite");
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
  updateDotSelection(currentSlideIndex);
});

// ajout des points blanc quand index actif
const dotsContainer = document.querySelector(".dots");

slides.forEach((slide, index) => {
  // Créez une nouvelle div pour chaque point
  const dot = document.createElement("div");
  dot.classList.add("dot"); // Ajoutez la classe "dot" à la div (en la nomant "dot")
  dotsContainer.appendChild(dot); // Ajoutez la div au conteneur "dots"

  if (index === 0) {
    dot.classList.add("dot_selected");
    // permet de remplir le premier dot par defaut
  }
  dot.addEventListener("click", function () {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    updateDotSelection(currentSlideIndex);
  });
});

// fonction changement point blanc quand index change
function updateDotSelection(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, dotIndex) => {
    if (dotIndex === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
