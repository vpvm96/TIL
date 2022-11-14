function solution(n) {
   return (n + "").split("").map(n => Number(n)).reduce((pre, cur) => pre+ cur)
}