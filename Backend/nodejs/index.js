const http = require("http");

const port = 8888;

console.log(`my port: ${port}`);
console.log('hey')

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end("Hello, world!\n");
});

server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}/`);
});
