const { log } = require("console");
const express = require("express");
const router = express.Router();
const path = require("path");
const basePath = path.join(__dirname, "../templates");

router.get("/produtos", (req, res) => {
    res.sendFile(`${basePath}/produtos.html`)
})

router.get("/produtos/cadastrar", (req, res) => {
    res.sendFile(`${basePath}/cadastrarProdutos.html`);
});

router.post("/produtos/enviar", (req, res) => {
    res.sendFile(`${basePath}/produtos.html`);
    console.log(req.body);
});

module.exports = router;
