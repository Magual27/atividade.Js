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

    const querySelect = `SELECT id_livro, nome, id_categoria, categoria  FROM livros
                         JOIN categorias ON (categorias.id = livros.id_categoria)
                         WHERE id_categoria = ${idCategoria}
                         ORDER BY nome`;

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
                              res.render("livrosCategoria", {
                                  categorias: query2,
                                  val,
                              });
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

    const getLivroByID = `SELECT id_livro, nome, id_categoria, categoria FROM livros
                          JOIN categorias ON (id_categoria = categorias.id)
                          WHERE id_livro = ${idLivro}`;

    const getAutoresByID = `SELECT livros_autores.id_livro, nome, autor FROM livros_autores
                            JOIN livros ON (livros_autores.id_livro = livros.id_livro)
                            JOIN autores ON (livros_autores.id_autor = autores.id)
                            WHERE livros_autores.id_livro = ${idLivro}
                            ORDER BY autor`;

    con.query(getLivroByID, (err, query1) => {
        err
            ? console.log(err)
            : con.query(getAutoresByID, (err, query2) => {
                  err
                      ? console.log(err)
                      : res.render("livro", {
                            livro: query1[0],
                            autores: query2,
                        });
              });
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

    const getLivroCategoria = `SELECT id_livro, nome, id_categoria, categoria FROM livros
                               JOIN categorias ON (livros.id_categoria = categorias.id)
                               WHERE id_livro = ${idLivro}`;

    const query = `SELECT livros.id_livro, nome, id_autor, autor FROM livros_autores
                   JOIN livros ON (livros_autores.id_livro = livros.id_livro)
                   JOIN autores ON (livros_autores.id_autor = autores.id)
                   WHERE livros.id_livro = ${idLivro}`;

    con.query(getLivroCategoria, (err, query1) => {
        err
            ? console.log(err)
            : con.query(getCategorias, (err, query2) => {
                  err
                      ? console.log(err)
                      : con.query(query, (err, query3) => {
                            if (err) {
                                console.log(err);
                            } else {
                                if (query3.length == 1) {
                                    con.query(
                                        `SELECT * FROM autores WHERE id <> ${query3[0].id_autor}`,
                                        (err, query4) => {
                                            err
                                                ? console.log(err)
                                                : res.render("atualizarLivro", {
                                                      autoresLivro: query3,
                                                      autores: query4,
                                                      categorias: query2,
                                                      livroCategoria: query1[0],
                                                  });
                                        }
                                    );
                                } else {
                                    let querySelect = `SELECT * FROM autores WHERE id <> ${query3[0].id_autor} `;
                                    for (let i = 1; i < query3.length; i++) {
                                        querySelect += `AND id <> ${query3[i].id_autor} `;
                                    }
                                    con.query(querySelect, (err, query4) => {
                                        err
                                            ? console.log(err)
                                            : res.render("atualizarLivro", {
                                                  autoresLivro: query3,
                                                  autores: query4,
                                                  categorias: query2,
                                                  livroCategoria: query1[0],
                                              });
                                    });
                                }
                            }
                        });
              });
    });
});

router.post("/cadastrarAutor/enviar", (req, res) => {
    let erroCadastroDadoAutor;
    const autor = req.body.autor;

    const query = `INSERT INTO autores (autor) VALUES ("${autor}")`;

    if (autor == "") {
        erroCadastroDadoAutor = true;
        res.render("erros", { erroCadastroDadoAutor });
    } else {
        con.query(query, (err, query) => {
            err ? console.log(err) : console.log("query executada com sucesso");
            res.redirect("/");
        });
    }
});

