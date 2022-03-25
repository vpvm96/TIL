let input = require('fs').readFileSync('example.txt').toString().split(' ');

let num = Number(input);

for(let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}