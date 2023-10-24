const db = require('../db/conn')

const { DataTypes } = require("sequelize");

const Animal = db.define('animal', {
    nome: {
        type: DataTypes.STRING,
        required: true,
    },
    raca: {
        type: DataTypes.STRING,
        required: true,
    },
    tipo: {
        type: DataTypes.STRING,
        required: true,
    },
    data_nasc: {
        type: DataTypes.DATE,
    },
    descricao: {
        type: DataTypes.STRING,
    },
});


module.exports = Animal;