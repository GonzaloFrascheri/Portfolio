// sendEmail.js (versión ES modules)
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const gmailPassword = process.env.GMAIL_PWD; // Usamos el nuevo nombre

console.log('Contraseña leída desde .env:', gmailPassword); // Debería mostrar "wvzogzrobaiuxmik"

app.use(cors());
app.use(express.json());

app.post('/enviar-correo', (req, res) => {
  const { nombre, email, tema, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'gonzalofrascheri@gmail.com',
      pass: gmailPassword
    }
  });

  const mailOptions = {
    from: 'gonzalofrascheri@gmail.com',
    to: 'gonzalofrascheri@gmail.com',
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
