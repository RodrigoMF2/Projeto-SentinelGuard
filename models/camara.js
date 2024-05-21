const Sequelize = require('sequelize');
const meusequelize = require('../util/database');


const camara = meusequelize.define('CAMARA', {
    camara_id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
    },
    localizacao:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    status:
    {
        type: Sequelize.STRING,
        allowNull: false 
    }

},{freezeTableName: true,
    timestamps: false // Desativando a criação automática de createdAt e updatedAt
});
module.exports = camara;