let input = require('fs').readFileSync('example.txt').toString().trim().split("\n")

let test = Number(input[0]);
let answer = "";

for(let i = 1; i <= test; i++) {
    let num = input[i].split(" ").map(Number);
    answer += (num[0] + num[1]) + "\n";
}

console.log(answer);