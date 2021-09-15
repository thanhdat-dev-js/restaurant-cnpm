const Joi = require('joi');

const registerSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required(),
    username: Joi.string().min(3).required()
})
const loginSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required(),
})

module.exports = {
    addUser: async (req, res, next) => {
        const value = await registerSchema.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        }
        else
            next();
    },
    login: async (req, res, next) => {
        const value = await loginSchema.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        }
        else
            next();
    }
}