function solution(array, n) {
  return +array
    .filter(
      (num) =>
        Math.abs(num - n) === Math.min(...array.map((num) => Math.abs(num - n)))
    )
    .sort((a, b) => a - b)[0]
}