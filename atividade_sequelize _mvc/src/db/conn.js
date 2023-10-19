const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('aulanode', 'root', 'bancodedados',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;