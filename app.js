const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT  // Usa el puerto proporcionado por tu plataforma de despliegue o el puerto 3000 por defecto

app.use(express.json());

app.post('/webhook', (req, res) => {
  const eventData = req.body;
  console.log('Evento de WhatsApp recibido:', eventData);
  res.status(200).json({ message: 'Evento recibido con éxito' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
