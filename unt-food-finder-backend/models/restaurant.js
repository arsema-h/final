module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define('Restaurant', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
        cuisine: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discount: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isVegan: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        isVegetarian: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        isGlutenFree: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        onCampus: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
});

return Restaurant;
};