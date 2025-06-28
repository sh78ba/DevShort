import React from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="h-16 bg-gradient-to-r from-blue-500 to-purple-600 z-50 flex items-center sticky top-0">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
    
        <Link to="/">
          <h1 className="font-bold text-3xl text-white italic">DevShort</h1>
        </Link>


        <ul className="hidden sm:flex gap-10 items-center text-white font-medium">
          <li className="hover:text-gray-200 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-200 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-200 transition">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link
              to="/register"
              className="bg-rose-700 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition"
            >
              Sign Up
            </Link>
          </li>
        </ul>

     
        <div className="sm:hidden">
          <IoIosMenu className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
