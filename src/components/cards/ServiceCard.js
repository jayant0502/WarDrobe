import React from 'react'
import "../cards/ServiceCard.css"

const ServiceCard = ({icon,serviceTitle,discp}) => {
  return (
    <div className='card-widget-wrapper'>

        <div className='icon'>
            <img src={icon} alt="our services" />
        </div>  
        <div className='text-wrapper'>
            <h3>{serviceTitle}</h3>
        <p>{discp}</p>

        </div>
        
      
    </div>
  )
}

export default ServiceCard
