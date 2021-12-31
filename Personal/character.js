// 2. 특정 문자 갯수 구하기
// ex) pjrog!@!#!POFAAnarlmf(!*@#*!#^dlknbfdjb@!#adflkamdf 에서 !의 갯수 구하기

const str = "pjrog!@!#!POFAAnarlmf(!*@#*!#^dlknbfdjb@!#adflkamdf";

const special = (str) => {
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
