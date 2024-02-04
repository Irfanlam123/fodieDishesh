import React from "react";
import Sushi from "../../../assets/sushi.jpg";



const Dish = () => {
  return (
    <div>
      <div className="bg-gray-400 relative">
        <img src={Sushi} alt="img" className="h-48 w-full " />
        <div className=" absolute bottom-10 text-white font-medium grid grid-cols-4 space-x-10 mx-32 ">
            
            
            <div >2<i className="font-bold text-lg">5</i> Years of experience</div>
            <div>500 Experienced Worker</div>
            <div>5m happy customer</div>
            <div>99 cup of coffee and tea</div>
            
            </div>
      </div>
     
    </div>
  );
};

export default Dish;
