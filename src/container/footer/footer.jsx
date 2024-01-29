import React from "react";

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
          <button className="bg-red-500 rounded-full px-5 py-1">Get Started</button>
          <div>
            <h2 className="text-white text-lg p-7">Connect</h2>
            <div className="p-7 ">
              <ul className="text-white text-sm space-y-2">
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
        <div className="ml-[90px] text-white text-lg ">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>2024,Fodie Dish.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
