const Reserve = require('../models/reserve.model');
const shortId = require('shortid');

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
        const data = JSON.parse(req.body.data || req.query.data); 
        const reserve = new Reserve({
            userEmail: req.user.email,
            reserveID: shortId.generate(),
            firstName: data.firstName,
            lastName: data.lastName,
            adultsNumber: data.adults,
            kidsNumber: data.kids, 
            date: data.datetime,
            phone: data.phone,
            email: data.email
        });
    
        // console.log(data);
        console.log(req);
        console.log(reserve);

        try {
            const reserveSave = await reserve.save();
            // res.json(reserveSave);
            console.log(reserveSave);
            return res({
                success: 1,
                reserveId: reserve.reserveID,
                message: "Successfully save reservation!"
            })
        }
        catch (err) {
            res.json({message: err})
        }
        
    },
}
