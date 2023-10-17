import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { Person2Outlined, ShoppingBag } from "@mui/icons-material";

export default function PrimarySearchAppBar( {secondaryNav,setcategories}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu

  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}

  //   >
  {
    /* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */
  }
  {
    /* <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */
  }
  {
    /* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */
  }
  //   </Menu>
  // );

  return (
    <Box className="header" sx={{ flexGrow: 1 }} >
      <AppBar className={`${secondaryNav ? "second-nav":"primary-nav"}`} id="nav" >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            <Link to="/">
              <img src={logo} className="logo"></img>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <ul className={`${secondaryNav ? "second-nav-list":"primary-nav-list"}`}>
              <li>
                <Link to="/Categories" onClick={()=> setcategories("")}>Everything</Link>
              </li>
              <li>
                <Link to="/Categories" onClick={()=> setcategories("women")}>Women</Link>
              </li>
              <li>
                <Link to="/Categories" onClick={()=> setcategories("men")}>Men</Link>
              </li>
              <li>
                <Link to="/Categories" onClick={()=>setcategories("accessories")}>Accessories</Link>
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
            <ul className={`${secondaryNav ? "second-nav-list2":"primary-nav-list2"}`}>
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
                <span>$</span>
                0.00
              </Typography>
            </IconButton>
            <Link to="/Cart">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <ShoppingBag />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/Profile">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                // aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Person2Outlined>Profile</Person2Outlined>
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
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
          </Box> */}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </Box>
  );
}
