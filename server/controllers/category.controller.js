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
        Category.updateOne({ 'products._id': req.params.productID }, (err, product) => {
            // update
        });
    },

    deleteProduct(req, res) {
        Category.find({ 'products._id': req.params.productID }, (err, product) => {
            // delete a product by its id
        });
    },

    getCategory(req, res) {
        Category.find({ _id: req.params.categoryID }, (err, thatCategory) => {
           res.status(200).json(thatCategory); 
        });
    },

    async postCategory(req, res) {
        // Post new category
        try {
            const existed = await Category.findOne({ type: req.body.type });
            if (existed) {
                return res.status(418).json({
                    success: 0,
                    message: "Category existed."
                })
            }

            const newCategory = new Category({
                type: req.body.type,
                imgURL: req.body.imgURL,
                products: req.body.products
            });

            if (newCategory.save()) {
                res.status(200).json({
                    success: 1,
                    message: newCategory
                });
            }
        }
        catch(err) {
            res.status(500).json({
                message: err
            });
        }

    },

    async putCategory(req, res) {
        // Update existing category
        try {
            const categoryID = req.params.categoryID;
            const existed = await Category.findOne({ _id: categoryID });
    
            if (!existed) {
                return res.status(400).json({
                    success: 0,
                    message: "Category not found."
                })
            }
    
            existed.type = req.body.type || existed.type;
            existed.imgURL = req.body.imgURL || existed.imgURL;
            existed.products = req.body.products || existed.products;

            if (await existed.save()) {
                res.status(200).json(existed);
            }
            
            // const updateContent = {
            //     type: req.body.type,
            //     imgURL: req.body.imgURL,
            //     products: req.body.products
            // };
    
            // await Category.updateOne({ _id: categoryID }, updateContent);
        }
        catch(err) {
            res.status(500).json({ success: 0, message: err });
        }

    },

    deleteCategory(req, res) {
        // Delete whole category
        Category.deleteOne({ _id: req.params.categoryID }, (err) => {
            if (err) {
                res.status(500).json({
                    sucess: 0,
                    message: err
                });
            }
            else {
                res.status(200).json({ success: 1 });
            }
        });

    },

}