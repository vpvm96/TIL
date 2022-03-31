// 한수

let input = require('fs').readFileSync('example.txt').toString();
let N = parseInt(input);

function solution(N) {
  let arr = [];
  let hansoo = 0;
  let count = 0;
  let temp = 0;
  for (let i = 1; i <= N; i++) {
    if (i < 100) {
      hansoo = i;
    } else if (i < 1000) {
      count = 0;
      temp = i;
      while (temp > 0) {
        arr[count] = temp % 10;
        temp = parseInt(temp / 10);
        count++;
      }
      if (arr[0] - arr[1] === arr[1] - arr[2]) {
        hansoo++;
      }
    } else {
      break;
    }
  }
  return hansoo;
}

console.log(solution(N));