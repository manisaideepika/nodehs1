const http = require("http");

http.createServer((req, res)=>{
    res.write("Hello Worlds!");
    res.write("<h1>HI</h1>")
    res.write(JSON.stringify({Name:"Mani", Age:22, email:"mani14@gmail.com", Contact:9000011111, Course:"Full stack", DateOfJoining: "24 jan 2022"}));
    res.end();
}).listen(8080);

