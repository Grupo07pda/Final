const Sequelize = require('sequelize');
const db = require('../connection/db');
const usuario = require("./usuario")

const servico = db.define('servicos',{
    
    id:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true , 
        primaryKey: true
    },
    nome_animal:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    servicos:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    porte:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    especie:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    nome_dono:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    },
    cpf:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    },
    telefone:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    },
    horario:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    }

})


// Um usuário tem muitos serviços
// Um serviço pertence a um usuário

servico.belongsTo(usuario,{
    constraint: true,
    foreignKey: "idUsuario"  
})

usuario.hasMany(servico,{
    constraint: true,
    foreignKey: "idUsuario"    
})



module.exports = servico;