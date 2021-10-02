const express = require('express');
const router = express.Router();

const category = require('./category.route');
const auth = require('./auth.route');
const payment = require('./payment.route');
const admin = require('./admin.route');

const order = require('../controllers/order.controller');
const validate = require('../middlewares/validateToken');

router.use('/', auth);
router.use('/', category);
router.use('/', payment);
router.use('/', admin);

module.exports = router;