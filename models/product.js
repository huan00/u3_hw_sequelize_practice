'use strict'
const { Model, Deferrable } = require('sequelize')
const Brand = require('./brand')
const Category = require('./category')
const Review = require('./review')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      brand: DataTypes.STRING,
      category: DataTypes.STRING,
      reviews: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products'
    }
  )
  return Product
}
