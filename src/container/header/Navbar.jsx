import React from "react";
import { FaCartPlus, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Home from "../home/home";
=======
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc

const Navbar = () => {
  const navBar = [
    {
      id: 1,
      name: "Home",
<<<<<<< HEAD
      link: "/",
=======
      link: "/home",
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
    },
    {
      id: 2,
      name: "Menu",
      link: "/menu",
    },
    {
      id: 3,
      name: "Feature",
      link: "/feature",
    },
<<<<<<< HEAD
    {
      id: 4,
      name: "Gallery",
      link: "/gallery",
    },
    {
      id: 5,
      name: "Blog",
      link: "/blog",
    },
    {
      id: 6,
      name: "Contacts",
      link: "/contacts",
    },
=======

>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
    {
      id: 7,
      name: "About",
      link: "/about",
    },
  ];

  return (
    <div>
<<<<<<< HEAD
      <div className="flex justify-around bg-black text-white p-5 items-center">
=======
      <div className="flex justify-around bg-gray-950 text-gray-300 p-5 items-center">
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
        <div>
          {" "}
          <span className="text-xl font-bold">F</span>ood{" "}
          <span className="text-xl font-bold">D</span>ishes
<<<<<<< HEAD
=======
          {/* <img src={Logo} alt="img" className="w-20 h-14" /> */}
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
        </div>
        {navBar.map((e) => {
          return (
            <>
<<<<<<< HEAD
              <li className=" list-none">
=======
              <li className="list-none">
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
                <Link to={e.link}> {e.name}</Link>
              </li>
            </>
          );
        })}
<<<<<<< HEAD
        <FaCartPlus/>
=======
        <FaCartPlus />
>>>>>>> 9f64a8e06a6580ba8cb7c13d09ff22708aeac9fc
      </div>
    </div>
  );
};

export default Navbar;
