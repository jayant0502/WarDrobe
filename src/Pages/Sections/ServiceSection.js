import React from 'react'
import ServiceCard from '../../components/cards/ServiceCard'
import worldImg from "../../assets/ServicesImages/globe-free-img.png"
import quality from "../../assets/ServicesImages/quality-free-img.png"
import secure from "../../assets/ServicesImages/lock-free-img.png"
import offer from "../../assets/ServicesImages/tag-free-img.png"
import "../Sections/css/ServiceSection.css"
const ServiceSection = () => {
  return (
    <div className='widget-wrapper'>

       <ServiceCard icon={worldImg} serviceTitle={"Worldwide Shipping"} discp={"Shop From Any Where At Any Time"} ></ServiceCard>
       <ServiceCard icon={quality} serviceTitle={"Best Quality"} discp={"Shop From Any Where At Any Time"} ></ServiceCard>
       <ServiceCard icon={secure} serviceTitle={"Secure Payments"} discp={"Shop From Any Where At Any Time"} ></ServiceCard>
       <ServiceCard icon={offer} serviceTitle={"Best Offers"} discp={"Shop From Any Where At Any Time"} ></ServiceCard>
        
      
    </div>
  )
}

export default ServiceSection
