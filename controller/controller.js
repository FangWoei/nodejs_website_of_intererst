const express = require("express");
const path = require("path");

const controllerRouter = express.Router();
controllerRouter.get("/astra.html", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public/assets/controller/astra.html")
  );
});

controllerRouter.get("/brim.html", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public/assets/controller/brim.html")
  );
});

controllerRouter.get("/harbor.html", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public/assets/controller/harbor.html")
  );
});

controllerRouter.get("/omen.html", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public/assets/controller/omen.html")
  );
});

controllerRouter.get("/viper.html", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public/assets/controller/viper.html")
  );
});
module.exports = controllerRouter;
