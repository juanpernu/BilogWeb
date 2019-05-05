const nodemailer = require('nodemailer');

const smtpConfig = {
  host: 'mail.bilog.com.ar',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'juan.pernumian@bilog.com.ar',
    pass: 'Artemis1404'
  },
  tls: { rejectUnauthorized: false }
};
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport(smtpConfig);

/**
   *  Method to send mails
   *
   * @static
   * @param {String} name
   * @param {String} email
   * @param {String} phone
   * @param {String} expertise
   * @param {String} message
   * @returns {Promise}
   * @memberof mailService
   */
const sendMail = async (name, email, phone, expertise, message) => {
  // setup e-mail data with unicode symbols
  const mailOptions = {
    from: `${name} || <${email}>`, // sender address
    to: 'juan.pernumian@gmail.com', // list of receivers
    subject: 'Contacto web', // Subject line
    text: `
      Nombre: ${name}
      Teléfono: ${phone}
      Profesión: ${expertise}
      Mensaje: ${message}`, // plaintext body
  };

  // send mail with defined transport object
  await transporter.sendMail(mailOptions);
}

module.exports = sendMail;
