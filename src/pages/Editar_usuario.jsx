import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../styles/editar_usuario.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function EditarUsuario() {

    const location = useLocation();
    const usuario = location.state;

    const [nombre, setNombre] = useState(usuario.nombre);
    const [documento, setDocumento] = useState(usuario.documento);
    const [correo, setCorreo] = useState(usuario.correo);
    const [telefono, setTelefono] = useState(usuario.telefono);
    const [rol, setRol] = useState(usuario.rol);
    const [estado, setEstado] = useState(usuario.estado);

    const guardarCambios = () => {

    const usuarioActualizado = {
        id: usuario.id,
        nombre,
        documento,
        correo,
        telefono,
        rol,
        estado
    };

    console.log(usuarioActualizado);

};
    


    return (
        <>
            <Header />

            <div className="d-flex">
                <Sidebar />

                <div className="contenedor-editar">

                    <div className="card-editar">

                        <div className="titulo-editar">

                            <div>
                                <h2>Editar Usuario</h2>
                                <p>Modifique la información del usuario.</p>
                            </div>

                            <i className="bi bi-person-circle icono-usuario"></i>

                        </div>

                        <hr />

                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Nombre Completo</label>
                                <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Documento</label>
                                <input type="text" className="form-control" value={documento} onChange={(e) => setDocumento(e.target.value)}/>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Correo</label>
                                <input type="email" className="form-control" value={correo} onChange={(e) => setCorreo (e.target.value) }/>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Teléfono</label>
                                <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono (e.target.value)}/>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Rol</label>

                               <select className="form-select" value={rol} onChange={(e) => setRol (e.target.value)}>
                                    <option value="Administrador">Administrador</option>
                                    <option value="Coordinador">Coordinador</option>
                                    <option value="Profesor">Profesor</option>
                                    <option value="Padre">Padre</option>
                                </select>

                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label" >Estado</label>

                                <select className="form-select" value={estado} onChange={(e) => setEstado (e.target.value)}>
                                    <option value="Activo">Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                </select>

                            </div>

                        </div>

                        <div className="botones-editar">

                            <button className="btn btn-outline-secondary">
                                Cancelar
                            </button>

                            <button className="btn btn-primary" onClick={guardarCambios}>
                                Guardar Cambios
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default EditarUsuario;