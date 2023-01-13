var controller = {
  getAll: (req, res, next) => {
    res.end("Will send you all the airplanes");
  },

  getOne: (req, res, next) => {
    res.end("Will get the airplane " + req.params.id + " to you");
  },

  addOne: (req, res, next) => {
    res.end(
      "Will add the airplane " +
        req.body.name +
        " with details " +
        req.body.description
    );
  },

  updateOne: (req, res, next) => {
    res.end(
      "Will update the airplane " + req.params.id + " with details: " + req.body
    );
  },

  deleteOne: (req, res, next) => {
    res.end("Will delete the airplane " + req.params.id);
  },
};

module.exports = controller;
