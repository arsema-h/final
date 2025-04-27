require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const { sequelize, Restaurant } = require("./models"); // Assuming models/index.js exports sequelize and Restaurant
const path = require('path');

// Import route files
const authRoutes = require('./routes/authRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');
const placesRoutes = require('./routes/placesRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/restaurants', placesRoutes);
app.use('/api/reviews', reviewsRoutes);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Direct Routes (optional: you can also move these into your restaurantRoutes file if you want)
app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  } catch (error) {
    res.status(500).send('Error fetching restaurants: ' + error.message);
  }
});

app.get('/api/restaurant/:id', async (req, res) => {
  const restaurantId = req.params.id;
  try {
    const restaurant = await Restaurant.findByPk(restaurantId);
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).send('Restaurant not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching restaurant: ' + error.message);
  }
});

app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  try {
    const restaurants = await Restaurant.findAll({
      where: {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${query}%` } },
          { address: { [Sequelize.Op.like]: `%${query}%` } },
        ],
      },
    });
    res.json(restaurants);
  } catch (error) {
    res.status(500).send('Error searching for restaurants: ' + error.message);
  }
});

// Start server after syncing database
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to sync database:', error);
  });
