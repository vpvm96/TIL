let input = require('fs').readFileSync('example.txt').toString().trim()

let num = Number(input);

let answer = 0;

for(let i = 1; i <= num; i++) {
  answer += i;
}

console.log(answer);

