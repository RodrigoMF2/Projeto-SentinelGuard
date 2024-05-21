const Sequelize = require('sequelize');
const meusequelize = require('../util/database');

const Camara = require('./camara');

const videos = meusequelize.define('Videos', {
    videos_id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    camara_id: { //chave estrageira da tabela camara
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    data_hora_evento:
    {
        type: Sequelize.DATE,
        allowNull: false
    },
    arquivo:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    tamanho:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{freezeTableName: true,
    timestamps: false // Desativando a criação automática de createdAt e updatedAt
});

module.exports = videos;