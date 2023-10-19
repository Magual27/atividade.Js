const { DataTypes } = require("sequelize");

const db = require("../db/conn");

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

const getAll = () => {
    return User.findAll({ raw: true });
};

const getOne = (id) => {
    return User.findOne({ where: { id: id }, raw: true });
};

const createUser = async (data) => {
    await User.create(data);
};

const deleteUser = async (id) => {
    await User.destroy({ where: { id: id } })
}

const updateUser = async (data, id) => {
    await User.update(data, {where: { id: id }});
}

module.exports = {
    User,
    getAll,
    getOne,
    createUser,
    deleteUser,
    updateUser,
};
