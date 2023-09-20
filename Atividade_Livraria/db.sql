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

INSERT INTO categorias (categoria)
VALUES ("Ficção"),("Terror"),("Investigação Policial"),("Romance"),("Suspense"),("Tecnologia");

SELECT * FROM categorias;

SELECT * FROM livros;

SELECT * FROM autores;

SELECT id_livro, nome, id_autor, autor, id_categoria, categoria FROM livros
JOIN autores ON (autores.id = livros.id_autor)
JOIN categorias ON (categorias.id = livros.id_categoria);