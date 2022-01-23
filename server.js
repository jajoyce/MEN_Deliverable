const express = require('express');
const app = express();

const PORT = 4000;

app.set('view engine', 'ejs');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.send('Yes, this is working.');
});

app.get('/new', (req, res) => {
    res.render('new.ejs');
});

app.get('/*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
