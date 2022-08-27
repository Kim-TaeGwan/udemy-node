const express = require("express");
const path = require("path");
const rootPath = require("../utils/path");

const router = express.Router();

// const shopView = require("views/shop.html");

router.get("/", (req, res, next) => {
  // use를 사용하면 새로운 미들웨어를 추가할 수 있음.
  // path를 사용해서 절대경로로 파일 불러오기 가능
  // path.join()은 사용자의 운영체제를 감지하여 자동으로 올바른 경로를 생성한다.
  res.sendFile(path.join(rootPath, "views", "shop.html"));
});
module.exports = router;
