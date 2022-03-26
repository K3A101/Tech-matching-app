//init app
const express = require("express"); //modules toevoegen 
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const arrayify = require('array-back');
// Mongodb database in app verbinden.
const {
    MongoClient
} = require("mongodb");
const {
    ObjectId
} = require("mongodb");

//variabels
const app = express(); //express kopelen aan applicatie
const port = process.env.PORT || 5550; //port maken
const path = require("path");
const {
    body
} = require("express-validator");
const {
    match
} = require("assert");

let db = null;

console.log(process.env.TESTVAR);

//Middleware & static files
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//load view engine/template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


/*****************************************************
 * Routes
 ****************************************************/

// TEMPLATE ENGINE

//Formulier pagina om voorkeuren voor jurken te invullen
app.get("/", async (req, res) => {
    const dresses = {
        id: req.query.id,
        slug: req.query.slug,
        url: req.query.url,
        kleur: req.query.kleur,
        typeJurk: req.query.typeJurk,
        gebruikersnaam: req.query.gebruikersnaam,
        publicatiedatum: req.query.publicatiedatum,
        beschrijving: req.query.beschrijving
    }

    const matches = await db.collection("jurken").find({});
    const noMatches = (matches.length === 0) ? "Helaas is er geen matches gevonden." : "matches";
    // Render engine
    res.render("index", {
        titel: "Kies jouw voorkeur",
        matches,
        dresses,
        noMatches
    });
});

// Filtreren op basis van kleur
app.post("/match/kleur", async (req, res) => {


    console.log(req.body.kleur);
    console.log('hieronder is de object keys loop')
    Object.keys(req.body).forEach(key => {
        console.log(key)
    })

    //Krijg gefiltered matches 
    console.log('hieronder matches')

    const query = {

        "kleur": req.body.kleur


    }
    const matches = await db.collection("jurken").find(query).toArray();
    const noMatches = (matches.length === 0) ? "Helaas is er geen matches gevonden." : "matches";
    console.log(matches)

    // Render engine
    matches.push(match);
    res.render("filter-resultaten", {
        titel: "Jouw voorkeuren",
        matches,
        noMatches
    });

});

//Formulier pagina om matches toe te voegen 
app.get("/match/add", async (req, res) => {
    const dresses = {
        id: req.query.id,
        slug: req.query.slug,
        url: req.query.url,
        kleur: req.query.kleur,
        typeJurk: req.query.typeJurk,
        gebruikersnaam: req.query.gebruikersnaam,
        publicatiedatum: req.query.publicatiedatum,
        beschrijving: req.query.beschrijving

    }

    const matches = await db.collection("jurken").find({}).toArray();

    const noMatches = (matches.length === 0) ? "Helaas is er geen matches gevonden." : "matches";
    // Render engine
    res.render("add-match", {
        titel: "Kies jouw voorkeur",
        matches,
        dresses,
        noMatches
    });
});

// Route voor de form Action: "/homepagina"
// Dit is de als je method post gebruikt om matches in de database toe te voegen
app.post("/homepagina", async (req, res) => {
    console.log(req.body);
    console.log('hieronder is de object keys loop')
    Object.keys(req.body).forEach(key => {
        console.log(key)
    })

    //GET LIST OF ALL DRESSES images
    console.log('Ingevoerde matches')

    const dresses = {
        id: req.body.id,
        slug: req.body.slug,
        url: req.body.url,
        kleur: req.body.kleur,
        typeJurk: req.body.typeJurk,
        gebruikersnaam: req.body.gebruikersnaam,
        publicatiedatum: req.body.publicatiedatum,
        beschrijving: req.body.beschrijving
    }

    const matches = await db.collection("jurken").insertOne(dresses);
    const noMatches = (matches.length === 0) ? "Helaas is er geen matches gevonden." : "matches";
    console.log(matches)

    // Render engine
    res.render("homepagina", {
        titel: "Jouw voorkeuren",
        matches,
        matches: dresses,
        dresses,
        noMatches
    });
});

// Matches toevoegen formulier pagina
app.get("/match/add", (req, res) => {
    res.render("add-match", {
        titel: "Voeg Matches toe",
    });
});

// Overzicht van alle jurken afbeelding
app.get("/homepagina", async (req, res) => {
    console.log(req.query);


    //GET LIST OF ALL DRESSES images
    const matches = await db.collection("jurken").find({}).toArray();
    const noMatches = (matches.length === 0) ? "Helaas is er geen matches gevonden." : "Jouw Matches";
    res.render("homepagina", {
        titel: "homepagina",
        matches,
        noMatches
    });
});

//Route voor detail pagina's van de match 
//Voorbeeld van dynamische data
app.get("/match", (req, res) => {
    res.render("match-details", {});
});

//Route voor profielpagina's
app.get("/profiel", (req, res) => {
    res.render("profiel-pagina", {
        titel: "Gebruikerspagina"
    });
});

/*****************************************************
 * Connect to database
 ****************************************************/
async function connectDB() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        db = client.db(process.env.DB_NAME);
    } catch (error) {

        throw (error)
    }
}

//een error 404 komt als de route niet bestaat
app.use((req, res, next) => {
    res.status(404).render("404");
});

//de server wordt gestaart op port 3000
app.listen(port, () => {
    console.log(`Web server running on http://localhost:${port}`);
    connectDB().then(() => console.log("We have a connection to mongo"))
});