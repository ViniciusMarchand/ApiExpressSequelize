'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item_produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // item_produto.belongsTo(models.usuario, {
      //   foreignKey: 'usuario_id'
      // });
      // item_produto.belongsTo(models.produto, {
      //   foreignKey: 'produto_id'
      // });


    }
  }
  item_produto.init({
    quantidade: DataTypes.INTEGER,
    data_validade: DataTypes.DATEONLY,
    data_compra: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'item_produto',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return item_produto;
};