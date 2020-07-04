const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

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

const app = express();

app.use(bodyParser.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});
app.use("/user", register);
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
