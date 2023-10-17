import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Rating } from "@mui/material";
import axios from "axios";
import "../cards/ProductCard.css"

export default function BasicCard({ products }) {
  // console.log(products);

  function addToCart(item){
    console.log(item)
    axios
    .post('http://localhost:8000/Cart',item)
    .then((response)=>{
      console.log(response.data)
    }  )
    .catch((errors)=>{
      console.error("Error", errors );
    })
    
  }

  return (
    <div
       className="card-container"
    >
      {products &&
        products.map((item, index) => {
          return (
            <Card
             
              key={index}
              variant="plain"
              className="card"
            >
              <AspectRatio minHeight="100%" minWidth="100%" className="img-wrapper">
            
                <img id="img" src={item.images}
                  key={index}
                  loading="lazy"
                  alt="Products"
                  
                
                />
              
           
              </AspectRatio>

              <CardContent className="card-content">
                <Typography  className="brand-title" >{item.title}</Typography>
                <Typography  className="category" >{item.category.name}</Typography>
        
                <Typography  className="price">
                  {`₹ ${item.price}`}
                </Typography>
              </CardContent>
              <Rating name="read-only" defaultValue={2.5} readOnly />
              <CardContent sx={{ flexDirection: "row" }}>
                <Button
                  variant="outlined"
                  size="md"
                  color="primary"
                  aria-label="Buy Now"
                  sx={{ alignSelf: "start", fontWeight: 600 }}
                  onClick={()=>addToCart(item)}
                >
                  Buy Now
                </Button>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore"
                  sx={{ alignSelf: "start", fontWeight: 600 }}
                >
                  Explore
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
