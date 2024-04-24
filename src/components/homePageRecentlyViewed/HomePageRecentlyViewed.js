import React from 'react'
import "./HomePageRecentlyViewed.css"

import StarIcon from '@mui/icons-material/Star';

function HomePageRecentlyViewed({ image, heading, number, starCount }) {
    const stars = Array.from({ length: starCount }, (_, index) => <StarIcon key={index} />);
    return (
        <div className="homePageRecentlyViewed">
            <div className="homePageRecentlyViewed-img">
                <img src={image} alt="" />
            </div>
            <div className="homePageRecentlyViewed-content">
                <h3>{heading}</h3>
                <h3 style={{ color: "#F24545" }}>{number}</h3>
                <span style={{ color: "#F24545" }}>{stars}</span>
            </div>
        </div>
    )
}

export default HomePageRecentlyViewed