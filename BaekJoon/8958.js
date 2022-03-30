// OX 퀴즈
let index = require('fs').readFileSync('example.txt').toString().split('\n');

let n = Number(index[0]);

for (let i = 1; i <= n; i++) {
  let cnt = 0;
  let sum = 0;
  let s = String(index[i]);
  for(let j = 0; j <= s.length; j++) {
    if (s.charAt(j) == "O") {
      cnt++;
      sum += cnt;
    } else {
      cnt = 0;
    }
  }
  console.log(sum);
}
