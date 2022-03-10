console.log('Het werkt!');

// als je op de hamburger menu klikt wordt de navigatie menu zichtbaar

const navigatieMenu = document.querySelector("header nav ul");
const hamburgerMenu = document.querySelector(".menu");
const images = document.querySelector(".images");

console.log(images);

console.log(navigatieMenu, hamburgerMenu);

function zichtbaarMaken() {
    navigatieMenu.classList.toggle("toon-menu");
}


hamburgerMenu.addEventListener("click", zichtbaarMaken);

// Fullscreen API
function activateFullscreen(images) {
    if (images.requestFullscreen) {
        images.requestFullscreen(); // W3C spec
    } else if (images.mozRequestFullScreen) {
        images.mozRequestFullScreen(); // Firefox
    } else if (images.webkitRequestFullscreen) {
        images.webkitRequestFullscreen(); // Safari
    } else if (images.msRequestFullscreen) {
        images.msRequestFullscreen(); // IE/Edge
    }
};