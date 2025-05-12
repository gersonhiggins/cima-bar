import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Cerca de Caracas" />
      <h1 className="app__header-h1">En la Cima de la Montaña</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Vive una experiencia única rodeado de la majestuosidad de la montaña. Sal de la rutina de Caracas, a tan solo 20 minutos...
      </p>
      <button type="button" className="custom__button">
        Explora el Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.pizza} alt="header img" />
    </div>
  </div>
);

export default Header;
