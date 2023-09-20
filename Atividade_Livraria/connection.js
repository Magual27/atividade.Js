const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "",
});

con.connect((err) => {
    if (err) {
        console.log("Falha ao conectar ao banco de dados\n" + err);
    } else {
        console.log("Conectado ao banco de dados");
    }
});

module.exports = con;
