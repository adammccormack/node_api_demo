const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 4567;

const dogs = [
  { name: "Fred", breed: "Dalmatian" },
  { name: "Bob", breed: "German Shepherd" },
];

app.get("/", (req, res) => {
  res.json(dogs);
});

app.get("/dogs/:id", (req, res) => {
  res.json(dogs[parseInt(req.params.id) - 1]);
});

app.post("/dogs", (req, res) => {
  console.log(req.body);
  res.json({ message: "ok" });
});

app.put("/dogs/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.json({ message: `updating dog ${req.params.id}` });
});

app.delete("/dogs/:id", (req, res) => {
  console.log(req.params.id);
  res.json({ message: `deleting dog ${req.params.id}` });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
