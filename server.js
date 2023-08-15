const express = require("express");
const path = require("path");
const sentinelRouter = require("./sentinel/sentinel");
const controllerRouter = require("./controller/controller");
const duelistRouter = require("./duelist/duelist");
const initiatorRouter = require("./initiator/initiator");
const app = express();
const port = 8888;

// Serve static files
// app.use(express.static("public"));

// Define route for /controller/brim
app.use("/assets/sentinel", sentinelRouter);
app.use("/assets/controller", controllerRouter);
app.use("/assets/duelist", duelistRouter);
app.use("/assets/initiator", initiatorRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// 404 middleware
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
