import React, { useEffect, useState } from "react";
import "../Styles/ProductDescriptionPage.css";
import QtyControl from "../components/QuantityController/QtyControl";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import RelatedProduct from "./Sections/RelatedProduct";

const ProductDescriptionPage = ({ cartItems1}) => {
  
  const navigate = useNavigate();
  const { id } = useParams();

  const [preview, setPreview] = useState();

  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  // const [category, setCategory] = useState();

  // useEffect(() => {
  //   setCategory(preview.category.name); // Set the category in a useEffect
  // }, [preview.category.name]); // Use a dependency to update it when necessary
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/products?pid=${id}`
        );
        setPreview(response.data);
        setQuantity(1)
        setLoading(false);
      } catch (error) {
        console.log("Error while Fetching data", error);
        setLoading(false);
      }
    };
    fetchData();
  },[id]);
  
  
  
  
  const addToCart = (item) => {
   
    let userId = sessionStorage.getItem("id");
    if (userId) {
      item["userId"] = userId;
      item["quantity"] = quantity;

      const isProductInCart = cartItems1.some((product) => item.pid === product.pid);

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
    } else {
      window.location.href = "/Login";
    }
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  let category;
  let type;

  return (
    <>
      <Navbar secondaryNav={true}></Navbar>
      {loading ? (
        <h5>Loading...</h5>
      ) : (
        preview.map((preview, index) => {
          category=preview.category.name ;
          type=preview.category.type

          
          return (
            <div className="content-wrapper">
              <div className="product-image-container">
                <div className="product-img" key={index}>
                  {/* <img
                    src={preview.images}
                    alt=""
                    key={index}
                    className="product-image"
                  /> */}
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: `${preview.images}`,
                        sizes:
                          "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                      },
                      largeImage: {
                        src: `${preview.images}`,
                        width: 1200,
                        height: 1800,
                        zIndex: "100",
                      },
                      lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                    }}
                  />
                </div>
              </div>
              <div className="product-description-container">
                <Link to={`/categories/${preview.gender}`} id="category-link">
                  {preview.gender}
                </Link>
                <h1 className="brand-name">{preview.title}</h1>
                <h1 className="item-price">
                  {`₹ ${preview.price}`}
                  <small style={{ fontSize: "0.5em" }}>+ Free Shipping </small>
                </h1>
                <p className="description">{preview.description}</p>
                <div className="wrap">
                  <QtyControl cartItem={{ quantity: quantity, id: preview.id }}  onQuantityChange={handleQuantityChange}>{quantity}</QtyControl>
                
                  <Button
                    onClick={() => addToCart(preview)}
                    variant="contained"
                    className="btn"
                    sx={{
                      marginTop: "1.5rem",
                      marginBottom: "1.5rem",
                      padding: "10px 15px 10px 15px",
                      width: "60%",
                      borderRadius: "0",
                      marginLeft: "2rem",
                      position: "static",
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
                <h4 className="cat">
                  Category:<span>{preview.category.name}</span>
                 
                 
                </h4>
              </div>
            </div>
          );
        })
      )}
      <section>
        <RelatedProduct category={{category,type}} ></RelatedProduct>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ProductDescriptionPage;
