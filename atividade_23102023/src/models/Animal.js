const db = require('../db/conn')

const { DataTypes } = require("sequelize");

const Animal = db.define('animal', {
    nome: {
        type: DataTypes.STRING,
    },
    raca: {
        type: DataTypes.STRING,
        required: true,
    },
    tipo: {
        type: DataTypes.STRING,
        required: true,
    },
    descricao: {
        type: DataTypes.STRING,
    },
    data_nasc: {
        type: DataTypes.DATE,
    }
});

module.exports = Animal