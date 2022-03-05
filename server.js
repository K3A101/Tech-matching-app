//init app
const express = require('express'); //module express gebruiken
const bodyParser = require('body-parser')
const app = express(); //express kopelen aan applicatie
const port = 3000; //port maken
const path = require('path');

//Middleware & static files
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));


//load view engine/template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// Template engine
//The root route
//Formulier pagina om voorkeuren voor jurken te invullen
app.get('/', (req, res) => {
    res.render('index', {
        titel: 'Kies jouw voorkeur'
    })
});

// Route voor de form Action: "/voorkeuren"
// Dit is de als je method post gebruikt
app.post('/voorkeuren', (req, res) => {
    console.log(req.body)
    title = "het is gelukt"
    res.render('profiel-pagina', {
        title
        
    });
})

// Hier is de start pagina van de applicatie
app.get('/homepagina', (req, res) => {

    res.render('homepagina', {
        titel: 'homepagina'
    });
});

//Route voor detail pagina's van de match 
//Voorbeeld van dynamische data
app.get('/match', (req, res) => {
    res.render('match-details', {
        id: 1,
        maker: 'Keisha',
        naam: 'Dress 1',
        kleur: 'rood',
        titel: 'Jouw matches'

    });
});




//Route voor profielpagina's
app.get('/profiel', (req, res) => {
    res.render('profiel-pagina', {
        titel: "Gebruikerspagina"
    })
});




//een error 404 komt als de route niet bestaat
app.use((req, res, next) => {
    res.status(404).render('404')
});

//de server wordt gestaart op port 3000
app.listen(port, () => {
    console.log(`Web server running on http://localhost:${port}`)
});