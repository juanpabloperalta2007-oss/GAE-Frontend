import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="col-md-3 col-lg-2 bg-white p-3 border-end shadow-sm">
      <h6 className="text-uppercase text-muted fw-bold mb-3 px-2" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
        Menú de Navegación
      </h6>

      <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item list-group-item-action rounded mb-1 d-flex align-items-center">
          <i className="bi bi-house-door me-2"></i> <span>Inicio</span>
        </Link>
        <span className="list-group-item rounded mb-1 text-muted d-flex align-items-center" style={{ cursor: 'not-allowed', opacity: '0.5' }}>
          <i className="bi bi-calendar3 me-2"></i> <span>Calendario</span>
        </span>
        <span className="list-group-item rounded mb-1 text-muted d-flex align-items-center" style={{ cursor: 'not-allowed', opacity: '0.5' }}>
          <i className="bi bi-envelope me-2"></i> <span>Correo</span>
        </span>
        <Link to="/cursos" className="list-group-item list-group-item-action rounded mb-1 d-flex align-items-center">
          <i className="bi bi-journal-text me-2"></i> <span>Cursos</span>
        </Link>
        <Link to="/cursosagregados" className="list-group-item list-group-item-action rounded mb-1 text-secondary d-flex align-items-center">
          <i className="bi bi-journal-text me-2"></i> <span>Cursos agregados</span>
        </Link>
        <Link to="/consultar-horario" className="list-group-item list-group-item-action rounded mb-1 text-secondary d-flex align-items-center">
          <i className="bi bi-clock-history me-2"></i> <span>Consultar horarios</span>
      </Link>
        <Link to="/materias" className="list-group-item list-group-item-action rounded mb-1 text-secondary d-flex align-items-center">
          <i className="bi bi-book me-2"></i> <span>Registrar materias</span>
        </Link>
        <Link to="/materias-agregadas" className="list-group-item list-group-item-action rounded mb-1 text-secondary d-flex align-items-center">
          <i className="bi bi-book me-2"></i> <span>Consultar materias</span>
        </Link>
        <Link to="/estudiantes" className="list-group-item list-group-item-action rounded mb-1 text-secondary d-flex align-items-center">
          <i className="bi bi-people me-2"></i> <span>Registrar estudiante</span>
        </Link>
        <Link to="/estudiantesagregados" className="list-group-item list-group-item-action rounded mb-1 text-secondary d-flex align-items-center">
          <i className="bi bi-people me-2"></i> <span>Consultar estudiantes</span>
        </Link>
        <span className="list-group-item rounded mb-1 text-muted d-flex align-items-center" style={{ cursor: 'not-allowed', opacity: '0.5' }}>
          <i className="bi bi-check2-square me-2"></i> <span>Registrar asistencia</span>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;