const Sequelize = require('sequelize');
const meusequelize = require('../util/database');

const Camara = require('./camara');

const eventos = meusequelize.define("EVENTOS", {
    eventos_id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    camara_id: { //chave estrangeira da tabela camara
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    tipo://eventos tipo ( movimentação, individuo nao autorizado)
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_hora_evento:
    {
        type: Sequelize.DATE,
        allowNull: false
    }
},{freezeTableName: true,
    timestamps: false // Desativando a criação automática de createdAt e updatedAt
});

module.exports = eventos