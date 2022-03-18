// Als je nikst in de tekst invoervelden krijg je verschillende meldingen. 
const form = document.getElementsByTagName('form')[0];
const interesseNaam = document.getElementById('interesse');
const naamError = document.querySelector('#interesse + span.error');

interesseNaam.addEventListener('input', function (event) {
        if (interesseNaam.validity.valid) {
        naamError.textContent = ''; 
        naamError.className = 'error';
    } else {
        showError();
    }
});
// Elke keer dat de gebruiker iets invoert,
// wordt in de achtergrond gewerkt of de data geldig zijn. 
form.addEventListener('submit', function (event) {
    if (!interesseNaam.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (interesseNaam.validity.valueMissing) {
        naamError.textContent = 'Je moet een interesse naam invullen.';
    } else if (interesseNaam.validity.badInput) {
        naamError.textContent = 'Naam moet alleen een text zijn.';
    } else if (interesseNaam.validity.tooShort) {
        naamError.textContent = `Interesse naam moet tenminste ${ interesseNaam.minLength } karakters hebben; Je hebt ${ interesseNaam.value.length } ingevoerd.`;
    }
    naamError.className = 'error active';
}

console.log(interesseNaam, naamError);
// Bron: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation