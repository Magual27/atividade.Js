const express = require("express"); // importando modulo express
const port = 3000;
const exphbs = require("express-handlebars"); // importando modulo handlebars
const app = express();
const mysql = require("mysql2");

const musicas = require("./musicas"); // importando modulo interno musicas

//BODY
app.use(
    express.urlencoded({
        extended: true,
    })
);
// importar JSON
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "minhaEmpresa_db",
});

con.connect((err) => {
    if (err) {
        console.log("Não funcionou");
        console.log(err);
    } else {
        console.log("Conectado ao Banco de dados");
    }
});

const hbs = exphbs.create({
    partialsDir: ["views/partials"], // --> Uso do Partials
});

// construção das handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//css
app.use(express.static("public"));

// utilizar rotas/caminhos do modulo musicas
app.use(musicas);

// vetor de musicas
// const songs = [
//   {
//     id: 1,
//     nome: "When You're Gone",
//     artista: "Avril Lavigne",
//     tipo: "Rock",
//   },
//   {
//     id: 2,
//     nome: "Demons",
//     artista: "Imagine Dragons",
//     tipo: "Rock",
//   },
//   {
//     id: 3,
//     nome: "is This Love",
//     artista: "Bob Marley",
//     tipo: "Reggae",
//   },
//   {
//     id: 4,
//     nome: "Runaway",
//     artista: "AURORA",
//     tipo: "Indie",
//   },
//   {
//     id: 5,
//     nome: "Master of Puppets",
//     artista: "Metalica",
//     tipo: "Rock",
//   },
//   {
//     id: 6,
//     nome: "How you like that",
//     artista: "BLACKPINK",
//     tipo: "Kpop",
//   },
//   {
//     id: 7,
//     nome: "Crawling",
//     artista: "Linkin Park",
//     tipo: "Rock",
//   },
// ];

app.get("/", (req, res) => {
    con.execute("SELECT * FROM musicas", (err, query) => {
       res.render("home", { query });
    })
   
});

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(port, () => {
    console.log("Projeto funcionando, acesse localhost:" + port);
});
