const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hey, node inside container tag : 04");
  console.log("hello from NODE.js application running inside DOCKER CONTAINER using node:current-apline3.19 image which is running inside KUBERNETES POD and DEPLOYEMNT dockerhub-deploy");
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
