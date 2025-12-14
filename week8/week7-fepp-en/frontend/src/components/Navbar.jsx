import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-500 px-3 py-2" : "text-gray-700 px-3 py-2";
  return (
    <nav>
      <div className="bg-red shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-4">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/properties" className={linkClass}>
                Properties
              </NavLink>
              <NavLink to="/add-property" className={linkClass}>
                Add Property
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
