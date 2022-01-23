const express = require('express');
const app = express();

const PORT = 4000;

app.set('view engine', 'ejs');

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));


app.get('/states', (req, res) => {
    res.send('Yes, this is working.');
});

app.post('/states', (req, res) => {
    console.log('Create route accessed');
    res.send(`Created state: ${req.body.name}`);
});

app.get('/states/new', (req, res) => {
    res.render('new.ejs');
});

app.get('/*', (req, res) => {
    res.redirect('/states');
});

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
