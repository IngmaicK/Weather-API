const express = require("express");

const app = express();

app.get("/", function(req, res) {
  console.log("Server is Up and Running!");
});



app.listen(3000, function(req, res) {
  console.log("Server is Up and Running on port 3000");
});
