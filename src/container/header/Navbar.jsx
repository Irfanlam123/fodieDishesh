import React from "react";
import { FaCartPlus, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navBar = [
    {
      id: 1,
      name: "Home",
      link: "/home",
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
      id: 7,
      name: "About",
      link: "/about",
    },
  ];

  return (
    <div>
      <div className="flex justify-around bg-gray-950 text-gray-300 p-5 items-center">
        <div>
          {" "}
          <span className="text-xl font-bold">F</span>ood{" "}
          <span className="text-xl font-bold">D</span>ishes
          {/* <img src={Logo} alt="img" className="w-20 h-14" /> */}
        </div>
        {navBar.map((e) => {
          return (
            <>
              <li className="list-none">
                <Link to={e.link}> {e.name}</Link>
              </li>
            </>
          );
        })}
        <FaCartPlus />
      </div>
    </div>
  );
};

export default Navbar;
