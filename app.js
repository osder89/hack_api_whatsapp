

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// El puerto en el que se ejecutará el servidor
const port = process.env.PORT ;
// Configura body-parser para analizar solicitudes JSON
app.use(bodyParser.json());

// Define un punto final (endpoint) para recibir eventos de WhatsApp
app.post('/webhook', (req, res) => {
  const eventData = req.body;
  // Procesa los eventos de WhatsApp aquí
  console.log('Evento de WhatsApp recibido:', eventData);

  // Envía una respuesta exitosa
  res.status(200).json({ message: 'Evento recibido con éxito' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
