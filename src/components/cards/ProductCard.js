import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Rating } from "@mui/material";
import axios from "axios";
import "../cards/ProductCard.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export default function ProductCard({
  products,
  itemToBeSearch,
  cartItems
}) {
   
  const navigate=useNavigate()

  const addToCart=(item)=> {

    let userId = sessionStorage.getItem("id");
    if (userId) {
      item["userId"] = userId;
      item["quantity"] = 1; 


      const isProductInCart = cartItems.some((product) => item.pid === product.pid);

        if(isProductInCart){
          alert("Product Already Exists in Your Cart")
          navigate("/Cart")
        }
        else{
          
          axios
          .post("http://localhost:8000/Cart", item)
          .then((response) => {
            navigate('/Cart')
          })
          .catch((errors) => {
            console.error("Error", errors);
          });
          
        }
              
    }
    else {
      window.location.href = "/Login";
    }
  }
  
  let filterItems;
  try {
    filterItems = products.filter(
      (items) =>
        items.category.name
          .toLowerCase()
          .includes(itemToBeSearch.toLowerCase()) ||
        items.title.toLowerCase().includes(itemToBeSearch)
    );
  } catch (error) {
    console.log(error);
  }
   function handleProductPreview(id){

    navigate(`/ProductDescriptionPage/${id}`)
    
   }


  return (
    <div className="card-container">
      {filterItems &&
        filterItems.map((item, index) => {
          return (
            <Card key={index} variant="plain" className="card"  >
              <AspectRatio minHeight="100%" className="img-wrapper" onClick={()=>handleProductPreview(item.pid)}>
                <img
                  id="img"
                  src={item.images}
                  key={index}
                  loading="lazy"
                  alt="Products"
                  
                />
              </AspectRatio>

              <CardContent className="card-content" onClick={()=>handleProductPreview(item.pid)}>
                <Typography className="brand-title">{item.title}</Typography>
                <Typography className="category">
                  {item.category.name}
                </Typography>

                <Typography className="price">{`₹ ${item.price}`}</Typography>
              </CardContent>
              {/* <Rating name="read-only" defaultValue={2.5} readOnly /> */}
              <CardContent sx={{ flexDirection: "row" }}>
                <Button
                  variant="outlined"
                  size="md"
                  color="primary"
                  aria-label="Buy Now"
                  sx={{ alignSelf: "start", fontWeight: 600 }}
                  onClick={() => addToCart(item)}
                >
                  Buy Now
                </Button>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore"
                  sx={{ alignSelf: "start", fontWeight: 600 }}
                  onClick={()=>handleProductPreview(item.pid)}
                >
                 <Link to={`/ProductDescriptionPage/${item.pid}`}>Explore</Link>
                </Button>
                {/* <Rating
  name="simple-controlled"
//   value={value}
//   onChange={(event, newValue) => {
//     setValue(newValue);
//   }}
/> */}
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
}
