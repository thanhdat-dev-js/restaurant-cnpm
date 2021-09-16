const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');
const vallidateToken = require('../middlewares/validateToken');

//customer gui thong tin don hang
router.post('/payment', order.postPayment);

//clerk xac nhan don hang, xac nhan thanh toan
router.get('/payment/:orderID', vallidateToken, order.getPayment);

//clerk lay thogn tin tat ca nhung don hang chua thanh toan
router.get('/payment', vallidateToken, order.getAllOrder)

module.exports = router;