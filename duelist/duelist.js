const express = require("express");
const path = require("path");

const duelistRouter = express.Router();
duelistRouter.get("/jett.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/assets/duelist/jett.html"));
});

duelistRouter.get("/neon.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/assets/duelist/neon.html"));
});

duelistRouter.get("/pheonix.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/assets/duelist/pheonix.html"));
});

duelistRouter.get("/raze.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/assets/duelist/raze.html"));
});

duelistRouter.get("/yoru.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/assets/duelist/yoru.html"));
});
module.exports = duelistRouter;
