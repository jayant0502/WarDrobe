import React from "react";
import ProductCard from "../../components/cards/ProductCard";
import "./css/ProductSection.css";

const ProductSection = ({ products }) => {
  return (
    <div className="featured-products">
      <h1 className="heading">Featured Products</h1>
      <div className="divider">
        <span className="line"> </span>
      </div>
      <ProductCard products={products}></ProductCard>
    </div>
  );
};

export default ProductSection;
