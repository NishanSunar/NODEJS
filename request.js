const http = require('http');

http.createServer((req, resp)=>{
    console.log(req);
    if(req.url == "/"){
      resp.write("<h1> Home page<\h1>");  
    }
    else if (req.url == "/login"){
        resp.write("<h1> Login page <\h2>");
    }
    else{
         resp.write("<h1> other page <\h2>");
    }

    
    resp.end();

}).listen(9800)