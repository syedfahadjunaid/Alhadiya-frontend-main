import React from "react";
import "./HomePageCarausal.css";
import { Link } from "react-router-dom";
import placeholder from "../../assets/HomePageCarausal/placeholder.png";

import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function HomePageCarausal() {
  return (
    <div style={{ width: "100%" }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: false }}
        scrollbar={{ draggable: false }}
      >
        <SwiperSlide>
          <div className="homebanner_slider">
            <div className="homebanner_slider_contant">
              <p>HOT PRODUCTS</p>
              <h3>Fill your desk full of technology</h3>

              <Link to={"/"}>See More</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homebanner_slider">
            <div className="homebanner_slider_contant">
              <p>HOT PRODUCTS1</p>
              <h3>Fill your desk full of technology</h3>

              <Link to={"/"}>See More</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomePageCarausal;
