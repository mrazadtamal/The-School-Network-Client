import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";
import {Link} from "react-router-dom";

const AllUserNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img
          src={
            "https://res.cloudinary.com/abidazad/image/upload/v1633197929/LOGO_1_d3bfdm.svg"
          }
          alt="app__logo"
        />
        <h1>The School Network</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">
              <Link to="/">
                  Home
              </Link>
              </a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">

           <a  className="p__opensans">
             <Link to="/login">
                 SignIn
             </Link>
           </a>

      </div>

      <div className="app__navbar-smallScreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallScreen_overlay flex__center slide-bottom">
            <AiOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallScreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AllUserNavbar;
