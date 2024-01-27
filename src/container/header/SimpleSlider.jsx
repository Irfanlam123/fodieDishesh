import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../assets/Hero.jpg";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="">
          <img className="h-96 w-full" src={hero} alt="img" />
          <p>hhh</p>
        </div>
        <div>
          <img className="h-96 w-full" src={hero} alt="img" />
        </div>
        <div>
          <img className="h-96 w-full" src={hero} alt="img" />
        </div>
      </Slider>
      <div className="relative  flex justify-center ">
        <p className="absolute bottom-80">food</p>
      </div>
    </div>
  );
};

export default SimpleSlider;
