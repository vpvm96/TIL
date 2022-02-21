// 2. 특정 문자 갯수 구하기
// ex) pjrog!@!#!POFAAnarlmf(!*@#*!#^dlknbfdjb@!#adflkamdf 에서 !의 갯수 구하기

const str = "pjrog!@!#!POFAAnarlmf(!*@#*!#^dlknbfdjb@!#adflkamdf";

const special = (str) => { // 방법 1 split 함수 사용
  let arr = str.split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "!") {
      count++;
    }
  } 
  return count;
};
console.log(special(str));

const find = (str) => { // 방법 2 split 함수 사용
  let result = str.split("!").length -1;

  return result;
}

console.log(find(str));

const solution = (str) => { // 방법 3 match 함수 사용
  let result = str.match(/!/g).filter(item => item !== "").length;

  return result;
}

console.log(solution(str));
