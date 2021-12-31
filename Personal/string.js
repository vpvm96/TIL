// 4. 다른 문자열 찾기
// ex) abc는 ABC와 다릅니다.

const str = "ABC ";

const difficult = (str) => {
  let str2 = "ABC";
  return str === str2;
};

console.log(difficult(str));

// const arr = ["a", "b", "c"];
// const arr2 = ["A", "B", "C"];

// const difficult = (arr, arr2) => {
//   let flag = false;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr[i] === arr2[j]) {
//         flag = true;
//       }
//     }
//   }

//   return flag;
// };
// console.log(difficult(arr, arr2));
