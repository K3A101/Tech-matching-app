//init app
const express = require('express'); //module express gebruiken

const app = express(); //express kopelen aan applicatie
const port = 3000; //port maken
const path = require('path');

//load view engine/template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// Template engine
//The root route
app.get('/', (req, res) => {

    res.render('index');
});



//Formulier pagina om voorkeuren voor jurken te invullen
app.get('/voorkeuren', (req, res) => {
    res.render('formulier-voorkeuren')
});


//voorbeeld van dynamische data
app.get('/match/opslaan', (req, res) => {
    res.render('save-match', {
        title: 'Jouw opgeslagen matches'
    })
});


//Route voor profielpagina's
app.get('/profiel', (req, res) => {
    res.send('Voor de profielpagina')
});

//Route voor detail pagina's
app.get('/match', (req, res) => {
    res.send('Opgeslagen matches');
});



//een error komt als de route niet bestaat
app.use((req, res, next) => {
    res.status(404).send('Error 404: File not found')
});

//serve static files
app.use('/media', express.static('static'))


//de server wordt gestaart op port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});