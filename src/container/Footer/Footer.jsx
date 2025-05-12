import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactanos</h1>
        <a href="https://www.google.com/maps/place/Cima+Bar+MC/@10.3604605,-66.9025077,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2af10037562d61:0xbfe4f10f7b95033f!8m2!3d10.3604605!4d-66.8999328!16s%2Fg%2F11s39rl_rc?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
          className="p__opensans">Cima Bar - Google Maps</a>
        <p className="p__opensans">+58 414-302-5558</p>
        <p className="p__opensans">+58 424-230-7006</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} style={
          { filter: "invert(1)"}
        } alt="footer_logo" />
        <p className="p__opensans">
          &quot;La mejor manera de encontrarte a ti mismo es perderte en el servicio a los demás.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
          alt="spoon"
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario</h1>
        <p className="p__opensans">Jueves - Domingo</p>
        <p className="p__opensans">12:00pm - 08:00pm/10:00pm  </p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">Monte Claro Pueblo</p>
    </div>
  </div>
);

export default Footer;
