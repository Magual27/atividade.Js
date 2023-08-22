const express = require("express");
const router = express.Router();

router.get("/cadastrar", (req, res) => {
    res.render("cadastrarProdutos");
});

router.post("/enviar", (req, res) => {
    res.render("produtoCadastrado")
    console.log(req.body);
});

module.exports = router;
