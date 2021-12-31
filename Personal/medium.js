// 1. 평균값 구하기
// ex) 13 -1 -5 1230 21 의 평균값 구하기

const arr = [13, -1, -5, 1230, 21];

const medium = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result / arr.length;
};
console.log(medium(arr));
