import React from 'react'
import "../Category/Category.css"
import { Link } from 'react-router-dom'
const Category = ({setcat}) => {
  return (
    <div className='category-wrapper'>
      <h2 className="title">Categories</h2>
      <div className="categories">
        <Link to="/Categories" onClick={()=>setcat('accessories')}>Accessories</Link>
        <Link to="/Categories" onClick={()=>setcat('men')}>Men</Link>
        <Link to="/Categories" onClick={()=>setcat('women')}>Women</Link>
       
      </div>
    </div>
  )
}

export default Category
