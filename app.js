const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

/*
 * app.set()은  Express 애플리케이션 전체에 어떤 값이든지 설정할 수 있다.
 * Express 가 이해 할 수 없는 키 혹은 구성 항목도 포함한다.
 *
 * app.get() 을 사용하면 app 객체에서 읽을 수 있다.
 *
 * */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // express.stati는 정적 파일 서비스

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