router.post("/cadastrarLivro/enviar", (req, res) => {
    let erroCadastroLivroAutor = false;
    let erroCadastro = false;
    let erroCadastroDadosLivro = false;
    const autores = req.body.autores;
    const livro = req.body.nome;
    const categoria = req.body.categoria;

    const query = `INSERT INTO livros (nome, id_categoria)
                   VALUES ("${livro}", ${categoria})`;

    if (livro == "" || autores == undefined || categoria == 0) {
        erroCadastroDadosLivro = true;
        res.render("erros", { erroCadastroDadosLivro });
    } else {
        con.query(
            `SELECT nome FROM livros WHERE nome = "${livro}"`,
            (err, query1) => {
                if (err) {
                    console.log(err);
                } else {
                    if (query1 == false) {
                        con.query(query, (err, query2) => {
                            err
                                ? console.log(err)
                                : console.log("query executada com sucesso");
                        });
                        if (typeof autores === "string") {
                            con.query(
                                `SELECT livros_autores.id_livro, nome, autor FROM livros_autores
                                 JOIN livros ON (livros_autores.id_livro = livros.id_livro)
                                 JOIN autores ON (livros_autores.id_autor = autores.id)
                                 WHERE nome = ${livro} AND autor = ${autores}`,
                                (err, query3) => {
                                    if (query3 == undefined) {
                                        con.query(
                                            `SELECT * FROM livros WHERE nome = "${livro}"`,
                                            (err, query4) => {
                                                con.query(
                                                    `INSERT INTO livros_autores VALUES (${query4[0].id_livro}, ${autores})`,
                                                    (err, query) => {
                                                        err
                                                            ? console.log(err)
                                                            : console.log(
                                                                  "Insert na tabela executada com sucesso (um autor)"
                                                              );
                                                        res.redirect("/");
                                                    }
                                                );
                                            }
                                        );
                                    } else {
                                        erroCadastroLivroAutor = true;
                                        res.render("erros", {
                                            erroCadastroLivroAutor,
                                        });
                                    }
                                }
                            );
                        } else {
                            for (let i = 0; i < autores.length; i++) {
                                con.query(
                                    `SELECT livros_autores.id_livro, nome, autor FROM livros_autores
                                     JOIN livros ON (livros_autores.id_livro = livros.id_livro)
                                     JOIN autores ON (livros_autores.id_autor = autores.id)
                                     WHERE nome = ${livro} AND autor = ${autores[i]}`,
                                    (err, query5) => {
                                        if (query5 == undefined) {
                                            con.query(
                                                `SELECT * FROM livros WHERE nome = "${livro}"`,
                                                (err, query6) => {
                                                    con.query(
                                                        `INSERT INTO livros_autores VALUES (${query6[0].id_livro}, ${autores[i]})`,
                                                        (err, query) => {
                                                            err
                                                                ? console.log(
                                                                      err
                                                                  )
                                                                : console.log(
                                                                      "Insert na tabela executada com sucesso (vários autores)"
                                                                  );
                                                        }
                                                    );
                                                }
                                            );
                                        } else {
                                            erroCadastroLivroAutor = true;
                                            res.render("erros", {
                                                erroCadastroLivroAutor,
                                            });
                                        }
                                    }
                                );
                            }
                            res.redirect("/");
                        }
                    } else {
                        erroCadastro = true;
                        res.render("erros", { erroCadastro });
                    }
                }
            }
        );
    }
});

