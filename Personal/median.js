// 3. 중앙값 찾기
// ex) -13 -100 5 -31 1111 15의 중간 값 찾기

let arr = [-13, -100, 5, -31, 1111, 15];

// const median = (arr) => {
//   arr = arr.sort((a, b) => a - b);
//   let result = arr.length / 2;
//   return arr[result];
// };
// console.log(median(arr));

const median = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let swap;
      if (arr[j] < arr[i]) {
        swap = arr[j];
        arr[j] = arr[i];
        arr[i] = swap;
      }
    }
  }
  console.log(arr);
  let result = arr.length / 2;
  return arr[result];
};
console.log(median(arr));
