const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const connectMongodb = require("./dbConfig/mongodb.config");
connectMongodb();

//parse JSON format
app.use(express.json());

//routes
const serviceRoutes = require("./routes/serviceRoute/service.route");
app.use("/service", serviceRoutes);


const blogRoutes=require("./routes/blogRoutes/blog.route")
app.use("/blogs",blogRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
