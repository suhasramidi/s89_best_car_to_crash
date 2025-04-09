const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const costumeRouter = require("./router");
app.use('/costume',costumeRouter);

app.get("/ping", (req, res) => {
    try {
        res.status(200).send({ msg: "pong" });
    } catch (error) {
        res.status(500).send({ msg: "Server error occurred", error });
    }
});

app.get("/", (req, res) => {
    try {
        res.status(200).send({ msg: "mongodb connected" });
    } catch (error) {
        res.status(500).send({ msg: "Server error occurred", error });
    }
});




app.listen(3000, async(err) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Server connected successfully on port 3000");

        
    } catch (error) {
        console.error("Failed to start the server");
    }
    
});