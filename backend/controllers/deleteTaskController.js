const User = require("../models/userModel");
const List = require("../models/listModels");
const deleteTask = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  try {
    const existUser = await User.findOneAndUpdate({ email }, { $pull: { lists: id } });
    if (existUser) {
      await List.findOneAndDelete({ _id: id });
      res.status(200).json("Task deleted successfully");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}



module.exports = deleteTask;