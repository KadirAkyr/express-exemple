const express = require("express");
const controller = require("../controllers/books.controller");
const router = express.Router();

router
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get(controller.getAll)
  .post(controller.addOne)
  .put(controller.updateAll)
  .delete(controller.deleteAll);

module.exports = router;
