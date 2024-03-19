const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  console.log(id);
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createToken = async (user, statusCode, res) => {
  const token = signToken(user._id);
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: { user },
  });
};

exports.signUp = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log("userdetails", user);
    createToken(user, 201, res);
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      res.status(400).json({
        status: "failed",
        message: "Please provide email and password!",
      });
    }
    const user = await User.findOne({ email }).select("+password");
    console.log("login", user);
    if (!user || !(await user.correctPassword(password, user.password))) {
      res.status(401).json({
        status: "failed",
        message: "Incorrect email and password",
      });
    }
    createToken(user, 200, res);
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error,
    });
  }
};
