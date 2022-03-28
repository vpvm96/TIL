let input = require('fs').readFileSync('example.txt').toString().split(' ')

let answer = "";

for(let i = input; i >= 1; i--) {
  answer += i + '\n';
}

console.log(answer);
