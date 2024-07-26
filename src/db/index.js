 import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js "; 


 const connectDB= async ()=>{
    try{
        const conectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! DB Host: 
            ${conectionInstance.connection.host}`);

    }
    catch(error){
        console.log("MongoDB correction err",error);
        process.exit(1)
    }
 }


 export default connectDB