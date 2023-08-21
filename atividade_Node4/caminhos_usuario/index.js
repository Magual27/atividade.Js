const express = require("express");
const router = express.Router();
const path = require("path");
const basePath = path.join(__dirname, "../templates");

router.get("/usuarios", (req, res) => {
    res.sendFile(`${basePath}/usuario.html`)
})

router.get("/usuarios/cadastrar", (req, res) => {
  res.sendFile(`${basePath}/cadastrarUsers.html`);
});

router.post("/usuarios/enviar", (req, res) => {
  console.log(req.body);
});

module.exports = router;
