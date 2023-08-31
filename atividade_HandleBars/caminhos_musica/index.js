const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const musicas = [
    {
        id: 1,
        nome: "Jumpman",
        artista: "Drake",
    },
    {
        id: 2,
        nome: "Murder on my mind",
        artista: "YNW Melly",
    },
    {
        id: 3,
        nome: "Alredy Rich",
        artista: "Yeat",
    },
];

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/musicas", (req, res) => {
    res.render("musicas", { musicas });
});

app.get("/musica", (req, res) => {
    res.render("musica");
});

app.get("/musica/buscar", (req, res) =>{
    let erro = false;
    
    const musicaEscolhida = musicas[req.query.id - 1];  
    
    if (req.query.id > musicas.length || req.query.id == 0) {
        erro = true;    
    }       
    
    res.render("musica", { musicaEscolhida, erro })
})

app.get("/cadastrar", (req, res) => {
    res.render("cadastrarMusica");
});

app.post("/cadastrar/enviar", (req, res) => {
    console.log(req.body);
});

module.exports = app