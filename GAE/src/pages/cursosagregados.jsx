import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function CursosAgregados() {
  const [listaCursos, setListaCursos] = useState(
    JSON.parse(localStorage.getItem("misCursos")) || []
  );

  const eliminarCurso = (indice) => {
    const nuevaLista = listaCursos.filter((_, i) => i !== indice);
    localStorage.setItem("misCursos", JSON.stringify(nuevaLista));
    setListaCursos(nuevaLista);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light w-100">
      <Header />

      <div className="container-fluid flex-grow-1 px-0">
        <div className="row g-0 min-vh-100">
          <Sidebar />

          <div className="col-md-9 col-lg-10 p-4">
            <h2 className="fw-bold text-dark mb-4">Cursos Registrados</h2>

            <div className="card shadow border-0">

              <div className="card-header bg-primary text-white text-center py-3">
                <h4 className="mb-0">Lista de Cursos</h4>
              </div>

              <div className="card-body p-3">
                <div className="table-responsive">
                  <table className="table table-hover align-middle text-center">
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>Nombre del Curso</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listaCursos.length === 0 ? (
                        <tr>
                          <td colSpan="4" className="text-muted">No hay cursos registrados</td>
                        </tr>
                      ) : (
                        listaCursos.map((curso, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{curso.nombre}</td>
                            <td>{curso.estado === "1" ? "Activo" : "Inactivo"}</td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => eliminarCurso(index)}
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
                  <a href="/cursos" className="btn btn-secondary">Volver</a>
                  <a href="/cursos" className="btn btn-outline-primary">Nuevo curso</a>
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

export default CursosAgregados;