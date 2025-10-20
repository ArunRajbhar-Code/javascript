import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB= async ()=>{
    try {
        const uri=process.env.MONGODB_URI+"/"+DB_NAME
        // const connectionInstance = await mongoose.connect(uri)
        // console.log("Connection successfull "+ connectionInstance.Connection.host);
        const  mydb= await mongoose.connect('mongodb+srv://Arun:Arun4321@cluster123.svyjjdb.mongodb.net/mytube');
        console.log(mydb.connection.host);
        // console.log(process.env.MONGODB_URI+"/"+DB_NAME,  typeof(uri));
        
        

        
        
    } catch (error) {
        console.log("Databse connection failed with following error "+error);
        process.exit(1)
        
        
    }
}
export default connectDB
// const  mydb= await mongoose.connect('mongodb+srv://Arun:Arun4321@cluster123.svyjjdb.mongodb.net/mytube');
