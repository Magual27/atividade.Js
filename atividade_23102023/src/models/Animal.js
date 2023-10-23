const db = require('../db/conn')

const { DataTypes, where } = require("sequelize");

const Animal = db.define('animal', {
    nome: {
        type: DataTypes.STRING,
        required: true,
    },
    raca: {
        type: DataTypes.STRING,
        required: true,
    },
    tipo: {
        type: DataTypes.STRING,
        required: true,
    },
    data_nasc: {
        type: DataTypes.DATE,
    },
    descricao: {
        type: DataTypes.STRING,
    },
});

const getAll = async () => {
    return await Animal.findAll({ raw: true });
}

const getOne = async (id) => {
    return await Animal.findOne({ raw: true, where: { id: id } });
}

const createPet = async (data) => {

    console.log(data);

    await Animal.create(data);
}

const deletePet = async (id) => {
    await Animal.destroy({ where: { id: id } });
}

const updatePet = async (data, id) => {
    await Animal.update(data, {where: { id: id }});
}

module.exports = {
    getAll,
    getOne,
    createPet,
    deletePet,
    updatePet,
}