import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CartDetails = () => {
  const { id } = useParams();
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/carts/${id}`)
      .then(res => res.json())
      .then(setCart)
      .catch(console.error);
  }, [id]);

  if (!cart) return <p>Loading...</p>;

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart #{cart.id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cart.products.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg shadow">
            <img src={item.thumbnail} alt={item.title} className="w-24 h-24 rounded-md object-cover" />
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹{item.price.toFixed(2)}</p>
              <p>Total: ₹{item.total.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-lg">
        <p><strong>Cart Total:</strong> ₹{cart.total.toFixed(2)}</p>
        <p><strong>Discounted Total:</strong> ₹{cart.discountedTotal.toFixed(2)}</p>
      </div>
      <Link to="/carts">
        <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          Back to Carts
        </button>
      </Link>
    </section>
  );
};

export default CartDetails;
