const Order = require('../models/order.model');
const shortId = require('shortid')
module.exports = {
    async getPayment(req, res) {
        try {
            if (req.user.permission !== 'clerk')
                return res.json({
                    success: 0,
                    message: "Invalid token clerk"
                })
            const order = await Order.findOne({ orderID: req.query.orderID });
            if (order) {
                order.status = req.query.status;
                await order.save();
                return res.json({
                    success: 1,
                    message: "thanh cong"
                })
            }
            return res.json({
                success: 0,
                message: "Don hang khong ton tai"
            })
        }
        catch (err) {
            console.log(err);
            res.json({
                success: 0,
                message: "xac nhan don hang that bai"
            })
        }
    },
    async postPayment(req, res) {
        try {
            if (!req.body.total) {
                return res.json({
                    success: 0,
                    message: "khong co thong tin don hang"
                })
            }
            const order = new Order;
            order.orderID = shortId.generate();
            order.email = req.body.email;
            order.products = req.body.products;
            order.status = 'unconfirm';
            order.payment = req.body.payment;
            order.total = req.body.total;
            await order.save();
            res.json({
                success: 1,
                orderId: order.orderID,
                message: "don hang da duoc luu vao db"
            })
        }
        catch (err) {
            res.json({
                success: 0,
                message: "thanh toan don hang that bai"
            })
            console.log(err)
        }
    },
    async getAllOrder(req, res) {
        try {
            if (req.user.permission !== 'clerk')
                return res.json({
                    success: 0,
                    message: "Invalid token clerk"
                })
            const order = await Order.find({});
            if (order) {
                return res.json({
                    success: 1,
                    order,
                    message: "thanh cong"
                })
            }
            return res.json({
                success: 0,
                message: "Don hang khong ton tai"
            })
        }
        catch (err) {
            console.log(err);
            res.json({
                success: 0,
                message: "xac nhan don hang that bai"
            })
        }
    }
}