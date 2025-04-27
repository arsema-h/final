const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/', restaurantController.getAll);
router.get('/search', restaurantController.search);
router.get('/:id', restaurantController.getById);

module.exports = router;
