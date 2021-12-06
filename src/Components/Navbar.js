import React from "react";
import { Link } from "react-scroll";
import logo from "../Assests/db-logo.png";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="main" className="logo" smooth={true} duration={2000}>
          <img src={logo} alt="logo" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="main" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={1000}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="subscribe" smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000}>
              Contact Us
            </Link>
          </li>
        </ul>
        {/* <Link to="#" className="hey">
          To App
        </Link> */}
      </nav>
    </div>
  );
};

export default Navbar;
