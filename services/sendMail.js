import nodemailer from 'nodemailer';

const sendMail = (from, email, subject, text) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

  // setup e-mail data with unicode symbols
  const mailOptions = {
    from: `${from} || <${email}>`, // sender address
    to: 'juan.pernumian@bilog.com', // list of receivers
    subject: subject, // Subject line
    text: text, // plaintext body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
}

export default sendMail;
