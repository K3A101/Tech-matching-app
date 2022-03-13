console.log('Het werkt!');


const navigatieMenu = document.querySelector("header nav ul");
const hamburgerMenu = document.querySelector(".menu");
const images = document.querySelector(".images");

console.log(images);
console.log(navigatieMenu, hamburgerMenu);

function zichtbaarMaken() {
    navigatieMenu.classList.toggle("toon-menu");
}


hamburgerMenu.addEventListener("click", zichtbaarMaken);




//maakt eyedropper object

const button = document.querySelector('#eyedropperButton');

if ('EyeDropper' in window) {
    const eyeDropper = new EyeDropper();

    button.addEventListener('click', () => {
        eyeDropper
            .open()
            .then(colorSelectionResult => {
                document.body.style.backgroundColor = colorSelectionResult.sRGBHex;
            })
            .catch(() => {
                // The user canceled selection
            });
    });
} else {
    // The EyeDropper API isn't supported
}
// als je op de hamburger menu klikt wordt de navigatie menu zichtbaar


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

// Eyedropper Api
// Bron: https://akhromieiev.com/how-to-use-eyedropper-api/