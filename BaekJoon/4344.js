// 평균은 넘겠지
let input = require('fs').readFileSync('example.txt').toString().split('\n');

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let score = input[i].split(' ').map(Number);
  let people = score.shift();
  let average = score.reduce((acc, cur) => acc += cur, 0);
  average /= people;
  let count = 0;
  for (let j = 0; j < people; j++) {
    if (score[j] > average) {
      count++;
    }
  }

  let result = ((count / people) * 100).toFixed(3);

  console.log(`${result}%`);
}