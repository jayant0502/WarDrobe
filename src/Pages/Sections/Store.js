import React, { useState } from "react";
import ProductCard from "../../components/cards/ProductCard";
import "../Sections/css/Store.css";

import FilterSection from "./FilterSection";

const Store = ({ items, setcategory, categoryCount, category ,cartData ,setFilteredProducts}) => {

  const[dataFromSearch,setDataFromSearch]=useState('')

  // const [filteredItems, setFilteredItems] = useState([]);
   

  return (
    <div className="main-store-container">
      <div className="left">
        <FilterSection
          setFilterCat={setcategory}
          categoryCount2={categoryCount}
          searchData={setDataFromSearch}
          setFilteredProducts={setFilteredProducts}
          products={items}
         
        />
      </div>
      <div className="right">
        <h1 className="category-title">{category}</h1>
        <ProductCard products={items} itemToBeSearch={dataFromSearch}  cartItems={cartData}></ProductCard>
      </div>
    </div>
  );
};

export default Store;
