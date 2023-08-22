const express = require("express");
const router = express.Router();

router.get("/cadastrar", (req, res) => {
    res.render("cadastrarUsuario")
})

router.post("/enviar", (req, res) =>{
    res.render("usuarioCadastrado")
    console.log(req.body);
})

module.exports = router;
