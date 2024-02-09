const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const verifyJWT = async (req, res, next) => {
  const token = req.cookies?.token;
  console.log("token is", token);
  if (!token) {
    res.status(401).json({
      statusCode: 401,
      message: "no token provided",
      success: false,
    });
  }
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  console.log("THIS IS DECODE", decode);


  const id = decode.id;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  req.user=user;
  next();
//   console.log("user is", user);
};
module.exports = {
  verifyJWT,
};
