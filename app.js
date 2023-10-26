require('dotenv').config(); // Carga las variables de entorno desde el archivo .env
const fs = require('fs');
const express = require('express');
const app = express();

// Obtén el puerto de las variables de entorno o utiliza el puerto 3000 como valor predeterminado
const port = process.env.PORT ;

app.get('/', (req, res) => {
  const dataToSave =  req;
  const filePath = 'data.json';
  const jsonData = JSON.stringify(dataToSave, null, 2); 
fs.writeFile(filePath, jsonData, (err) => {
  if (err) {
    console.error('Error al guardar el archivo:', err);
  } else {
    console.log('JSON guardado con éxito en ' + filePath);
  }
});
  console.log('Respuesta' + dataToSave );
});

app.get('/descargar', (req, res) => {
    // Nombre del archivo descargable
    const fileName = 'data.json';
  
    // Ruta del archivo JSON que deseas enviar
    const filePath = './data.json'; // Asegúrate de que coincida con la ruta del archivo guardado
  
    // Configura la cabecera de la respuesta para la descarga
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-Type', 'application/json');
  
    // Envía el archivo JSON como respuesta
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error('Error al enviar el archivo:', err);
      } else {
        console.log('Archivo JSON enviado con éxito');
      }
    });
  });

app.listen(port, () => {
  console.log('La aplicación está escuchando en el puerto ' + port);
});
