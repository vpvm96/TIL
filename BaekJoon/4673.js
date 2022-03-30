// 셀프 넘버

function d(n) {
  let temp = n;
  let sum = temp;
  while (temp > 0) {
    sum += temp % 10;
    temp = parseInt(temp / 10);
  }
  return sum;
}
const N = 10000;
const selfNum = new Array(N);
selfNum.fill(false);

for (let i = 1; i <= N; i++) {
  selfNum[d(i)] = true;
  if (!selfNum[i]) {
    console.log(i);
  }
}