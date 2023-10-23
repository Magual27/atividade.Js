const express = require('express');
const router = express.Router();
const Animal = require("../src/models/Animal");

router.get("/", async (req, res) => {
    const pets = await Animal.findAll({raw: true})
    
    res.render("home", { pets });
});

module.exports = router;