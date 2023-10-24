const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('aulanode23102023', 'root', 'sctS3nJn@sql',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;