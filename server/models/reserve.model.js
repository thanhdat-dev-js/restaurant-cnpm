const mongoose = require('mongoose');
const shortid = require('shortid');

const reqString = {
    type: String,
    required: true
}
const reqNumber = {
    type: Number,
    required: true
}

const reserveSchema = new mongoose.Schema({
    userEmail: reqString,
    reserveID: {
        'type': String,
        'default': shortid.generate
    },
    firstName: reqString,
    lastName: reqString,
    adultsNumber: reqNumber,
    kidsNumber: reqNumber, 
    date: {
        type: Date,
        require: true
    },
    phone: reqString,
    email: reqString
},
    { timestamps: true }
)

module.exports = mongoose.model('Reserve', reserveSchema);
