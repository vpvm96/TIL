let input = require('fs').readFileSync('example.txt').toString().split('\n');
let count = Number(input[0]);
let num = input[1].split('');
let answer = 0;

for(let i = 0; i < count; i++) {
  answer += Number(num[i]);
}

console.log(answer);

// reduec

{
  let input = require('fs').readFileSync('example.txt').toString().split('\n');
  let num = input[1].split('');
  
  let sum = num.reduce((acc, cur) => {
    return acc += cur * 1;
  }, 0);

  console.log(sum);
}