const { User } = require("../models/user.model");
const { errorHandler } = require("../utils/errorHandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const registerUser = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  //encrypt
  const hashPasssword = await bcrypt.hash(password, saltRounds);

  try {
    const user = await User.create({
      name,
      email,
      phoneNumber,
      password: hashPasssword,
    });
    return res.status(201).json({
      statusCode: 201,
      message: "user created succesfully",
      data: user,
      success: true,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    // console.log(password, user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch == false) {
      return res.status(401).json({
        message: "incorrect password",
      });
    }
    //jwt token generate and set in cookie
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    console.log("SECRET KEY IS", process.env.JWT_SECRET);
    console.log("token is", token);

    //SET TOKEN
    res.cookie("token", token);

    return res.status(201).json({
      statusCode: 201,
      message: "login succesful",
      succes: true,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
module.exports = { registerUser, loginUser };
