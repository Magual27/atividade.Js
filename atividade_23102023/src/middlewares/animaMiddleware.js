const valData = (req, res, next) => {
    const nome = req.body.nome
    const raca = req.body.raca
    const tipo = req.body.tipo
    const data_nasc = req.body.data_nasc

    if (nome == "" || raca == "" || tipo == "" || data_nasc == "") {
        return res.send("<script>alert('Preencha todos os dados para o cadastro')</script>");
    }

    next();
}

module.exports = {
    valData
}