import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <Link to={'/'} className="navbar-brand">TOMWEB</Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to={'/Libros'} className="nav-link">Libros</Link>
          </li>
          <li className="nav-item">
            <Link to={'/Registro'} className="nav-link">Registrate</Link>
          </li>
          <li className="nav-item">
            <Link to={'/Login'} className="nav-link">Inicia sesion</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
