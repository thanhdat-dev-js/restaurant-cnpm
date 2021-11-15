const express = require('express');
const router = express.Router();

const validateToken = require('../middlewares/validateToken');
const reserve = require('../controllers/reserve.controller');


router.get('/reserve', validateToken, reserve.getReserve);

router.get('/reserve/verify', validateToken, reserve.verifyReserve);

router.put('/reserve/:reserveID', reserve.putReserve);

router.delete('/reserve/:reserveID', reserve.deleteReserve);

router.post('/reserve', validateToken, reserve.postReserve);

module.exports = router;