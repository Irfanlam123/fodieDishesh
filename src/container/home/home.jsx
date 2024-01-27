import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Kaddu from "../../assets/kaddu.jpg";
import Head from "./components/head";
import Card from "./components/card";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="bg-pink-100">
      <Slider {...settings}>
        <div className="">
          <img className="h-96 w-full" src={Kaddu} alt="img" />
        </div>
        <div>
          <img className="h-96 w-full" src={Kaddu} alt="img" />
        </div>
        <div>
          <img className="h-96 w-full" src={Kaddu} alt="img" />
        </div>
      </Slider>
      <div className=" mt-1 relative  flex justify-center  text-2xl text-white font-bold">
        <h1 className="absolute bottom-80 font-bold text-6xl ">
          ORDER FOOD DELIVERY
        </h1>
        <p className="absolute bottom-72 font-bold text-sm">
          FROM YOUR FAVORITE RESTURANTS{" "}
          <button className="px-5 py-1 bg-yellow-400 rounded-full">Menu</button>
        </p>
      </div>
      <Head />
      <div className="flex container mx-auto p-4">
        <Card title="Card 2" content="This is the content of Card 1." />
      </div>
    </div>
  );
};

export default Home;
