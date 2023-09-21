require("dotenv").config()
const mysql = require("mysql2");

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
});

con.connect((err) => {
    if (err) {
        console.log("Falha ao conectar ao banco de dados\n" + err);
    } else {
        console.log("Conectado ao banco de dados");
    }
});

module.exports = con;
