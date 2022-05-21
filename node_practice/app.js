require("dotenv").config();
const http = require("http");

const port = process.env.PORT || 9000;

const myServer = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end(`<h1>${process.env.message}</h1>`);
});

myServer.listen(port, () => {
  console.log("listening on the port " + port);
});
