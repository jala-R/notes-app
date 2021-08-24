const fs=require("fs");
const obj={
    name:"jala",
    age:123
}
fs.writeFileSync("file1.txt",JSON.stringify(obj));
fs.writeFileSync("file1.json",JSON.stringify(obj));
console.log(fs.readFileSync("file1.txt").toString());
console.log(fs.readFileSync("file1.json").toString());