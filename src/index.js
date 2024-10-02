import dontenv from "dotenv";
import connectDB from "./db/connection.js";
import { app } from "./app.js";
dontenv.config({
    path: './env'
})

connectDB()
.then(() => {
    // Will Listen Here
    app.on("Error", (error) => {
        console.log("Error", error);
        throw error;
    })
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening to http://localhost/${process.env.PORT}`);
        
    })
})  
.catch((error) => {
    // Err will go here
    console.log("MongoDB Connection Failed !!!", error);
    
})