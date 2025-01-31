const Router = require("express").Router();
const register = require("../controllers/registerController")



Router.post("/register", register);




module.exports = Router;