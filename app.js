require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const express = require('express');
const app = express();

// Obtén el puerto de las variables de entorno o utiliza el puerto 3000 como valor predeterminado
const port = process.env.PORT ;

app.get('/', (req, res) => {
  res.send('Servidor en funcionamiento en el puerto ' + port);
});

app.listen(port, () => {
  console.log('La aplicación está escuchando en el puerto ' + port);
});
