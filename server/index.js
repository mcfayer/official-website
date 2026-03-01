const express = require('express');
const dotenv = require('dotenv');
const userRoute=require("./routes/sendMailRoute")
const cors=require("cors")


// Load environment variables
dotenv.config();
const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true,
  })
)
app.use(express.json());
// Define a basic route
app.use('/',userRoute);
// Start the server
const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//    console.log(`Server running on http://localhost:${PORT}`);
// });