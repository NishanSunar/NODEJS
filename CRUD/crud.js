const fs = require("fs");

const operation = process.argv[2];
if (operation=='write'){
    const name = process.argv[3]
    const content = process.argv[4]
    fs.writeFileSync("CRUD/"+name+".txt",content);
}
else if(operation == 'read'){
    const filename = "CRUD/"+process.argv[3] + ".txt"
    let data = fs.readFileSync(filename,'utf-8')
    console.log(data);
}
else if (operation == 'update'){
    const name = process.argv[3]
    const content = process.argv[4]
    let data = fs.appendFileSync("CRUD/"+name+".txt",content);
    console.log(data)    
}
else if (operation == 'delete'){
            const name = "CRUD/" +process.argv[3] + ".txt"
            fs.unlinkSync(name)
}
else{
    console.log("operation not found!!")
}
    
// fs.writeFileSync("CRUD/apple.txt","This is a fruit.")//creating file
// // fs.unlinkSync("CRUD/apple.txt")//deleting file

// const data = fs.readFileSync('CRUD/apple.txt','utf-8')  // Reading the file

// console.log(data)

// fs.appendFileSync("CRUD/apple.txt","and this is good for health");