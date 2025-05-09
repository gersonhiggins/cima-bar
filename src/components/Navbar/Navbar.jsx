import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.cima} alt="app log" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Inicio</Link>
        </li>
        <li className="p__opensans">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="p__opensans">
          <Link to="/gallery">Galeria</Link>
        </li>
        <li className="p__opensans">
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Delivey
        </a>
        <div />
        <a href="/" className="p__opensans">
          Reserva
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Inicio
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="/menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="gallery" onClick={() => setToggleMenu(false)}>
                  Galeria
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="contact" onClick={() => setToggleMenu(false)}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
