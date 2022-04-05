// 문자열 반복
/**입 출력
 * 2
  3 ABC
  5 /HTP
 */

let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let count = input.shift();

for (let i = 0; i < count; i++) {
  let answer = '';

  let [num, str] = input[i].split(' ');

  for (let j = 0; j < str.length; j++) {
    for (let c = 0; c < num; c++) {
      answer += str[j];
    }
  }
  console.log(answer);
}

// repeat() 사용 - 문자열을 반복한 값을 반환하는 메서드
// ex) 'abc'.repeat(2); == abcabc

{
  let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
  let count = input.shift();

  for (let i = 0; i < count; i++) {
    let answer = '';
    let [num, str] = input[i].split(' ');

    for (let j = 0; j < str.length; j++) {
      answer += str[j].repeat(num);
    }
    console.log(answer);
  }
}
