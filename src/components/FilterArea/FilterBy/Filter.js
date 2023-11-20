import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "../../Category/Category.css";

const Filter = ({ products, setFilteredProducts, setSelectedValue1 }) => {
  const [selectedValue, setSelectedValue] = useState("All");
  const [originalProducts, setOriginalProducts] = useState(products);
 
  // useEffect(() => {
  //   setOriginalProducts(products);
  // }, [products]);

  // setSelectedValue1(selectedValue)

  // let [filteredProducts1, setFilteredProducts] = useState([]);/
  function handleFilter(event) {

    const selectedPriceRange = event.target.value;
    setSelectedValue(selectedPriceRange);

   
    if (selectedPriceRange === "All") {
      // If "All" is selected, show all products
      setFilteredProducts(originalProducts);
    } else {
      // Filter products based on the selected price range
      const filteredProducts = originalProducts.filter((product) => {
        const price = parseFloat(product.price);
        // setPrice(prices) // Assuming each product has a 'price' property
       
        if (
          selectedPriceRange === "From 0 to 499" &&
          price >= 500 &&
          price <= 1101
        ) {
          return product;
        } else if (
          selectedPriceRange === "From 500 to 999" &&
          price >= 1100 &&
          price <= 1999
        ) {
          return product;
        } else if (
          selectedPriceRange === "From 999 to 1999" &&
          price >= 2000 &&
          price <= 3000
        ) {
          return product;
        } else if (
          selectedPriceRange === "above 2000" &&
          price >= 3001 &&
          price <= 12200
        ) {
          return product;
        }
        return false; // Handle invalid selections if necessary
      });

      setFilteredProducts(filteredProducts);
     
    }
  }

  return (
    <div className="category-wrapper">
      <h1 className="title">Filter by price</h1>
      <div className="categories">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            defaultValue={"All"}
            value={selectedValue}
            onChange={(e) => handleFilter(e)}
          >
            <FormControlLabel
              value="All"
              control={<Radio size="small" />}
              label="All"
            />
            <FormControlLabel
              value="From 0 to 499"
              control={<Radio size="small" />}
              label="From 0 to 499"
            />
            <FormControlLabel
              value="From 500 to 999"
              control={<Radio size="small" />}
              label="From 500 to 999"
            />
            <FormControlLabel
              value="From 999 to 1999"
              control={<Radio size="small" />}
              label="From 999 to 1999"
            />
            <FormControlLabel
              value="above 2000"
              control={<Radio size="small" />}
              label="above 2000"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Filter;
