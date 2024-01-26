import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../assets/Hero.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="">
          <img className="h-96 w-full" src={hero} alt="img" />
         
        </div>
        <div>
          <img className="h-96 w-full" src={hero} alt="img" />
        </div>
        <div>
          <img className="h-96 w-full" src={hero} alt="img" />
        </div>
      </Slider>
      <div className="relative  flex justify-center  text-2xl text-white font-bold">
        <p className="absolute bottom-80">Food Items</p>
      </div>
    </div>
  );
};

export default Home;
