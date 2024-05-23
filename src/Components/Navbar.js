import React from "react";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = ({ scrollToSection }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/choice");
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      id: "home",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      id: "about",
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      id: "testimonials",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      id: "contact",
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <a className="myapp">MyApp</a>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <ScrollLink key={item.id} to={item.id} smooth={true} duration={500} offset={-70}>
            {item.text}
          </ScrollLink>
        ))}
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 />
      </div>
      <Drawer anchor="right">
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
