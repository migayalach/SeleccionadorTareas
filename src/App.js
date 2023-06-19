import "./App.css";
import LogoFreeCodeCamp from "./Componentes/LogoFreeCodeCamp";
import ListaDeTareas from "./Componentes/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoFreeCodeCamp />
      <div className="tareas-lista-principal">
        <h1>Mis tareas :D</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
