import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Store from "./Sections/Store";

const AccessoriesPage = ({ products }) => {
  const [categories, setcategories] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(categories)
  useEffect(() => {
      let menu = 'accessories'||''
    if(categories.includes(menu)){
      
      const filtered = products.filter((item) =>
        item.category.name.toLowerCase().includes(categories)
      );
      setFilteredProducts(filtered);
    }
    else{
      const filter =products.filter((item)=>
      item.gender.toLowerCase().startsWith(categories)
      );
      setFilteredProducts(filter);
     
    }
  }, [products, categories]);
  
  return (
    <div>
      <Navbar secondaryNav={true} setcategories={setcategories}/>
      <div className="content-container" style={{ backgroundColor: "#f5f7f9" }}>
      <Store  items={filteredProducts} setcategory={setcategories} ></Store>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AccessoriesPage;
