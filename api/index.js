import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const app = express();

mongoose.connect(process.env.MONGOOSE_CONNECTION)
.then(() => {
    console.log("✅ MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("❌ MongoDB Connection Error:");
});

app.get("/", (req, res) => {
    res.send("Server is working");
});

app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});