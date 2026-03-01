const express = require("express");
const route = express.Router();
const sendEmail = require("../utils/sendMail");

route.post("/send-email", async (req, res) => {
  try {
    await sendEmail(req.body);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email failed" });
  }
});

module.exports = route;