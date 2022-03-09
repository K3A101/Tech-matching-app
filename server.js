//init app
const express = require("express"); //module express gebruiken
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

// Mongodb database in app verbinden.
const {
    MongoClient
} = require("mongodb");
const {
    ObjectId
} = require("mongodb");

//variabels
const app = express(); //express kopelen aan applicatie
const port = process.env.PORT || 3000; //port maken
const path = require("path");
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



// TEMPLATE ENGINE
//The root route
//Formulier pagina om voorkeuren voor jurken te invullen
app.get("/", (req, res) => {
    res.render("index", {
        titel: "Kies jouw voorkeur"

    });
});

// Route voor de form Action: "/voorkeuren"
// Dit is de als je method post gebruikt
app.post("/voorkeuren", (req, res) => {
    console.log(req.body);

    res.render("homepagina", {
        titel: "Jouw voorkeuren"
    });

});

app.post("/voorkeuren/:matchId", (req, res) => {
    console.log(req.body);

    // FIND MATCHES
    const id = "req.body.id"
    console.log("Get matches from DB")

    const match = {};
    res.render("homepagina", {
        titel: "Jouw voorkeuren",
        match
    });

});


// Hier is de start pagina van de applicatie
app.get("/homepagina", async (req, res) => {

    //EEN SPECIFIEK EIENSCHAP VINDEN
    // const query = {
    //     "url": "dress-1.jpg"
    // };

    // Sorteren
    // const options = {
    //     sort: {
    //         publicatiedatum: -1
    //     }
    // }

    //GET LIST OF ALL DRESSES images
    const matches = await db.collection("jurken").find({

    }).toArray();

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
        throw error;
    }
}

//de server wordt gestaart op port 3000
app.listen(port, () => {
    console.log(`Web server running on http://localhost:${port}`);
    connectDB().then(() => console.log("We have a connection to mongo"))
});