const http = require('http');
const { json } = require('stream/consumers');
const usersData = [
    {
        name:'Nishan',
        age:21,
        email:"barailinishan12@gmail.com"
    },
    {
        name:'kishor',
        age:21,
        email:"kishor12@gmail.com"
    },
    {
        name:'suyog',
        age:21,
        email:"suyog12@gmail.com"
    }
]
http.createServer((req, resp)=>{
    resp.setHeader("Content-Type",'application/json');
    resp.write(JSON.stringify(usersData));
    resp.end();

}).listen(7800);