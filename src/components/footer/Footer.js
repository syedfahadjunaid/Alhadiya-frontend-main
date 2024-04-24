import React, { useEffect } from "react";
import "./Footer.css";

import { Link, useLocation } from "react-router-dom";

import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

import AppStoreImg from "../../assets/Footer/appStore.png";
import GoogleAppImg from "../../assets/Footer/googlePlay.png";
import LogoImg from "../../assets/Home/logo.png";

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPath]);

  return (
    <div className="footer">
      <div className="sub-footer">
        <div className="footer-logo">
          <div className="footer-logo-img">
            <Link to="/">
              <img src={LogoImg} alt="" />
            </Link>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="footer-logo-icons">
            <Link to="/">
              <YouTubeIcon className="icon" />
            </Link>
            <Link to="/">
              <TwitterIcon className="icon" />
            </Link>
            <Link to="/">
              <LinkedInIcon className="icon" />
            </Link>
            <Link to="/">
              <FacebookIcon className="icon" />
            </Link>
            <Link to="/">
              {" "}
              <InstagramIcon className="icon" />
            </Link>
          </div>
        </div>

        <div className="footer-quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">Sign Up</Link>
            </li>
          </ul>
        </div>

        <div className="footer-quick-links customer-area">
          <h2>Customer Area</h2>
          <ul>
            <li>
              <Link to="/">My Account</Link>
            </li>
            <li>
              <Link to="/">Orders</Link>
            </li>
            <li>
              <Link to="/">Tracking List</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">My Cart</Link>
            </li>
          </ul>
        </div>

        <div className="footer-quick-links contact">
          <h2>Contact</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing..</p>

          <div className="contact-details">
            <HeadsetMicIcon style={{ fontSize: "30px" }} />
            <span className="contact-details-eraphone">
              <a href="mailto:kabirusman@gmail.com">kabirusman@gmail.com</a>
              <a href="tell:9876543210">987654310</a>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-copy-right">
          <p>Branding 360 - @2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
