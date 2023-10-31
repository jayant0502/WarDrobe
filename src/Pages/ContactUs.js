import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer';
import "../Styles/ContactPage.css"

const ContactUs = () => {
  return (
    <div>
        <Navbar />
        <section className="contact-bg-img">
          <div className="bg-overlay "></div>
          <div className="title">
            <h1>Contact Us</h1>
         </div>
         <div className='feedback'>
            <section className='txt'></section>
            <section className='feedback-form'></section>

         </div>
        
       </section>
        <Footer></Footer>
    </div>
  )
}

export default ContactUs
