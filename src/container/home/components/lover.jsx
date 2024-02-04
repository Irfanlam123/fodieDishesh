import React from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc

const Lover = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="flex justify-center items-center space-x-4">
        <p className="text-sm leading-[10px] text-gray-400">and much more your favorite food</p>
        <div>
          <button className="px-5 py-2 font-bold text-sm bg-yellow-400 rounded-full  text-white ">MORE CATEGORIES</button>
        </div>
=======
      <div className="flex justify-center items-center space-x-4 bottom-3">
        <p className="text-sm leading-[10px] text-gray-400">and much more your favorite food</p>
        <Link to="/menu">
          <button className="px-5 py-2  my-5 font-bold text-sm bg-yellow-400 rounded-full  text-white ">MORE CATEGORIES</button>
        </Link>
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
      </div>
    </div>
  );
};

export default Lover;
