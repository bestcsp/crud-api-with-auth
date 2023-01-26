const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true        
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    meta_description:{
        type:String,
    },
},  
    {timestamps:true}
)