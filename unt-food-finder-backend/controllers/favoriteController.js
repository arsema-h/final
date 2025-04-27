const { Favorite, Restaurant, User } = require('../models');

exports.addFavorite = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  const restaurant = await Restaurant.findByPk(req.body.restaurantId);
  await user.addRestaurant(restaurant);
  res.json({ success: true });
};

exports.getFavorites = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  const favorites = await user.getRestaurants();
  res.json(favorites);
};
