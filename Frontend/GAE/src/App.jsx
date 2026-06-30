import { BrowserRouter, Routes, Route } from "react-router-dom";

// ---------- AUTENTICACIÓN ----------
import Login from "./pages/Autenticacion/Login";
import Registro from "./pages/Autenticacion/Registro";
import EnviarPin from "./pages/Autenticacion/Enviar_pin";
import NuevaContrasena from "./pages/Autenticacion/Nueva_contraseña";

// ---------- ADMINISTRADOR ----------
import VistaAdmin from "./pages/Administrador/Vista_admin";

// ---------- DOCENTE ----------
import Inicio from "./pages/Docente/Inicio";
import ConsultarHorario from "./pages/Docente/ConsultarHorario";
import Horario from "./pages/Docente/Horario";
import ConsultarMaterias from "./pages/Docente/ConsultarMaterias";
import MateriasAgregadas from "./pages/Docente/MateriasAgregadas";
import Materias from "./pages/Docente/Materias";
import Alertas from "./pages/Docente/Alertas";
import Notificaciones from "./pages/Docente/Notificaciones";
import Reportes from "./pages/Docente/Reportes";

// ---------- COORDINADOR ----------
import InicioCoordinador from "./pages/Coordinador/InicioCoordinador";
import GestionExcusas from "./pages/Coordinador/GestionExcusas";
import Cursos from "./pages/Coordinador/Cursos";

// ---------- ACUDIENTE ----------
import InicioAcud from "./pages/Acudiente/InicioAcud";
import Excusas from "./pages/Acudiente/Excusas";
import ConsultarEstudianteAcud from "./pages/Acudiente/ConsultarEstudianteAcud";
import EstadisticaMensualAcud from "./pages/Acudiente/EstadisticaMensualAcud";
import GenerarExcusaAcud from "./pages/Acudiente/GenerarExcusaAcud";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTENTICACIÓN */}
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/enviar_pin" element={<EnviarPin />} />
        <Route path="/nueva_contrasena" element={<NuevaContrasena />} />

        {/* ADMINISTRADOR */}
        <Route path="/vista_admin" element={<VistaAdmin />} />

        {/* DOCENTE */}
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/consultar-horario" element={<ConsultarHorario />} />
        <Route path="/horario" element={<Horario />} />
        <Route path="/consultar-materias" element={<ConsultarMaterias />} />
        <Route path="/materias-agregadas" element={<MateriasAgregadas />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route path="/reportes" element={<Reportes />} />

        {/* COORDINADOR */}
        <Route path="/coordinador" element={<InicioCoordinador />} />
        <Route path="/gestion-excusas" element={<GestionExcusas />} />
        <Route path="/cursos" element={<Cursos />} />

        {/* ACUDIENTE */}
        <Route path="/acudiente" element={<InicioAcud />} />
        <Route path="/excusas" element={<Excusas />} />
        <Route path="/consultar-estudiante" element={<ConsultarEstudianteAcud />} />
        <Route path="/estadistica-mensual" element={<EstadisticaMensualAcud />} />
        <Route path="/generar-excusa" element={<GenerarExcusaAcud />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;