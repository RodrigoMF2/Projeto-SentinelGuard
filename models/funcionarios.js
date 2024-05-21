const Sequelize = require('sequelize');
const meusequelize = require('../util/database');

const funcionarios = meusequelize.define('FUNCIONARIOS', {
    id_funcionario:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo_funcionario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    image_face_funcionario:{
        type:Sequelize.BLOB('long'),
        allowNull: false
    }
},{freezeTableName: true,
    timestamps: false // Desativando a criação automática de createdAt e updatedAt
});

module.exports = funcionarios;