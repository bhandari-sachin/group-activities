import Navbar from "./Navbar.jsx";
import ReactLogo from "../assets/react.svg";

import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      <div className="flex items-center">
        <img
          src={ReactLogo}
          alt="Tech Jobs Portal Logo"
          className="h-8 w-8 mr-2"
        />
        <span className="text-xl font-bold">Tech Jobs Portal</span>
      </div>

      <Navbar />
      <button className="bg-primary px-4 py-2 rounded">Login</button>
    </header>
  );
};

export default Header;
