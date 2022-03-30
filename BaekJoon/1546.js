// 평균
let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

let count = Math.floor(input[0]);
let num = input[1].split(' ');

let max = Math.max(...num);
let sum = 0;

for (let i = 0; i < count; i++) {
  sum += num[i] / max * 100;
}

console.log(sum / count);
