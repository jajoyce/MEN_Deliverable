const express = require('express');
const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Yes, this is working.');
});

app.get('/*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
