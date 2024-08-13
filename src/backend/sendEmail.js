const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

require('dotenv').config();

const PWD = process.env.PWD;

app.use(express.json());

app.post('/enviar-correo', (req, res) => {
  const { nombre, email, tema, mensaje } = req.body;

  // Configurar nodemailer con tus credenciales y opciones de correo
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gonzalofrascheri@gmail.com', // Tu dirección de correo desde donde se enviará el mensaje
      pass: PWD // Tu contraseña
    }
  });

  const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: 'destinatario@example.com', // El destinatario del correo electrónico
    subject: `Nuevo mensaje de ${nombre} - ${tema}`,
    text: `De: ${nombre}\nEmail: ${email}\nMensaje:\n${mensaje}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).send('Error al enviar el mensaje');
    } else {
      console.log('Correo enviado:', info.response);
      res.status(200).send('Mensaje enviado con éxito');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});