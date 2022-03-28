let input = require('fs').readFileSync('example.txt').toString().split('\n');

for(let i = 1; i <= input[0]; i++) {
    let num = input[i].split(' ').map(Number);
    
    console.log(`Case #${i}: ${num[0]} + ${num[1]} = ${num[0] + num[1]}`);
}