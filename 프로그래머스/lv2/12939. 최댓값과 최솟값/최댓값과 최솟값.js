function solution(s) {
    let split = s.split(" ")
    let answer = []
    
    let max = Math.max(...split)
    let min = Math.min(...split)
    
    return [min, max].join(" ")
}