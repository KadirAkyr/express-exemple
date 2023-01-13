var controller = {
  getAll: (req, res, next) => {
    res.end("Will send you all the books");
  },

  addOne: (req, res, next) => {
    res.end(
      "Will add the book " +
        req.body.name +
        " with details " +
        req.body.description
    );
  },

  updateAll: (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /books");
  },

  deleteAll: (req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /books");
  },
};

module.exports = controller;
