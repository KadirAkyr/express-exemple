var controller = {
  getAll: (req, res, next) => {
    res.end("Will send you all the books");
  },

  getOne: (req, res, next) => {
    res.end("Will get the book " + req.params.id + " to you");
  },

  addOne: (req, res, next) => {
    res.end(
      "Will add the book " +
        req.body.name +
        " with details " +
        req.body.description
    );
  },

  updateOne: (req, res, next) => {
    res.end(
      "Will update the book " + req.params.id + " with details: " + req.body
    );
  },

  deleteOne: (req, res, next) => {
    res.end("Will delete the book " + req.params.id);
  },
};

module.exports = controller;
