const User = require("../models/userModel");
const List = require("../models/listModels");
const getTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const taskLists = await List.find({ user: id }).sort({ createdAt: -1 });
    if (taskLists.length !== 0) {
      res.status(200).json(taskLists);
    } else {
      res.status(400).send("No tasks found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}



module.exports = getTasks;