import React from "react";
import { FaCartPlus, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "./home";

const Navbar = () => {
  const navBar = [
    {
      id: 1,
      name: "Home",
      link: "/",
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
    {
      id: 7,
      name: "About",
      link: "/about",
    },
  ];

  return (
    <div>
      <div className="flex justify-around bg-black text-white p-5 items-center">
        <div>
          {" "}
          <span className="text-xl font-bold">F</span>ood{" "}
          <span className="text-xl font-bold">D</span>ishes
        </div>
        {navBar.map((e) => {
          return (
            <>
              <li className=" list-none">
                <Link to={e.link}> {e.name}</Link>
              </li>
            </>
          );
        })}
        <FaCartPlus/>
      </div>
    </div>
  );
};

export default Navbar;
