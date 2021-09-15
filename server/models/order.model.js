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
    quantity: reqNumber,
    price: reqNumber
})

const orderSchema = new mongoose.Schema({
    orderID = shortid.generate,
    email: String,
    product: [productSchema],
    status: reqString,
    payment: reqString,
    total: reqNumber
},
    { timestamps: true }
)

module.exports = mongoose.model('Order', orderSchema);
