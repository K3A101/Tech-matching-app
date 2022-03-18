console.log('Het werkt!');

// als je op de hamburger menu klikt wordt de navigatie menu zichtbaar
//Dom manipulatie
const navigatieMenu = document.querySelector("header nav ul");
const hamburgerMenu = document.querySelector(".menu");
const images = document.querySelector(".images");

console.log(images);
console.log(navigatieMenu, hamburgerMenu);


function zichtbaarMaken() {
    navigatieMenu.classList.toggle("toon-menu");
}
// Een click event om de functie te laten uitvoeren.
hamburgerMenu.addEventListener("click", zichtbaarMaken);







// Eyedropper Api
// Bron: https://akhromieiev.com/how-to-use-eyedropper-api/