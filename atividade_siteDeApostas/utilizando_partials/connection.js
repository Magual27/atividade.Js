const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "empada_db",
  });

con.connect((err) => {
  if (err) {
    console.log("Não funcionou");
  } else {
    console.log("Conectado ao bando de dados");
  }
});

module.exports = con;