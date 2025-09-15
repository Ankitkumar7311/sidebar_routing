import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Food = () => {
  let [foods, setFoods] = useState([]);

  let handleFoods = async () => {
    let response = await fetch(`https://dummyjson.com/recipes`);
    let data = await response.json();
    console.log(data.recipes);
    setFoods(data.recipes);
  };

  useEffect(() => {
    handleFoods();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {foods.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl shadow-md hover:shadow-lg p-4 bg-white"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
          <p className="text-gray-500">⏱️ {item.cookTimeMinutes} min</p>
          <Link
            to={`/foods/${item.id}`}
            className="mt-3 inline-block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Food;
