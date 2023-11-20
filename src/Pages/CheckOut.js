import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../Styles/CheckOut.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Table } from "@mui/joy";
import { TableBody, TableCell, TableHead , TableRow } from "@mui/material";
import { useLocation } from "react-router";


const CheckOut = () => {
    const location=useLocation()

    const products=location.state ? location.state : null;

    function handleInput(event){

      const val=event.target.value;
      

    }
  return (
    <div className="main-wrapper">
      <Navbar secondaryNav={true}></Navbar>
        <h1 className="page-name">CheckOut</h1>
      
      <div className="checkout-container">
        <div className="right-side">
          <h3>Billing Details</h3>
          <form action="" className="form">
            <Box
              component="form"
              sx={{
                "& > :not(style)": {marginBottom:2, width: "25ch" },
                
              }}
              noValidate
              autoComplete="off"
              className="input-box-container"
            >
              <div className="name-fields">
              <TextField
                required
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
                
              />
              <TextField
                required
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
              </div>
              <TextField
                required
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
              <TextField
                required
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
              <TextField
                required
                id="outlined-basic"
                label="Country"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
              <TextField
                required
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
              <TextField
                required
                id="outlined-basic"
                label="State"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
              <TextField
                required
                id="outlined-basic"
                label="City"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
              
              <TextField
                required
                id="outlined-basic"
                label="Address"
                variant="outlined"
                size="small"
                className="input-box"
                onChange={(e)=>handleInput(e)}
              />
            </Box>
          </form>
        </div>
        <div className="left-side">
            <div className="order-details">
                <h3>Your Order</h3>
                <Table >
              <TableHead>
                <TableRow sx={{ backgroundColor :"#f5f7f9"}}>
                 
                  <TableCell >Products</TableCell>
                  <TableCell sx={{width:"30%"}}>Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.data.map((product, index) => (
                    
                  <TableRow key={index}>
                    
                    <TableCell className="order-product" ><img src={product.images} alt="Product Image" className="pimg"></img> <h4>{`${product.title} X ${product.quantity}`}</h4></TableCell>
                    <TableCell>{`₹${product.price * product.quantity}`}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell>{`₹${(products.total).toFixed(2)}`}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CheckOut;
