import React, { useState } from 'react'
import "../Category/Category.css"
import { Link } from 'react-router-dom'
const SideCategory = ({setcatg,categoryCount3}) => {
  
const [clicked,setClicked]=useState(false)
  return (
    <div className='category-wrapper'>
      <h2 className="title">Categories</h2>
      <div className="categories">
        <Link to="/Categories/accessories" onClick={()=>{setcatg('accessories'); setClicked(true)}} className='link'>Accessories<span className='item-count'>{clicked?categoryCount3.accessories:" "}</span></Link>
        <Link to="/Categories/men" onClick={()=>{setcatg('men'); setClicked(true)}}  className='link'>Men  <span  className='item-count'>{clicked?categoryCount3.men:" "}</span></Link>
        <Link to="/Categories/women" onClick={()=>{setcatg('women'); setClicked(true)}}  className='link'>Women  <span  className='item-count'
        >{clicked?categoryCount3.women:" "}</span></Link>
       
      </div>
    </div>
  )
}

export default SideCategory
