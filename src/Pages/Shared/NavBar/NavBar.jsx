import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import "../../../App.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };
  // console.log(user);
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
            {user && (
              <>
                <li>
                  <NavLink to="/mytoys">My Toys</NavLink>
                </li>
                <li>
                  <NavLink to="/addtoys">Add A Toy</NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="Web site Logo" className="h-16" />
            <span className="text-3xl font-bold hidden md:block">
              Toy-Galaxy
            </span>
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
          {user && (
            <>
              <li>
                <NavLink to="/mytoys">My Toys</NavLink>
              </li>
              <li>
                <NavLink to="/addtoys">Add A Toy</NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            {user.photoURL ? (
              <div
                className="tooltip hover:tooltip-open tooltip-left w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                data-tip={user.displayName ? user.displayName : user.email}
              >
                <img className="w-12 rounded-full" src={user.photoURL} />
              </div>
            ) : (
              <div
                className="tooltip hover:tooltip-open tooltip-left w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                data-tip={user.displayName ? user.displayName : user.email}
              >
                <FaUserCircle style={{ fontSize: "48px" }}></FaUserCircle>
              </div>
            )}

            <button onClick={handleLogOut} className="btn btn-warning ms-3">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-warning">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
