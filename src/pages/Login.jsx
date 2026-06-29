import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';

function Login() {
    // aca  se puede modificar para que se pueda ingresar con un correo y una contraseña previamente. API o en el mismo codigo 
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    const iniciarSesion = (e) => {
    e.preventDefault();

    if (correo.trim() !== "" && contrasena.trim() !== "") {

        setMensaje("Inicio de sesión exitoso.");

        setTimeout(() => {
            navigate("/Inicio");
        }, 1000); // Espera 1 segundo para que se vea el mensaje

    } else {

        setMensaje("Debe completar todos los campos.");

    }
};
  

    return (

        <div className="contenedor-form">
            <h1>Liceo Antonio De Toledo</h1>
            <h2>Inicio de sesión</h2>
            <hr />

            <form onSubmit={iniciarSesion}>

                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">
                        Correo electrónico
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        id="correo"
                        placeholder="ejemplo@gmail.com"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="contrasena" className="form-label">
                        Contraseña
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        id="contrasena"
                        placeholder="Ingrese su contraseña"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                    />

                    <div className="form-text">
                        Entre 8 y 20 caracteres.
                    </div>
                </div>

                <button className="btn-login" type="submit">
                    Iniciar Sesión
                </button>

            </form>

            {mensaje && (
                <div className="alert alert-info mt-3">
                    {mensaje}
                </div>
            )}

           <p className="text-center mt-4">
                <Link to="/Enviar_pin" className="link-recuperar">
                    ¿Olvidaste tu contraseña?
                </Link>
            </p>

        </div>
    );
}

export default Login;