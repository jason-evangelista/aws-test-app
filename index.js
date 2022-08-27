const express = require("express");

const app = express();
const port = process.env.PORT || 3434;

app.get("/", (req, res) => {
  return res.json({ name: "Alpha", hero_type: "Fighter" });
});

app.listen(port, () => {
  console.log("logging");
});
