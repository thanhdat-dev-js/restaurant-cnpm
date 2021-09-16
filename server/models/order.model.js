const mongoose = require('mongoose');
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
    price: reqNumber,
    totalPrice: reqNumber,
    name: reqString,
    productID: reqString
})

const orderSchema = new mongoose.Schema({
    orderID: reqString,
    email: String,
    products: [productSchema],
    status: reqString,
    payment: String,
    total: reqNumber
},
    { timestamps: true }
)

module.exports = mongoose.model('Order', orderSchema);
