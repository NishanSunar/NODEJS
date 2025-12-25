const http = require("http");
const fs = require("fs");



http.createServer((req, resp)=>{
let collectHeader;
fs.readFile("header.html",'utf-8',(err, Headerdata)=>{
    if(err){
        resp.writeHead(500,{"content-type":"text/html"});
        resp.end("Internal server error");
        return;
    }
    collectHeader = Headerdata;
    
})
    if(req.url == "/home"){  
        fs.readFile("home.html",'utf-8',(err, data)=>{
        if(err){
            resp.writeHead(500,{"content-type":"text/plain"})
            resp.end("internal server error")
            return false
        } 
        
       
        resp.write(collectHeader + data);
        resp.end();
    });}
    else if(req.url == "/about"){  
        fs.readFile("about.html",'utf-8',(err, data)=>{
        if(err){
            resp.writeHead(500,{"content-type":"text/plain"})
            resp.end("internal server error")
            return false
        } 
        
       
        resp.write(collectHeader + data);
        resp.end();
    });}
    else if(req.url == "/services"){  
        fs.readFile("services.html",'utf-8',(err, data)=>{
        if(err){
            resp.writeHead(500,{"content-type":"text/plain"})
            resp.end("internal server error")
            return false
        } 
        
       
        resp.write(collectHeader + data);
        resp.end();
    });}
    else  if(req.url == "/contact"){  
        fs.readFile("contact.html",'utf-8',(err, data)=>{
        if(err){
            resp.writeHead(500,{"content-type":"text/plain"})
            resp.end("internal server error")
            return false
        } 
        
       
        resp.write(collectHeader + data);
        resp.end();
    });}
    else if(req.url == "/style.css"){
        fs.readFile("style.css",'utf-8',(err, data) => {
            if(err){
                resp.writeHead(500,{"content-type":"text/plain"});
                resp.end("CSS not found");
                return;
            }
            resp.writeHead(200,{"content-type":"text/css"});
            resp.end(data);


        })
    }
   
}).listen(8900)