import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Store from "./Sections/Store";
import {  useParams } from "react-router";


const AccessoriesPage = ({ products ,cartItems}) => {

  let {categoryName} = useParams('');

  const [categories, setcategories] = useState(categoryName);
  const [count, setCount] = useState({
    accessories: "",
    men: "",
    women: "",
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

 

  useEffect(() => {
    if(categories === '' || categories === 'everything'){

      
      setFilteredProducts(products)
    }
    else{

      let type = "accessories";
      if (categories.includes(type)) {
        const filtered = products.filter((item) =>
          item.category.type.toLowerCase().includes(categories)
        );
        setCount({
          [categories]: filtered.length,
        });
  
        setFilteredProducts(filtered);
      } else {
        const filter = products.filter((item) =>
          item.gender.toLowerCase().startsWith(categories)
        );
  
        setCount({
          [categories]: filter.length,
        });
        setFilteredProducts(filter);
      }
    }
    
  }, [products, categories]);

  return (
    <div>
      <Navbar secondaryNav={true} setNavCategory={setcategories} ></Navbar>
      <div className="content-container" style={{ backgroundColor: "#f5f7f9" }}>
        <Store
          items={filteredProducts}
          setcategory={setcategories}
          categoryCount={count}
          category={categoryName}
          cartData={cartItems}
          setFilteredProducts={setFilteredProducts}

        ></Store>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AccessoriesPage;
