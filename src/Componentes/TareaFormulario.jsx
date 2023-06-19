import React, { useState } from "react";
import "../HojasDeEstilo/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

const TareaFormulario = (props) => {
  const [input, setInput] = useState("");

  const manejarCambio = (event) => {
    setInput(event.target.value);
  };

  const manejarEnvio = (event) => {
    // EVITA QUE LA PAGUINA SE RECARGE
    event.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar tarea</button>
    </form>
  );
};

export default TareaFormulario;
