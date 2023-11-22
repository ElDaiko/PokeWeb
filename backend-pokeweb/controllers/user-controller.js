'use strict'

const Users = require('../models/user');
const token = require('../helpers/token');
const bcrypt = require('bcryptjs')

const test = (req, resp) => {
    resp.status(200).send({message: "User is Logged in"});
}

function registerUser(req, resp){
    const newUser = new Users()
    const body = req.body

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(body.password, salt)

    newUser.username = body.username
    newUser.email = body.email
    newUser.password = hash

    newUser.save().then(
        () => {
            resp.status(200).send({confirmation: true})
        },
        err => {
            resp.status(500).send({message: "Could not create the User"})
        }
    )
}

function signInUser(req, resp){
    const body = req.body

    const sentEmail = body.email
    const sentPassword = body.password

    Users.findOne({email:sentEmail}).then(
        (foundUser) => {
            if(foundUser == null){
                resp.status(403).send({message: "User doesnt exist."})
            }
            else{
                if(bcrypt.compareSync(sentPassword, foundUser.password)){
                    resp.status(200).send({confirmation: true})
                }
                else{
                    resp.status(403).send({message: "Invalid Password."})
                }
            }
        },
        err => {
            resp.status(500).send({message: "Could not found User."})
        }
    )
}

module.exports={
    test, registerUser, signInUser
}