import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Kaddu from "../../assets/kaddu.jpg";
import Head from "./components/head";
import Card from "./components/card";
import Lover from "./components/lover";
import Bottome from "./components/bottom";
import { Link } from "react-router-dom";
import Food from "../../assets/food1.avif";
import Footer from "../footer/footer";

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
          <img className="h-96 w-full" src={Food} alt="img" />
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
        </p>
        <Link to="/menu">
          <button className="px-5  absolute  text-xl  bottom-48 bg-yellow-400 rounded-full">
            Menu
          </button>
        </Link>
        <div className="absolute bottom-10 ">
          <ul className="flex space-x-20 font-medium text-sm">
            <li>24/7 DELIVERY</li>
            <li>2500 RESTURANTS</li>
            <li>ORDER WITH APP </li>
            <li>FAST DELIVERY</li>
          </ul>
        </div>
        <div></div>
      </div>
      <Head />
      <div className="flex container mx-auto p-4">
        <Card title="Card 2" content="This is the content of Card 1." />
      </div>
      <Lover />
      <Bottome />
      <Footer />
    </div>
  );
};

export default Home;
