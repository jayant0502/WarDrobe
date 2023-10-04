import React from "react";
import { Button, TextField } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import "./Footer.css";

export const List=({heading,item1,item2,item3,item4,item5})=>{
  return(
    <div className="list-items">
    <ul style={{ paddingLeft: "25px", listStyle: "none" }}>
      <li>
        <h2>{heading}</h2>
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
        <h2>
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
          <li className="list"><a href="https://www.facebook.com/"><FacebookOutlinedIcon/></a></li>
          <li className="list"><a href="https://www.facebook.com/"><FacebookOutlinedIcon/></a></li>
          <li className="list"><a href="https://www.facebook.com/"><FacebookOutlinedIcon/></a></li>
        
        
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
