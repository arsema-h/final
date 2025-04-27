module.exports = (sequelize) => {
const { DataTypes } = require('sequelize');

const Discount = sequelize.define('Discount', {
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Each discount code should be unique
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },  // Discount percentage should be between 0 and 100
  },
  validFrom: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  validUntil: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Restaurants',
      key: 'id',
    },  // Linking discount to a specific restaurant (foreign key)
  },
});

return Discount;  };
