const express = require("express");
const path = require("path");

const sentinelRouter = express.Router();
sentinelRouter.get("/chamber.html", (req, res) => {
  sentinelRouter.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/chamber.html")
  );
});

sentinelRouter.get("/cypher.html", (req, res) => {
  sentinelRouter.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/cypher.html")
  );
});

sentinelRouter.get("/killjoy.html", (req, res) => {
  sentinelRouter.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/killjoy.html")
  );
});

sentinelRouter.get("/sage.html", (req, res) => {
  sentinelRouter.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/sage.html")
  );
});
module.exports = sentinelRouter;
