const Router = require("express").Router();
const register = require("../controllers/registerController")
const login = require("../controllers/loginController")



Router.post("/register", register);
Router.post("/login", login);




module.exports = Router;