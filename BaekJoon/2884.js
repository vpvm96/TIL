let input = require('fs').readFileSync('example.txt').toString().split(' ');

let H = Number(input[0]);
let M = Number(input[1]);

if (M - 45 < 0) {
    M += 60 - 45;
    H--;
    if (H === -1) {
        H = 23;
    }
} else {
    M -= 45;
}

console.log(`${H} ${M}`);