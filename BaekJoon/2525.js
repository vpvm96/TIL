let input = require('fs').readFileSync('example.txt').toString().split('\n');

let A = input[0].split(' ').map(Number);
let cook = Number(input[1]);
let H = A[0];
let M = A[1];

let cookHour = parseInt((H * 60 + M + cook) / 60);
let cookMin = parseInt((H * 60 + M + cook) % 60);

console.log(cookHour >= 24 ? cookHour - 24 : cookHour, cookMin);