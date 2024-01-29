import React from "react";
import { Link } from "react-router-dom";

const Lover = () => {
  return (
    <div>
      <div className="flex justify-center items-center space-x-4 bottom-3">
        <p className="text-sm leading-[10px] text-gray-400">and much more your favorite food</p>
        <Link to="/menu">
          <button className="px-5 py-2  my-5 font-bold text-sm bg-yellow-400 rounded-full  text-white ">MORE CATEGORIES</button>
        </Link>
      </div>
    </div>
  );
};

export default Lover;
