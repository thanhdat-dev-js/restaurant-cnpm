const Reserve = require('../models/reserve.model');
const shortId = require('shortid')

module.exports = {

    async getReserve(req,res) {
        res.send('On get reserve.');
    },
    
    async putReserve(req,res) {
        res.send('On get reserve.');
    },
    
    async deleteReserve(req,res) {
        res.send('On get reserve.');
    },
    
    async postReserve(req, res) {
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
    },
}
