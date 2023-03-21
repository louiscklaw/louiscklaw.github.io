module.exports = function () {
  return {
    environment: process.env.MY_ENVIRONMENT || 'development',
    whatsapp_number: process.env.WHATSAPP_NUMBER || 'LOUIS_WHATSAPP_NUMBER',
  };
};
