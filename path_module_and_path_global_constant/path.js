const { log } = require("console")
const path = require("path")
const file = "path_module_and_path_global_constant/nishan.txt"

// console.log(path.extname(file));
// console.log(path.dirname(file));
// console.log(path.basename(file));

console.log(path.resolve("path_module_and_path_global_constant","nishan.txt"))

console.log(__dirname)
console.log(__filename)