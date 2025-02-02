const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./database/db");
const authRoute = require("./routes/authRouter");
const taskRoute = require("./routes/taskRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
connectDB();

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/auth", authRoute);
app.use("/api/task", taskRoute)


app.listen(process.env.PORT, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT}`);
})
