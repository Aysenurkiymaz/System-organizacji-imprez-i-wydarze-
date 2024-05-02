const Event = require('../models/Event');


exports.createEvent = async (req, res) => {
    try {
        const { name, date, guests } = req.body;
        const event = await Event.create({ name, date, guests });
        res.status(201).json({ success: true, event });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getEventList = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json({ success: true, events });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


