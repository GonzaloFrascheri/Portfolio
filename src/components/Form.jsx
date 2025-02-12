import "./FormStyles.css";
import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tema: '',
    mensaje: '',
  });

  // Actualiza el estado según el input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/enviar-correo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Mensaje enviado con éxito');
        // Reinicia los campos
        setFormData({ nombre: '', email: '', tema: '', mensaje: '' });
      } else {
        alert('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error inesperado:', error);
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Tu nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Tema</label>
        <input
          type="text"
          name="tema"
          placeholder="Ingresa el tema"
          value={formData.tema}
          onChange={handleChange}
          required
        />
        <label>Mensaje</label>
        <textarea
          rows="6"
          name="mensaje"
          placeholder="Escribe tu mensaje aquí"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button className="btn" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
