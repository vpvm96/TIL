let fs = require("fs");
// let input = fs.readFileSync("1.txt").toString().split(" ");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
console.log(a + b);
