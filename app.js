const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  // use를 사용하면 새로운 미들웨어를 추가할 수 있음.
  console.log("In another middleware");
  res.send('<h1>The "Add product" Page</h1>');
});

app.use("/", (req, res, next) => {
  // use를 사용하면 새로운 미들웨어를 추가할 수 있음.
  console.log("In another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
