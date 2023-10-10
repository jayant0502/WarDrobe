import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { BtnOutlined, BtnContained } from "../../components/Button/index";
import "../../Styles/LandingPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductSection from "./ProductSection";
import Slider from "../../components/slider/Slider";
import CategoryCard from "../../components/cards/CategoryCard";
import img1 from "../../assets/landingPageImages/women-fashion-free-img.jpg";
import img2 from "../../assets/landingPageImages/men-fashion-free-img.jpg";
import img3 from "../../assets/landingPageImages/footwear-free-img.jpg";
const LandingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "https://api.escuelajs.co/api/v1/products?offset=12&limit=8";

    axios
      .get(url)
      .then((response) => {
        console.log("data Fetched");
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <section className="Front-view">
        <div className="bg-img">
        <div className="main-overlay"></div>
          <div className="txt-container">
            <h1>Raining Offers For Hot Summer!</h1>
            <h6>25% Off On All Products</h6>
            <BtnContained title={"Shop Now"} className="button" />
            <BtnOutlined title={"Find More"} />
          </div>
        </div>
      </section>
      {/* =================  Slider ============  */}
      <section className="silder-cards-section">
        <Slider></Slider>
        <div className="card-wrapper">
          <CategoryCard
            title={"20% Off On Tank Tops"}
            btnTitle={"Shop Now"}
            description={
              "Explore the widest range of tank tops & camisoles on WarDrobe."
            }
            image={img1}
          ></CategoryCard>
          <CategoryCard
            title={"Latest Eyewear For You"}
            btnTitle={"Shop Now"}
            description={
              "Buy ladies footwear & womens shoes online at low prices."
            }
            image={img2}
          ></CategoryCard>
          <CategoryCard
            title={"Let's Wear It Up"}
            btnTitle={"Check Out"}
            description={
              "Buy ladies footwear & womens shoes online at low prices."
            }
            image={img3}
          ></CategoryCard>
        </div>
      </section>
      {/* =================  Products card ============  */}
      <ProductSection products={products}></ProductSection>

      <section className="middle-view">
        <div className="middle-bg-img">
          <div className="overlay"></div>
          <div className="mid-txt-container">
            <h6>Limited Time Offer</h6>
            <h1>Special Edition</h1>
            <p>Explore the widest range of t-shirts & camisoles on WarDrobe.</p>
            <h6>Buy This T-shirt At 20% Discount, Use Code OFF20</h6>
            <BtnContained title={"Shop Now"} className="button" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
