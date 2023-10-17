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
} from "./Pages/index";
import { Routes, Route } from "react-router";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = " http://localhost:8000/products";

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
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage products={products} />} />
        <Route path="/Categories" element={<AccessoriesPage  products={products}/>} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact_Us" element={<ContactUs />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
     
    </div>
  );
}

export default App;
