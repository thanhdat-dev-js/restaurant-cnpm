const Reserve = require('../models/reserve.model');
const shortId = require('shortid');

module.exports = {

    async getReserve(req,res) {
        try {
            if (req.user.permission === 'clerk') {
                const reserve = await Reserve.find({});
                if (reserve) {
                    return res.json({
                        success: 1,
                        reserve,
                        message: "thanh cong"
                    })
                }
                return res.json({
                    success: 0,
                    message: "that bai"
                })
            }
            else if (req.user.permission === 'customer') {
                const reserve = req.query.userEmail ? await Reserve.find({ userEmail: req.query.userEmail }) : null;
                if (reserve) {
                    return res.json({
                        success: 1,
                        reserve,
                        message: "thanh cong",
                    })
                }
                return res.json({
                    success: 0,
                    message: "that bai"
                })
            }
            else {
                return res.json({
                    success: 0,
                    message: "Invalid token"
                })
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    
    async putReserve(req,res) {
        try {
            const reserveID = req.params.reserveID;
            const existed = await Reserve.findOne({ _id: reserveID });

            if (!existed) {
                return res.status(400).json({
                    success: 0,
                    message: "Reservation not found."
                })
            }

            existed.firstName = req.body.firstName || existed.firstName;
            existed.lastName = req.body.lastName || existed.lastName;
            existed.phone = req.body.phone || existed.phone;
            existed.email = req.body.email || existed.email;

            if (await existed.save()) {
                res.status(200).json(existed);
            }
        }
        catch (err) {
            res.status(500).json({ success: 0, message: err });
        }
    },
    
    async deleteReserve(req,res) {
        Reserve.deleteOne({ _id: req.params.reserveID }, (err) => {
            if (err) {
                res.status(500).json({
                    sucess: 0,
                    message: err
                });
            }
            else {
                res.status(200).json({ success: 1 });
            }
        });
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
