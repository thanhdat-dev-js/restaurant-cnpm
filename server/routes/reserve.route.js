const express = require('express');
const router = express.Router();
const validateAdmin = require('../middlewares/validateAdmin');
const Reserve = require('../models/reserve.model');


router.get('/reserve', (req,res) => {
    res.send('On get reserve.');
});

router.put('/reserve', (req,res) => {
    res.send('On get reserve.');
});

router.delete('/reserve', (req,res) => {
    res.send('On get reserve.');
});

router.post('/reserve', async (req, res) => {
    const reserve = new Reserve({
        userID: req.body.userID,
        reserveID: req.body.reserveID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        adultsNumber: req.body.adults,
        kidsNumber: req.body.kids, 
        date: req.body.date,
        phone: req.body.phone,
        email: req.body.email
    });

    try {
        const reserveSave = await reserve.save();
        res.json(reserveSave);
    }
    catch (err) {
        res.json({message: err})
    }
});

module.exports = router;