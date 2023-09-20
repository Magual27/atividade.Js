const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const rotasLivro = require("./rotasLivraria/routes");
const con = require("./connection");

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    const getAll = `SELECT * FROM livros
                    JOIN autores ON (autores.id = livros.id_autor)
                    JOIN categorias ON (categorias.id = livros.id_categoria)`;

    const getAllCategorias = `SELECT * FROM categorias`;

    con.query(getAll, (err, query1) => {
        err
            ? console.log(err)
            : con.query(getAllCategorias, (err, query2) => {
                  err
                      ? console.log(err)
                      : res.render("home", {
                            livros: query1,
                            categorias: query2,
                        });
              });
    });
});

app.use("/livros", rotasLivro);

app.use((req, res) => {
    res.status(404).render("erro404");
});

app.listen(port, () => console.log(`Server rodando na porta ${port}`));
