module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    indexes: [
      {
        unique: true,
        fields: ['userId', 'restaurantId'],
      }
    ]
  });  
  return Favorite;
};
