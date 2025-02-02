const Router = require("express").Router();
const addTask = require("../controllers/addTaskController")
const getTasks = require("../controllers/getTasksController")
const updateTask = require("../controllers/updateTaskController")
const deleteTask = require("../controllers/deleteTaskController")



Router.post("/addTask", addTask)
Router.get("/getTasks/:id", getTasks)
Router.put("/updateTask/:id", updateTask)
Router.delete("/deleteTask/:id", deleteTask)

module.exports = Router;