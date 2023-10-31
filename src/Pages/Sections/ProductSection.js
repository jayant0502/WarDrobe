import React from "react";
import FeaturedCard from "../../components/cards/FeaturedCard";
import "./css/ProductSection.css";

const ProductSection = ({ Products,cartData}) => {
  return (
    <div className="featured-products">
      <h1 className="heading">Featured Products</h1>
      <div className="divider">
        <span className="line"> </span>
      </div>
      <FeaturedCard cartData={cartData} products={Products} ></FeaturedCard>
      
    </div>
  );
};

export default ProductSection;
