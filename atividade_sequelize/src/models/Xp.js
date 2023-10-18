const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const User = require('./User');

const Experience = db.define('Experience', {
    empresa: {
        type: DataTypes.STRING,
        required: true
    },
    cargo: {
        type: DataTypes.STRING,
        required: true
    },
    dercricao: {
        type: DataTypes.STRING,
    }
});

Experience.belongsTo(User);

module.exports = Experience;