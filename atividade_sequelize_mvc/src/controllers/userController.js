const userModel = require("../models/User");

const getAll = async (req, res) => {
    const users = await userModel.getAll();

    return res.render("home", { users });
};

const getOne = async (req, res) => {
    const id = req.params.id;

    const user = await userModel.getOne(id);

    return res.render("userData", { user: user.get({ plain: true }) });
};

const getCreateUserPage = (_req, res) => {
    return res.render("addUser");
};

const createUser = async (req, res) => {
    await userModel.createUser(req.body);

    return res.redirect("/");
};

const deleteUser = async (req, res) => {
    const id = req.params.id;

    await userModel.deleteUser(id);

    return res.redirect("/");
};

const getUpdateUserPage = async (req, res) => {
    const id = req.params.id;

    const user = await userModel.getOne(id);

    return res.render("attUser", { user: user.get({ plain: true }) });
};

const updateUser = async (req, res) => {
    const id = req.params.id;

    await userModel.updateUser(req.body, id);

    return res.redirect("/");
};

module.exports = {
    getAll,
    getOne,
    getCreateUserPage,
    createUser,
    deleteUser,
    getUpdateUserPage,
    updateUser,
};
