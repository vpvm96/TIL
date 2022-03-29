let input = require('fs').readFileSync('example.txt').toString().split('\n').map(Number);

let remain = [];

input.map((item) => {
  let num = item % 42;

  if (remain.indexOf(num) === -1) {
    remain.push(num);
  }
});
console.log(remain.length);
