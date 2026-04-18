const express = require('express');
const app = express();
const connectDB = require('./config/db');
const authRoutes = require("./routes/authRoutes");
require('dotenv').config();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Finance API");
});



app.use("/auth", authRoutes);


connectDB();

app.listen(3000, ()=>console.log("Server is running at port : 3000"));