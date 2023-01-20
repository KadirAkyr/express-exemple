const Book = require("../models/books.model");

var controller = {
  getAll: async (req, res, next) => {
    let books = await Book.find({});
    res.json(books);
  },

  addOne: async (req, res, next) => {
    let book = await Book.create(req.body);
    res.json(book);
  },

  getOne: async (req, res, next) => {
    let book = await Book.findById(req.params.id);
    res.json(book);
  },

  deleteAll: async (req, res, next) => {
    let resp = await Book.remove({});
    res.json(resp);
  },

  updateOne: async (req, res, next) => {
    let book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(book);
  },

  deleteOne: async (req, res, next) => {
    let resp = await Book.findByIdAndDelete(req.params.id);
    res.json(resp);
  },
};

module.exports = controller;
