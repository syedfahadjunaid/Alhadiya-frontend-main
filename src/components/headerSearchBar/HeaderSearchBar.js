import React, { useState } from "react";
import "./HeaderSearchBar.css";
import { Link } from "react-router-dom";

// Search Bar

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import NotificationsIcon from "@mui/icons-material/Notifications";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import LogoImg from "../../assets/Home/logo.png";
import { LocationOn, Menu } from "@mui/icons-material";

function HeaderSearchBar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1",
    color: "#f24545",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        backgroundColor: "#F1F1F1",
        width: "70ch",
        "&:focus": {
          width: "70ch",
        },
      },
    },
  }));
  const [menuWidth, setMenuWidth] = useState(0);
  return (
    <div className="headerSearchBar">
      <div className="sub-headerSearchBar">
        <div className="sub-headerSearchBar-logo">
          <div className="sub-headerSearchBar-logo-img">
            <Link to="/">
              <img src={LogoImg} alt="" />
            </Link>
          </div>
          <div className="sub_header_search">
            <SearchIcon style={{ color: "#f24545" }} />
            <input type="text" placeholder="Search" />
          </div>
          {/* <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search> */}
          <div className="notification">
            <NotificationsIcon />

            <button className="nav-button">
              <WhatsAppIcon />
              <p>+97 9876543210</p>
            </button>
          </div>
          <div className="hamberger">
            <Menu
              style={{ fontSize: "35px" }}
              onClick={() => setMenuWidth(menuWidth === 250 ? 0 : 250)}
            />
          </div>
        </div>
      </div>
      <div className="headerSearchBar_menu" style={{ width: `${menuWidth}px` }}>
        {menuWidth === 250 && (
          <ul style={{ width: `${menuWidth}px` }}>
            <li>dsfd</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default HeaderSearchBar;
