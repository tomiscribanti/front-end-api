import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Alert } from 'react-bootstrap';

const LibrosList = () => {
  const [libros, setLibros] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);
  const [generoSeleccionado, setGeneroSeleccionado] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const responseLibros = await axios.get('http://localhost:3000/api/libro');
        setLibros(responseLibros.data.libros);

        const responseGeneros = await axios.get('http://localhost:3000/api/genero');
        setGeneros(responseGeneros.data.generos);
      } catch (error) {
        console.error('Error al obtener libros o géneros:', error);
      }
    };

    fetchLibros();
  }, []);

  const librosFiltrados = libros.filter(libro =>
    libro.title.toLowerCase().includes(busqueda.toLowerCase()) &&
    (generoSeleccionado ? libro.genero === generoSeleccionado : true)
  );

  const handleClickLibro = (libro) => {
    setLibroSeleccionado(libro);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por título"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="generoSelect" className="form-label">Seleccionar Género</label>
        <select
          id="generoSelect"
          className="form-select"
          value={generoSeleccionado}
          onChange={(e) => setGeneroSeleccionado(e.target.value)}
        >
          <option value="">Todos los géneros</option>
          {generos.map((genero) => (
            <option key={genero._id} value={genero.nombre}>{genero.nombre}</option>
          ))}
        </select>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {librosFiltrados.length > 0 ? (
          librosFiltrados.map((libro) => (
            <div key={libro._id} className="col mb-4" onClick={() => handleClickLibro(libro)}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{libro.title}</h5>
                  <p className="card-text">{libro.body}</p>
                  <p className="card-text"><strong>Género:</strong> {libro.genero}</p>
                  <p className="card-text"><strong>Reseña:</strong> {libro.resena}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Alert variant="info">No se encontraron libros con el título buscado.</Alert>
        )}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{libroSeleccionado && libroSeleccionado.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {libroSeleccionado && (
            <div>
              <p>{libroSeleccionado.body}</p>
              <p><strong>Género:</strong> {libroSeleccionado.genero}</p>
              <p><strong>Reseña:</strong> {libroSeleccionado.resena}</p>
              <img src={libroSeleccionado.image} alt={libroSeleccionado.title} className="img-fluid" />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LibrosList;
