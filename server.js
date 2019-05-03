const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mailService = require('./services/sendMail')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Read on http://localhost:3000');
  });

  server.post('/api/contact', (req, res) => {
    try {
      const { newUser: { name, email, phone, expertise }, message } = req.body;
    
      mailService.sendMail(name, email, phone, expertise, message);
      res.send('todo bien!');

    } catch (error) {
      res.send('Error sending email: ', error);
    }
  });
});
