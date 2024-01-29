import React from "react";
import Kaddu from "../../assets/kaddu.jpg";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Menu2 from "./Components/menu2";
import Card from "./Components/card";
import Dish from "./Components/dish";
import Midle from "./Components/midle";
import Card2 from "./Components/card2";

const Menu = () => {
  return (
    <div>
      <div className="bg-pink-50">
        <img src={Kaddu} alt="" className="h-96 w-full" />
        <div className="absolute bottom-[450px] m-11 text-white font-bold text-2xl">
          <h3>
            Get Your Favorite Food<p>Fast With The App</p>
          </h3>
        </div>
        <div className=" flex absolute bottom-72  space-x-4 text-white text-sm m-6">
          <FaApple />
          <p>Download on the App store </p>
          <IoLogoGooglePlaystore />
          <p>Android App on the Google Play </p>
        </div>
        <Menu2 />
        <Card title="Card 1" content="this the content of card 1" />
      </div>
      <div>
        <Dish />
      </div>
      <div>
        <Midle/>
        <Card2/>
      </div>
      
      
    </div>
  );
};

export default Menu;
