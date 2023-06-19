import React from "react";
import freeCodeCampLogo from "../Imagenes/freecodecamp-logo.png";
import "../HojasDeEstilo/LogoFreeCodeCamp.css";

const LogoFreeCodeCamp = () => {
  return (
    <div className="freeCodeCamp-logo-contenedor">
      <div className="freeCodeCamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          alt="Logo de freecodecamp"
          className="freeCodeCamp-logo"
        />
      </div>
    </div>
  );
};

export default LogoFreeCodeCamp;
