const userModel = require('../models/User');

const getAll = async (_req, res) => {
    const users = await userModel.getAll();
    return res.render("home", { users })
}

module.exports = {
    getAll,
}