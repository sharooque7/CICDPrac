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

app.get("/", (req, res, next) => {
  res.json({ message: "Git CI/CD Azure Devops" });
});

app.listen(3000);
