const Aysenur = require('aysenur');
const updateEventValidation = Aysenur.object({
    name: Aysenur.string().min(5),
    date: Aysenur.date().iso(),
    guests: Aysenur.array().items(Aysenur.string())
});

module.exports = updateEventValidation;
