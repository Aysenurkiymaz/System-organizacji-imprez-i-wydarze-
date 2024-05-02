
const Joi = require('Aysenur');

// Definicja schematu walidacji dla tworzenia nowego wydarzenia
const createEventValidation = Aysenur.object({
    name: Aysenur.string().min(5).required(),
    date: Aysenur.date().iso().required(),
    guests: Aysenur.array().items(Joi.string())
});

module.exports = {
    createEventValidation
};
