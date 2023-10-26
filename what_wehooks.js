// configurar_whatsapp.js
const express = require('express');
const axios = require('axios');

const app = express();


app.post('/configurar-whatsapp-webhook', (req, res) => {
  const webhookURL = 'https://whatsapp.toolhero.tech/api/set_webhook';
  const params = {
    webhook_url: 'https://3194-190-186-42-122.ngrok-free.app/whatsapp/configurar-whatsapp-webhook',
    enable: true,
    instance_id: '653A6DD8EDBB0',
    access_token: '65397a44adc05',
  };

  axios.post(webhookURL, params)
    .then(response => {
      console.log('Respuesta del servidor:');
      console.log(response.data);
      res.send('Webhook configurado exitosamente.');
    })
    .catch(error => {
      console.error('Error al configurar el webhook:');
      console.error(error);
      res.status(500).send('Error al configurar el webhook.');
    });
});

module.exports = app;
