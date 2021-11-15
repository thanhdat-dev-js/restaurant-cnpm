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
        try{

            const data = 'data' in req.body ? req.body.data : JSON.parse(req.query.data); 
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
        }
        catch(e) {
            res.send({message: e})
        }
        
    },

    async verifyReserve(req, res) {
        try {
            console.log("In server");
            const data = 'data' in req.body ? req.body.data : JSON.parse(req.query.data); 
            console.log(data);
            const datetime = new Date(data.datetime);
            const toDay = new Date(Date.now());
            
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
            else if (Math.ceil((datetime-toDay)/(1000*60*60*24)) > 3) {
                res.send({
                    'status': false,
                    'message': 'You can only reserve a table at most 3 days in advance.'
                })
            }
            else {
                try {
                    const reserves = await Reserve.find({});
                    const tables = reserves.filter( (reserve) => {
                            const reserve_date = new Date(reserve.date);
                            const dist = Math.abs(datetime-reserve_date);
                            const dist_minute = Math.ceil(dist/(1000*60));
                            return dist_minute < 60;
                        }
                    )
                    if (tables.length < 10) {
                        res.send({'status': true, 'message': '', 'error': false});
                    }
                    else {
                        res.send({
                            'status': false, 
                            'message': 'Sorry! There are not enough table in this interval.', 
                            'error': false});
                    }
                }
                catch(e) {
                    res.send({'status': false, 'message': e.toString(), 'error': true});
                }
            }
        }
        catch(e) {
            res.send({'status': false, 'message': e.toString(), 'error': true})
        }
    },
}
