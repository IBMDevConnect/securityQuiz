const express = require("express");
const app = express(); // create express app
const path = require("path");
var port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("static"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
