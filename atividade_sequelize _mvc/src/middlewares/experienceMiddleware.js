const validateData = (req, res, next) => {
    const id = req.body.UserId;
    const empresa = req.body.empresa;
    const cargo = req.body.cargo;

    if (empresa == "" || cargo == "") {
        return res.send(
            `<script>alert('Preencha todos os dados'); window.location.replace('/user/experience/adicionar/${id}')</script>`
        );
    }

    next();
};

module.exports = {
    validateData,
};