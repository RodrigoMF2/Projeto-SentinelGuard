const Sequelize = require('sequelize');
const meusequelize = require('../util/database');
const Usuario = require('./user');
const Camara = require('./camara');

const image_recognition = meusequelize.define('IMAGE_RECOGNITION', {
    facial_id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    camara_id: {// chave estrangeira da tabela camara
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_funcionario:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    acesso_autorizado:
    {
        type: Sequelize.STRING,
        allowNull: false
    }

},{freezeTableName: true,
    timestamps: true // Desativando a criação automática de createdAt e updatedAt
});

module.exports = image_recognition;