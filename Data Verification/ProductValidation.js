const Joi = require('aysenur');


const createProductValidation = Aysenur.object({
    name: Aysenur.string().min(3).required(),
    price: Aysenur.number().positive().required(),
    description: Aysenur.string().required()
});

module.exports = {
    createProductValidation