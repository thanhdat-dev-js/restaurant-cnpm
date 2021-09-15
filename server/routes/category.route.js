const express = require('express');
const router = express.Router();
const category = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/auth')


router.get('/category', category.getAllProducts);

module.exports = router;