const Sequelize = require('sequelize');
const meusequelize = require('../util/database');

const user = meusequelize.define('USER', {
    id_user:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    last_name:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false
    },
    tipo_user:{
        type: Sequelize.STRING,
        allowNull:false
    },
    
    
},{freezeTableName: true,
    timestamps: false // Desativando a criação automática de createdAt e updatedAt
})

module.exports=user;