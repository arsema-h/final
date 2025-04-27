const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/restaurants', require('./routes/placesRoutes'));
app.use('/api/favorites', require('./routes/favoriteRoutes'));

module.exports = app;
