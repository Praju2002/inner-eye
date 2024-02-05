const mongoose = require("mongoose");
const user=process.env.MONGODB_USER;
const password=process.env.MONGODB_PASSWORD;
async function connectMongodb() {
  try {
    await mongoose.connect(
       "mongodb://localhost:27017"
    );
  } catch (error) {
    console.log("error connecting to mongodb", error);
    process.exit(1);
  }
}
module.exports = connectMongodb;

