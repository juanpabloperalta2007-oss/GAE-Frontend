import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/gestion_usuario.css";

function Vista_admin() {
  return (
    <>
      <Header />

      <div className="d-flex">
        <Sidebar />
         
        <div className="contenedor-usuarios">

            <div className="encabezado">
                <h2>Gestión de Usuarios</h2>
                <input type="text" className="buscador" placeholder="Buscar usuario..."/>
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

                    <tr>
                        <td>Daniel Felipe Castellanos Díaz</td>
                        <td>Coordinador</td>
                        <td>
                            <button className="btn ver">Ver</button>
                            <button className="btn editar">Editar</button>
                            <button className="btn cursos">Cursos</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Juan Pablo Peralta Martínez</td>
                        <td>Profesor</td>
                        <td>
                            <button className="btn ver">Ver</button>
                            <button className="btn editar">Editar</button>
                            <button className="btn cursos">Cursos</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Neyver Stiwer Santana Pineda</td>
                        <td>Padre</td>
                        <td>
                            <button className="btn ver">Ver</button>
                            <button className="btn editar">Editar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Laura Alejandra Leom López</td>
                        <td>Coordinador</td>
                        <td>
                            <button className="btn ver">Ver</button>
                            <button className="btn editar">Editar</button>
                            <button className="btn cursos">Cursos</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Sofía Cardona Peralta</td>
                        <td>Profesor</td>
                        <td>
                            <button className="btn ver">Ver</button>
                            <button className="btn editar">Editar</button>
                            <button className="btn cursos">Cursos</button>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    



      </div>

      <Footer />
    </>
  );
}

export default Vista_admin;