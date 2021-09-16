const express = require('express');
const router = express.Router();
const category = require('./category.route');
const auth = require('./auth.route');
const payment = require('./payment.route');

router.use('/', auth);
router.use('/', category);
router.use('/', payment)

module.exports = router;