const User = require("../models/userModel");
const List = require("../models/listModels");
const updateTask = async (req, res) => {
  const { title, body, email } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      const updateUser = await List.findOneAndUpdate({ _id: req.params.id }, { title, body }, { new: true });
      await updateUser.save();
      res.status(200).json("Task updated successfully");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}



module.exports = updateTask;