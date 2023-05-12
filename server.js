const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// 라우트 및 미들웨어 설정
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
