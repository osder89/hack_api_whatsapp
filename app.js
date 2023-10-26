require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const express = require('express');
const app = express();

// Obtén el puerto de las variables de entorno o utiliza el puerto 3000 como valor predeterminado
const port = process.env.PORT ;

app.get('/', (req, res) => {
  const dataToSave = req.body.body;
  const filePath = 'data.json';
const jsonData = JSON.stringify(dataToSave, null, 2); 
fs.writeFile(filePath, jsonData, (err) => {
  if (err) {
    console.error('Error al guardar el archivo:', err);
  } else {
    console.log('JSON guardado con éxito en ' + filePath);
  }
});
  console.log('Respuesta'  + req.body.body)
});



app.listen(port, () => {
  console.log('La aplicación está escuchando en el puerto ' + port);
});
