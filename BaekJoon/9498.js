let input = require('fs').readFileSync('example.txt').toString().split(' ');

let a = Number(input);

if (a >= 90 || a >= 100) {
    console.log('A');
}else if (a >= 80) {
    console.log('B');
}else if (a >= 70) {
    console.log('C');
}else if (a >= 60) {
    console.log('D');
} else {
    console.log('F');
}