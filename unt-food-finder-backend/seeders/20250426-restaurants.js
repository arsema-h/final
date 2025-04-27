'use strict';

module.exports = {
  up: async (queryInterface) => {
    const restaurants = [
      { name: "Kitchen West", onCampus: true, vegan: false, vegetarian: false, glutenFree: true, discount: false },
      { name: "Mean Greens", onCampus: true, vegan: true, vegetarian: true, glutenFree: false, discount: false },
      { name: "Avesta", onCampus: true, vegan: false, vegetarian: true, glutenFree: false, discount: false },
      { name: "Burger King", onCampus: true, vegan: false, vegetarian: false, glutenFree: false, discount: false },
      { name: "Chick-fil-A", onCampus: true, vegan: false, vegetarian: true, glutenFree: true, discount: false },
      { name: "Fuzzy's", onCampus: true, vegan: false, vegetarian: true, glutenFree: true, discount: false },
      { name: "Jamba", onCampus: true, vegan: true, vegetarian: true, glutenFree: true, discount: false },
      { name: "Krispy Krunchy Chicken", onCampus: true, vegan: false, vegetarian: false, glutenFree: false, discount: false },
      { name: "Starbucks", onCampus: true, vegan: true, vegetarian: true, glutenFree: true, discount: false },
      { name: "Einstein Bros.", onCampus: true, vegan: true, vegetarian: true, glutenFree: false, discount: false },
      { name: "Which Wich", onCampus: true, vegan: true, vegetarian: true, glutenFree: false, discount: false },
      { name: "Oriental Express", onCampus: false, vegan: false, vegetarian: true, glutenFree: false, discount: false },
      { name: "New York SubHub", onCampus: false, vegan: true, vegetarian: true, glutenFree: false, discount: false },
      { name: "Cheba Hut", onCampus: false, vegan: true, vegetarian: true, glutenFree: false, discount: false },
      { name: "Jimmy Johns", onCampus: false, vegan: true, vegetarian: true, glutenFree: false, discount: false },
      { name: "Crooked Crust", onCampus: false, vegan: false, vegetarian: true, glutenFree: true, discount: false },
      { name: "Oriental Garden", onCampus: false, vegan: false, vegetarian: true, glutenFree: false, discount: false },
      { name: "Fera's Pasta & Pizza", onCampus: false, vegan: false, vegetarian: true, glutenFree: false, discount: false },
      { name: "Chipotle", onCampus: false, vegan: true, vegetarian: true, glutenFree: true, discount: false },
      { name: "D.P. Dough", onCampus: false, vegan: true, vegetarian: true, glutenFree: false, discount: false },
      { name: "Slap Burger Bar", onCampus: false, vegan: true, vegetarian: true, glutenFree: true, discount: false },
      { name: "Laynes", onCampus: false, vegan: false, vegetarian: false, glutenFree: false, discount: false },
      { name: "Zalat Pizza", onCampus: false, vegan: true, vegetarian: true, glutenFree: true, discount: false },
      { name: "Sushi Cafe", onCampus: false, vegan: false, vegetarian: true, glutenFree: false, discount: false },
      { name: "Viet Bites", onCampus: false, vegan: false, vegetarian: true, glutenFree: true, discount: false }
    ];

    await queryInterface.bulkInsert(
      'Restaurants',
      restaurants.map(r => ({
        ...r,
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Restaurants', null, {});
  }
};
