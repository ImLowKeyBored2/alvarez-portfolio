const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

admin.initializeApp();

exports.contactUsEmail = functions.https.onRequest((req, res) => {
  const { name, email, subject, message } = req.body;
  const gmailEmail = functions.config().gmail.email;
  const gmailPassword = functions.config().gmail.password;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });

  const mailOptions = {
    from: gmailEmail,
    to: "ori.alvarez@commithub.com",
    subject: "alvarez-portfolio: Contact Us",
    text: `Contact info: ${name} (${email}) \nSubject: ${subject}\nMessage: ${message}`,
  };

  cors(req, res, () => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send(info.response);
      }
    });
  });
});
