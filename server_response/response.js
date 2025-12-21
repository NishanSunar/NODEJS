const http = require('http');
const age = 29;

http.createServer((req, resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.write(`
        <html>
        <head></head>
        <body>
        <h1>Hello this is Nishan</h1>
        <h1>`+age+`</h1>
        <h2>`+new Date()+`</h2>
        </body>
        </html>
        `);
    resp.end();
}).listen(6800);