import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Mantente informado de nuestro eventos</h1>
      <p className="p__opensans">No te lo pierdas!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Correo electronico" />
      <button type="button" className="custom__button">
        Suscribete
      </button>
    </div>
  </div>
);

export default Newsletter;
