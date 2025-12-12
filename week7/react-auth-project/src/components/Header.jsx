import React from "react";
import Navbar from "./Navbar.jsx";
import ReactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <img
            src={ReactLogo}
            alt="Tech Jobs Portal Logo"
            className="h-8 w-8"
          />
          <h1 className="text-xl font-bold">Tech Jobs Portal</h1>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Login button */}
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
