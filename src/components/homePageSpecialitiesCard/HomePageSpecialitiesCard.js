import React from 'react'
import "./HomePageSpecialitiesCard.css"

function HomePageSpecialitiesCard({ image, heading, price }) {

    return (
        <div className="specialities-section-free-delivery">

            <div className="specialities-section-free-delivery-img">
                <img src={image} alt="" />
            </div>

            <div className="specialities-section-free-delivery-content">
                <h3>{heading}</h3>
                <p style={{ color: "#8D8D8D" }}>{price}</p>
            </div>
        </div>
    )
}

export default HomePageSpecialitiesCard