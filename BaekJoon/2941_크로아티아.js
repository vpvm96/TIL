const input = require("fs").readFileSync("example.txt").toString().trim()

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

function solution() {
    for (let alpha of croatia) {
        input = input.split(alpha).join("a")
    }

    return input.length
}

console.log(solution(input))
