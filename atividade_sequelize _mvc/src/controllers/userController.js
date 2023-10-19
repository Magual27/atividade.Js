const userModel = require("../models/User");
const experienceModel = require("../models/Xp");

const getAll = async (req, res) => {
    const users = await userModel.getAll();

    return res.render("home", { users });
};

const getOne = async (req, res) => {
    const id = req.params.id;

    const user = await userModel.getOne(id);

    const experiencia = await experienceModel.getUserExperience(id);

    return res.render("userData", { user, experiencia });
};

const getCreateUserPage = (_req, res) => {
    return res.render("addUser");
};

const createUser = async (req, res) => {
    req.body.alertas == "on"
        ? (req.body.alertas = true)
        : (req.body.alertas = false);

    await userModel.createUser(req.body);

    return res.redirect("/");
};

const deleteUser = async (req, res) => {
    const id = req.params.id;

    await userModel.deleteUser(id);

    return res.redirect("/");
};

const getUpdateUserPage = async (req, res) => {
    const id = req.params.id
    
    const user = await userModel.getOne(id);

    return res.render("attUser", { user });
};

const updateUser = async (req, res) => {
    const id = req.params.id;

    await userModel.updateUser(req.body, id);

    return res.redirect("/");
};

const getAddExperiencePage = (req, res) => {
    const id = req.params.id;

    return res.render("addExperience", { id });
}

const createUserExperience = async (req, res) => {
    await experienceModel.createExperience(req.body);

    return res.redirect(`/user/${req.body.UserId}`);
}

module.exports = {
    getAll,
    getOne,
    getCreateUserPage,
    createUser,
    deleteUser,
    getUpdateUserPage,
    updateUser,
    getAddExperiencePage,
    createUserExperience,
};
