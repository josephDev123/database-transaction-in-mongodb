import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()


export function dbconnection(){
    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true,  useUnifiedTopology: true});
    mongoose.connection.on('error',  (error)=> console.log(`error after initial connection failed: ${error}`));
    mongoose.connection.on('connected',  ()=> console.log(`connection successful`));
}
