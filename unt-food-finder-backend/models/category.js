module.exports = (sequelize) => {
const { DataTypes } = require('sequelize');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Each category name should be unique
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

return Category;  }