const express = require("express");
// const path = require("path");
// const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

// const shopView = require("views/shop.html");

router.get("/", (req, res, next) => {
  // use를 사용하면 새로운 미들웨어를 추가할 수 있음.
  // path를 사용해서 절대경로로 파일 불러오기 가능
  // path.join()은 사용자의 운영체제를 감지하여 자동으로 올바른 경로를 생성한다.
  console.log("adminData.products : ", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop"); // app.js 에서 모든 views 가 views 폴더에 있다고 정의했다, 그리고 pug 를 기본 템플릿 엔진으로 적용했다. 그래서 .pug 파일을 탐색할 것이다.
});
module.exports = router;
