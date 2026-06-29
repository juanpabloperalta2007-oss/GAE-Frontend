import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Inicio from "./pages/Inicio";
import Enviar_pin from "./pages/Enviar_pin";
import Nueva_contraseña  from "./pages/Nueva_contraseña";
import Vista_admin from "./pages/Vista_admin"
import EditarUsuario from "./pages/Editar_usuario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Enviar_pin" element={<Enviar_pin />} />
        <Route path="/Nueva_contraseña" element={<Nueva_contraseña />} />
        <Route path="/Vista_admin" element={<Vista_admin />} />
        <Route path="/editar-usuario" element={<EditarUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

