const sequelize = require("../config/config");
const {DataTypes} = require('sequelize')
const Evento = require('./Evento')
// const Evento = sequelize.define("evento", { id : DataTypes.INTEGER})
const Participante = sequelize.define("participante", {
    nome : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    evento_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        onDelete : 'CASCADE',
        references : {
            model : Evento,
            key : "id" 
        }
    }
})


module.exports = Participante;