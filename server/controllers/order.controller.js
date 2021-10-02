const Order = require('../models/order.model');
const shortId = require('shortid')
module.exports = {
    // async getPayment(req, res) {
    //     try {
    //         if (req.user.permission !== 'clerk')
    //             return res.json({
    //                 success: 0,
    //                 message: "Invalid token clerk"
    //             })
    //         const order = await Order.findOne({ orderID: req.query.orderID });
    //         if (order) {
    //             order.status = req.query.status;
    //             await order.save();
    //             return res.json({
    //                 success: 1,
    //                 message: "thanh cong"
    //             })
    //         }
    //         return res.json({
    //             success: 0,
    //             message: "Don hang khong ton tai"
    //         })
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // },
    async postPayment(data, res, io) {
        try {
            if (!data.total) {
                return res({
                    success: 0,
                    message: "khong co thong tin don hang"
                })
            }
            const order = new Order;
            order.orderID = shortId.generate();
            order.email = data.email;
            order.products = data.products;
            order.status = 'unconfirmed';
            order.process = 'pending';
            order.payment = data.payment;
            order.total = data.total;
            console.log(data.total);
            await order.save();
            io.emit('clerk');
            return res({
                success: 1,
                orderId: order.orderID,
                message: "don hang da duoc luu vao db"
            })
        }
        catch (err) {
            console.log(err)
        }
    },
    async getOrder(req, res) {
        try {
            if (req.user.permission !== 'clerk')
                return res.json({
                    success: 0,
                    message: "Invalid token clerk"
                })
            console.log(req.query.status)
            const order = req.query.status ? await Order.find({ status: req.query.status }) : await Order.find({});
            if (order) {
                return res.json({
                    success: 1,
                    order,
                    message: "thanh cong"
                })
            }
            return res.json({
                success: 0,
                message: "that bai"
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}