const express = require("express");

const app = express();

app.get("/teste", (req, res) => {
  return res.json({ hello: "World2" });
});

app.listen(3000);
