const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).send("User already exist");
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(400).send(err);
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.status(400).send(err);
        await User.create({
          name,
          email,
          password: hash
        })
      })
      res.status(200).json("User created successfully");
    })

  } catch (error) {
    res.status(400).send(error.message);
  }

}


module.exports = register;