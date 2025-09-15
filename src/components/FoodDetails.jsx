import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const FoodDetails = () => {
  let { id } = useParams();
  let [food, setFood] = useState(null);

  let handleFoodDetails = async () => {
    let response = await fetch(`https://dummyjson.com/recipes/${id}`);
    let data = await response.json();
    console.log(data);
    setFood(data);
  };

  useEffect(() => {
    handleFoodDetails();
  }, [id]);

  if (!food) {
    return  <div className="loader  m-[auto] mt-[30%]"></div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-80 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{food.name}</h1>
      <p className="text-gray-600 mt-2">Cuisine: {food.cuisine}</p>
      <p className="text-gray-600">Cook Time: {food.cookTimeMinutes} min</p>
      <p className="text-gray-600">Difficulty: {food.difficulty}</p>

      <h3 className="text-xl font-semibold mt-4">Ingredients:</h3>
      <ul className="list-disc pl-6 text-gray-700">
        {food.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-4">Instructions:</h3>
      <p className="text-gray-700">{food.instructions}</p>

      <Link
        to="/foods"
        className="mt-6 inline-block px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        🔙 Back to Foods
      </Link>
    </div>
  );
};

export default FoodDetails;
