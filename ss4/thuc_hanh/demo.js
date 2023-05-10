const http = require('http');
const server = http.createServer((req, res) => {
    res.write('<h1> Hi, thank you for visit https://codegym.vn</h1><hr>');
    res.end();
});
server.listen(8080, '127.0.0.1');