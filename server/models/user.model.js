const mongoose = require('mongoose');
const reqString = {
    type: String,
    required: true
}
const reqNumber = {
    type: Number,
    required: true
}

const userSchema = new mongoose.Schema({
    username: reqString,
    password: reqString,
    email: reqString,
    fname: {type: String, default: ''},
    lname: {type: String, default: ''},
    reservations: [String],
    permission: String,
    phone: {type:String, default: ''}
},
    { timestamps: true }
)

module.exports = mongoose.model('User', userSchema);
