const express = require("express");
const router = express.Router();
const exphbs = require("express-handlebars");
const app = express();
const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "minhaEmpresa_db",
});

const hbs = exphbs.create({
    partialsDir: ["views/partials"], // --> Uso do Partials
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// ----------- endpoints --------------

app.get("/musicas/:id", (req, res) => {
    const musicaSelecionada = songs[parseInt(req.params.id) - 1];

    res.render("musica", { choicedMusic: musicaSelecionada });
});

router.get("/musicas/cadastrar", (req, res) => {
    res.render("cadastrarMusica");
});

router.post("/musicas/salvar", (req, res) => {
    con.execute(
        `
        INSERT INTO musicas ("nome", "artista", "categoria")
        VALUES ("${req.body.nome}", "${req.body.artista}", "${req.body.tipo}")
    `,
        (err, query) => {
            res.render("cadastrarMusica", { query });
        }
    );
    // console.log(req.body)
});

module.exports = router;
