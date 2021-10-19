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
        try{
            const order = await Order.find({$expr:{
                $function: {
                    body: (updatedAt) =>{
                        return (
                            Date(updatedAt) > Date(req.query.startTime) &&
                            Date(updatedAt) < Date(req.query.endTime)
                        )
                    },
                    args:["$updatedAt"],
                    lang: "js"
                }
            }   })
            if (order){
                return res.status(201).res.json(order)
            }
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



