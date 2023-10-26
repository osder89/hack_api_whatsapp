const axios = require('axios');

// URL del servicio de WhatsApp para configurar el webhook
const whatsappWebhookUrl = 'https://whatsapp.toolhero.tech/api/set_webhook';

// Parámetros para configurar el webhook
const webhookParams = {
  webhook_url: 'https://hackapiwhatsapp-dev-tfma.2.us-1.fl0.io/webhook', // Reemplaza con la URL de tu proyecto
  enable: true,
  instance_id: '653A6DD8EDBB0', // Reemplaza con tu instancia de WhatsApp
  access_token: '65397a44adc05', // Reemplaza con tu token de acceso
};

axios.post(whatsappWebhookUrl, webhookParams)
  .then((response) => {
    if (response.data.success) {
      console.log('Webhook de WhatsApp configurado con éxito.');
    } else {
      console.error('Error al configurar el webhook de WhatsApp:', response.data.error);
    }
  })
  .catch((error) => {
    console.error('Error en la solicitud HTTP:', error);
  });
