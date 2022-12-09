const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personaSchema =  new Schema ({
    name: String,
    item: String,
    race: String,
    lvl: Number,
    currLvl: Number,
    skills: [{}],
    price: String,
    stats: [String],
    resists: String,
    fusion: String,
    inherits: String,
    prereq: String,
    persona: String,
    trait: String,
    exp: Number
})

const Persona = mongoose.model('Persona', personaSchema)
module.exports = Persona