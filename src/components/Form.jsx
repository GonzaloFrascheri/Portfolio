import "./FormStyles.css"

import React from 'react'

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
}

export default Form