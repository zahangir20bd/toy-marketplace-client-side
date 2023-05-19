import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import "../../../App.css";

const NavBar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className=" dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/alltoys">All Toys</NavLink>
            </li>
            <li>
              <NavLink to="/mytoys">My Toys</NavLink>
            </li>
            <li>
              <NavLink to="/addtoys">Add A Toy</NavLink>
            </li>

            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="Web site Logo" className="h-16" />
            <span className="text-3xl font-bold">Toy-Galaxy</span>
          </div>
        </Link>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 flex gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/alltoys">All Toys</NavLink>
          </li>
          <li>
            <NavLink to="/mytoys">My Toys</NavLink>
          </li>
          <li>
            <NavLink to="/addtoys">Add A Toy</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btn btn-warning">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
