const express = require("express");
const port = 3000;
const exphbs = require("express-handlebars");
const app = express();
const conn = require("./db/conn");
const User = require("./models/User");
const Experience = require('./models/Xp')
const { where } = require("sequelize");
const { reset } = require("nodemon");

//BODY
app.use(
    express.urlencoded({
        extended: true,
    })
);
// importar JSON
app.use(express.json());

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

// construção das handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//css
app.use(express.static("public"));

app.get("/", async (req, res) => {
    const users = await User.findAll({raw: true})
    
    res.render("home", { users });
});

app.get("/users/cadastrar", (req, res) => {
    res.render("addUser");
});

app.post("/users/create", async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const ocupacao = req.body.ocupacao;
    let alertas = req.body.alerta;

    alertas == "on" ? (alertas = true) : (alertas = false);

    if (email.includes(".com") == false) {
        return res.send("<script>alert('Está faltando '.com' no email'); window.location.replace('/users/cadastrar')</script>")
    }

    if (nome == "" || email == "" || senha == "" || ocupacao == "" ) {
        return res.send("<script>alert('Preencha todos os dados'); window.location.replace('/users/cadastrar')</script>")
    }

    await User.create({ nome, email, senha, ocupacao, alertas });

    res.redirect('/')
});

app.get('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    
    const user = await User.findOne({where: id, raw: true});

    res.render('userData', { user });
});

app.post('/user/delete/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    
    await User.destroy({where: {id: id}});

    res.redirect('/')
});

app.get('/user/update/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    
    const user = await User.findOne({where: id, raw: true});

    res.render('attUser', { user });
});

app.post('/user/att/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const ocupacao = req.body.ocupacao;
    let alertas = req.body.alerta;

    alertas == "on" ? (alertas = true) : (alertas = false);

    if (email.includes(".com") == false) {
        return res.send("<script>alert('Está faltando '.com' no email'); window.location.replace('/users/cadastrar')</script>")
    }

    if (nome == "" || email == "" || senha == "" || ocupacao == "" ) {
        return res.send("<script>alert('Preencha todos os dados'); window.location.replace('/users/cadastrar')</script>")
    }

    const user = {
        nome,
        email,
        senha,
        ocupacao
    }

    await User.update(user , {where: {id: id}});

    res.redirect('/')
})

app.post('/user/update/att', async (req, res) => {
    
})

app.use((req, res) => {
    res.status(404).render("404");
});

conn.sync({force: true})
    .then(() => {
        app.listen(3000);
    })
    .catch((error) => {
        console.log("Não funcionou", error);
    });
