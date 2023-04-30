import mongoose from "mongoose";


export function dbconnection(){
    const db = mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true,  useUnifiedTopology: true});
    mongoose.connection.on('error',  (error)=> console.log(`error after initial connection failed: ${error}`));
    mongoose.connection.on('connected',  ()=> console.log(`connection successful`));
}
