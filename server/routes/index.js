const express = require('express');
const router = express.Router();

const category = require('./category.route');
const auth = require('./auth.route');
const order = require('./order.route');
const admin = require('./admin.route');
const reserve = require('./reserve.route');
// const order = require('../controllers/order.controller');
// const validate = require('../middlewares/validateToken');

router.use('/', auth);
router.use('/', category);
router.use('/', order);
router.use('/', admin);
router.use('/', reserve);

module.exports = router;