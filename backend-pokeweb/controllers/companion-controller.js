'use strict'

const Companions = require("../models/companions")

function registerCompanion(req, res) {
    const newCompanion = new Companions()
    const body = req.body

    newCompanion.userEmail = body.userEmail
    newCompanion.idPokemon = body.idPokemon

    newCompanion.save().then(
        (savedCompanion) => {
            res.status(200).send({ companionCreated: savedCompanion })
        },
        err => {
            res.status(500).send({ message: "Could not add the companion to your list", err })
        }
    )
}

async function getCompanions(req, res) {
    const body = req.body

    const sentEmail = body.userEmail
    try {
        const companionList = await Companions.find({ userEmail: sentEmail })
        res.status(200).send({ idPokemon: companionList.map((item) => item.idPokemon) })
    } catch (error) {
        res.status(500).send({message: error})
    }

}

module.exports = {
    registerCompanion,
    getCompanions
}