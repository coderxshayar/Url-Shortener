import  mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
      type:String,
      required:true   
    },
    visitHistory:[{timestamp:{type:Number}}]
},{
    timestamps:true
});

const URL = new mongoose.model("url",UrlSchema);


export default URL;