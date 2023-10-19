const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const userMiddleware = require("./middlewares/userMiddleware");
const experienceMiddleware = require("./middlewares/experienceMiddleware");

router.get("/", userController.getAll);
router.get("/user/:id", userController.getOne);
router.get("/users/cadastrar", userController.getCreateUserPage);
router.get("/user/update/:id", userController.getUpdateUserPage);
router.get("/user/experience/adicionar/:id", userController.getAddExperiencePage);
router.post("/users/create", userMiddleware.validateData, userController.createUser);
router.post("/user/delete/:id", userController.deleteUser);
router.post("/user/att/:id", userMiddleware.validateData, userController.updateUser);
router.post("/user/experience/create", experienceMiddleware.validateData, userController.createUserExperience);

module.exports = router;
