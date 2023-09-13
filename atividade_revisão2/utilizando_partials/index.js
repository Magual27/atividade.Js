const express = require("express");
const port = 3000;
const exphbs = require("express-handlebars");
const app = express();
const con = require("./connection");
const jogos = require("./routes");

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(jogos);

app.get("/", (req, res) => {
    con.execute("SELECT * FROM jogos", (err, query) => {
        res.render("home", { query });
    });
});

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(port, () => {
    console.log("Projeto funcionando, acesse localhost:" + port);
});
