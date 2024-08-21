const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hey, node inside container");
  console.log("Hey, node inside container");
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
