import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer'
import ProductCard from '../components/cards/ProductCard'

const EverythingPage = () => {
  return (
    <div>

      <Navbar/>
      <ProductCard></ProductCard>
      <Footer/>
    </div>
  )
}

export default EverythingPage
