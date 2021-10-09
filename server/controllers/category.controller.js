const Category = require('../models/category.model');

module.exports = {

    getAllProducts(req, res) {
        Category.find({}, (error, category) => {
            res.status(200).json(category);
        });
    },

    postProduct(req, res) {

        Category.save();
    },

    putProduct(req, res) {
        Category.updateOne({ products: req.params.productID }, (err, product) => {
            // update
        });
    },

    deleteProduct(req, res) {
        Category.find({ products: req.params.productID }, (err, product) => {
            // delete a product by its id
        });
    },

    async postCategory(req, res) {
        // Post new category
        try {
            const ctype = req.params.ctype;
            const existed = await Category.findOne({ type: ctype });
            if (existed) {
                return res.status(418).json({
                    success: 0,
                    message: "Category type existed."
                })
            }

            const newCategory = new Category({
                type: req.body.type,
                imgURL: req.body.imgURL,
                products: req.body.products
            });

            newCategory.save();
            res.status(200).json({
                success: 1,
                message: newCategory
            });
        }
        catch(err) {
            res.status(500).json({
                message: err
            });
        }

    },

    async putCategory(req, res) {
        // Update existing category
        const ctype = req.params.ctype;
        const existed = await Category.findOne({ type: ctype });

        if (!existed) {
            return res.status(400).json({
                success: 0,
                message: "Category not found."
            })
        };

        const updateContent = {
            type: req.body.type,
            imgURL: req.body.imgURL,
            products: req.body.products
        };

        await Category.updateOne({ type: ctype }, updateContent);

    },

    deleteCategory(req, res) {
        // Delete whole category
        const ctype = req.params.ctype;

    },

}