const bcrypt = require("bcrypt");

const UserModel = require("../models/auth");

const signUp = async (req, res) => {
  console.log(req.body);

  const newUser = new UserModel(req.body);
  const newlyInsertedUser = await newUser.save();

  console.log(newlyInsertedUser._id);

  res.json({
    message: "Registration successful, please sign in",
  });
};

const login = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  console.log(user);
  if (!user) {
    return res.status(404).json({
      message: "Node user found",
    });
  }

  if (req.body)
    res.json({
      msg: "Dummy login api",
    });
};

const authcontroller = {
  signUp,
  login,
};

module.exports = authcontroller;
