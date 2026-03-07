dotenv.config();
import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";

import userRouter from './routes/userRoutes.js'
import authRouter from './routes/authRoutes.js'



const app = express();

mongoose.connect(process.env.MONGOOSE_CONNECTION)
.then(() => {
    console.log("✅ MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("❌ MongoDB Connection Error:",err);
});
console.log(process.env.MONGOOSE_CONNECTION,'MONGOOSE_CONNECTION');
console.log("ENV:", process.env.MONGOOSE_CONNECTION);
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is working");
});

app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});


app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

//mildlewear

app.use((err,req, res, next)=>{
    const statusCode =err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});