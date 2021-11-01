const express = require('express');
const router = express.Router();
const category = require('../controllers/category.controller');

router.get('/category', category.getAllProducts);
router.get('/category/:categoryID', category.getCategory)

module.exports = router;