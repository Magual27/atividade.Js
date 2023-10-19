const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const { User } = require('./User');

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

Experience.belongsTo(User);

const getUserExperience = (id) => {
    return Experience.findAll({where: {UserId: id}, raw: true});
}

const createExperience = async(data) => {
    await Experience.create(data);
}

module.exports = {
    Experience,
    getUserExperience,
    createExperience,
};