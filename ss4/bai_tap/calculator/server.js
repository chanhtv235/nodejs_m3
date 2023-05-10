const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer(function (req, res) {
    if (req.method === 'GET'&&req.url==="/calculator") {
        fs.readFile('./view/index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (req.method === 'POST'&&req.url==="/calculator") {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            let result=0;
            const data1 = qs.parse(data);
            let operation = data1.operation;
            console.log(operation);
            switch (operation) {
                case "+":
                    result = parseInt(data1.n1) + parseInt(data1.n2)
                    break;
                case "-":
                    result = parseInt(data1.n1) - parseInt(data1.n2)
                    break;
                case "*":
                    result = parseInt(data1.n1) * parseInt(data1.n2)
                    break;
                case "/":
                    result = parseInt(data1.n1) / parseInt(data1.n2)
                    break;
                default :
                    result ="không có phép toán đúng"

            }
            fs.readFile('./view/index.html', 'utf8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{result}', result);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>404 Found not file</h1>");
    }
});

server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
});