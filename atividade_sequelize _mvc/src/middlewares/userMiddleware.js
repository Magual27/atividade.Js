const validateData = (req, res, next) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const ocupacao = req.body.ocupacao;

    if (email.includes(".com") == false && email != "") {
        return res.send("<script>alert('Está faltando '.com' no email'); window.location.replace('/users/cadastrar')</script>")
    }

    if (nome == "" || email == "" || senha == "" || ocupacao == "") {
        return res.send("<script>alert('Preencha todos os dados'); window.location.replace('/users/cadastrar')</script>")
    }

    next();
};

module.exports = {
    validateData,
};
