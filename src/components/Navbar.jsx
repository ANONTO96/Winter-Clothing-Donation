import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import 'animate.css';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <Toaster></Toaster>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to='/'>Home</Link></li>
              <li>
                <Link to='/donationCampaigns'>Donation Campaigns</Link>
              </li>
              <li><Link to='/howtohelp'>How to Help</Link></li>
              {
                user ? (<li><Link to='/dashboard'>Dashboard</Link></li>) : ("")
              }
              <li><Link to='/about'>About Us</Link></li>
            </ul>
          </div>
          <Link to='/' className="rounded-xl hover:bg-base-300
     md:px-3 py-1 cursor-pointer flex items-center md:text-xl text-lg"><img className="w-12 animate__animated animate__flash" src="https://img.icons8.com/?size=100&id=82696&format=png&color=000000" alt="" />Winter Clothing Donation</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-5 px-1">
            <li><NavLink to='/' className={({ isActive }) => `
            font-semibold ${isActive ? 'text-sky-400' : 'hover:text-sky-400'}`}>Home</NavLink></li>
            <li>
              <NavLink to='/donationCampaigns' className={({ isActive }) => `
            font-semibold ${isActive ? 'text-sky-400' : 'hover:text-sky-400'}`}>
                <summary>Donation Campaigns</summary>
              </NavLink>
            </li>
            <li><NavLink to='/howtohelp' className={({ isActive }) => `
            font-semibold ${isActive ? 'text-sky-400' : 'hover:text-sky-400'}`}>How to Help</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) => `
            font-semibold ${isActive ? 'text-sky-400' : 'hover:text-sky-400'}`}>About Us</NavLink></li>
            {
              user ? (<li><NavLink to='/dashboard' className={({ isActive }) => `
              font-semibold ${isActive ? 'text-sky-400' : 'hover:text-sky-400'}`}>Dashboard</NavLink></li>) : ("")
            }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user && user.email ? (
              <>
                <div className="flex flex-col sm:flex-row w-56 sm:w-auto">
                  <Link to='/' className="btn text-black text-base btn-ghost">{user.email}</Link>
                  <button onClick={logOut}
                    className="btn text-white bg-gradient-to-r from-sky-500 to-purple-500"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (<Link to='/login' className="btn text-white bg-gradient-to-r from-sky-500 to-purple-500">Log In</Link>)
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;