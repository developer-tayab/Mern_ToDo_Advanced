const User = require("../models/userModel");
const List = require("../models/listModels");
const addTask = async (req, res) => {
  const { title, body, email } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      const newList = await List.create({
        title,
        body,
        user: existUser
      })
      existUser.lists.push(newList);
      await existUser.save();
      res.status(200).json(newList);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }


}



module.exports = addTask;