'use strict';
const {
  Model, INTEGER, FLOAT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // alimento.hasMany(models.item_alimento, {
      //   foreignKey: 'alimento_id'
      // })

      // alimento.belongsTo(models.usuario, {
      //   foreignKey: 'usuario_id'
      // });

    }
  }
  alimento.init({
    nome: DataTypes.STRING(250),
    marca: DataTypes.STRING(250),
    proteina: DataTypes.FLOAT,
    carboidrato: DataTypes.FLOAT,
    gorduras_totais: DataTypes.FLOAT,
    fibras: DataTypes.FLOAT,
    calorias: DataTypes.INTEGER,
    rotulagem: DataTypes.STRING,
    sodio: DataTypes.FLOAT,
    observacoes: DataTypes.STRING,
    porcao: DataTypes.STRING(10),
    peso: DataTypes.STRING(10),
    acucar_adicionais: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'alimento',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return alimento;
};