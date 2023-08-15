const express = require("express");
const path = require("path");

const initiatorRouter = express.Router();
initiatorRouter.get("/breach.html", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/breach.html")
  );
});

initiatorRouter.get("/gekko.html", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/gekko.html")
  );
});

initiatorRouter.get("/kayo.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/assets/initiator/kayo.html"));
});

initiatorRouter.get("/skye.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/assets/initiator/skye.html"));
});

initiatorRouter.get("/sova.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/assets/initiator/sova.html"));
});
module.exports = initiatorRouter;
