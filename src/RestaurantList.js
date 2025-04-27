import React, { useEffect, useState } from "react";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch restaurants data from the backend API
    fetch("http://localhost:3000/api/restaurants")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching restaurants:", error);
      });
  }, []);

  if (error) {
    return <div>Error loading restaurants: {error.message}</div>;
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.length === 0 ? (
          <li>No restaurants available</li>
        ) : (
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.address}</p>
              <p>{restaurant.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RestaurantList;
