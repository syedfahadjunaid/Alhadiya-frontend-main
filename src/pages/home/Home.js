import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import HomePageCarausal from "../../components/homePageCarausal/HomePageCarausal";

import HomePageBestDealCard from "../../components/homePageBestDealCard/HomePageBestDealCard";
import HomePageTopProductCard from "../../components/homePageTopSelectedCard/HomePageTopSelectedCard";
import HomePagePopularSearchCard from "../../components/homePagePopularSearchCard/HomePagePopularSearchCard";
import HomePageSpecialitiesCard from "../../components/homePageSpecialitiesCard/HomePageSpecialitiesCard";
import HomePageFeaturedCard from "../../components/homePageFeaturedCard/HomePageFeaturedCard";
import HomePageHotDealsCardsData from "../../components/homePageHotDeals/HomePageHotDeals";
import HomePageRecentlyViewedCardsData from "../../components/homePageRecentlyViewed/HomePageRecentlyViewed";

import BestDealCardImg from "../../assets/Home/bestDealImg.png";
import TopSelectedProdeuct from "../../assets/Home/topSelectedProductImg.png";
import FreeDeliveryImg from "../../assets/Home/delivery.png";
import StarImg from "../../assets/Home/star.png";
import Year from "../../assets/Home/year.png";
import FeedBack from "../../assets/Home/feedBack.png";
import payments from "../../assets/Home/payments.png";
import FlashImg from "../../assets/Home/flashImg.png";
// import NewsLetterImg from '../../assets/Home/newsletterImg.png'

import Marquee from "react-fast-marquee";
import MarqueeImg from "../../assets/Home/marqueeImg.png";

