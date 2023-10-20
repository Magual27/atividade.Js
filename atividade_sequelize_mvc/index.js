const express = require("express");
const port = 3000;
const exphbs = require("express-handlebars");
const app = express();
const conn = require("./src/db/conn");
const routes = require("./src/routes");

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

const hbs = exphbs.create({
    partialsDir: ["src/views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "src/views");

app.use(express.static("src/public"));

app.use(routes);

app.use((req, res) => {
    res.status(404).render("404");
});

conn.sync({ force: true })
    .then(() => {
        app.listen(3000);
    })
    .catch((error) => {
        console.log("Não funcionou", error);
    });
