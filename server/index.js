const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
//MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/Chat_Go", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Import Area
const register = require("./routes/register");
const login = require("./routes/login");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});
app.use("/user", register);
app.use("/user", login);
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
