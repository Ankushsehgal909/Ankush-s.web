const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter object using the SMTP transport service
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail password
    },
  });

  const mailOptions = {
    from: email, // sender address
    to: process.env.EMAIL_RECEIVER, // receiver address (your email)
    subject: `Message from ${name}`, // Subject line
    text: message, // Message body
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: "Error sending email" });
    } else {
      return res.status(200).json({ message: "Email sent successfully!" });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
