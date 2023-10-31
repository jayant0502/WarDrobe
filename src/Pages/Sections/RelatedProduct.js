import React, { useEffect, useState } from 'react'
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Rating } from "@mui/material";
import axios from "axios";
import "../../components/cards/ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
const RelatedProduct = ({category}) => {
 
    const navigate =useNavigate()
    const [relatedProducts,setRelatedProducts]=useState('')
    function handleProductPreview(id){
        navigate(`/ProductDescriptionPage/${id}`)
    }
    useEffect(()=>{
      const relatedProduct=async ()=>{
        try{
          const response=await axios.get(`http://localhost:8000/products?category.name=${category.category}`)
          setRelatedProducts(response.data);
        }

        catch(error){
          console.log("Related products cannot be fetched",error)
        }
      }

      relatedProduct()
    },[category])

   
  return (
    <div style={{margin:"2rem" }} >
      <h1 style={{textAlign:"start" , margin:"1.5rem" ,fontSize:"2.5rem" , fontFamily:"var(--fontFamily)" }}>Related Products</h1>
      <div className='related-product-container' style={{display:"flex"}}>
      {relatedProducts &&
        relatedProducts.map((item, index) => {
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
    </div>
  )
}

export default RelatedProduct
