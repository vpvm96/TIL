// 최댓값
let input = require('fs').readFileSync('example.txt').toString().split('\n');

let num = input.map(Number);
let max = num[0];
let maxIndex = 0;

for(let i = 0; i < num.length; i++) {
  if (max < num[i]) {
    max = num[i];
    maxIndex = i + 1;
  }
}

console.log(max);
console.log(maxIndex);

{ // Math.max 사용
  let input = require('fs').readFileSync('example.txt').toString().split('\n').map(Number);
  let max = Math.max(...input);

  console.log(max);
  console.log(input.indexOf(max) + 1);
}