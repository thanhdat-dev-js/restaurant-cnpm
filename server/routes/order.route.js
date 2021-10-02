const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');
const validateToken = require('../middlewares/validateToken');

//clerk lay toan bo thong tin tat ca cac don hang trong ngay
router.get('/order', validateToken, order.getOrder)

module.exports = router;