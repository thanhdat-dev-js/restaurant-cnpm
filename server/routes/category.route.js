const express = require('express');
const router = express.Router();
const validateAdmin = require('../middlewares/validateAdmin');
const category = require('../controllers/category.controller');

router.get('/category', category.getAllProducts);

router.post('/category', validateAdmin, category.postCategory);
router.post('/category/:ctype', validateAdmin, category.postProduct);

router.put('/category/:ctype', validateAdmin, category.putCategory);
router.put('/category/:ctype/:productID', validateAdmin, category.putProduct);

router.delete('/category/:ctype', validateAdmin, category.deleteCategory);
router.delete('/category/:ctype/:productID', validateAdmin, category.deleteProduct);

module.exports = router;