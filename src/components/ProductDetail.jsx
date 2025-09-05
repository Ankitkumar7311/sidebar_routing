import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  let [product, setProduct] = useState(null);

  let handleProduct = async () => {
    let response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    handleProduct();
  }, [id]);

  if (!product) {
    return <p className="p-6 text-lg">Loading...</p>;
  }

  return (
    <section className="p-6 flex justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-lg font-semibold text-green-600">
          ${product.price}
        </p>
      </div>
    </section>
  );
};

export default ProductDetail;
