const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const { Experience } = require("./Xp");

const User = db.define("User", {
    nome: {
        type: DataTypes.STRING,
        required: true,
    },

    email: {
        type: DataTypes.STRING,
        required: true,
    },

    senha: {
        type: DataTypes.STRING,
        required: true,
    },

    ocupacao: {
        type: DataTypes.STRING,
        required: true,
    },

    alertas: {
        type: DataTypes.BOOLEAN,
    },
});

Experience.belongsTo(User);
User.hasMany(Experience);

const getAll = () => {
    return User.findAll({ raw: true });
}; 

const getOne = (id) => {
    return User.findOne({ where: { id: id }, include: Experience });
};

const createUser = async (data) => {
    data.alertas == "on" ? (data.alertas = true) : (data.alertas = false);

    await User.create(data);
};

const deleteUser = async (id) => {
    await User.destroy({ where: { id: id } });
};

const updateUser = async (data, id) => {
    data.alertas == "on" ? (data.alertas = true) : (data.alertas = false);

    await User.update(data, { where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    createUser,
    deleteUser,
    updateUser,
};
