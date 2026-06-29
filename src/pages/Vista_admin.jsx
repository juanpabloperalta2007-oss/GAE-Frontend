import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/gestion_usuario.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Vista_admin() {

    const navigate = useNavigate();

    const usuarios = [

        {
            id: 1,
            nombre: "Daniel Felipe Castellanos Díaz",
            documento: "1000123456",
            correo: "daniel@gmail.com",
            telefono: "3001234567",
            rol: "Coordinador",
            estado: "Activo"
        },

        {
            id: 2,
            nombre: "Juan Pablo Peralta Martínez",
            documento: "1000456789",
            correo: "juan@gmail.com",
            telefono: "3009876543",
            rol: "Profesor",
            estado: "Activo"
        },

        {
            id: 3,
            nombre: "Neyver Stiwer Santana Pineda",
            documento: "1000789456",
            correo: "neyver@gmail.com",
            telefono: "3011234567",
            rol: "Padre",
            estado: "Activo"
        },

        {
            id: 4,
            nombre: "Laura Alejandra León López",
            documento: "1000111222",
            correo: "laura@gmail.com",
            telefono: "3024567890",
            rol: "Coordinador",
            estado: "Inactivo"
        },

        {
            id: 5,
            nombre: "Sofía Cardona Peralta",
            documento: "1000999888",
            correo: "sofia@gmail.com",
            telefono: "3204561237",
            rol: "Profesor",
            estado: "Activo"
        }

    ];

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [busqueda, setBusqueda] = useState ("")
    const [rolSeleccionado, setRolSeleccionado] = useState("");
    
    {/*esto es para filtrar por nombre*/}

   const usuariosFiltrados = usuarios.filter((usuario) => {

    const coincideNombre = usuario.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

    const coincideRol =
        rolSeleccionado === "" || usuario.rol === rolSeleccionado;

    return coincideNombre && coincideRol;

});





  return (
    <>
      <Header />

      <div className="d-flex">
        <Sidebar />
         
        <div className="contenedor-usuarios">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2 className="mb-0">Gestión de Usuarios</h2>

                <div className="d-flex gap-2">

                     <input type="text" className="form-control" placeholder="🔍 Buscar por nombre..." style={{ width: "280px" }} value={busqueda}
                     onChange={(e) => setBusqueda(e.target.value)}/>

                    <select className="form-select" style={{ width: "180px" }} value={rolSeleccionado} onChange={(e) => setRolSeleccionado(e.target.value)}>
                        <option value="">Todos los roles</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Coordinador">Coordinador</option>
                        <option value="Profesor">Profesor</option>
                        <option value="Padre">Padre</option>
                    </select>

                </div>

            </div>

            <table className="tabla-usuarios">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>

                {usuariosFiltrados.map((usuario) => (

                    <tr key={usuario.id}>

                        <td>{usuario.nombre}</td>

                        <td>{usuario.rol}</td>

                        <td>

                        <button className="btn ver" data-bs-toggle="modal" data-bs-target="#modalVerUsuario" onClick={() => setUsuarioSeleccionado(usuario)}>
                             Ver
                        </button>

                        <button className="btn cursos">
                            Cursos
                        </button>

            </td>

        </tr>

    ))}
                </tbody>
            </table>

            {/* Modal Ver Usuario */}

                <div className="modal fade" id="modalVerUsuario" tabIndex={-1} aria-labelledby="modalVerUsuarioLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                    <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title" id="modalVerUsuarioLabel">
                                Información del Usuario
                            </h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar" ></button>
                    </div>

                    <div className="modal-body">

                        <div className="text-center mb-4">
                        <i className="bi bi-person-circle text-primary" style={{ fontSize: "70px" }}
                        ></i>
                    </div>

                <table className="table table-borderless">

                    <tbody>

                        <tr>
                            <th>Nombre:</th>
                            <td>{usuarioSeleccionado?.nombre}</td>
                        </tr>

                        <tr>
                            <th>Documento:</th>
                            <td>{usuarioSeleccionado?.documento}</td>
                        </tr>

                        <tr>
                            <th>Correo:</th>
                            <td>{usuarioSeleccionado?.correo}</td>
                        </tr>

                        <tr>
                            <th>Teléfono:</th>
                            <td>{usuarioSeleccionado?.telefono}</td>
                        </tr>

                        <tr>
                            <th>Rol:</th>
                            <td>{usuarioSeleccionado?.rol}</td>
                        </tr>

                        <tr>
                            <th>Estado:</th>
                            <td>{usuarioSeleccionado?.estado}</td>
                        </tr>

                    </tbody>

                </table>

            </div>

            <div className="modal-footer">

               <button type="button" className="btn-modal-editar" data-bs-dismiss="modal"
                    onClick={() => navigate("/editar-usuario", {state: usuarioSeleccionado})}>
                         Editar
                </button>

                <button type="button" className="btn-modal-cerrar" data-bs-dismiss="modal">
                    Cerrar
                </button>

            </div>

        </div>
    </div>
    </div>



        </div>
    



      </div>

      <Footer />
    </>
  );
}

export default Vista_admin;