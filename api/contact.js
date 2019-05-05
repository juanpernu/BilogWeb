const { json, send } = require('micro');
const mailService = require('../services/sendMail');

const contactApi = async (req, res) => {
  try {
    const body = await json(req);
    const { newUser: { name, email, phone, expertise }, message } = body;
    await mailService(name, email, phone, expertise, message);

    const statusCode = 200;
    const data = "Mail sent";
    send(res, statusCode, data);

  } catch (error) {
    const statusCode = 400;
    const data = { error: `Error en ContactApi: ${error}` };

    send(res, statusCode, data);
  }
}

module.exports = contactApi;
