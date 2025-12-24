queryString = require("querystring");
const userDataSubmit = (req, resp) => {
    let dataBody = [];
    req.on('data',(chunk) => {
        dataBody.push(chunk);

    })
    req.on('end',() =>{
        let rawData = Buffer.concat(dataBody).toString();
        let readableData = queryString.parse(rawData);
        let dataString = "My name is " + readableData.name + " and my email is " + readableData.email
        console.log(dataString)
    })
    resp.write('Form submitted')
}
module.exports = userDataSubmit;