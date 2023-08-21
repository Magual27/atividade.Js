const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Olá World");
})

app.get("/url", (req, res) => {
    res.send("Eu sou foda")
})

app.get("/")

app.listen(port, () => {
    console.log(`App sucata afundado funcionando: ${port}`);
})