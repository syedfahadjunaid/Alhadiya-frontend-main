import React, { useEffect, useRef, useState } from "react";
import "./ProductPage.css";
import img from "../../assets/banner.png";
import Category from "../../components/Category/Category";
import HomePageHotDealsCardsData from "../../components/homePageHotDeals/HomePageHotDeals";
import { Close, Menu } from "@mui/icons-material";
function ProductPage() {
  const [categoryWidth, setCategoryWidth] = useState(0);
  const categoryRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!categoryRef.current.contains(e.target)) {
        setCategoryWidth(0);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div className="productpage">
      <div className="productpage_left">
        <Category />
      </div>
      <div className="productpage_right">
        <div className="productpage_right_banner">
          <img src={img} alt="banner" />
        </div>
        <div className="productpage_right_product">
          <div className="productpage_right_product_heading">
            <p>
              <Menu onClick={() => setCategoryWidth(250)} /> Laptop Products
            </p>
          </div>
          <div className="productpage_right_product_product_card">
            <HomePageHotDealsCardsData />
            <HomePageHotDealsCardsData />
            <HomePageHotDealsCardsData />
            <HomePageHotDealsCardsData />
            <HomePageHotDealsCardsData />
            <HomePageHotDealsCardsData />
          </div>
        </div>
      </div>

      <div
        className="product_category"
        style={{ width: `${categoryWidth}px` }}
        ref={categoryRef}
      >
        {categoryWidth === 250 && (
          <>
            <span>
              <p>CATEGORIES</p> <Close onClick={() => setCategoryWidth(0)} />
            </span>
            <p>Apparel (20)</p>
            <p>Bags</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
