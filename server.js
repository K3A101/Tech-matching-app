const express = require('express');
const pug = require('pug');
const app = express();
const port = 3000;




// app.get('/', (req, res) => {
//     res.send('Hi World!')
// });

app.get('/home', (req, res) => {
    res.send('Voor de Homepagina')
});

app.get('/profiel', (req, res) => {
    res.send('Voor de profielpagina')
});

app.get('/match', (req, res) => {
    res.send('Voor de match detailpagina')
});


//Template engine
app.set('views', './views');

const compiledFunction = pug.compileFile('index.pug');

console.log(compiledFunction({
    name: 'Timothy'
}));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hey',
        message: 'Hello there!'
    });
});

// Error handling
app.use((req, res, next) => {
    res.status(404).send('Error 404: File not found')
});

//serve static files
app.use('/media', express.static('static'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});