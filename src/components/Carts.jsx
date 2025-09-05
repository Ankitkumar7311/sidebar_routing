import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carts = () => {
  const [carts, setCarts] = useState([]);

  const fetchCarts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/carts");
      const json = await res.json();
      setCarts(json.carts);
    } catch (err) {
      console.error("Error fetching carts:", err);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Carts with Images</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="p-3 border-b">Cart ID</th>
              <th className="p-3 border-b">User ID</th>
              <th className="p-3 border-b">Products</th>
              <th className="p-3 border-b">Totals</th>
              <th className="p-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, idx) => (
              <tr
                key={cart.id}
                className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}
              >
                <td className="p-3 border-b font-medium text-gray-700">{cart.id}</td>
                <td className="p-3 border-b">{cart.userId}</td>
                <td className="p-3 border-b flex gap-2">
                  {cart.products.slice(0, 3).map((item, i) => (
                    <img
                      key={i}
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-12 h-12 rounded-md border shadow-sm object-cover"
                    />
                  ))}
                  {cart.products.length > 3 && (
                    <span className="text-sm text-gray-500">
                      +{cart.products.length - 3} more
                    </span>
                  )}
                </td>
                <td className="p-3 border-b">
                  <div>Total: ₹{cart.total.toFixed(2)}</div>
                  <div>After Discount: ₹{cart.discountedTotal.toFixed(2)}</div>
                </td>
                <td className="p-3 border-b">
                  <Link to={`/carts/${cart.id}`}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition">
                      View More
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Carts;
