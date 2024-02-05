const mongoose = require("mongoose");
const { Schema } = mongoose;
const podcastSchema= new Schema({
    video:{
        type: String,
        required:true
    }
})
const Podcast=mongoose.model("Podcast",podcastSchema);
module.exports={
    Podcast
}