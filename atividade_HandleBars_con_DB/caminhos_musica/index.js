const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const mysql = require("mysql2");
require("dotenv").config();

const con = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}); 

// app.use(
//     express.urlencoded({
//         extended: true,
//     })
// );

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/musicas", (req, res) => {
    con.execute("SELECT * FROM tbl_musicas", (err, query) => {
        res.render("musicas", { query });
    });
});

app.get("/musica", (req, res) => {
    res.render("musica");
});

app.get("/musica/buscar", (req, res) => {
    let erro = false;

    con.execute(
        `SELECT * FROM tbl_musicas WHERE id = ${req.query.id}`,
        (err, query) => {
            if (query == undefined || query == false) {
                erro = true;
                res.render("musica", { erro });
            } else {
                res.render("musica", { musicaEscolhida: query[0] });
            }
        }
    );
});

app.get("/cadastrar", (req, res) => {
    res.render("cadastrarMusica");
});

app.post("/cadastrar/enviar", (req, res) => {
    let ver = false;

    if (req.body.musica != "" && req.body.artista != "") {
        con.execute(
            `INSERT INTO tbl_musicas (nome_musica, artista)
             Values ("${req.body.musica}", "${req.body.artista}")`
        );
    } else {
        ver = true;
    }

    res.render("cadastrarMusica", { ver });
});

module.exports = app;