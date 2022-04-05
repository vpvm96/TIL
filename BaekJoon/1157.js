// 단어 공부
/**
 * 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다.
 *  단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
 * 입 출력
 * Mississipi - 입
 * ? - 출
 * zZa - 입
 * Z - 출
 */
// toLowerCase() : 모든 대문자를 소문자로 치환합니다.
// Array.prototype.fill() : fill() 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움.
// 'a'.charCodeAt(0) === 97

let input = require('fs').readFileSync('example.txt').toString().toLowerCase();
let result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97] ++;
}

let max = Math.max(...result);
let index = result.indexOf(max);

let flag = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    flag = true;
    break;
  }
}

console.log(flag ? '?' : String.fromCharCode(index + 65));