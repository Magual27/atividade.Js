const express = require("express");
const port = 3000;
const exphbs = require("express-handlebars");
const app = express();
const conn = require("./src/db/conn");
const Animal = require("./src/models/Animal");

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

const hbs = exphbs.create({
    partialsDir: ["src/views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "src/views");

app.use(express.static("src/public"));

app.get("/", async (req, res) => {
    const pets = await Animal.findAll({ raw: true });

    res.render("home", { pets });
});

app.get("/pet/:id", async (req, res) => {
    const id = req.params.id;

    const pet = await Animal.findOne({ where: { id: id }, raw: true });

    let dt = new Date(pet.data_nasc);

    const data_nasc = `${dt.getDate() + 1}/${dt.getMonth() + 1}/${dt.getFullYear()}`

    res.render("petData", { pet, data_nasc });
});

app.get("/pets/cadastrar", (req, res) => {
    res.render("addPet");
});

app.get("/pets/update/:id", async (req, res) => {
    const id = req.params.id;

    const pet = await Animal.findOne({ where: { id: id }, raw: true });

    res.render("attPet", { pet });
});

app.post("/pet/create", async (req, res) => {
    const nome = req.body.nome;
    const raca = req.body.raca;
    const tipo = req.body.tipo;
    const data_nasc = req.body.data_nasc;
    const descricao = req.body.descricao;

    if (nome == "" || raca == "" || tipo == "" || data_nasc == "") {
        res.send(
            "<script>alert('Preencha todos os dados para o cadastro'); window.location.replace('/pets/cadastrar')</script>"
        );
    }

    await Animal.create({ nome, raca, tipo, data_nasc, descricao });

    res.redirect("/");
});

app.post("/pet/att", async (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const raca = req.body.raca;
    const tipo = req.body.tipo;
    const data_nasc = req.body.data_nasc;
    const descricao = req.body.descricao;

    if (nome == "" || raca == "" || tipo == "" || data_nasc == "") {
        res.send(
            "<script>alert('Preencha todos os dados para o cadastro'); window.location.replace('/pets/cadastrar')</script>"
        );
    }

    const dataPet = { nome, raca, tipo, data_nasc, descricao };

    await Animal.update(dataPet, { where: { id: id } });

    res.redirect(`/pet/${id}`);
});

app.post("/pet/delete/:id", async (req, res) => {
    const id = req.params.id;

    await Animal.destroy({ where: { id: id } });

    res.redirect("/")
});

app.use((req, res) => {
    res.status(404).render("404");
});

conn.sync({ force: true })
    .then(() => {
        app.listen(port);
    })
    .catch((error) => {
        console.log("Não funcionou", error);
    });
