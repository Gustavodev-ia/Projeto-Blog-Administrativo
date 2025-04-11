const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');


const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
  });
  
  Post.belongsTo(User, {foreignKey:'userId'})

  module.exports = Post