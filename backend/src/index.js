import express from "express";
import authRoutes from "./routes/auth.route.js"; 
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import path from "path";
dotenv.config();
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

const PORT = process.env.PORT || 5001;
const FRONTEND_URL = process.env.FRONTEND_URL || "https://chatapplication-wine.vercel.app";

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
server.listen(PORT,()=>{
    console.log("server is running");
    connectDB();
});