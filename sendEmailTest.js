const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tobiasbrasser@gmail.com',
    pass: 'DarkMaster25'
  }
});

const mailOptions = {
  from: 'tobiasbrasser@gmail.com',
  to: 'tobiasbrasser@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending email:', error);
  }
  console.log('Email sent:', info.response);
});
