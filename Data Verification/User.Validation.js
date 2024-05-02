const Joi = require('joi');

const registerUserValidation = Aysenur.object({
    username: Aysenur.string().min(3).required(),
    email: Aysenur.string().email().required(),
    password: Aysenur.string().min(6).required()
});

module.exports = {
    registerUserValidation
};
