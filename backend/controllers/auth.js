const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation/joiValidation");


//register
const register = async (req, res) => {
  //Lets Validate the data before making a user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking to see if the email already exists in Database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("This Email already exists");

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  }
  catch (err) {
    res.status(400).send(err);
  }
}

//login
const login = async (req, res) => {
  //Lets Validate the data before making a user
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //Checking to see if the email already exists in Database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is not found");
  //Is the Password correct?
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);

  res.send("Logged in");
}

module.exports = {
  register,
  login,
}