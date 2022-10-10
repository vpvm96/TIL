const input = require("fs").readFileSync("example.txt").toString().trim().split("\n")

Number(input.shift())

input.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b)
})

const set = new Set(input)

console.log(Array.from(set).join("\n"))
