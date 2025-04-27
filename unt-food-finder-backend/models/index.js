require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Turn this to true if you want to see SQL logs
  }
);

// Import all models
const Restaurant = require('./restaurant')(sequelize, Sequelize.DataTypes);
const Favorite = require('./favorite')(sequelize, Sequelize.DataTypes);
const User = require('./user')(sequelize, Sequelize.DataTypes);
const Review = require('./review')(sequelize, Sequelize.DataTypes);

// Setup associations

// Favorites are linked to Users and Restaurants
Favorite.belongsTo(User, { foreignKey: 'userId' });
Favorite.belongsTo(Restaurant, { foreignKey: 'restaurantId' });
User.hasMany(Favorite, { foreignKey: 'userId' });
Restaurant.hasMany(Favorite, { foreignKey: 'restaurantId' });

// Reviews are linked to Users and Restaurants (or Places if you want both)
Review.belongsTo(User, { foreignKey: 'userId' });
Review.belongsTo(Restaurant, { foreignKey: 'restaurantId' });
User.hasMany(Review, { foreignKey: 'userId' });
Restaurant.hasMany(Review, { foreignKey: 'restaurantId' });

// Setup db object to export
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Add models to db
db.User = User;
db.Restaurant = Restaurant;
db.Favorite = Favorite;
db.Review = Review;

module.exports = db;