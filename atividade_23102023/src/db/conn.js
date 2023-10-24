const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('aulanode23102023', 'root', 'bancodedados',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;