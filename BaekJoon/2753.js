let input = require('fs').readFileSync('example.txt').toString().split(' ');

let num = Number(input);

if (num % 4 === 0 && num % 100 !== 0) {
    console.log(1);
} else if (num % 400 === 0) {
    console.log(1);
} else {
    console.log(0);
}