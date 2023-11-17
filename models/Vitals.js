const mongoose = require('mongoose')

const vitalSchema = new mongoose.Schema({
    id: String,
    heart_rate: Number,
    pressure: String,
    oxygen: Number,
    respiratory: Number,
    temperature: Number
})

const Vital = mongoose.model('Vitals', vitalSchema);

module.exports = Vital;