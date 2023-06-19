import React, { useState } from "react";
import "../HojasDeEstilo/ListaDeTareas.css";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);
  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }else return alert("Por favor introduce una tarea");
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {/* FORMA 1  */}
        {/* {tareas.map((tarea) => {
          return (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
            />
          );
        })} */}
        {/* FORMA 2 */}
        {tareas.map(({id, texto, completada}) => (
          <Tarea
            key={id}
            id={id}
            texto={texto}
            completada={completada}
          />
        ))}
      </div>
    </>
  );
};

export default ListaDeTareas;
