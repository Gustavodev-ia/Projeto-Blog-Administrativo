const {DataTypes} = require("sequelize")
const sequelize = require("../config/database")
const bycript = require("bcrypt")


const User = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    senha:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

User.beforeCreate(async(user) =>{
    user.senha = await bycript.hash(user.senha,10)
})

module.exports = User