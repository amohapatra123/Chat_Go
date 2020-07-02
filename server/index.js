const http = require("http");
const express = require("express");
const io = require("socket.io");
const PORT = 5000;

const app = express();

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
