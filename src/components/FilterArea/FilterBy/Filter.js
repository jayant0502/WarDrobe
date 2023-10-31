import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "../../Category/Category.css";
import value from "require-context.macro";

const Filter = ({ products,setFilteredProducts}) => {

  const [selectedValue, setSelectedValue] = useState("All");

   function handleFilter(event){

        const selectedPriceRange=event.target.value;
        setSelectedValue(selectedPriceRange)

        if (selectedPriceRange === "All") {
          // If "All" is selected, show all products
          setFilteredProducts(products);
        } else {
          // Filter products based on the selected price range
          const filteredProducts = products.filter((product) => {
            const price = product.price; // Assuming each product has a 'price' property
            if (selectedPriceRange === "From 0 to 499") {
              return price >= 0 && price <= 499;
            } else if (selectedPriceRange === "From 500 to 999") {
              return price >= 500 && price <= 999;
            } else if (selectedPriceRange === "From 999 to 1999") {
              return price >= 999 && price <= 1999;
            } else if (selectedPriceRange === "above 2000") {
              return price > 1999;
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
        <FormControl >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            defaultValue={"All"}
            value={selectedValue}
            onChange={(e)=>handleFilter(e)}
            

          >
             <FormControlLabel
              value="All"
              control={<Radio size="small" />}
              label="All"
              
            />
            <FormControlLabel
              value="From 0 to 499"
              control={<Radio size="small"/>}
              label="From 0 to 499"
            />
            <FormControlLabel
              value="From 500 to 999"
              control={<Radio size="small"/>}
              label="From 500 to 999"
              
            />
            <FormControlLabel
              value="From 999 to 1999"
              control={<Radio size="small"/>}
              label="From 999 to 1999"
              
            />
            <FormControlLabel
              value="above 2000"
              control={<Radio size="small"/>}
              label="above 2000"
              
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Filter;
