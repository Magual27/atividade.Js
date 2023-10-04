CREATE DATABASE livraria_db;
USE livraria_db;

CREATE TABLE livros (
	id_livro INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    id_autor INT,
    id_categoria INT,
    CONSTRAINT Fk_autor FOREIGN KEY (id_autor) REFERENCES autores(id),
    CONSTRAINT Fk_categoria FOREIGN KEY (id_categoria) REFERENCES categorias(id)
);

CREATE TABLE autores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    autor VARCHAR(255) NOT NULL
);

CREATE TABLE categorias (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    categoria VARCHAR(255) NOT NULL
);

CREATE TABLE livros_autores (
	id_livro INT,
    id_autor INT,
    CONSTRAINT FK_livro FOREIGN KEY (id_livro) REFERENCES livros(id_livro),
    CONSTRAINT CE_autor FOREIGN KEY (id_autor) REFERENCES autores(id)
);

INSERT INTO categorias (categoria)
VALUES ("Ficção"),("Terror"),("Investigação Policial"),("Romance"),("Suspense"),("Tecnologia");

SELECT * FROM categorias;

SELECT * FROM livros;

SELECT * FROM autores;

SELECT id_livro, nome, id_categoria, categoria FROM livros
JOIN categorias ON (categorias.id = livros.id_categoria);

SELECT livros_autores.id_livro, nome, id_autor, autor FROM livros_autores
JOIN livros ON (livros_autores.id_livro = livros.id_livro)
JOIN autores ON (livros_autores.id_autor = autores.id)
ORDER BY nome;
