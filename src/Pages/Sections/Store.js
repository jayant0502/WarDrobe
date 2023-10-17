import React from 'react'
import ProductCard from "../../components/cards/ProductCard"
import "../Sections/css/Store.css";

import FilterSection from '../../components/FilterArea/FilterSection';


const Store = ({items , setcategory}) => {
 

  return (
    <div className='main-store-container'>

      <div className='left'>
        <FilterSection setFilterCat={setcategory}/>
     
      </div>
      <div className='right'>
      <ProductCard products={items} ></ProductCard>
      </div>
    </div>
  )
}

export default Store
