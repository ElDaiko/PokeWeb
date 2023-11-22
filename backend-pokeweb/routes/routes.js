'use strict'

const usersController = require('../controllers/user-controller')
const companionController = require('../controllers/companion-controller')
const token = require('../helpers/token')

const express = require('express') 
const app = express.Router()

//Users Controller
app.post('/registerUser', usersController.registerUser)
app.post('/signInUser', usersController.signInUser)
app.get('/test', token.validateUserToken, usersController.test)

//Companions
app.post('/registerCompanion', companionController.registerCompanion)
app.post('/getCompanions', companionController.getCompanions)

module.exports = app