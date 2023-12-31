import "./App.css";
import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

import {
  LandingPage,
  AccessoriesPage,
  AboutPage,
  ContactUs,
  Profile,
  Cart,
  ProductDescriptionPage,
  CheckOut,
  LoginPage
} from "./Pages/index";
import { Routes, Route, useLocation } from "react-router";


export function ScrollToTop(){
  const {pathname}=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
}

function App() {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    const url = " http://localhost:8000/products";

    axios
      .get(url)
      .then((response) => {
        
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  }, []);

  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/Cart?userId=${sessionStorage.getItem("id")}`)
      .then((response) => {
        setCartData(response.data);
        sessionStorage.setItem("cartlength",response.data.length)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="App">
    <ScrollToTop></ScrollToTop>
      <Routes>
      
        <Route exact path="/" element={<LandingPage products={products} cartData={cartData}/>} />
        <Route path="/Categories/:categoryName" element={<AccessoriesPage  products={products} cartItems={cartData} />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact_Us" element={<ContactUs />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Profile/:activePage" element={<Profile />} />
        <Route path="/Cart" element={<Cart setCartData={setCartData}/>} />        
        <Route path="/CheckOut" element={<CheckOut setCartData={setCartData}/>} />        
        <Route path="/ProductDescriptionPage/:id" element={<ProductDescriptionPage cartItems1={cartData}/>}/>
        <Route path="*" element={<div><h1>404 Page Not Found </h1></div>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
