const Joi = require('joi')
module.exports.adminLoginSchema = Joi.object({
    email : Joi.string().email().required(),
    password : Joi.string().min(4).required()
})
module.exports.adminSendForgetSchema = Joi.object({
    email : Joi.string().email().required()
})
module.exports.adminResetPasswordSchema = Joi.object({
    email : Joi.string().email().required(),
    password : Joi.string().min(4).required()
})