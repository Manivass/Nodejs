const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getServerData") {
    res.end("There is no Secret Data");
  }
  res.end("Hello World");
});

server.listen(7777);
