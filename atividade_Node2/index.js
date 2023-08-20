const express = require("express")
const app = express()
const path = require("path")
const basePath = path.join(__dirname, "templates")

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/home.html`)
})

app.get("/venom", (req, res) => {
    res.sendFile(`${basePath}/venom.html`)
})

app.get("/venom/:caracteristica", (req, res) => {
    res.sendFile(`${basePath}/venom.html`)
    const caracVenom = req.params.caracteristica
    console.log(`Seu venom é: ${caracVenom}`);
})

app.listen(3000, () => {
    console.log("Rodando na porta: 3000");
})