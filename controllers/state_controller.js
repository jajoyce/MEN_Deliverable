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
            {
                name: 'Florida', 
                population: '21.5 million',
                demonym: 'Floridian', 
                capital: 'Tallahassee', 
                largestCity: 'Jacksonville', 
                flagImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/250px-Flag_of_Florida.svg.png',
            },
            {
                name: 'New York', 
                population: '20.2 million',
                demonym: 'New Yorker', 
                capital: 'Albany', 
                largestCity: 'New York City', 
                flagImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/250px-Flag_of_New_York.svg.png',
            },
            {
                name: 'Pennsylvania', 
                population: '13 million',
                demonym: 'Pennsylvanian', 
                capital: 'Harrisburg', 
                largestCity: 'Philadelphia', 
                flagImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/250px-Flag_of_Pennsylvania.svg.png',
            },
            {
                name: 'Illinois', 
                population: '12.8 million',
                demonym: 'Illinoisan', 
                capital: 'Springfield', 
                largestCity: 'Chicago', 
                flagImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/250px-Flag_of_Illinois.svg.png',
            },
            {
                name: 'Alaska', 
                population: '733,000',
                demonym: 'Alaskan', 
                capital: 'Juneau', 
                largestCity: 'Anchorage', 
                flagImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/250px-Flag_of_Alaska.svg.png',
            },
            {
                name: 'Vermont', 
                population: '643,000',
                demonym: 'Vermonter', 
                capital: 'Montpelier', 
                largestCity: 'Burlington', 
                flagImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/250px-Flag_of_Vermont.svg.png',
            },
            {
                name: 'Wyoming', 
                population: '577,000',
                demonym: 'Wyomingite', 
                capital: 'Cheyenne', 
                largestCity: 'Cheyenne', 
                flagImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/250px-Flag_of_Wyoming.svg.png',
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
        res.render('index.ejs', { states: foundStates });
    });
});

router.post('/', (req, res) => {
    State.create(req.body, (error, newState) => {
        if (error) console.log(error);
        console.log(`CREATED ${newState}`);
        res.redirect('/states');
    });
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.get('/:stateID', (req, res) => {
    State.findById(req.params.stateID, (error, foundState) => {
        if (error) {
            console.log(error);
            return res.redirect('/states');
        };
        res.render('show.ejs', { state: foundState});
    });
});

router.get('/:stateID/edit', (req, res) => {
    State.findById(req.params.stateID, (error, updatingState) => {
        if (error) {
            console.log(error);
            return res.redirect('/states');
        };
        res.render('edit.ejs', { state: updatingState} );
    });
});

router.put('/:stateID', (req, res) => {
    State.findByIdAndUpdate(req.params.stateID, req.body, (error, updatedState) => {
        if (error) console.log(error);
        console.log(`UPDATED ${updatedState.name} to ${req.body.name}`);
        res.redirect('/states');
    });
});

router.delete('/:stateID', (req, res) => {
    State.findByIdAndDelete(req.params.stateID, (error, deletedState) => {
        if (error) console.log(error);
        console.log(`DELETED ${deletedState.name}`);
        res.redirect('/states');
    });
});


module.exports = router;
