import React from 'react'
import "./HomePagePopularSearchCard.css"

// import StarIcon from '@mui/icons-material/Star';


function HomePagePopularSearchCard({ image, heading, number, previousPrice, starCount }) {

    // const stars = Array.from({ length: starCount }, (_, index) => <StarIcon key={index} />);

    return (
        <div className="homePagePopularSearch">
            <div className="homePagePopularSearch-img">
                <img src={image} alt="" />
            </div>
            <div className="homePagePopularSearch-content">

                <div className='homePagePopularSearch-price'>
                    <h3 style={{ color: "#F24545" }}>{number}</h3>
                    <s style={{ color: "#8D8D8D" }}>{previousPrice}</s>
                    {/* <span style={{ color: "#F24545" }}>{stars}</span> */}
                </div>
                <h3>{heading}</h3>
            </div>
        </div>
    )
}

export default HomePagePopularSearchCard