import React from "react";
import Food1 from "../../../assets/food1.avif";
import { MdStar } from "react-icons/md";

const Card = ({ title, content }) => {
  const item = [
    {
      img: Food1,
      text: "burger",
    },
    {
      img: Food1,
      text: "burger",
    },
    {
      img: Food1,
      text: "burger",
    },
    {
      img: Food1,
      text: "burger",
    },
  ];
  return (
    <>
      <div className="flex space-x-16 justify-center">
        {item.map((e) => {
          return (
            <>
              <div className="max-w-md   bg-white rounded-xl overflow-hidden shadow-md my-4">
                <img className="h-28 w-48  object-cover" src={e.img} />

                <div className="p-3">
                  <p className="mt-2 flex justify-center text-gray-950">
                    {e.text}
                  </p>
                  <div className=" flex justify-center mt-7 bg-repeat-x text-[10px] text-orange-400">
                    <MdStar /> <MdStar /> <MdStar /> <MdStar /> <MdStar />
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-yellow-300  rounded-full text-[10px] px-5 mt-2">
                      Order Here
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
