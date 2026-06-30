import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Cursos() {
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("1");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const guardarCurso = () => {
    if (!nombre.trim()) {
      setError("El nombre del curso es obligatorio.");
      setExito("");
      return;
    }

    const cursosExistentes = JSON.parse(localStorage.getItem("misCursos")) || [];

    const duplicado = cursosExistentes.some(
      (c) => c.nombre.toLowerCase() === nombre.trim().toLowerCase()
    );

    if (duplicado) {
      setError("Ya existe un curso con ese nombre.");
      setExito("");
      return;
    }

    const nuevoCurso = { nombre: nombre.trim(), estado };
    localStorage.setItem("misCursos", JSON.stringify([...cursosExistentes, nuevoCurso]));

    setExito("Curso guardado correctamente.");
    setError("");
    setNombre("");
    setEstado("1");
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light w-100">
      <Header />

      <div className="container-fluid flex-grow-1 px-0">
        <div className="row g-0 min-vh-100">
          <Sidebar />

          <div className="col-md-9 col-lg-10 p-4">
            <h2 className="fw-bold text-dark mb-4">Registrar Curso</h2>

            <div className="card shadow border-0">

              <div className="card-header bg-primary text-white text-center py-3">
                <h4 className="mb-0">Nuevo Curso</h4>
              </div>

              <div className="card-body p-4">

                {error && <div className="alert alert-danger py-2">{error}</div>}
                {exito && <div className="alert alert-success py-2">{exito}</div>}

                <div className="mb-3">
                  <label className="form-label fw-semibold">Nombre del Curso</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej: Programación Web"
                    value={nombre}
                    onChange={(e) => { setNombre(e.target.value); setError(""); }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Estado</label>
                  <select
                    className="form-select"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                  >
                    <option value="1">Activo</option>
                    <option value="0">Inactivo</option>
                  </select>
                </div>

                <div className="d-flex justify-content-between">
                  <a href="/" className="btn btn-secondary">Cancelar</a>
                  <button className="btn btn-primary" onClick={guardarCurso}>
                    Guardar Curso
                  </button>
                </div>

                <div className="d-flex justify-content-end mt-3">
                    <a href="/cursosagregados" className="btn btn-outline-primary">
                      Ver Cursos Agregados
                    </a>
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

export default Cursos;