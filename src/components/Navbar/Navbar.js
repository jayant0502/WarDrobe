import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { Person2Outlined, ShoppingBag } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

 const Navbar=({ secondaryNav,setNavCategory})=> {
  const [userPresent, setUserPresent] = useState(false);

  const cartLength= sessionStorage.getItem("cartlength")

  const totalBillAmt=sessionStorage.getItem("TotalAmount")

  useEffect(() => {
    const isUserLoggedIn = sessionStorage.getItem("userName");
    if (isUserLoggedIn) {
      
      setUserPresent(true);
    } else {
     
      setUserPresent(false);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear(); 
    window.location.href='/'
  };

  const handleCategoryClick = (category) => {
    try {
      setNavCategory(category);
    } catch (error) {
      console.error("Error setting category:", error);
    }
  };
  

  return (
    <Box className="header" sx={{ flexGrow: 1 }}>
      <AppBar className={`${secondaryNav ? "second-nav" : "primary-nav"}`} id="nav">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            <Link to="/">
              <img src={logo} className="logo" alt="Logo" />
            </Link>
          </Typography>

          
          <Box sx={{ flexGrow: 1 }}>
  <ul className={`${secondaryNav ? "second-nav-list" : "primary-nav-list"}`}>
    <li>
      <Link to="/Categories/everything" onClick={() => handleCategoryClick("")}>Everything</Link> 
       {/* onClick={() => handleCategoryClick("")}>Everything</Link> */}
    </li>
    <li>
      <Link to="/Categories/women" onClick={() => handleCategoryClick("women")}>women</Link> 
       {/* onClick={() => handleCategoryClick("women")}>Women</Link> */}
    </li>
    <li>
      <Link to="/Categories/men" onClick={() => handleCategoryClick("men")}>Men</Link> 
       {/* onClick={() => handleCategoryClick("men")}>Men</Link> */}
    </li>
    <li>
      <Link to="/Categories/accessories" onClick={() => handleCategoryClick("accessories")}>
      {/* onClick={() => handleCategoryClick("accessories")}> */}
      Accessories</Link>
    </li>
  </ul>
</Box>


          <Box
            sx={{
              display: {
                md: "flex",
                display: "flex",
                justifyContent: "space-around",
              },
            }}
          >
            <ul className={`${secondaryNav ? "second-nav-list2" : "primary-nav-list2"}`}>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact_Us">Contact Us</Link>
              </li>
            </ul>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Typography variant="h6" component={"bdi"}>
                <span>₹</span>
                {totalBillAmt?totalBillAmt:"0.00"}
              </Typography>
            </IconButton>
            <Link to="/Cart">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={cartLength} color="error">
                  <ShoppingBag className={`${secondaryNav ? "blackIcon" : "whiteIcon"}`} />
                </Badge>
              </IconButton>
            </Link>
            <Link to={userPresent ? '' : '/Profile'}>
              <IconButton
                size="large"
                edge="end"
                aria-label={userPresent ? "Logout" : "Login/Profile"}
                color="inherit"
                
              >
                {userPresent ? (
                  <Button onClick={userPresent ? handleLogout : undefined} className={`${secondaryNav ? "blackIcon" : "whiteIcon"}`}>logout</Button>
                ) : (
                  <Person2Outlined className={`${secondaryNav ? "blackIcon" : "whiteIcons"}`}>
                    Profile
                  </Person2Outlined>
                )}
              </IconButton>
            </Link>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: 2, display: { xs: "flex", sm: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;