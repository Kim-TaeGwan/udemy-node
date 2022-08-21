const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  // use를 사용하면 새로운 미들웨어를 추가할 수 있음.
  console.log("In the middleware");
  next(); // next 요청으로 다음 라인에 있는 미들웨어 실행
});

app.use((req, res, next) => {
  // use를 사용하면 새로운 미들웨어를 추가할 수 있음.
  console.log("In another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
