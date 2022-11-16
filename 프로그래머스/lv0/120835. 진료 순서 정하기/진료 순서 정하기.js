function solution(emergency) {
    let max = emergency.slice().sort((a, b) => b - a)
    
    return emergency.map((num) => max.indexOf(num) + 1)
}