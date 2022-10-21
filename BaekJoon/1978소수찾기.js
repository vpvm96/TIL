const input = require("fs").readFileSync("/dev/stdin").toString().split("\n")

const N = Number(input[0])
const numbers = input[1].split(" ").map((x) => Number(x))
let result = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 1) {
    continue
  } else {
    let count = 0

    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j === 0) {
        count++
      }
    }

    if (count === 0) {
      result++
    }
  }
}
console.log(result)
