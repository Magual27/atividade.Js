const express = require("express");
const router = express.Router();
const exphbs = require("express-handlebars");
const app = express();
const con = require("../connection");

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

router.get("/jogos/cadastrar", (req, res) => {
  res.render("cadastrarJogo");
});

router.get(`/jogos/:id`, (req, res) => {
  con.execute(
    `SELECT * FROM jogos
         WHERE id = ${req.params.id}`,
    (err, query) => {
      res.render("jogo", { jogo: query[0] });
    }
  );
});

router.post("/jogos/salvar", (req, res) => {
  con.execute(
    `INSERT INTO jogos (jogo, plataforma)
         VALUES ("${req.body.nome}", "${req.body.plataforma}")`,
    (err, query) => {
      res.redirect("/");
    }
  );
});

router.post("/deletar/:id", (req, res) => {
  const query = `DELETE FROM jogos WHERE id = ${req.params.id}`;

  con.query(query);

  res.redirect("/");
});

router.get("/updates/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM jogos WHERE id = ${id}`;

  con.query(sql, (err, query) => {
    const jogoEscolhido = query[0];
    err ? console.log(err) : res.render("update", { jogoEscolhido });
  });
});

router.post("/jogos/att/:id", (req, res) => {
  const sql = `UPDATE jogos
               SET jogo = "${req.body.nome}",plataforma = "${req.body.plataforma}"
               WHERE id = ${req.params.id}`;

  con.query(sql, (err) => {
    err ? console.log(err) : res.redirect("/");
  });
});

module.exports = router;
