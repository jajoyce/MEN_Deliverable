const express = require('express');
const router = express.Router();
const { State } = require('../models');

State.deleteMany({}, (error, deletedStates) => {
    if (error) return console.log(error);
    console.log(deletedStates);
    State.insertMany(
        [
            {
                name: 'Massachusetts', 
                population: '7 million',
                demonym: 'Bay Stater', 
                capital: 'Boston', 
                largestCity: 'Boston', 
                flagImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/250px-Flag_of_Massachusetts.svg.png',
            },
            {
                name: 'California', 
                population: '39.5 million',
                demonym: 'Californian', 
                capital: 'Sacramento', 
                largestCity: 'Los Angeles', 
                flagImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/250px-Flag_of_California.svg.png',
            },
            {
                name: 'Texas', 
                population: '29.1 million',
                demonym: 'Texan', 
                capital: 'Austin', 
                largestCity: 'Houston', 
                flagImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/250px-Flag_of_Texas.svg.png',
            },
        ], 
        (error, insertedStates) => {
            if (error) return console.log(error);
            console.log('SEED COMPLETE:');
            console.log(insertedStates);
        }
    );
});

router.get('/', (req, res) => {
    State.find({}, (error, foundStates) => {
        if (error) return console.log(error);
        const states = { states: foundStates }
        res.render('index.ejs', states);
    });
});

router.post('/', (req, res) => {
    console.log('Create route accessed');
    State.create(req.body, (error, newState) => {
        if (error) return console.log(error);
        console.log(newState);
    });
    res.json(req.body);
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});


module.exports = router;
