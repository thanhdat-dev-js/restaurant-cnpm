const Category = require('../models/category.model');
const Order = require('../models/order.model');
const User = require('../models/user.model');

module.exports = {
    
    getAllEmployee(req, res) {
        User.find({ permission: { "$in": ["clerk", "kitchen"] } }, (err, employee) => {
            res.status(200).json(employee);
        })
    },
    
    // return order for statistic
    async getFilteredOrders(req, res) {
        // Lấy startTime, endTime từ request
        const {startTime, endTime} = req.query;
        // console.log("date", startTime, endTime);
        try{
            //lấy hết orders từ database, orders là 1 json
            const orders = await Order.find({})
            //filter orders và chứa trong filtered_orders
            const filtered_orders = orders.filter((order)=>{
                return (order.updatedAt >= new Date(startTime).setHours(1,0,0,0) &&
                        order.updatedAt <= new Date(endTime).setHours(23,0,0,0)
                )
            })
            // return filtered_orders dưới dạng json
            return res.json(filtered_orders);
        }
        catch (err){
            console.log(err)
        }
    },

    getCustomer(req, res) {
        User.findOne({ email: req.query.q }, { password: 0 }, (err, user) => {
            if (err) {
                res.status(501).json({ message: 'Người dùng không tồn tại'})
            }
            
            res.status(200).json(user);
        });
    },

    async putCustomer(req, res) {

        try {
            const qemail = req.query.q;
            const existed = await User.findOne({ email: qemail });

            if (!existed) {
                return res.status(400).json({
                    success: 0,
                    message: "User not found."
                })
            }

            existed.permission = req.body.permission || existed.permission;
            
            if (await existed.save()) {
                res.status(200).json(existed);
            }
        }
        catch (err) {
            res.status(500).json({ success: 0, message: err });
        }
    }

}



