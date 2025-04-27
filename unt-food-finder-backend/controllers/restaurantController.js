const { Restaurant } = require('../models');

exports.getAll = async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
};

exports.search = async (req, res) => {
  const { query } = req.query;
  const restaurants = await Restaurant.findAll({
    where: { name: { [Op.like]: `%${query}%` } }
  });
  res.json(restaurants);
};

exports.getById = async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id);
  res.json(restaurant);
};
