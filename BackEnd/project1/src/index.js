import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";

dotenv.config({path:'./env'})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log("listen at "+8000);
        
    })
    

})
.catch((error)=>{
    console.error("Connection failed with following error "+error);
    
})







/*
import { DB_NAME } from "./constant";
const app=express()
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error");
            throw error
            
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Listening on port ${process.env.PORT}`);
            
        })
        
    } catch (error) {
        console.log("Connection failed with following error "+error);
        throw error
        
        
    }
})()
*/
