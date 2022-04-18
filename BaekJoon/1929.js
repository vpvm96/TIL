// 소수 구하기
/**
 * 문제
M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

출력
한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

예제 입력 1 
3 16
예제 출력 1 
3
5
7
11
13
 */
{ // 에라스토텔레스의 체 사용
  // Math.ceil = 입력받은 숫자보다 크거나 같은 정수 중 가장 작은 정수를 리턴합니다.
  // Math.sqrt = 특정숫자의 제곱근 값을 계산해주는 함수입니다.
const input = require('fs').readFileSync('example.txt').toString().trim();
const [N, M] = input.split(' ').map(item => Number(item));
const isPrimeNum = new Array(M + 1).fill(true);
isPrimeNum[0] = isPrimeNum[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
  if (isPrimeNum[i]) {
    let m = 2;
    while (i * m <= M) {
      isPrimeNum[i * m] = false;
      m++;
    }
  }
}
const result = [];
for (let i = N; i <= M; i++) {
  if (isPrimeNum[i]) {
    result.push(i);
  }
}
console.log(result.join('\n'));
}

{
  const input = require('fs').readFileSync('example.txt').toString().trim();
  const [n, m] = input.split(' ').map(item => Number(item));
  const prime = { 1: true };

  for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
    if (prime[i]) {
      continue;
    }
    for (let j = i ** 2; j <= m; j += i) {
      prime[j] = true;
    }
  }
  const results = [];
  
  for (let i = n; i <= m; i++) {
    if (!prime[i]) {
      results.push(i);
    }
  }
  console.log(results.join('\n'));
}