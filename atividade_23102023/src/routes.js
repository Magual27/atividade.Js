const express = require('express');
const router = express.Router();
const Animal = require("../src/models/Animal");

router.get("/", async (req, res) => {
    const pets = await Animal.findAll({raw: true});
    
    res.render("home", { pets });
});

router.get("/pet/:id", async (req, res) => {
    const id = req.params.id
    const pet = await Animal.findOne({ where: id,raw: true});
    res.render("petData", { pet });
});

module.exports = router;