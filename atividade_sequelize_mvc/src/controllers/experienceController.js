const experienceModel = require("../models/Xp");

const getAddExperiencePage = (req, res) => {
    const id = req.params.id;

    return res.render("addExperience", { id });
}

const createUserExperience = async (req, res) => {
    await experienceModel.createExperience(req.body);

    return res.redirect(`/user/${req.body.UserId}`);
}

module.exports = {
    getAddExperiencePage,
    createUserExperience,
}