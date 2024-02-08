const { User } = require("../models/user.model");
const { errorHandler } = require("../utils/errorHandler");
const bcrypt = require("bcrypt");
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
    return res.status(200).json({
      message: "login succesful",
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
module.exports = { registerUser, loginUser };
