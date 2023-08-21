const express = require("express");
const app = express();
const path = require("path");
const basePath = path.join(__dirname, "templates");
const pathProduto = require("./caminhos_produto");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/home.html`);
});

app.use(pathProduto);

app.use((req, res) => {
    res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(8080, () => {
    console.log("Rondando na porta 8080");
});
