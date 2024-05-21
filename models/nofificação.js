const Sequelize = require('sequelize');
const meusequelize = require('../util/database');


const notificacao = meusequelize.define('NOTIFICACAO', {
    notificacao_id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    evento_id: { //chave estrangeira da tabela eventos
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    usuario_id: {// chave estrangeira da tabeka usuario
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    mensagem:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_hora_notificacao:
    {
        type: Sequelize.DATE,
        allowNull: false
    }

},{freezeTableName: true,
    timestamps: false // Desativando a criação automática de createdAt e updatedAt
});

module.exports = notificacao;