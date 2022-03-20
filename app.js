const express = require("express");
const app = express();

app.get("/app", (req, res, next) => {
  res.json({ message: "Working" });
});

app.listen(3000);
