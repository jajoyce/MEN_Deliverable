const express = require('express');
const app = express();
const controllers = require('./controllers');

const PORT = 4000;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('public'));

app.use('/states', controllers.state);

app.get('/*', (req, res) => {
    res.redirect('/states');
});

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
