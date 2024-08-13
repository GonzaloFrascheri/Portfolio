import "./FormStyles.css"

import React, { useState } from 'react'


const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tema: '',
    mensaje: '',
  })

  return (
    <div className="form">
        <form>
            <label>Tu nombre</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Tema</label>
            <input type="text" />
            <label>Mensaje</label>
            <textarea rows="6" placeholder="Escribe tu mensaje aquí"></textarea>
            <button className="btn">Enviar</button>
        </form>
    </div>
  )
};

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  // Envío de los datos del formulario a una API (ficticia)
  fetch('https://tu-servidor-api.com/enviar-correo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      // Lógica para manejar el éxito del envío del formulario
      console.log('Mensaje enviado con éxito');
      // Aquí puedes redirigir o mostrar un mensaje de confirmación
    } else {
      // Lógica para manejar errores en el envío del formulario
      console.error('Error al enviar el mensaje');
    }
  })
  .catch(error => {
    console.error('Error inesperado:', error);
  });
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Tu nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        {/* Resto de los campos del formulario */}
        <button className="btn" type="submit">Enviar</button>
      </form>
    </div>
  );
};



/*
const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Tu nombre</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Tema</label>
            <input type="text" />
            <label>Mensaje</label>
            <textarea rows="6" placeholder="Escribe tu mensaje aquí"></textarea>
            <button className="btn">Enviar</button>
        </form>
    </div>
  )
}*/

export default Formulario