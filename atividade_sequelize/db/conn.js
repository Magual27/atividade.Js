const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('aulanode', 'root', 'sctS3nJn@sql',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;