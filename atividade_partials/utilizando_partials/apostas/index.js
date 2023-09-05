const express = require("express");
const router = express.Router();
const exphbs = require("express-handlebars");
const app = express();
const mysql = require("mysql2");

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

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

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


router.get("/apostas/cadastrar", (req, res) => {
  res.render("cadastrarJogo");
});

router.post("/apostas/salvar", (req, res) => {
  con.execute(
    `INSERT INTO apostas (nome)
     VALUE ("${req.body.nome}")`,
    (err, query) => {
      res.render("cadastrarJogo");
      console.log(query);
    }
  );
});

module.exports = router;
