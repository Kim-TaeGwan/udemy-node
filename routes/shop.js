const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // use를 사용하면 새로운 미들웨어를 추가할 수 있음.
  res.send("<h1>Hello from Express!</h1>");
});
module.exports = router;
