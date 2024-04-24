import React from 'react'
import "./HomePageFeaturedCard.css"

// import FlashImg from "../../assets/Home/flashImg.png"


function HomePageFeaturedCard({ image, heading, price, progress }) {
    return (

        <div className="homePage-flashSale-section-content-img-box">

            <div className="homePage-flashSale-section-content-img">
                <img src={image} alt="" />
            </div>
            <div className="homePage-flashSale-section-content-text">
                <h2>{heading}</h2>
                <p>{price}</p>
                <div className='progress-bar' style={{ height: "8px", width: "100%", borderRadius: "15px", backgroundColor: "#ffd6be" }}>
                    <div className='progress' style={{ height: "8px", width: "60%", borderRadius: "15px", backgroundColor: "#f24545f0" }}></div>
                </div>
            </div>

        </div>

    )
}

export default HomePageFeaturedCard