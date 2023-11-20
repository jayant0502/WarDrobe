import React from "react";
import { Button, TextField } from "@mui/material";

import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const List=({heading,item1,item2,item3,item4,item5})=>{
  return(
    <div className="list-items">
    <ul style={{ paddingLeft: "25px", listStyle: "none" }}>
      <li>
        <h2 style={{fontWeight:"400"}}>{heading}</h2>
      </li>
      <li className="footer-list">{item1}</li>
      <li className="footer-list">{item2}</li>
      <li className="footer-list">{item3}</li>
      <li className="footer-list">{item4}</li>
      <li className="footer-list">{item5}</li>

    </ul>
  </div>
  );
}
const Footer = () => {
  return (
    <footer>
      <div className="footer-header">
      {/* <hr /> */}
        <h2 className="footer-top">
          SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
        </h2>
        <hr></hr>
      </div>
      <section className="footer-items">
        <div className="left-items">
        <Link to="/"><img src={logo} className="logo" id="logo"></img></Link>
          <h4>The best look anytime, anywhere.</h4>
        </div>
             
        <List heading="For Her" item1="Women Jeans" item2="Tops and Shirts" item3={"Women Accessories"} item4="Women Jackets" item5={"Heels and Flats"}/>
        <List heading="For Him" item1="Men Jeans" item2="Men Shirts" item3={"Men Accessories"} item4="Men Jackets" item5={"Men Shoes"}/>
        <div className="input-container">
          <h2>Subscribe</h2>

          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="Your Email address..."
            variant="outlined"
            size="small"
            sx={{borderRadius:"0px"}}

          />
          <Button variant="contained" className="btn" sx={{marginTop:"1.5rem", padding:"10px 15px 10px 15px"  , width:"60%",borderRadius:"0"}}>
            Subscribe
          </Button>
        </div>
      </section>
      <hr></hr>
      <div className="footer-end">
        <h3>Copyright © 2023 Brandstore. Powered by Brandstore.</h3>
        <ul className="footer-icons">
          <li className="list"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></a></li>
          <li className="list"><a href="#"></a></li>
          <li className="list"><a href="#"></a></li>
          <li className="list"><a href="#"></a></li>
          <li className="list"><a href="#"></a></li>
        
        
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
