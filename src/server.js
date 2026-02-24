import express from "express"
import {config} from 'dotenv';
import { connectDB, disconnectDB } from "./config/db.js";
const PORT = 3000;
import movieRoute from "./routes/movieRoute.js"

config();
connectDB();

const app = express();
app.use("/movies",movieRoute)

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})

process.on("unhandledRejection",(err)=>{
    console.error("Unhandled Rejection:", err);
    server.close(async ()=>{
        await disconnectDB();
        process.exit(1)
    })
})

process.on("uncaughtException",async (err)=>{
    console.error("uncaught exception:", err);
        await disconnectDB();
        process.exit(1)
})

process.on("SIGTERM", async ()=>{
    console.error("SIGTERM received, shutting down gracefully:");
    server.close(async ()=>{
        await disconnectDB();
        process.exit(0)
    })
})


