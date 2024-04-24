import React from "react";
import "./HomePageHotDeals.css";
import { Link } from "react-router-dom";
import img from "../../assets/placeholder (1).png";
function HomePageHotDeals({ image, heading, number, previousPrice }) {
  return (
    <div className="homePageHotDeals">
      <div className="homePageHotDeals-img">
        <img src={image ? image : img} alt="" />
      </div>

      <div className="homePageHotDeals-content">
        <div className="homePageHotDeals-price">
          <h3>{number ? number : "Makbook Pro 2020 With 260 SSD"}</h3>
          <strong>{previousPrice ? previousPrice : "AED33.3"}</strong>
        </div>

        {/* <h3>{heading}</h3> */}

        {/* <div
          className="progress-bar"
          style={{
            height: "8px",
            width: "80%",
            borderRadius: "15px",
            backgroundColor: "#ffd6be",
          }}
        >
          <div
            className="progress"
            style={{
              height: "8px",
              width: "40%",
              borderRadius: "15px",
              backgroundColor: "#f24545f0",
            }}
          ></div>
        </div> */}
        {/* <p style={{ color: "#8D8D8D" }}>56 Left Stock</p> */}
        <Link to="/singleProduct" style={{ marginTop: "10px" }}>
          <button className="hotDeals-button">See More</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePageHotDeals;
