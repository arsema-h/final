const { Restaurant } = require('./');  // Adjust this path to match your models location

async function checkRestaurants() {
  try {
    const restaurants = await Restaurant.findAll();
    console.log(restaurants.map(restaurant => restaurant.toJSON()));
  } catch (error) {
    console.error('Error fetching restaurants:', error);
  }
}

checkRestaurants();
