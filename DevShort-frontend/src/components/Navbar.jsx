import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";


const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
    setNavbarOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-3xl italic">DevShort</h1>
        </Link>

        {/* Desktop Menu - Visible on screens larger than sm (640px) */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className={`${
                path === "/" ? "font-semibold" : "text-gray-200"
              } hover:text-white transition`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                path === "/about" ? "font-semibold" : "text-gray-200"
              } hover:text-white transition`}
            >
              About
            </Link>
          </li>
          {token && (
            <li>
              <Link
                to="/dashboard"
                className={`${
                  path === "/dashboard" ? "font-semibold" : "text-gray-200"
                } hover:text-white transition`}
              >
                Dashboard
              </Link>
            </li>
          )}
          {!token ? (
            <li>
              <Link
                to="/register"
                className="bg-rose-700 px-4 py-2 rounded-md font-semibold hover:text-slate-300 transition"
              >
                SignUp
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={onLogOutHandler}
                className="bg-rose-700 px-4 py-2 rounded-md font-semibold hover:text-slate-300 transition"
              >
                LogOut
              </button>
            </li>
          )}
        </ul>

        {/* Hamburger - Visible ONLY on small screens (sm breakpoint and below) */}
        <div className="md:hidden">
          <button 
            onClick={() => setNavbarOpen(!navbarOpen)} 
            className="text-3xl"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
          >
            {navbarOpen ? <RxCross2 /> : <IoIosMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - Only visible on small screens when open */}
      {navbarOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 space-y-4 text-white absolute w-full top-16 left-0 z-40">
          <Link
            to="/"
            onClick={() => setNavbarOpen(false)}
            className={`block ${
              path === "/" ? "font-semibold" : "text-gray-200"
            } hover:text-white transition py-2`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setNavbarOpen(false)}
            className={`block ${
              path === "/about" ? "font-semibold" : "text-gray-200"
            } hover:text-white transition py-2`}
          >
            About
          </Link>
          {token && (
            <Link
              to="/dashboard"
              onClick={() => setNavbarOpen(false)}
              className={`block ${
                path === "/dashboard" ? "font-semibold" : "text-gray-200"
              } hover:text-white transition py-2`}
            >
              Dashboard
            </Link>
          )}
          {!token ? (
            <Link
              to="/register"
              onClick={() => setNavbarOpen(false)}
              className="block bg-rose-700 px-4 py-2 rounded-md font-semibold hover:text-slate-300 transition text-center mt-2"
            >
              SignUp
            </Link>
          ) : (
            <button
              onClick={onLogOutHandler}
              className="block bg-rose-700 px-4 py-2 rounded-md font-semibold hover:text-slate-300 transition w-full"
            >
              LogOut
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;