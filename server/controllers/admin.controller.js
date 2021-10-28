const Category = require('../models/category.model');
const Order = require('../models/order.model');
const User = require('../models/user.model');

module.exports = {
    
    getAllEmployee(req, res) {
        User.find({ permission: 'clerk' || 'chef' }, (err, employee) => {
            res.status(200).json(employee);
        })
    },
    
    // return order for statistic
    async getFilteredOrders(req, res) {
        // Lấy startTime, endTime từ request
        const {startTime, endTime} = req.query;
        try{
            //lấy hết orders từ database, orders là 1 json
            const orders = await Order.find({})
            //filter orders và chứa trong filtered_orders
            const filtered_orders = await orders.filter((order)=>{
                return (order.updatedAt >= new Date(startTime) &&
                        order.updatedAt <= new Date(endTime)
                )
            })
            // return filtered_orders dưới dạng json
            return res.json(filtered_orders);
        }
        catch (err){
            console.log(err)
        }
    },

    displayCustomerInfo(req, res) {
        User.find({ permission: 'customer' }, { password: 0 }, (err, customer) => {
            res.status(200).json(customer);
        });
    },

}



