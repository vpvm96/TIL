function solution(array) {
  let map = new Map()

  array.forEach((n) => {
    map.set(n, (map.get(n) || 0) + 1)
  })
  let max = Math.max(...[...map].map((v) => v[1]))
  let count = [...map].filter((v) => v[1] === max).length

  return count > 1 ? -1 : [...map].find((v) => v[1] === max)[0]
}
