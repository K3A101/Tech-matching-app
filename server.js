const express = require('express');
const app = express();
const port = 3000;




app.get('/', (req, res) => {
    res.send('Hi World!')
});

app.get('/home', (req, res) => {
    res.send('Voor de Homepagina')
});

app.get('/profiel', (req, res) => {
    res.send('Voor de profielpagina')
});

app.get('/match', (req, res) => {
    res.send('Voor de match detailpagina')
});


// Error handling
app.use((req, res, next) => {
    res.status(404).send('Error 404: File not found')
});

//serve static files
app.use('/static', express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});