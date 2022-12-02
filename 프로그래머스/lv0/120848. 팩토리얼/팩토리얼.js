function solution(n) {
    let sum = 1
    for (let i = 1; i <= 11; i++) {
        sum *= i
        if (sum > n) {
            return i - 1
        } 
    }
}