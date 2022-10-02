const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(80, (server) => {
  let host = server.host;
  let port = server.port;
  console.log("server listening on {host}:{port}");
});