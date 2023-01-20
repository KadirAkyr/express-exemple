const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String },
    descrription: { type: String },
    author: { type: String },
    image: { type: String },
    year: { type: Number },
    price: { type: Number, default: -1.0 },
    bestseller: { type: Boolean },
  },
  { collection: "books", timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
