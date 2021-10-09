const Category = require('../models/category.model');
const Order = require('../models/order.model');
const User = require('../models/user.model');

module.exports = {
    
    getAllEmployee(req, res) {
        User.find({ permission: 'clerk' || 'chef' }, (err, employee) => {
            res.status(200).json(employee);
        })
    },
    
    getAllStatistics(req, res) {
        let result = {}

        res.status(200).json(result);
    },

    displayCustomerInfo(req, res) {
        User.find({ permission: 'customer' }, (err, customer) => {
            res.status(200).json(customer);
        });
    },

}



