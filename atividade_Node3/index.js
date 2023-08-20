const express = require("express")
const app = express()
const path = require("path")
const basePath = path.join(__dirname, "templates")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/home.html`)
})

app.get("/cachorro", (req, res) => {
    res.sendFile(`${basePath}/cachorro.html`)
})

app.get("/cachorro/:nome", (req, res) => {
    res.sendFile(`${basePath}/cachorro.html`)
    const nome = req.params.nome
    console.log(`O nome do seu cachorro é ${nome}`);
})

app.get((req, res) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(3000, () => {
    console.log("Rodando na porta: 3000");
})