const express = require("express");
var cors = require("cors");

const app = express();

app.use(cors());
// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("GET REQUEST");
  res.send({ name1: "name1", name2: "name2" });
});

app.post("/", (req, res) => {
  console.log("POST REQUEST");
  console.log(req.body);
  res.status(200).send();
});

app.listen(8081);
