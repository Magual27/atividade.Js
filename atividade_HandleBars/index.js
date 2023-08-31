const express = require("express");
const exphbs = require("express-handlebars");
const port = 3000;
const app = express();
const pathMusica = require("./caminhos_musica")

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

app.use(pathMusica)

app.use((req, res) => {
    res.status(404).render("404error")
})

app.listen(port, () => {
    console.log(`Rondando na porta ${port}`);
});
