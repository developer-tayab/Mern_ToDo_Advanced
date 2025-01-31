const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (!userExist) return res.status(400).send("User does not exist");
    const isPasswordMatch = await bcrypt.compare(password, userExist.password);
    if (!isPasswordMatch) return res.status(400).send("Invalid credentials");
    res.status(200).json(userExist);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = login;