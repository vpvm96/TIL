// 알파벳 찾기
let input = require('fs').readFileSync('example.txt').toString();
let listArr = [];
// a 의 아스키코드는 97이고 z 의 아스키코드는 122이다.
for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
  listArr.push(input.indexOf(String.fromCharCode(i)));
}

console.log(listArr.join(' '))