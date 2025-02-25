import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../../store/product";
import ProductCard from "../components/ProductCard.jsx";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  // Log ketika products berubah
  return (
    <>
      <h1 className="flex justify-center text-3xl font-medium m-5">our product</h1>

      {/* no product */}
      {products.length === 0 && (
        <h1 className="flex justify-center items-center gap-4 text-2xl font-medium m-3">
          <span>No product found</span>
          <Link to="/create" className="text-blue-500 hover:underline">
            Create product
          </Link>
        </h1>
      )}

      {/* the product */}
      <div className="box-product">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
