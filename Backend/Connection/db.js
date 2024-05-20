import mongoose from "mongoose";


const handleConnectToMongoDb= async(url)=>{
    return mongoose.connect(url);
}


export{
    handleConnectToMongoDb
}