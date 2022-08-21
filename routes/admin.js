const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  // use를 사용하면 새로운 미들웨어를 추가할 수 있음.
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>'
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
