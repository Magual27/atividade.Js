const express = require("express");
const exphbs = require("express-handlebars");
const port = 3000;
const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
    const auth = true;

    res.render("home", { auth });
});

app.get('/musicas', (req, res) => {
    const musics = [
        {
            titulo: "Carrosel",
            categoria: "rock",
            banda: "Iron Maiden"
        },
        {
            titulo: "Batendo na porta",
            categoria: "rock",
            banda: "Guns N Roses"
        },
        {
            titulo: "Pinguin",
            categoria: "ensino",
            banda: "bla bla bla"
        },
        {
            titulo: "Gato",
            categoria: "ensino",
            banda: "bla bla bla"
        }]

    res.render('blog', { musics })
})

app.get("/gatos", (req, res) => {
    const gatos = [
        {
            nome: "Julia",
            idade: 2,
            dono: "Jonathan",
        },
        {
            nome: "Apollogia",
            idade: 5,
            dono: "Apollo"
        },
        {
            nome: "Miguelito",
            idade: 1,
            dono: "Miguel"
        }
    ]

    res.render("gatos", { gatos });
});

app.listen(port, () => {
    console.log(`Rondando na porta ${port}`);
});
