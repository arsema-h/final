const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const { Favorite, Restaurant } = require('../models');

// Add a restaurant to favorites
router.post('/', verifyToken, async (req, res) => {
  const { restaurantId } = req.body;

  if (!restaurantId) {
    return res.status(400).json({ message: "Restaurant ID is required" });
  }

  try {
    // Check if favorite already exists
    const existingFavorite = await Favorite.findOne({
      where: { userId: req.user.id, restaurantId }
    });

    if (existingFavorite) {
      return res.status(400).json({ message: "Already in favorites" });
    }

    await Favorite.create({
      userId: req.user.id,
      restaurantId
    });

    res.status(201).json({ message: "Added to favorites" });
  } catch (error) {
    console.error('Error adding to favorites:', error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get favorite restaurants
router.get('/', verifyToken, async (req, res) => {
  try {
    const favorites = await Favorite.findAll({
      where: { userId: req.user.id },
      include: [{ model: Restaurant }]  // Join with Restaurant info
    });

    const formattedFavorites = favorites.map(({ Restaurant }) => ({
      id: Restaurant.id,
      name: Restaurant.name,
      address: Restaurant.address,
      cuisine: Restaurant.cuisine,
      image: Restaurant.image
    }));
    
    res.json(formattedFavorites);
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
