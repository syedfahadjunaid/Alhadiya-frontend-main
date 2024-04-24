import React from 'react';
import "./HomePageBestDealCard.css";
import StarIcon from '@mui/icons-material/Star';

function HomePageBestDealCard({ image, heading, number, starCount }) {
    const stars = Array.from({ length: starCount }, (_, index) => <StarIcon key={index} />);

    return (
        <div className="homePageBestDealCard">
            <div className="homePageBestDealCard-img">
                <img src={image} alt="" />
            </div>
            <div className="homePageBestDealCard-content">
                <h3>{heading}</h3>
                <h3 style={{ color: "#F24545" }}>{number}</h3>
                <span style={{ color: "#F24545" }}>{stars}</span>
            </div>
        </div>
    );
}

export default HomePageBestDealCard;
