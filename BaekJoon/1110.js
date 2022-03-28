let input = require('fs').readFileSync('example.txt').toString();

let cnt = 0;
let num = input; // 26

while(true) {
  let sum = Math.floor(num / 10) + num % 10;
  num = (num % 10) * 10 + (sum % 10);

  cnt++;

  if(num == input) {
    break;
  }
}

console.log(cnt);