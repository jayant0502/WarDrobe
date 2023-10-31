import React, { useState } from "react";
import "../Sections/css/FilterSection.css";
import SideCategory from "../../components/Category/SideCategory";
import Filter from "../../components/FilterArea/FilterBy/Filter";

const FilterSection = ({ setFilterCat, categoryCount2, searchData ,setFilteredProducts ,products}) => {
  
  const [searchItem, setSearchItem] = useState("");

  function handleSearchInput(e) {
    const inputValue = e.target.value.trim();
    if (inputValue.trim().length !== "") {
      setSearchItem(inputValue);
      searchData(inputValue);
    }
  }
  return (
    <div className="main-filter-container">
      <div className="search-field">
        <input
          type="search"
          placeholder="Search Products..."
          className="input"
          onChange={(e) => handleSearchInput(e)}
        />
        {/* <button className='search-btn' onClick={()=> searchData(searchItem)}>&gt;</button> */}
      </div>
      <div className="filter-wrapper">
        <SideCategory
          setcatg={setFilterCat}
          categoryCount3={categoryCount2}
        ></SideCategory>
        {/* <Filter setFilteredProducts={setFilteredProducts} products={products}></Filter> */}
      </div>
    </div>
  );
};

export default FilterSection;
