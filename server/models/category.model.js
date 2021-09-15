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
const productSchema = new mongoose.Schema({
    productID: {
        'type': String,
        'default': shortid.generate
    },
    price: reqNumber,
    name: reqString,
    imgURL: reqString
})


const categoryScheme = new mongoose.Schema({
    type: reqString,
    imgURL: reqString,
    products: [productSchema]
},
    { timestamps: true }
)

module.exports = mongoose.model('category', categoryScheme);
