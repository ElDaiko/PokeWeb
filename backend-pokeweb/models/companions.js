'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CompanionSchema = Schema({
    userEmail: String,
    idPokemon: Number
})

module.exports = mongoose.model('companions', CompanionSchema)