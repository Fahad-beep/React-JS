import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "mongoose";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
