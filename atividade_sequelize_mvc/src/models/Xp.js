const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const Experience = db.define('Experience', {
    empresa: {
        type: DataTypes.STRING,
        required: true
    },
    cargo: {
        type: DataTypes.STRING,
        required: true
    },
    descricao: {
        type: DataTypes.STRING,
    }
});

const createExperience = async (data) => {
    await Experience.create(data);
}

module.exports = {
    Experience,
    createExperience,
};