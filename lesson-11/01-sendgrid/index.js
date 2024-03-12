import "dotenv/config";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = {
  to: [
    "bogdansolomich@gmail.com",
    "zoryanamirchuk@gmail.com",
    "uflakey@gmail.com",
    "filinanatash@gmail.com",
    "jhmdaurel@gmail.com",
    "timahaua@gmail.com",
    "karinafrank750@gmail.com",
    "svitlana.otenko@gmail.com"
  ],
  from: "vmudrij0508@gmail.com",
  subject: "Hello from Node.js",
  html: "<h1 style='color: red;'>Node.js is awesome platform</h1>",
  text: "Node.js is awesome platform",
};

sgMail.send(message).then(console.log).catch(console.error);
