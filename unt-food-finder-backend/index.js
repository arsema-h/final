// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');

// Import your routes
const authRoutes = require('./routes/authRoutes');
const restaurantRoutes = require('./routes/placesRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');

app.use(express.json()); // Parse incoming JSON

// Setup routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/review', reviewsRoutes);
app.use('/api/favorite', favoriteRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is working');
});

// Sync database and start server
const PORT = process.env.PORT || 3000;
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
