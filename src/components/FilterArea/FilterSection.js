import React from 'react'
import "../FilterArea/FilterSection.css"
import Category from '../../components/Category/Category';

const FilterSection = ({setFilterCat}) => {
  return (
    <div className='main-filter-container'>

        <div className="search-field">
            <input type="search"  placeholder='Search Products...' className='input'/>
            <button className='search-btn'>&gt;</button>
        </div>
        <div className='filter-wrapper'>

        <Category setcat={setFilterCat}></Category>


        </div>
      
    </div>
  )
}

export default FilterSection
