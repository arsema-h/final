module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define("Restaurant", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    onCampus: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    vegan: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    vegetarian: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    glutenFree: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    discount: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  return Restaurant;
};
