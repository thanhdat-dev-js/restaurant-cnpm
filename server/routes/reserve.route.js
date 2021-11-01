const express = require('express');
const router = express.Router();

const validateToken = require('../middlewares/validateToken');
const reserve = require('../controllers/reserve.controller');


router.get('/reserve', validateToken, reserve.getReserve);

router.put('/reserve', validateToken, reserve.putReserve);

router.delete('/reserve', validateToken, reserve.deleteReserve);

router.post('/reserve', validateToken, reserve.postReserve);

module.exports = router;