const express = require("express");
const app = express();

const port = 4567;

app.get("/", (req, res) => {
  res.send("HEYOOOOO");
});

app.get("/about", (req, res) => {
  res.send("What would you like to know about?");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
