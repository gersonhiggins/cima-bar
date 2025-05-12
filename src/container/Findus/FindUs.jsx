import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Encuentranos
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Al lado del Club Monte Claro, en el limite de Baruta a tan solo 20 minutos de Caracas.
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Horarios
        </p>
        <p className="p__opensans">Jueves - Viernes</p>
        <p className="p__opensans">Desde las 12:00 del medio dia hasta</p>
        <p className="p__opensans">Las 8:00 de la noche extendible</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/Cima+Bar+MC/@10.3604605,-66.9025077,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2af10037562d61:0xbfe4f10f7b95033f!8m2!3d10.3604605!4d-66.8999328!16s%2Fg%2F11s39rl_rc?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
          )
        }
      >
        Visitanos
      </button>
    </div>
    <div className="app__wrapper_img">
      <div class="cuadro arriba-derecha"></div>
      <div class="cuadro abajo-izquierda"></div>
      <img src={images.polarcitas} alt="findus" />
    </div>
  </div>
);

export default FindUs;
