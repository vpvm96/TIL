let input = require('fs').readFileSync('example.txt').toString().split('\n');
let shift = input.shift();
let cnt = 0;

for (let i = 0; i < shift; i++) {
  let result = input[i];
  let answer = result[0];
  let index = 0;
  let arr = [];
  for (let j = 1; j < result.length; j++) {
    let temp = result.charAt(j)
    if (answer != temp) {
      arr.push([...result.slice(index, j)]);
      index = j;
      answer = temp;
    }
  }
  if (arr.length == 0) {
    arr.push([...result.slice(0)]);
  }
  let temp = arr[0];
  let a = temp[0];
  let flag = true;
  
  for (let k = 1; k < arr.length; k++) {
    let t = arr[k];
    if (t.includes(a)) {
      flag = false;
    }
  }
  if (flag) {
    cnt++;
  }
}
// console.log(cnt);
