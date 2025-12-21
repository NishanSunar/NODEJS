const http = require('http');
http.createServer((req, resp)=>{
    resp.end("Hello I am Nishan");
}).listen(4800);

http.createServer((req, resp)=>{
    resp.end("new server");
}).listen(5800);