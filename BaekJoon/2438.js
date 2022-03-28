let input = require('fs').readFileSync('example.txt').toString().split(' ');

let star = "";

for(let i = 0; i < input; i++) {
    star += "*";
    console.log(star);    
}