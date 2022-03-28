let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

for (let i = 0; i < input.length -1; i++) {
  let num = input[i].split(' ').map(v => v * 1);

  console.log(num[0] + num[1]);
}

