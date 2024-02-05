const mongoose = require("mongoose");
const { Schema } = mongoose;
const blogSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    author:{
        type:String,
    },
    authorImage:{
        type:String,
        
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const Blog=mongoose.model("Blog",blogSchema)
module.exports={
    Blog
}