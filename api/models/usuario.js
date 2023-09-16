'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuario.hasMany(models.produto, {
        foreignKey: 'usuario_id'
      });
      usuario.hasMany(models.alimento, {
        foreignKey: 'usuario_id'
      });
      usuario.hasMany(models.item_produto, {
        foreignKey: 'usuario_id'
      });
      usuario.hasMany(models.item_alimento, {
        foreignKey: 'usuario_id'
      });
    }
  }
  usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'usuario',
    defaultScope: {
      attributes:{
        exclude:['senha']
      }
    },
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return usuario;
};