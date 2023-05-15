class User {
    constructor(name, email, phone, address) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}

let listUser = [];
listUser.push(new User("chánh1", "chanhtv@gmail.com", 12345, "ĐN"));
listUser.push(new User("chánh2", "chanhtv@gmail.com", 12345, "ĐN"));
listUser.push(new User("chánh3", "chanhtv@gmail.com", 12345, "ĐN"))

const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer(function (request, response) {
    let url = request.url;
    console.log(url)
    if (url.includes("?")) {
        url = url.substring(0, url.indexOf("?"));
    }
    console.log(url)
    if (request.method == "GET" && url == "/list") {
        fs.readFile("./views/list.html", "utf8", function (err, datahtml) {
            if (err) {
                console.log(err);
            }
            console.log(datahtml)
            datahtml = datahtml.replace("list", dataList(listUser));
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(datahtml);
            return response.end();
        });
    } else if (request.method == "GET" && url == "/create") {
        fs.readFile("./views/create.html", "utf8", function (err, datahtml) {
            if (err) {
                console.log(err);
            }
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(datahtml);
            return response.end();
        });
    } else if (request.method == "POST" && url == "/create") {
        let data = "";
        request.on("data", function (chunk) {
            data += chunk;
        });
        request.on("end", function () {
            let user = qs.parse(data);
            console.log(user)
            listUser.push(user);
            fs.readFile("./views/list.html", "utf8", function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace("list", dataList(listUser));
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(datahtml);
                return response.end();
            });
        });
        request.on("err", function () {
            console.log("Error");
        })
    } else if (request.method == "GET" && url == "/delete") {
        console.log("delete chạy")
        let data = "";
        request.on("data", function (chunk) {
            data += chunk;
        });
        let param = qs.parse(data);
        console.log(data);
        console.log(param.id)
        request.on("end", function () {
            listUser.splice(param.id, 1);
            fs.readFile("./views/list.html", "utf8", function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace("list", dataList(listUser));
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(datahtml);
                return response.end();
            });
        });
        request.on("err", function () {
            console.log("Error");
        })
    } else if (request.method == "GET" && url == "/edit") {
        console.log("edit chạy")
        let data = "";
        request.on("data", function (chunk) {
            data += chunk;
        });
        request.on("end", function () {
            let param = qs.parse(data);
            console.log(param);
            fs.readFile("./views/edit.html", "utf8", function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                // datahtml = datahtml.replace("${name}", listUser[param.id].name);
                // datahtml = datahtml.replace("${phone}", listUser[param.id].phone);
                // datahtml = datahtml.replace("${address}", listUser[param.id].address);
                // datahtml = datahtml.replace("${email}", listUser[param.id].email);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(datahtml);
                return response.end();
            });
        });
        request.on("err", function () {
            console.log("Error");
        })
    } else {
        console.log("đường dẫn lỗi ")
    }
})
server.listen(8080, function () {
    console.log("Server is running")
})


function dataList(list) {
    let tableString = "";
    for (let i = 0; i < list.length; i++) {
        tableString += `<tr>
        <td>${list[i].name}</td>
        <td>${list[i].email}</td>
        <td>${list[i].phone}</td>
        <td>${list[i].address}</td>
        <td><a href="/edit?id=${i}">edit</a></td>
        <td><a href="/delete?id=${i}">Delete</a></td>
    </tr>`
    }
    return tableString;
}