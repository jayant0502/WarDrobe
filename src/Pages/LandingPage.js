import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {BtnOutlined,BtnContained} from "../components/Button/index";
import "../Styles/LandingPage.css"
import AwesomeSlider from "react-awesome-slider";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <section className="Front-view">
       
        <div className="bg-img">
        <div className="txt-container">
          <h1>Raining Offers For Hot Summer!</h1>
          <h6>25% Off On All Products</h6>
          <BtnContained title={"Shop Now"} className="button"/>
          <BtnOutlined title={"Find More"}/>
        
        </div>
        </div>
        
      </section>
      {/* =================   Slider ============  */}
      <section className="slider">
        
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
