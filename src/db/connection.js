import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try{
        const conn_res = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected !! DB HOST: ${conn_res.connection.host}`);
        

    }catch(error){
        console.error("CON_ERR", error);
        process.exit(1);
    }
}

export default connectDB;