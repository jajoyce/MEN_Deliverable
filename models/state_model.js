const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'State name is required.']
    }, 
    population: {
        type: String, 
        required: [true, 'Provide the state population as a string, e.g. "10 million"']
    }, 
    demonym: {
        type: String, 
    }, 
    capital: {
        type: String, 
        required: [true, 'State capital is required.']
    }, 
    largestCity: {
        type: String, 
    }, 
    flagImg: {
        type: String, 
    }, 
});

const State = mongoose.model('State', stateSchema);

module.exports = State;