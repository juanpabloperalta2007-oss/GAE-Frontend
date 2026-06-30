import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function estudiantesAgregados() {
  const [listaEstudiantes, setListaEstudiantes] = useState(
    JSON.parse(localStorage.getItem("misEstudiantes")) || []
  );

  const eliminarEstudiante = (indice) => {
    const nuevaLista = listaEstudiantes.filter((_, i) => i !== indice);
    localStorage.setItem("misEstudiantes", JSON.stringify(nuevaLista));
    setListaEstudiantes(nuevaLista);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light w-100">
      <Header />

      <div className="container-fluid flex-grow-1 px-0">
        <div className="row g-0 min-vh-100">
          <Sidebar />

          <div className="col-md-9 col-lg-10 p-4">
            <h2 className="fw-bold text-dark mb-4">Estudiantes Registrados</h2>

            <div className="card shadow border-0">

              <div className="card-header bg-primary text-white text-center py-3">
                <h4 className="mb-0">Lista de Estudiantes</h4>
              </div>

              <div className="card-body p-3">
                <div className="table-responsive">
                  <table className="table table-hover align-middle text-center">
                    <thead className="table-dark">
                      <tr>
                        <th>Nombre Completo</th>
                        <th>Código Lista</th>
                        <th>ID Acudiente</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listaEstudiantes.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-muted">No hay estudiantes registrados</td>
                        </tr>
                      ) : (
                        listaEstudiantes.map((est, index) => (
                          <tr key={index}>
                            <td>
                              {est.primerNombre} {est.segundoNombre} {est.primerApellido} {est.segundoApellido}
                            </td>
                            <td>{est.codigoLista}</td>
                            <td>{est.idAcudiente || "-"}</td>
                            <td>{est.estado === "1" ? "Activo" : "Inactivo"}</td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => eliminarEstudiante(index)}
                              >
                                Eliminar
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <a href="/estudiantes" className="btn btn-secondary">Volver</a>
                  <a href="/estudiantes" className="btn btn-outline-primary">Nuevo estudiante</a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default estudiantesAgregados;
