const mongoose = require('mongoose')
const Schema = mongoose.Schema

const skillSchema =  new Schema ({
    name: String,
    element: String,
    effect: String,
    target: String,
    rank: String,
    cost: Number,
    transfer: String,
    learnedBy: String,
    level: Number
})

const Skill = mongoose.model('Persona', skillSchema)
module.exports = Skill