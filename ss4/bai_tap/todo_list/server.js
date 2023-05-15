const http = require('http');
const fs = require('fs');
const qs = require('qs');
const server = http.createServer(function (request, response) {
    if (request.method == "GET") {
        fs.readFile("./views/todo.html", function (err, data) {
            console.log(data)
            response.writeHead(200, "Content-Type: text/html", data);
            response.write(data);
            return response.end();
        })
    } else {
        let data = "";
        request.on("data", function (chunk) {
            data += chunk;
        });

        request.on("end", function () {
            let result = qs.parse(data);
            console.log(result)

            // fs.readFile('./views/todo.html', 'utf8', function (err, datahtml) {
            //     if (err) {
            //         console.log(err);
            //     }
            //     datahtml = datahtml.replace('To do list', result.work);
            //     response.writeHead(200, { 'Content-Type': 'text/html' });
            //     response.write(datahtml);
            //     return response.end();
            // });
            //
            fs.readFile("./views/todo.html", "utf8", function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                console.log(datahtml)
                datahtml=datahtml.replace("To do list", result.work);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(datahtml);
                return response.end();
            });
        });
        request.on("err", function () {
            console.log("Error");

        })
    }
})
server.listen(8081, function () {
    console.log("Server is running")
})