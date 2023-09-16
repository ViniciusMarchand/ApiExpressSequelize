'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        produto.hasMany(models.item_produto, {
          foreignKey: 'produto_id'
        })
        produto.belongsTo(models.usuario, {
          foreignKey: 'usuario_id'
        });

    }
  }
  produto.init({
    nome: DataTypes.STRING(250),
    marca: DataTypes.STRING(250),
    peso: DataTypes.STRING(10),
    observacoes: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'produto',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return produto;
};