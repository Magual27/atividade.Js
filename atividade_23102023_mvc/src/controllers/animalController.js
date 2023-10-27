const animalModel = require("../models/Animal");

const getAll = async (_req, res) => {
    const pets = await animalModel.getAll()

    return res.render("home", { pets });
}

const getOne = async(req, res) => {
    const id = req.params.id;
    
    const pet = await animalModel.getOne(id);

    let dt = new Date(pet.data_nasc);

    const data_nasc = `${dt.getDate() + 1}/${dt.getMonth() + 1}/${dt.getFullYear()}`
    
    return res.render("petData", { pet, data_nasc });
}

const getPetAddPage = (req, res) => {
    return res.render("addPet");
}

const createPet = async (req, res) => {
    await animalModel.createPet(req.body);

    return res.redirect("/");
}

const deletePet = async (req, res) => {
    const id = req.params.id;
    
    await animalModel.deletePet(id);

    return res.redirect("/");
}

const getUpdatePetPage = async (req, res) => {
    const id = req.params.id;
    
    const pet = await animalModel.getOne(id);

    return res.render("attPet", { pet });
}

const updatePet = async (req, res) => {
    const id = req.params.id

    await animalModel.updatePet(req.body, id);

    return res.redirect("/");
}

module.exports = {
    getAll,
    getOne,
    getPetAddPage,
    createPet,
    deletePet,
    getUpdatePetPage,
    updatePet,
}