//init app
const express = require("express"); //module express gebruiken
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express(); //express kopelen aan applicatie
const port = 3000; //port maken
const path = require("path");
const matches = [{
        "id": 1,
        "slug": "dress-1",
        "gebruikersnaam": "Annabelle",
        "publicatiedatum": "12-07-2021",
        "beschrijving": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
    },
    {
        "id": 2,
        "slug": "dress-2",
        "gebruikersnaam": "Minna",
        "publicatiedatum": "10-12-2021",
        "beschrijving": "While the Parr family has accepted its collective calling as superheroes, the fact remains that their special heroism is still illegal. After they are arrested after unsuccessfully trying to stop the Underminer, their future seems bleak. However, the wealthy Deavor siblings of Devtech offer new hope with a bold project to rehabilitate the public image and legal status of Supers, with Elastigirl being assigned on point to be the shining example. Now having agreed for now to stay at home to care of the kids, Mr. Incredible finds domestic life a daunting challenge, especially with baby Jack-Jack's newly emerged powers making him almost impossible to manage. However, Elastigirl soon has her own concerns dealing with the menace of a new supervillain, Screenslaver, who is wreaking havoc with his mind control abilities. Now, Elastigirl must solve the mystery of this enemy, who has malevolent designs on the world with the Parr family and friends key targets of this evil. Written by Kenneth Chisholm (kchishol@rogers.com)"
    },
    {
        "id": 3,
        "slug": "dress-3",
        "gebruikersnaam": "Kea",
        "publicatiedatum": "19-01-2022",
        "beschrijving": "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago."
    },
    {
        "id": 4,
        "slug": "dress-4",
        "gebruikersnaam": "Millow",
        "publicatiedatum": "10-10-2021",
        "beschrijving": "Thirty years ago, Clifford McBride led a voyage into deep space, but the ship and crew were never heard from again. Now his son -- a fearless astronaut -- must embark on a daring mission to Neptune to uncover the truth about his missing father and a mysterious power surge that threatens the stability of the universe."
    },
    {
        "id": 5,
        "slug": "dress-5",
        "gebruikersnaam": "Lisa",
        "publicatiedatum": "12-05-2021",
        "beschrijving": "When a new toy called Forky joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy."
    },
    {
        "id": 6,
        "slug": "dress-6",
        "gebruikersnaam": "Belle",
        "publicatiedatum": "22-10-2021",
        "beschrijving": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
    }, {
        "id": 7,
        "slug": "dress-7",
        "gebruikersnaam": "Mino",
        "publicatiedatum": "10-02-2021",
        "beschrijving": "While the Parr family has accepted its collective calling as superheroes, the fact remains that their special heroism is still illegal. After they are arrested after unsuccessfully trying to stop the Underminer, their future seems bleak. However, the wealthy Deavor siblings of Devtech offer new hope with a bold project to rehabilitate the public image and legal status of Supers, with Elastigirl being assigned on point to be the shining example. Now having agreed for now to stay at home to care of the kids, Mr. Incredible finds domestic life a daunting challenge, especially with baby Jack-Jack's newly emerged powers making him almost impossible to manage. However, Elastigirl soon has her own concerns dealing with the menace of a new supervillain, Screenslaver, who is wreaking havoc with his mind control abilities. Now, Elastigirl must solve the mystery of this enemy, who has malevolent designs on the world with the Parr family and friends key targets of this evil. Written by Kenneth Chisholm (kchishol@rogers.com)"
    }, {
        "id": 8,
        "slug": "dress-8",
        "gebruikersnaam": "Kino",
        "publicatiedatum": "14-04-2021",
        "beschrijving": "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago."
    },
    {
        "id": 9,
        "slug": "dress-9",
        "gebruikersnaam": "Shena",
        "publicatiedatum": "1-04-2021",
        "beschrijving": "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago."
    },
    {
        "id": 10,
        "slug": "dress-10",
        "gebruikersnaam": "Laura",
        "publicatiedatum": "9-02-2022",
        "beschrijving": "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago."
    },
    {
        "id": 11,
        "slug": "dress-11",
        "gebruikersnaam": "Mauro",
        "publicatiedatum": "14-5-2021",
        "beschrijving": "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago."
    },

];


//Middleware & static files
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//load view engine/template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



// Template engine
//The root route
//Formulier pagina om voorkeuren voor jurken te invullen
app.get("/", (req, res) => {
    res.render("index", {
        titel: "Kies jouw voorkeur",

    });
});

// Route voor de form Action: "/voorkeuren"
// Dit is de als je method post gebruikt
app.post("/voorkeuren", (req, res) => {
    console.log(req.body.nieuweInteresse);
    const match = {
        name: req.body.nieuweInteresse,

    }

    res.render("profiel-pagina");

});

// Hier is de start pagina van de applicatie
app.get("/homepagina", (req, res) => {

    res.render("homepagina", {
        titel: "homepagina",
        matches
    });
});

//Route voor detail pagina's van de match 
//Voorbeeld van dynamische data
app.get("/match", (req, res) => {
    res.render("match-details", {
        id: 1,
        maker: "Keisha",
        naam: "Dress 1",
        kleur: "rood",
        titel: "Jouw matches"

    });
});




//Route voor profielpagina's
app.get("/profiel", (req, res) => {
    res.render("profiel-pagina", {
        titel: "Gebruikerspagina"
    });
});




//een error 404 komt als de route niet bestaat
app.use((req, res, next) => {
    res.status(404).render("404");
});

//de server wordt gestaart op port 3000
app.listen(port, () => {
    console.log(`Web server running on http://localhost:${port}`);
});