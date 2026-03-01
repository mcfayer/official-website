const express = require('express');
const dotenv = require('dotenv');
const userRoute = require("./routes/sendMailRoute");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Mount routes (correct)
app.use(userRoute);

module.exports = app;