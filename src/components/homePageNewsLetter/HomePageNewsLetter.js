import React from 'react'
import "./HomePageNewsLetter.css"
import { Link } from 'react-router-dom';

import NewsLetterImg from '../../assets/Home/newsletterImg.png'


function HomePageNewsLetter() {
    return (
        <div className="homePage-newsletter-section">

            <div className="homePageNewsletter-left">

                <div className="homePageNewsletter-left-img">
                    <img src={NewsLetterImg} alt="" />
                </div>
                <div className="homePageNewsletter-left-content">
                    <h2>Sign Up for Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

            </div>

            <div className="homePageNewsletter-right">
                <div className="input-wrapper">
                    <input type="text" placeholder='Enter Your Mail Here...' />
                    <Link to="/"> <button>Subscribe</button></Link>
                </div>

            </div>

        </div>
    )
}

export default HomePageNewsLetter