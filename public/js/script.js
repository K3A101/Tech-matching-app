console.log('Het werkt!');

// als je op de hamburger menu klikt wordt de navigatie menu zichtbaar

const navigatieMenu = document.querySelector("header nav ul");
const hamburgerMenu = document.querySelector(".menu");

console.log(navigatieMenu, hamburgerMenu);

function zichtbaarMaken() {
    navigatieMenu.classList.toggle("toon-menu");
}


hamburgerMenu.addEventListener("click", zichtbaarMaken);