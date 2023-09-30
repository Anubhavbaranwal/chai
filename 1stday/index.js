require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("pehla code ");
});
app.get("/profile", (req, res) => {
  res.send("<h1>Hello how can i help you </h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
