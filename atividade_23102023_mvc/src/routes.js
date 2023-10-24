const express = require('express');
const router = express.Router();
// const Animal = require("../src/models/Animal");
const animalController = require("./controllers/animalController");
const animalMiddleware = require("./middlewares/animaMiddleware");

// router.get("/", async (req, res) => {
//     const pets = await Animal.findAll({raw: true});
    
//     res.render("home", { pets });
// });

// router.get("/pet/:id", async (req, res) => {
//     const id = req.params.id
//     const pet = await Animal.findOne({ where: {id: id}, raw: true});
//     res.render("petData", { pet });
// });

// router.get("/pets/cadastrar", (req, res) => {
//     res.render("addPet");
// });

// router.post("/pet/create", async (req, res) => {
//     const nome = req.body.nome
//     const raca = req.body.raca
//     const tipo = req.body.tipo
//     const data_nasc = req.body.data_nasc
//     const descricao = req.body.descricao

//     if (nome == "" || raca == "" || tipo == "" || data_nasc == "") {
//         return res.send("<script>alert('Preencha todos os dados para o cadastro'); window.location.replace('/user/cadastrar')</script>");
//     }

//     await Animal.create({ nome, raca, tipo, data_nasc, descricao });

//     res.redirect("/");
// });

router.get("/", animalController.getAll);
router.get("/pet/:id", animalController.getOne);
router.get("/pets/cadastrar", animalController.getPetAddPage);
router.get("/pets/update/:id", animalController.getUpdatePetPage);
router.post("/pet/create", animalMiddleware.valData, animalController.createPet);
router.post("/pet/delete/:id", animalController.deletePet);
router.post("/pet/att/:id", animalMiddleware.valData, animalController.updatePet);

module.exports = router;