'use strict'

const usersController = require('../controllers/user-controller')
const companionController = require('../controllers/companion-controller')

const express = require('express') 
const app = express.Router()

//Users Controller
app.post('/registerUser', usersController.registerUser)
app.post('/signInUser', usersController.signInUser)

//Companions
app.post('/registerCompanion', companionController.registerCompanion)
app.post('/getCompanions', companionController.getCompanions)

module.exports = app