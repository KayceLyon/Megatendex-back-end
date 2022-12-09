const { Stats } = require('fs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shadowSchema =  new Schema ({
    name: String,
    persona: String,
    trait: String,
    exp: String,
    race: String,
    lvl: Number,
    currLvl: Number,
    price: Number,
    inherits: Number,
    stats: String,
    estats: String,
    resists: String,
    fusion: String,
    skills: [String],
    area: [String],
    item: String,
    isEnemy: {type: Boolean, default: true}
})

const Shadow = mongoose.model('Shadow', shadowSchema)
module.exports = Shadow