router.post("/atualizarDadosLivro/att/:id", (req, res) => {
    let erroAtualizar = false;
    let erroUpdateLivro = false;
    const idLivro = req.params.id;
    const livro = req.body.nome;
    const autores = req.body.autores;
    const categoria = req.body.categoria;

    const queryUpdate = `UPDATE livros
                         SET nome = "${livro}", id_categoria = ${categoria}
                         WHERE id_livro = ${idLivro}`;

    if (autores == undefined || livro == "") {
        res.render("erros", { erroAtualizar: true, idLivro });
    } else {
        con.query(
            `SELECT livros.id_livro, nome, id_autor, autor FROM livros_autores
             JOIN livros ON (livros_autores.id_livro = livros.id_livro)
             JOIN autores ON (livros_autores.id_autor = autores.id)
             WHERE livros.id_livro = ${idLivro}`,
            (err, query) => {
                if (err) {
                    console.log(err);
                } else {
                    if (query.length == 1) {
                        if (typeof autores === "string") {
                            const querySelect = `SELECT livros.id_livro, nome, id_autor, autor FROM livros_autores
                                                 JOIN livros ON (livros_autores.id_livro = livros.id_livro)
                                                 JOIN autores ON (livros_autores.id_autor = autores.id)
                                                 WHERE livros.id_livro <> ${idLivro} AND livros.nome = "${livro}" AND id_autor = ${autores}`;
                            const updateLivroAutor = `UPDATE livros_autores SET id_livro = ${idLivro}, id_autor = ${autores} WHERE id_livro = ${idLivro}`;
                            con.query(querySelect, (err, query1) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    if (query1 == false) {
                                        con.query(
                                            queryUpdate,
                                            (err, query2) => {
                                                err
                                                    ? console.log(err)
                                                    : console.log(
                                                          "TABELA: livros | Update feito com sucesso"
                                                      );
                                            }
                                        );
                                        con.query(
                                            updateLivroAutor,
                                            (err, query3) => {
                                                err
                                                    ? console.log(err)
                                                    : console.log(
                                                          "TABELA: livros_autores | Update feito com sucesso"
                                                      );
                                                res.redirect(
                                                    `/livros/livroEscolhido/${idLivro}`
                                                );
                                            }
                                        );
                                    } else {
                                        res.render("erros", {
                                            idLivro,
                                            erroUpdateLivro: true,
                                        });
                                    }
                                }
                            });
                        } else {
                            console.log("Está atualizando e adicionando");
                            console.log("UPDATE e INSERT");
                            for (let i = 0; i < query.length; i++) {
                                con.query(
                                    `SELECT livros.id_livro, nome, id_autor, autor FROM livros_autores
                                     JOIN livros ON (livros_autores.id_livro = livros.id_livro)
                                     JOIN autores ON (livros_autores.id_autor = autores.id)
                                     WHERE livros.id_livro <> ${idLivro} AND livros.nome = "${livro}" AND id_autor = ${autores[i]}`,
                                    (err, query2) => {
                                        console.log(query[i].id_autor);
                                        console.log(autores);
                                        // if (query2 == undefined) {
                                        //     con.query(
                                        //         queryUpdate,
                                        //         (err, query3) => {
                                        //             err
                                        //                 ? console.log(err)
                                        //                 : console.log(
                                        //                       "TABELA: livros | Update feito com sucesso"
                                        //                   );
                                        //         }
                                        //     );
                                        // }
                                    }
                                );
                            }
                        }
                    } else {
                        console.log(query);
                        console.log(
                            "Possivel atualizar, adicionar ou remover neste livro"
                        );
                        if (typeof autores === "string") {
                            console.log("Está removendo e atulizando");
                            const autor = [autores];
                        } else {
                            let listaAutoresAntigos = [];
                            for (let i = 0; i < query.length; i++) {
                                listaAutoresAntigos.push(query[i].id_autor);
                            }
                            if (autores.length < query.length) {
                                console.log("UPDATE e DELETE");
                            } else if (autores.length == query.length) {
                                console.log(
                                    "Lista autores formulario: " +
                                        autores +
                                        "\nLista autores antigos: " +
                                        listaAutoresAntigos
                                );
                                console.log("APENAS UPDATE");
                            } else if (autores.length > query.length) {
                                console.log("UPDATE e INSERT");
                            }
                        }
                    }
                }
            }
        );
    }
    // if (livro == "" || autores == undefined) {
    //     erroAtualizar = true;
    //     res.render("erros", { erroAtualizar, idLivro });
    // } else {
    //     con.query(queryUpdate, (err, query) => {
    //         err
    //             ? console.log(err)
    //             : res.redirect(`/livros/livroEscolhido/${idLivro}`);
    //     });
    // }
});

router.post("/deletarLivro/:id", (req, res) => {
    const idLivro = req.params.id;

    const deleteByID = `DELETE FROM livros
                        WHERE id_livro = ${idLivro}`;

    const deleteByIDLivrosAutores = `DELETE FROM livros_autores
                                     WHERE id_livro = ${idLivro}`;

    con.query(deleteByIDLivrosAutores, (err, query1) => {
        err
            ? console.log(err)
            : con.query(deleteByID, (err, query2) => {
                  err ? console.log(err) : res.redirect("/");
              });
    });
});

module.exports = router;
