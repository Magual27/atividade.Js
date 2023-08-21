const expresso = require("express")

const aplicacao = expresso()

const porta = 8080

const path = require("path")

const basePath = path.join(__dirname, "templates")

aplicacao.get("/", (req, res) => {
    res.sendFile(`${basePath}/home.html`)
})

aplicacao.get("/", (req, res) => {
    res.sendFile(`${basePath}/cavalo.html`)
})

aplicacao.listen(porta, () => {
    console.log(`Aplicação funcionando, porta -> ${porta}`);
})

