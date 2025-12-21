const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, resp)=>{
    fs.readFile('html_in_response/form.html','utf-8',(err, data)=>{
       
        if(err){
            resp.writeHead(500,{"content-type":'text/plain'});
            resp.end("Enternal server Error");
        }

        resp.writeHead(200,{"content-type":'text/html'});
        if(req.url == '/'){
            resp.write(data);
        }
        else if (req.url == '/submit'){
            let dataBody = [];
            req.on('data',(chunk)=>{
                dataBody.push(chunk);
            });

            req.on('end',()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                console.log(readableData);
                let dataString = "My Name is " + readableData.name + " and my email id is " + readableData.email
                // fs.writeFileSync("html_in_response/" + readableData.name + ".txt",dataString);
                fs.writeFile("html_in_response/"+readableData.name+".txt",dataString,(err)=>{
                    if(err){
                        console.log("internal server error");
                    }
                    else{
                        console.log("file created");
                    }
                })
                
            });

            resp.write("<h1>Data sumitted</h1>")
        }
        resp.end();
    })
    
    
    
}).listen(5600);
// http.createServer((req, resp)=>{
//     resp.writeHead(200, {"content-type":'text/html'});
//     console.log(req.url);
//     if(req.url == '/'){resp.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="Enter name" name="name" />
//         <input type="text" placeholder="Enter email" name="email" />
//         <button>Submit</button>
//         </form>
//         `);}
//     else if (req.url == '/submit'){
//         resp.write("<h1>Data sumitted</h1>")
//     }
    
//     resp.end();
// }).listen(5600);