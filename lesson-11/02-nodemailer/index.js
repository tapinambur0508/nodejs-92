import "dotenv/config";

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

const message = {
  to: "vmudrij0508@gmail.com",
  from: "vmudrij0508@gmail.com",
  subject: "Hello from Node.js",
  html: "<h1 style='color: red;'>Node.js is awesome platform</h1>",
  text: "Node.js is awesome platform",
};

transport.sendMail(message).then(console.log).catch(console.error);
