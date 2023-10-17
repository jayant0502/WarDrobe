import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer'
import "../Styles/AboutPage.css"
import introImg from "../assets/AboutPageImages/slide-image-free-img-1024x576.jpg"
import ServiceSection from './Sections/ServiceSection'

const About = () => {
  return (
    <div>
       <Navbar  />
       <section className="about-bg-img">
          <div className="bg-overlay"></div>
          <div className="title">
            <h1>About Us</h1>
        </div>
        
       </section>
       <section className='intro-section'>

        <div className="intro-txt-container">
          <div className='intro-divider'></div>
          <h1>Who We Are</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
        </div>
        <div className="intro-img">
          <img src={introImg} alt="Introduction Image" />
        </div>

       </section>
       <ServiceSection></ServiceSection>
       <Footer></Footer>
    </div>
  )
}

export default About
