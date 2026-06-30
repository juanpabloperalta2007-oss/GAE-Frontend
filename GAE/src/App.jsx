import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Materias from "./pages/Materias";
import Materiasagregadas from "./pages/MateriasAgregadas";
import ConsultarHorario from "./pages/ConsultarHorario";
import Horario from "./pages/Horario";
import Cursos from "./pages/cursos";
import CursosAgregados from "./pages/cursosAgregados";
import Estudiantes from "./pages/Estudiantes";
import EstudiantesAgregados from "./pages/Estudiantesagregados";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/materias-agregadas" element={<Materiasagregadas />} />
        <Route path="/consultar-horario" element={<ConsultarHorario />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursosagregados" element={<CursosAgregados />} />
        <Route path="/estudiantes" element={<Estudiantes />} />
        <Route path="/estudiantesagregados" element={<EstudiantesAgregados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;