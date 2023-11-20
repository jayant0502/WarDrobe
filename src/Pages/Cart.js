import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { Button} from "@mui/material";
import axios from "axios";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import QtyControl from "../components/QuantityController/QtyControl";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate } from "react-router";


const Cart = ({setCartData}) => {
  const TAX_RATE = 0.07;

  const navigate = useNavigate()

  function ccyFormat(num) {
    return `${num.toFixed(1)}`;
  }


  const calculateSubtotal = (items) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };
 
  const [data, setData] = useState([]);

  const invoiceSubtotal = calculateSubtotal(data);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceSubtotal+invoiceTaxes ;

  sessionStorage.setItem("TotalAmount",invoiceTotal.toFixed(2))




  const handleQuantityChange = (itemId, newQuantity) => {
    // Update the quantity in the data array
    const updatedData = data.map(item => {
      if (item.id === itemId) {
        item.quantity = newQuantity;
      }
      return item;
    });

    setData(updatedData);
  };

 

  
  useEffect(() => {
    axios
      .get(`http://localhost:8000/Cart?userId=${sessionStorage.getItem("id")}`)
      .then((response) => {
        setData(response.data);
        setCartData(response.data);
        sessionStorage.setItem("cartlength", response.data.length);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);



  function saveChange(x){
    
  

    let pid = "";
      x.map((i)=>{
       
        pid=i.pid;
      })
      axios.put(`http://localhost:8000/Cart?userid=${sessionStorage.getItem("id")}&pid=${pid}/`, x)
  
      .then((response)=>{
        console.log("cart item updated"+response.data)
        
  
  
      })
      .catch((error)=>{
        console.log("Cart item cannot be updated",error)
      })
      
    }
  
  function deleteItem(row) {
    axios
      .delete(`http://localhost:8000/Cart/${row.id}`)
      .then((response) => {
        const updatedData = data.filter((item) => item.id !== row.id);
        setData(updatedData);
        sessionStorage.setItem("cartlength", updatedData.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    textAlign: "center",
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#fbfbfb",
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Navbar secondaryNav={true}></Navbar>
      <section style={{ backgroundColor: "#f5f7f9", padding: "3rem 0 5rem 0" }}>
        <h1
          style={{
            fontFamily: "var(--fontFamiy)",
            fontSize: "3rem",
            color: "#54595f",
            fontWeight: "600",
            margin: "0 0 3rem 0",
          }}
        >
          Cart
        </h1>
        {data.length > 0 ? (
          <>
            <TableContainer
              component={Paper}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "3rem",
                boxShadow: "none",
                backgroundColor: "#f5f7f9",
                alignItems: "center",
              }}
            >
              <Table
                sx={{
                  minWidth: 500,
                  maxWidth: 1000,
                  border: "1px solid #e2e2e2",
                }}
                aria-label="spanning table"
              >
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Product</StyledTableCell>
                    <StyledTableCell align="right">Quantity</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Sum</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                
                <TableBody>
                  {data.map((row, index) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <CancelOutlinedIcon
                          sx={{ paddingRight: "0.5rem" }}
                          onClick={() => {
                            deleteItem(row);
                          }}
                        ></CancelOutlinedIcon>
                        <img
                          src={row.images}
                          style={{ width: "70px", paddingRight: "1rem" }}
                          alt=""
                        ></img>{" "}
                        <h3>{row.title}</h3>
                      </StyledTableCell>
                      <StyledTableCell align="right">


                        
                        <QtyControl cartItem={row} onQuantityChange={(newQuantity) => handleQuantityChange(row.id, newQuantity)}/>
                      
                      
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {`₹ ${row.price}`}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {`₹ ${ccyFormat(row.price * row.quantity)}`}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                    
                    
                  
                          <StyledTableCell colSpan={7} sx={{ textAlign :"right"}}>
                          <Button
                    
                      variant="contained"
                      className="btn"
                      sx={{
                        padding: "10px 15px 10px 15px",
                     
                        borderRadius: "0",

                        
                      }}
                      onClick={()=>saveChange(data)}

                    >
                      Update Cart
                    </Button>
                          </StyledTableCell>
                      
             
                </TableBody>
           
                
              </Table>
              <Table
                sx={{
                  minWidth: 200,
                  maxWidth: 500,
                  border: "1px solid #e2e2e2",
                }}
                aria-label="spanning table"
              >
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell colSpan={4}>Cart Totals</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell >Subtotal</StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell align="right">
                      {`₹ ${ccyFormat(invoiceSubtotal)}`}
                    </StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow >
                    <StyledTableCell >Tax</StyledTableCell>
                  
                    <StyledTableCell align="right" colSpan={1}>
                    {`${(TAX_RATE * 100).toFixed(0)} %`}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    {`₹ ${ccyFormat(invoiceTaxes)}`}
                    </StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow>
                    <StyledTableCell >Total</StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell align="right">
                      {`₹ ${ccyFormat(invoiceTotal)}`}
                    </StyledTableCell>
                  </StyledTableRow>
                 
                  <StyledTableCell colSpan={4}>
                    <Button
                      onClick={()=>navigate('/CheckOut',{state:{ data:data , total :invoiceTotal}})}
                      variant="contained"
                      className="btn"
                      sx={{
                        padding: "10px 15px 10px 15px",
                        width: "60%",
                        borderRadius: "0",

                        position: "static",
                      }}
                    >
                      CheckOut
                      
                    </Button>
                  </StyledTableCell>
               
                </TableBody>
              </Table>
            </TableContainer>
       
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderTop: "3px solid #000000",
                justifyContent: "start",
                width: "60vw",
              }}
            >
              <ShoppingCartRoundedIcon></ShoppingCartRoundedIcon>
              <h3
                style={{ fontFamily: "var(--fontFamily)", fontWeight: "500" }}
              >
                {" "}
                Your Cart is empty
              </h3>
            </div>
          </div>
        )}
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Cart;
