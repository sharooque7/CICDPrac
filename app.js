const express = require("express");
const app = express();

app.get("/app", (req, res, next) => {
  res.json({ message: "Working" });
});

app.get("/", (req, res, next) => {
  res.json({ message: "Working" });
});

app.get("/", (req, res, next) => {
  res.json({ message: "Git CI/CD Checkoout" });
});

app.listen(3000);
