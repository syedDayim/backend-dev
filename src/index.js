import dontenv from "dotenv";
import connectDB from "./db/connection.js";

dontenv.config({
    path: './env'
})

connectDB();