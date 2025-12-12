import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold"
      : "text-gray-700 hover:text-indigo-600";

  return (
    <nav>
      <div className="flex space-x-6">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/jobs" className={linkClass}>
          Jobs
        </NavLink>
        <NavLink to="/add-job" className={linkClass}>
          Add Job
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
