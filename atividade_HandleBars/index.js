const express = require("express");
const exphbs = require("express-handlebars");
const port = 3000;
const app = express();

var musicas = [
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

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
    const auth = true;

    res.render("home", { auth });
});

app.get("/musicas", (req, res) => {
    res.render("musicas", { musicas });
});

app.get("/musica", (req, res) => {
    res.render("musica");
});

app.get("/musica/buscar", (req, res) =>{
    let erro = false;
    const musicaEscolhida = musicas[parseInt(req.query.id - 1)];  
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

app.listen(port, () => {
    console.log(`Rondando na porta ${port}`);
});
