function solution(hp) {
    let first = Math.floor(hp / 5)
    let second = Math.floor((hp - first * 5) / 3)
    let third = hp - first * 5 - second * 3
    
    return first + second + third
}