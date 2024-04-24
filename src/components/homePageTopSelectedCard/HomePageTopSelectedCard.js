import React from 'react'
import "./HomePageTopSelectedCard.css"

import StarIcon from '@mui/icons-material/Star';


function HomePageTopSelectedCard({ image, heading, number, previousPrice, starCount }) {
    const stars = Array.from({ length: starCount }, (_, index) => <StarIcon key={index} />);
    return (
        <div className="homePageTopSelected">
            <div className="homePageTopSelected-img">
                <img src={image} alt="" />
            </div>
            <div className="homePageTopSelected-content">
                <h3>{heading}</h3>
                <div className='homePageTopSelected-price'>
                    <h3 style={{ color: "#F24545" }}>{number}</h3>
                    <s style={{ color: "#8D8D8D" }}>{previousPrice}</s>
                    <span style={{ color: "#F24545" }}>{stars}</span>
                </div>
            </div>
        </div>
    )
}

export default HomePageTopSelectedCard