// 최소, 최대
let input = require('fs').readFileSync('example.txt').toString().split('\n');

let count = Number(input[0]);
let number = input[1].split(' ').map(Number);
let max = number[0];
let min = number[0];

for(let i = 1; i < count; i++) {
  if (max < number[i]) {
    max = number[i];
  }

  if (min > number[i]) {
    min = number[i];
  }
}

console.log(`${max} ${min}`);
