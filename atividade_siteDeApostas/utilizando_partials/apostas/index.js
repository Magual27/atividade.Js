const express = require("express");
const router = express.Router();
const exphbs = require("express-handlebars");
const app = express();
// const mysql = require("mysql2");
const con = require("../connection");

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

router.get("/apostas/cadastrar", (req, res) => {
    res.render("cadastrarJogo");
});

router.get(`/apostas/:id`, (req, res) => {
    con.execute(
        `SELECT * FROM apostas
         WHERE id = ${req.params.id}`,
        (err, query) => {
            res.render("aposta", { jogo: query[0] });
        }
    );
});

router.post("/apostas/salvar", (req, res) => {
    con.execute(
        `INSERT INTO apostas (nome)
         VALUE ("${req.body.nome}")`,
        (err, query) => {
            res.render("cadastrarJogo");
        }
    );
});

module.exports = router;
