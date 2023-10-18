const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = db.define('User', {
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
    }
});

module.exports = User;