const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world! This is my first Node.js server This is Gituser-PROgrammer....\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
