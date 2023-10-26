// app.js
const express = require('express');
const configurarWhatsapp = require('./what_wehooks.js');

const app = express();
const port = 3000; // El puerto en el que deseas ejecutar tu aplicación Express

app.use('/whatsapp', configurarWhatsapp);
app.use('/', (req, res) => {
    const data = { message: 'Hello, world!' };
    res.json(data);
  });

app.listen(port, () => {
  console.log(`La aplicación Express está escuchando en el puerto ${port}`);
});
