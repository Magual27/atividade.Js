const express = require("express");
const router = express.Router();
const exphbs = require("express-handlebars");
const app = express();
const con = require("../connection");

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

router.get("/livrosPorCategoria", (req, res) => {
    let val = false;
    
    const idCategoria = req.query.categoria;

    const getAllCategorias = `SELECT * FROM categorias`;

    const querySelect = `SELECT id_livro, nome, autor, id_categoria, categoria  FROM livros
                         JOIN autores ON (autores.id = livros.id_autor)
                         JOIN categorias ON (categorias.id = livros.id_categoria)
                         WHERE id_categoria = ${idCategoria}`;

    if (idCategoria == 0) {
        res.redirect("/");
    } else {
        con.query(querySelect, (err, query1) => {
            err
                ? console.log(err)
                : con.query(getAllCategorias, (err, query2) => {
                      if (err) {
                          console.log(err);
                      } else {
                          if (query1 == false) {
                              val = true;
                              res.render("livrosCategoria", {categorias: query2, val});
                          } else {
                              con.query(querySelect, (err, query3) => {
                                  res.render("livrosCategoria", {
                                      ChoicedCate: query1,
                                      categorias: query2,
                                      categoria: query3[0],
                                  });
                              });
                          }
                      }
                  });
        });
    }
});

router.get("/livroEscolhido/:id", (req, res) => {
    const idLivro = req.params.id;

    const getAllbyID = `SELECT id_livro, nome, autor, categoria  FROM livros
                        JOIN autores ON (autores.id = livros.id_autor)
                        JOIN categorias ON (categorias.id = livros.id_categoria)
                        WHERE id_livro = ${idLivro}`;

    con.query(getAllbyID, (err, query) => {
        err ? console.log(err) : res.render("livro", { livro: query[0] });
    });
});

router.get("/cadastrarLivro", (req, res) => {
    const getCategorias = `SELECT * FROM categorias`;

    const getAutores = `SELECT * FROM autores`;

    con.query(getCategorias, (err, query1) => {
        err
            ? console.log(err)
            : con.query(getAutores, (err, query) => {
                  err
                      ? console.log(err)
                      : res.render("cadastrarLivro", {
                            autores: query,
                            categorias: query1,
                        });
              });
    });
});

router.get("/cadastrarAutor", (req, res) => {
    res.render("cadastrarAutor");
});

router.get("/atualizarDadosLivro/:id", (req, res) => {
    const idLivro = req.params.id;

    const getCategorias = `SELECT * FROM categorias`;

    const getAutores = `SELECT * FROM autores`;

    const query = `SELECT id_livro, nome, id_autor, autor, id_categoria, categoria FROM livros
                   JOIN autores ON (autores.id = livros.id_autor)
                   JOIN categorias ON (categorias.id = livros.id_categoria)
                   WHERE id_livro = ${idLivro}`;

    con.query(query, (err, query1) => {
        err
            ? console.log(err)
            : con.query(getAutores, (err, query2) => {
                  err
                      ? console.log(err)
                      : con.query(getCategorias, (err, query3) => {
                            res.render("atualizarLivro", {
                                categorias: query3,
                                autores: query2,
                                dados: query1[0],
                            });
                        });
              });
    });
});

router.post("/cadastrarAutor/enviar", (req, res) => {
    const autor = req.body.autor;

    const query = `INSERT INTO autores (autor) VALUES ("${autor}")`;

    if (autor == "") {
        res.render("erroCadastro");
    } else {
        con.query(query, (err, query) => {
            err ? console.log(err) : console.log("query executada com sucesso");
            res.redirect("/");
        });
    }
});

router.post("/cadastrarLivro/enviar", (req, res) => {
    const livro = req.body.nome;
    const autor = req.body.autor;
    const categoria = req.body.categoria;

    const query = `INSERT INTO livros (nome, id_autor, id_categoria)
                   VALUES ("${livro}", ${autor}, ${categoria})`;

    if (livro == "" || autor == 0 || categoria == 0) {
        res.render("erroCadastro");
    } else {
        con.query(query, (err, query) => {
            err ? console.log(err) : console.log("query executada com sucesso");
            res.redirect("/");
        });
    }
});

router.post("/atualizarDadosLivro/att/:id", (req, res) => {
    const idLivro = req.params.id;
    const livro = req.body.nome;
    const autor = req.body.autor;
    const categoria = req.body.categoria;

    const queryUpdate = `UPDATE livros
                         SET nome = "${livro}", id_autor = ${autor}, id_categoria = ${categoria}
                         WHERE id_livro = ${idLivro}`;
    if (livro == "") {
        res.render("erroAtualizar", { idLivro });
    } else {
        con.query(queryUpdate, (err, query) => {
            err
                ? console.log(err)
                : res.redirect(`/livros/livroEscolhido/${idLivro}`);
        });
    }
});

router.post("/deletarLivro/:id", (req, res) => {
    const idLivro = req.params.id;

    const deleteByID = `DELETE FROM livros
                        WHERE id_livro = ${idLivro}`;

    con.query(deleteByID, (err, query) => {
        err ? console.log(err) : res.redirect("/");
    });
});

module.exports = router;
