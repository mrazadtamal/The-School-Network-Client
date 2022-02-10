import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const PrincipalNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
    <nav className="app__navbar " id="principal_nav">
        <div className="app__navbar-logo">
            <h1 className='mt-8 text-center'> <span className='text-5xl font-bold text-white '>P</span><span className='text-base font-bold text-white '>rincipal Dashboard</span></h1> 
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#home">
                <Link to="/">
                    Publish Notice
                </Link>
            </a>
          </li>
          <li className="p__opensans">
            <a href="#about">Announcement</a>
          </li>

        </ul>

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
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
};

export default PrincipalNavbar;