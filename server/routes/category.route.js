const express = require('express');
const router = express.Router();
const category = require('../controllers/category.controller');

router.get('/category', category.getAllProducts);
router.get('/category/:categoryID', category.getCategory)

// For CRUD category/product
router.post('/category', category.postCategory);
router.post('/category/:categoryID', category.postProduct);

router.put('/category/:categoryID', category.putCategory);
router.put('/category/:categoryID/:productID', category.putProduct);

router.delete('/category/:categoryID', category.deleteCategory);
router.delete('/category/:categoryID/:productID', category.deleteProduct);

module.exports = router;