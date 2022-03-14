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

// Eyedropper Api
// Bron: https://akhromieiev.com/how-to-use-eyedropper-api/