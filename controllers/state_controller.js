const express = require('express');
const router = express.Router();
const { states } = require('../models');

router.get('/', (req, res) => {
    res.send('Yes, this is working.');
});

router.post('/', (req, res) => {
    console.log('Create route accessed');
    res.json(req.body);
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});


module.exports = router;
