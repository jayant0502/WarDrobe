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
import axios from "axios";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import QtyControl from "../components/QuantityController/QtyControl";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';


const Cart = () => {
  const TAX_RATE = 0.07;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }

  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Cart")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function deleteItem(row){
    axios
    .delete(`http://localhost:8000/Cart/${row.id}`)
    .then((response) => {
      // console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

    window.location.href='/Cart'
   
  }

  const rows = [];

  const invoiceSubtotal = subtotal(rows);
  const invoiceTotal = invoiceSubtotal;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    textAlign:"center",
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
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
 
  }));

  // fetching whole data from specific user for cart

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
            fontSize: "2.5rem",
            color: "#54595f",
            fontWeight: "500",
            margin: "3rem 0 3rem 0",
          }}
        >
          Cart
        </h1>
        {data.length>0?
        (
          <>
          <TableContainer
          component={Paper}
          sx={{
            display: "flex",
            justifyContent: "center",
            boxShadow: "none",
            backgroundColor: "#f5f7f9",
            alignItems:"center"
          }}
        >
          <Table
            sx={{ minWidth: 500, maxWidth: 800, border: "1px solid #e2e2e2" }}
            aria-label="spanning table"
          >
            <TableHead>
              <StyledTableRow >
                <StyledTableCell>Product</StyledTableCell>
                <StyledTableCell align="right">Qty.</StyledTableCell>
                <StyledTableCell align="right">price</StyledTableCell>
                <StyledTableCell align="right">Sum</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <CancelOutlinedIcon sx={{paddingRight:"0.5rem"}} onClick={()=>{deleteItem(row)}}></CancelOutlinedIcon>
                    <img
                      src={row.images}
                      style={{ width: "70px", paddingRight: "1rem" }}
                    ></img>{" "}
                    <h3>{row.title}</h3>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <QtyControl></QtyControl>
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">
                    {ccyFormat(row.price)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer
          component={Paper}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
            padding: "1rem 0 0 0%",
            backgroundColor: "#f5f7f9",
            boxShadow: "none",
          }}
        >
          <Table
            sx={{ minWidth: 200, maxWidth: 500, border: "1px solid #e2e2e2" }}
            aria-label="spanning table"
          >
            <TableHead>
              <StyledTableRow>
                <StyledTableCell colSpan={4}>Cart Totals</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                {/* <StyledTableCell rowSpan={3} /> */}
                <StyledTableCell colSpan={3}>Subtotal</StyledTableCell>
                <StyledTableCell align="right">
                  {ccyFormat(invoiceSubtotal)}
                </StyledTableCell>
              </StyledTableRow>

              <StyledTableRow>
                <StyledTableCell colSpan={3}>Total</StyledTableCell>
                <StyledTableCell align="right">
                  {ccyFormat(invoiceTotal)}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
          </>):(
              <div style={{display:"flex" , alignItems:"center", justifyContent:"center"}}>

            <div style={{display:"flex" , alignItems:"center", borderTop:"3px solid #000000", justifyContent:"start", width:"60vw"}}>
            <ShoppingCartRoundedIcon></ShoppingCartRoundedIcon>
            <h3 style={{fontFamily:"var(--fontFamily)", fontWeight:"500"}}> Your Cart is empty</h3>

            </div>
              
              </div>
          )
        }
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Cart;
