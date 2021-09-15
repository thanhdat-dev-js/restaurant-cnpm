const Category = require('../models/category.model');
module.exports = {
    getAllProducts(req, res) {
        Category.find({}, (error, category) => {
            res.json(category);
        })
    }
}