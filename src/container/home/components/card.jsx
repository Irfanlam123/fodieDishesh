// Card.js

import React from "react";
import kaddu from "../../../assets/kaddu.jpg";
import { Link } from "react-router-dom";

const Card = ({ title, content }) => {
  const item = [
    {
      img: kaddu,
      text: "sushi more than 50 kinds of sushi",
    },
    {
      img: kaddu,
      text: "sushi more than 50 kinds of sushi",
    },
    {
      img: kaddu,
      text: "sushi more than 50 kinds of sushi",
    },
    {
      img: kaddu,
      text: "sushi more than 50 kinds of sushi",
    },
  ];
  return (
    <>
      <div className="flex space-x-3 p-6">
        {item.map((e,i) => {
          return (
            <>
            
           <Link to={`/details/${i}`}>
            <div className="max-w-md  bg-white rounded-xl overflow-hidden shadow-md my-4">
                <img className="h-48 w-full object-cover" src={e.img} />
                <div className="p-6">
                  <p className="mt-2 text-gray-500">{e.text}</p>
                </div>
              </div>
              </Link>
             
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
