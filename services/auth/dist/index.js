import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.get("/test", (req, res) => {
    res.status(200).json({
        message: "Server is working",
    });
});
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Auth service is running on port ${PORT}`);
    connectDB();
});
