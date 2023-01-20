const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/books-db";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set("strictQuery", true);

mongoose.connect(url, options);

mongoose.connection.on("connecting", () => {
  console.log("connecting");
});

mongoose.connection.on("error", () => {
  console.log("Connection error");
});

mongoose.connection.on("connected", () => {
  console.log("connection to database successfully established");
});

mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});

module.exports = mongoose.connection;
