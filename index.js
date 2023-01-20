require("./models/db");
const http = require("http");
const express = require("express");
const morgan = require("morgan");

const hostname = "localhost";
const port = 3000;
const app = express();

//Imports
const booksRouter = require("./routes/books.router");
const airplanesRouter = require("./routes/airplanes.router");

app.use(morgan("dev"));
const server = http.createServer(app);
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/books", booksRouter);
app.use("/airplanes", airplanesRouter);

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Coucou</h1></body></html>");
});

server.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port);
});
