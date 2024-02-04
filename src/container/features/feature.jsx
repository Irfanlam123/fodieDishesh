<<<<<<< HEAD
import React from 'react'

const Feature = () => {
  return (
    <div>Feature</div>
  )
}

export default Feature
=======
import React from "react";
import Pizza from "../features/pizza.jpg";
import { Link } from "react-router-dom";
import Chef from "./components/chef";
import Cookie from "./components/cookie";
import Drink from "./components/drink";
import Kitchen from "./components/kitchen";

const Feature = () => {
  return (
    <div>
      <div className=" bg-gray-100 pt-3 flex justify-center py-3 font-bold">
        <h1 className=" text-2xl">WHY PEOPLE CHOOSE US</h1>
      </div>

      <div>
        <img src={Pizza} alt="img" className="h-96 w-full" />
      </div>
      <div className="mt-4 relative flex justify-center">
          <h2 className=" absolute bottom-80 text-3xl font-bold text-white ">WE ARE SERVING BEST FOOD IN THE CITY</h2>
          <Link to="/menu">
        <button className="bg-yellow-400 rounded-full px-5 py-1 absolute bottom-64 text-sm text-white font-bold">Check Out</button>

        </Link>
        
        </div>
        <Chef/>
        <Cookie/>
        <Drink/>
        <Kitchen/>
        
        
        
        
        
    </div>
  );
};

export default Feature;
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
