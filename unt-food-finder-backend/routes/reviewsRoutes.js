const express = require('express');
const router = express.Router();
const { Review } = require('../models');

// Create a review
router.post('/', async (req, res) => {
  const { userId, restaurantId, rating, comment } = req.body;
  try {
    const review = await Review.create({ userId, restaurantId, rating, comment });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).send('Error creating review: ' + error);
  }
});

// Get all reviews for a restaurant
router.get('/:restaurantId', async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const reviews = await Review.findAll({ where: { restaurantId } });
    res.json(reviews);
  } catch (error) {
    res.status(500).send('Error fetching reviews: ' + error);
  }
});

module.exports = router;
