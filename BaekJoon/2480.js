let input = require('fs').readFileSync('example.txt').toString().split(' ').map(Number);

let [a, b, c] = [input[0], input[1], input[2]];

if (a === b && a === c && b === c) {
  console.log(10000 + (a * 1000));
} else if (a === b || a === c) {
  console.log(1000 + (a * 100));
} else if (b === c) {
  console.log(1000 + (b * 100));
} else {
  console.log(Math.max(a, b, c) * 100);
}


