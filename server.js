//init app
const express = require('express');

const app = express();
const port = 3000;
const path = require('path');

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



// Template engine
//The root route
app.get('/', (req, res) => {
    let match = [{
            id: 1,
            title: 'Dress 1',
            maker: 'Keïsha Alexander',
            gepubliceerd: '18 Februari 2022'


        },

        {
            id: 2,
            title: 'Dress 2',
            maker: 'Keïsha Alexander',
            gepubliceerd: '19 Februari 2022'


        },

        {
            id: 3,
            title: 'Dress 3',
            maker: 'Keïsha Alexander',
            gepubliceerd: '20 Februari 2022'


        }
    ];

    res.render('index', {
        title: 'Hello',
        matches: match
    });
});

app.get('/match/opslaan', (req, res) => {
    res.render('save-match', {
        title: 'Jouw opgeslagen matches'
    })
});


//Other routes
app.get('/home', (req, res) => {
    res.send('Voor de Homepagina')
});

//Route voor profielpagina's
app.get('/profiel', (req, res) => {
    res.send('Voor de profielpagina')
});

//Route voor detail pagina's
app.get('/match', (req, res) => {
    res.send('Opgeslagen matches');
});


//Template engine
// app.set('views', './views');

// const compiledFunction = pug.compileFile('./views/index.pug');

// console.log(compiledFunction({
//     name: 'Timothy'
// }));

// app.get('/index', (req, res) => {
//     res.render('index', {
//         title: 'Hey',
//         message: 'Hello there!'
//     });
// });

// Error handling
app.use((req, res, next) => {
    res.status(404).send('Error 404: File not found')
});

//serve static files
app.use('/media', express.static('static'))

//Start server

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});