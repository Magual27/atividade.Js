const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const pathProduto = require("./caminhos_Produtos")
const pathUsuario = require("./caminhos_Usuarios")

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/produtos", pathProduto)

app.use("/usuarios", pathUsuario)

app.use((req, res) => {
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
});
