const mongoose = require("mongoose");
const { Schema } = mongoose;
const ebookSchema=new Schema({
    title: {
        type: String,
        required: true,
      },
    email:{
        type:String,
        required:true
    }
})
const EbookRequest=mongoose.model("EbookRequest",ebookSchema)
module.exports={
 EbookRequest
}