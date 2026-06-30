import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Estudiantes() {
  const [primerNombre, setPrimerNombre] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [codigoLista, setCodigoLista] = useState("");
  const [idAcudiente, setIdAcudiente] = useState("");
  const [estado, setEstado] = useState("1");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const guardarEstudiante = () => {
    if (!primerNombre.trim() || !primerApellido.trim() || !codigoLista.trim()) {
      setError("Primer nombre, primer apellido y código de lista son obligatorios.");
      setExito("");
      return;
    }

    const estudiantesExistentes = JSON.parse(localStorage.getItem("misEstudiantes")) || [];

    const duplicado = estudiantesExistentes.some(
      (est) => est.codigoLista === codigoLista.trim()
    );

    if (duplicado) {
      setError("Ya existe un estudiante con ese código de lista.");
      setExito("");
      return;
    }

    const nuevoEstudiante = {
      primerNombre: primerNombre.trim(),
      segundoNombre: segundoNombre.trim(),
      primerApellido: primerApellido.trim(),
      segundoApellido: segundoApellido.trim(),
      codigoLista: codigoLista.trim(),
      idAcudiente: idAcudiente.trim(),
      estado,
    };

    localStorage.setItem(
      "misEstudiantes",
      JSON.stringify([...estudiantesExistentes, nuevoEstudiante])
    );

    setExito("Estudiante guardado correctamente.");
    setError("");
    setPrimerNombre("");
    setSegundoNombre("");
    setPrimerApellido("");
    setSegundoApellido("");
    setCodigoLista("");
    setIdAcudiente("");
    setEstado("1");
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light w-100">
      <Header />

      <div className="container-fluid flex-grow-1 px-0">
        <div className="row g-0 min-vh-100">
          <Sidebar />

          <div className="col-md-9 col-lg-10 p-4">
            <h2 className="fw-bold text-dark mb-4">Registrar Estudiante</h2>

            <div className="card shadow border-0">

              <div className="card-header bg-primary text-white text-center py-3">
                <h4 className="mb-0">Nuevo Estudiante</h4>
              </div>

              <div className="card-body p-4">

                {error && <div className="alert alert-danger py-2">{error}</div>}
                {exito && <div className="alert alert-success py-2">{exito}</div>}

                <div className="mb-3">
                  <label className="form-label fw-semibold">Primer Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej: Juan"
                    value={primerNombre}
                    onChange={(e) => { setPrimerNombre(e.target.value); setError(""); }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Segundo Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej: Carlos"
                    value={segundoNombre}
                    onChange={(e) => setSegundoNombre(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Primer Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej: Pérez"
                    value={primerApellido}
                    onChange={(e) => { setPrimerApellido(e.target.value); setError(""); }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Segundo Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej: Gómez"
                    value={segundoApellido}
                    onChange={(e) => setSegundoApellido(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Código de Lista</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej: 12345"
                    value={codigoLista}
                    onChange={(e) => { setCodigoLista(e.target.value); setError(""); }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">ID Acudiente</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej: 1001"
                    value={idAcudiente}
                    onChange={(e) => setIdAcudiente(e.target.value)}
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
                  <button className="btn btn-primary" onClick={guardarEstudiante}>
                    Guardar Estudiante
                  </button>
                </div>

                <div className="d-flex justify-content-end mt-3">
                  <a href="/estudiantesagregados" className="btn btn-outline-primary">
                    Ver Estudiantes Agregados
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

export default Estudiantes;