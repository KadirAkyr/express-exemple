const express = require("express");
const router = express.Router();

router
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send you all the airplanes");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the book " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /airplanes");
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /airplanes");
  });

module.exports = router;
