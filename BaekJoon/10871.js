let input = require('fs').readFileSync('example.txt').toString().split('\n');

let N = input[0].split(' ').map(Number);
let X = input[1].split(' ').map(Number);

console.log(N, X);

let answer = [];

for(let i = 0; i <= N[0]; i++) {
  if(N[1] > X[i]) {
    answer.push(X[i]);
  }
}

console.log(answer.join(' '));

// filter
{
let max = Number(input[0].split(' ')[1]);
let arr = input[1].split(' ').map(Number);

let answer = arr.filter((v) => max > v);

console.log(answer.join(' '));
}