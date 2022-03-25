let input = require('fs').readFileSync('example.txt').toString().trim().split('\n')

let test = Number(input[0])

for (let i = 1; i <= test; i++) {
    let sum = input[i].split(' ').map(Number);
    
    console.log(sum[0] + sum[1]);
}