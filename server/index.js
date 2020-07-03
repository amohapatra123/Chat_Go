const http = require("http");
const express = require("express");

const app = express();

const PORT = 5000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
