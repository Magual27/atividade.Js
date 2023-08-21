const express = require("express");
const app = express();
const exphbs = require("handlebars");
const port = 3000;

app.enginer("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.send("Olá");
});

app.listen(port, () => {
    console.log(`Rondando na porta ${port}`);
});
