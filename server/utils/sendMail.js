const nodemailer = require("nodemailer");

async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: process.env.USER_EMAIL,
    subject: `${data.subject} - ${data.name}`,
    text: `
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}

module.exports = sendEmail;