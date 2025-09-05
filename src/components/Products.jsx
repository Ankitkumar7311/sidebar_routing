import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  

const Products = () => {
  const [products, setProducts] = useState([]);

  const handleProducts = async () => {
    let response = await fetch(`https://api.escuelajs.co/api/v1/products`);
    let data = await response.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <>
      <section className="p-6">
        <h1 className="text-2xl font-bold mb-4">Products Table</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-green-600 text-white text-left">
                <th className="p-3 border-b">ID</th>
                <th className="p-3 border-b">Image</th>
                <th className="p-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-gray-100 transition`}
                >
                  <td className="p-3 border-b font-medium text-gray-700">
                    {product.id}
                  </td>

                  <td className="p-3 border-b">
                    <img
                      src={product.images?.[0]}
                      alt={product.title}
                      className="w-12 h-12 rounded-md border shadow-sm object-cover"
                    />
                  </td>

                  <td className="p-3 border-b">
                    <Link to={`/products/${product.id}`}>
                      <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition">
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
    </>
  );
};

export default Products;
