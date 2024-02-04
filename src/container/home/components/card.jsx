// Card.js

import React from "react";
import kaddu from "../../../assets/kaddu.jpg";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc

const Card = ({ title, content }) => {
  const item = [
    {
<<<<<<< HEAD
=======
      id: 1,

>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
      img: kaddu,
      text: "sushi more than 50 kinds of sushi",
    },
    {
<<<<<<< HEAD
=======
      id: 2,
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
      img: kaddu,
      text: "sushi more than 50 kinds of sushi",
    },
    {
<<<<<<< HEAD
=======
      id: 3,
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
      img: kaddu,
      text: "sushi more than 50 kinds of sushi",
    },
    {
<<<<<<< HEAD
=======
      id: 4,
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
      img: kaddu,
      text: "sushi more than 50 kinds of sushi",
    },
  ];
  return (
    <>
<<<<<<< HEAD
    <div className="flex space-x-3 p-6">
    {item.map((e) => {
        return (
          <>
            <div className="max-w-md  bg-white rounded-xl overflow-hidden shadow-md my-4">
              <img className="h-48 w-full object-cover" src={e.img} />
              <div className="p-6">
                <p className="mt-2 text-gray-500">{e.text}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
    
=======
      <div className="flex space-x-3 p-6">
        {item.map((e, id) => {
          return (
            <>
              <Link to={`/details/${id}`}>
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
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
    </>
  );
};

export default Card;
