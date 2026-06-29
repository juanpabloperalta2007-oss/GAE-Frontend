import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Inicio from "./pages/Inicio";
import Enviar_pin from "./pages/Enviar_pin";
import Nueva_contraseña  from "./pages/Nueva_contraseña";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Enviar_pin" element={<Enviar_pin />} />
        <Route path="/Nueva_contraseña" element={<Nueva_contraseña />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;