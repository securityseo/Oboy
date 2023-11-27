import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './swiper.css'
import wal from "../../assets/bann.png";
import wall from "../../assets//banner4.png";
const Swipper = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slide-img">
          <img src={wal} alt="" />
        </div>
        <div className="slide-img">
          <img src={wall} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Swipper;
