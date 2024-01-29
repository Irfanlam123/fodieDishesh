import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-950">
        <div className="flex justify-center space-x-12 ">
          <h2 className="text-white text-5xl font-bold p-7">
            Grow Your <br />
            Resturant <br />
            Business With Fodie
          </h2><br />
          <Link to="/menu">
          <button className="bg-yellow-300 text-white mt-20 rounded-full px-5 py-1">Get Started</button>
         
          </Link> <div>
            <h2 className="text-white text-lg p-7">Connect</h2>
            <div className="p-7  ">
              <ul className="text-white text-sm space-y-2 ">
                <li>Blogs</li>
                <li>hello@fodiedish.in</li>
                <li>Events</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-lg text-white p-7">Helpline Numbers</h2>
            <div className="p-7">
              <ul className="text-white text-sm space-y-2">
                <li>+911234567890</li>
                <li>+911234567890</li>
                <li>+911234567890</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ml-[90px] pt-4 text-white text-sm space-y-2  py-12">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>2024,Fodie Dish.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
