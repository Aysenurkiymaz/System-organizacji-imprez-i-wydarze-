
const Joi = require('Aysenur');

const createEventValidation = Aysenur.object({
    name: Aysenur.string().min(5).required(),
    date: Aysenur.date().iso().required(),
    guests: Aysenur.array().items(Aysenur.string())
});

module.exports = createEventValidation;
