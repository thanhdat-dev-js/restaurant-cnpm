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
        const data = 'data' in req.body ? req.body.data : JSON.Parse(req.query.data); 
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

    async verifyReserve(req, res) {
        try {
            console.log("In server");
            const data = 'data' in req.body ? req.body.data : JSON.parse(req.query.data); 
            console.log(data);
            const datetime = new Date(data.datetime);
            const toDay = new Date(Date.now());
            
            console.log("Input");
            console.log(datetime);
            console.log("Output");
            console.log(toDay);
            console.log(datetime.getDate());
            console.log(toDay.getDate());
    
            // Accept conditions:
            // 1. Not in the pass
            // 2. Not earlier than 3 days
            // 3. There are enough tables
            
            if (datetime < toDay) {
                res.send({
                    'status': false,
                    'message': 'Please not select day in the pass.'
                })
            }
            else if (datetime.getDate() - toDay.getDate() > 3) {
                res.send({
                    'status': false,
                    'message': 'You can only reserve a table at most 3 days in advance.'
                })
            }
            else {
                try {
                    const reserves = await Reserve.find({});
                    res.send(reserves);
                }
                catch(e) {
                    res.send({'status': false, 'message': e.toString(), 'error': true})
                }
            }
        }
        catch(e) {
            res.send({'status': false, 'message': e.toString(), 'error': true})
        }
    },
}
