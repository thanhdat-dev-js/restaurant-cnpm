const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    async postLogin(req, res) {
        try {
            const oldUser = await User.findOne({ email: req.body.email });
            if (oldUser) {
                const value = await bcrypt.compare(req.body.password, oldUser.password);
                if (value) {
                    const token = jwt.sign({
                        email: req.body.email,
                        permission: oldUser.permission
                    }, process.env.SECRET, {
                        expiresIn: 60 * 60
                    })
                    return res.json({
                        success: 1,
                        message: 'Dang nhap thanh cong',
                        token
                    });
                }
                return res.json({
                    success: 0,
                    message: 'Sai mat khau',
                })
            }
            return res.json({
                success: 0,
                message: 'Tai khoan khong ton tai'
            })
        } catch (error) {
            res.json({
                success: 0,
                message: error
            })
        }
    },
    async postRegister(req, res) {
        try {
            const oldUser = await User.findOne({ email: req.body.email });
            if (oldUser) {
                return res.status(200).json({
                    success: 0,
                    message: 'Tai khoan da ton tai'
                })
            }
            const user = new User({
                username: req.body.username,
                password: await bcrypt.hash(req.body.password, 10),
                email: req.body.email,
                permission: 'customer'
            })
            user.save();
            const token = jwt.sign({
                email: req.body.email,
                permission: 'customer'
            }, process.env.SECRET, {
                expiresIn: 60 * 60
            })
            res.status(201).json({
                success: 1,
                message: 'Dang ki thanh cong',
            });
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }
}
