const http = require("http");
const express = require("express");
const morgan = require("morgan");

const hostname = "localhost";
const port = 3000;
const app = express();

const server = http.createServer(app);

app.use(express.static(__dirname + "/public"));

server.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port);
});
