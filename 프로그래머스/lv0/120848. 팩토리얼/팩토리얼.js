function solution(n) {
    let sum = 1
    for (let i = 1; i <= 11; i++) {
        sum *= i
        if (sum > n) {
            return i - 1
        } 
    }
    
    /**
    1 ~ 10 다 곱하면서 n 값이랑 비교하면서 가장 가까운 i 값
    1
    1 * 2
    2 * 3
    6 * 4
    */
    
    return 
}