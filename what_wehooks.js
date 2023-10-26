const axios = require('axios');

const webhookUrl = 'https://whatsapp.toolhero.tech/api/set_webhook';
const params = {
  webhook_url: 'https%3A%2F%2Fhackapiwhatsapp-dev-tfma.2.us-1.fl0.io',
  enable: true,
  instance_id: '653A6DD8EDBB0',
  access_token: '65397a44adc05',
};

axios.post(webhookUrl, params)
  .then((response) => {
    if (response.data.success) {
      console.log('Webhook establecido con éxito.');
    } else {
      console.error('Error al establecer el webhook:', response.data.error);
    }
  })
  .catch((error) => {
    console.error('Error en la solicitud HTTP:', error);
  });
