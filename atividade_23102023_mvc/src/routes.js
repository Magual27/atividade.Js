const express = require('express');
const router = express.Router();
const animalController = require("./controllers/animalController");
const animalMiddleware = require("./middlewares/animaMiddleware");

router.get("/", animalController.getAll);
router.get("/pet/:id", animalController.getOne);
router.get("/pets/cadastrar", animalController.getPetAddPage);
router.get("/pets/update/:id", animalController.getUpdatePetPage);
router.post("/pet/create", animalMiddleware.valData, animalController.createPet);
router.post("/pet/delete/:id", animalController.deletePet);
router.post("/pet/att/:id", animalMiddleware.valData, animalController.updatePet);

module.exports = router;