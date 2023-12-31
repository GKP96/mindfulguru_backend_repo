const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 2025;
app.use(express.json());
app.use(cors());
const signupRouter = require("./routers/signup.router");
const userRouter = require("./routers/user.router");
app.use("/signup", signupRouter);
app.use("/users", userRouter);
const AtlasUrl =
  "mongodb+srv://Gautama:Gaunik%401234@cluster1.txuuzz9.mongodb.net/attendance_project?retryWrites=true&w=majority";
mongoose.connect(AtlasUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Database Connected successfully");
});
app.listen(port, () => {
  console.log("App start listening on port " + port);
});
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "build/index.html"))
);