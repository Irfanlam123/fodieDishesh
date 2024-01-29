import React from "react";
import Cold from "../../../assets/cold.jpg";
import { IoIosArrowForward } from "react-icons/io";

const Card2 = ({ title, content }) => {
  const item = [
    {
      img: Cold,
      text: "Coldrinks",
      price: "$70",
    },
    {
      img: Cold,
      text: "Coldrinks",
      price: "$70",
    },
    {
      img: Cold,
      text: "Coldrinks",
      price: "$70",
    },
  ];
  return (
    <>
      <div className="flex space-x-20 justify-center bg-gray-300 ">
        {item.map((e) => {
          return (
            <>
              <div className="  ">
                <img src={e.img} className="h-20 w-24 rounded-lg" />

                <div className=" text-center text-xs pt-1">
                  <p>{e.text}</p>
                  <p>{e.price}</p>
                  <div className="space-x-1 text-xs text-white font-bold pt-5 ">
                    <button className="px-2 py-1 bg-yellow-300 text-center rounded-full">
                      Order Now
                    </button>
                    <div className="pt-1">
                      <button className="px-2 py-1 bg-yellow-300 text-center rounded-full">
                        Check More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex justify-center text-[10px] bg-gray-300 ">
        <div className="flex items-center   text-center space-x-2 mt-3 font-bold">
          <div >View More New Dishes</div>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