function Home() {
  // Best Deal Cards Data
  const bestDealCardsData = [
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
  ];
  const renderedBestDealCards = bestDealCardsData.map((data, index) => (
    <HomePageBestDealCard
      image={data.image}
      heading={data.heading}
      number={data.number}
      starCount={data.starCount}
      key={index}
    />
  ));

  // Top Product Cards Data
  const topProductCardsData = [
    {
      image: TopSelectedProdeuct,
      heading: "Fitness and activity Tracker",
      number: "₹330.3",
      previousPrice: "₹330",
      starCount: "4",
    },
    {
      image: TopSelectedProdeuct,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      previousPrice: "₹330",
      starCount: "4",
    },
    {
      image: TopSelectedProdeuct,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      previousPrice: "₹330",
      starCount: "4",
    },
    {
      image: TopSelectedProdeuct,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      previousPrice: "₹330",
      starCount: "4",
    },
    {
      image: TopSelectedProdeuct,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      previousPrice: "₹330",
      starCount: "4",
    },
    {
      image: TopSelectedProdeuct,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      previousPrice: "₹330",
      starCount: "4",
    },
    {
      image: TopSelectedProdeuct,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      previousPrice: "₹330",
      starCount: "4",
    },
    {
      image: TopSelectedProdeuct,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      previousPrice: "₹330",
      starCount: "4",
    },
  ];
  const renderedTopProductCardsData = topProductCardsData.map((data, index) => (
    <HomePageTopProductCard
      image={data.image}
      heading={data.heading}
      number={data.number}
      previousPrice={data.previousPrice}
      starCount={data.starCount}
      key={index}
    />
  ));

  // Popular Search Cards Data
  const popularSearchCardsData = [
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },

    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
  ];
  const renderedPopularSearchCardsData = popularSearchCardsData.map(
    (data, index) => (
      <HomePagePopularSearchCard
        image={data.image}
        heading={data.heading}
        number={data.number}
        previousPrice={data.previousPrice}
        starCount={data.starCount}
        key={index}
      />
    )
  );

  // Specialities Section
  const specialitiesCardsData = [
    {
      image: FreeDeliveryImg,
      heading: "Free Delivery",
      price: "From ₹40",
    },
    {
      image: StarImg,
      heading: "Free Delivery",
      price: "From ₹40",
    },
    {
      image: Year,
      heading: "Free Delivery",
      price: "From ₹40",
    },
    {
      image: FeedBack,
      heading: "Free Delivery",
      price: "From ₹40",
    },
    {
      image: payments,
      heading: "Free Delivery",
      price: "From ₹40",
    },
  ];
  const renderedSpecialitiesCardsData = specialitiesCardsData.map(
    (data, index) => (
      <HomePageSpecialitiesCard
        image={data.image}
        heading={data.heading}
        price={data.price}
        key={index}
      />
    )
  );

  // Featured Section
  const featuredCardsData = [
    {
      image: FlashImg,
      heading: "Fitness and activity Tracker",
      price: "₹33.3",
    },
    {
      image: FlashImg,
      heading: "Fitness and activity Tracker",
      price: "₹33.3",
    },
    {
      image: FlashImg,
      heading: "Fitness and activity Tracker",
      price: "₹33.3",
    },
    {
      image: FlashImg,
      heading: "Fitness and activity Tracker",
      price: "₹33.3",
    },
    {
      image: FlashImg,
      heading: "Fitness and activity Tracker",
      price: "₹33.3",
    },
  ];
  const renderedFeaturedCardsData = featuredCardsData.map((data, index) => (
    <HomePageFeaturedCard
      image={data.image}
      heading={data.heading}
      price={data.price}
      progress={data.progress}
      key={index}
    />
  ));

  // Hot Deals
  const hotDealsCardsData = [
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },

    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
    {
      image: TopSelectedProdeuct,
      number: "₹1,245.3",
      previousPrice: "₹1,530",
      heading: "Makbook Pro 2020 260 SSD",
    },
  ];
  const renderedHotDealsCardsData = hotDealsCardsData.map((data, index) => (
    <HomePageHotDealsCardsData
      image={data.image}
      heading={data.heading}
      number={data.number}
      previousPrice={data.previousPrice}
      starCount={data.starCount}
      key={index}
    />
  ));

  // Recently Viewed Cards Data
  const recentlyViewedCardsData = [
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
    {
      image: BestDealCardImg,
      heading: "Fitness and activity Tracker",
      number: "₹33.3",
      starCount: "4",
    },
  ];
  const renderedRecentlyViewedCardsData = recentlyViewedCardsData.map(
    (data, index) => (
      <HomePageRecentlyViewedCardsData
        image={data.image}
        heading={data.heading}
        number={data.number}
        starCount={data.starCount}
        key={index}
      />
    )
  );
  return (
    <div className="homePage">
      <HomePageCarausal />
      <div className="sub-homePage">
        <h2>Best Deals</h2>

        <div className="homePageBestDealCard-box">{renderedBestDealCards}</div>
        <h2>Top 10 Selected Products on the Week</h2>

        <div className="homePageTopSelected-box">
          {renderedTopProductCardsData}
        </div>

        <h2>Popular Search</h2>

        <div className="homePagePopularSearch-box">
          {renderedPopularSearchCardsData}
        </div>

        <div className="homePage-specialities-section">
          {renderedSpecialitiesCardsData}
        </div>

        <div className="homePage-flashSale-section">
          {/* <div className="homePage-flashSale-section-content-left">
            <h2>Flash Sale</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Incidunt, vel!
            </p>
            <h2>05 : 42 : 19 : 54</h2>
          </div> */}

          {/* <div className="homePage-flashSale-section-right">
            <div className="homePage-flashSale-section-right-box">
              {renderedFeaturedCardsData}
            </div> */}

          {/* <div className="homePage-flashSale-section-content-img-box">

                                <div className="homePage-flashSale-section-content-img">
                                    <img src={FlashImg} alt="" />
                                </div>
                                <div className="homePage-flashSale-section-content-text">
                                    <h2>Fitness and activity Tracker</h2>
                                    <p>₹33.3</p>
                                    <div className='progress-bar'>
                                        <div className='progress'></div>
                                    </div>
                                </div>

                            </div> */}

          {/* <button className="homePage-flashSale-section-right-button">
              <Link to="/">View More </Link>
            </button>
          </div> */}
        </div>

        <h2>Hot Deals</h2>

        <div className="homePage-HotDeals-section">
          {renderedHotDealsCardsData}
        </div>

        <h2>Recently Viewed</h2>

        <div className="homePage-recently-viewed-section">
          {renderedRecentlyViewedCardsData}
        </div>

        <div className="homePage-marquee-section">
          <Marquee className="marquee">
            <img src={MarqueeImg} alt="" />
          </Marquee>
        </div>

        {/* <div className="homePage-newsletter-section">

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

            </div> */}
      </div>
    </div>
  );
}

export default Home;
