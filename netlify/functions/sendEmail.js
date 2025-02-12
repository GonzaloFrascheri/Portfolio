// netlify/functions/sendEmail.js
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON' }),
    };
  }

  const { nombre, email, tema, mensaje } = data;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'gonzalofrascheri@gmail.com',
      pass: process.env.GMAIL_PWD, // Asegúrate de que esta variable esté configurada en Netlify
    },
  });

  const mailOptions = {
    from: 'gonzalofrascheri@gmail.com',
    to: 'gonzalofrascheri@gmail.com',
    subject: `Nuevo mensaje de ${nombre} - ${tema}`,
    text: `De: ${nombre}\nEmail: ${email}\nMensaje:\n${mensaje}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.response);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Mensaje enviado con éxito', response: info.response }),
    };
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error al enviar el mensaje', error: error.toString() }),
    };
  }
};
