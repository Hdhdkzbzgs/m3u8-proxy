const express = require("express");
const request = require("request");
const app = express();

app.get("/", (req, res) => {
  res.send("M3U8 Proxy is running!");
});

app.get("/proxy", (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("Missing URL");

  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
