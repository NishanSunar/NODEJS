http = require("http");
userform = require("./user_form");
userDataSubmit = require("./userDataSubmit")
http.createServer((req, resp)=>{
    if(req.url== "/"){
        userform(req, resp)
        
    }
    else if (req.url == "/submit"){
        userDataSubmit(req, resp)
    }
    resp.end()

}).listen(7600)
