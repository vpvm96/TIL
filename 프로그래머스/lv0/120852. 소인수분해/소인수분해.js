function solution(n) {
    let result = []
    let divider = 2
    
    while (n >= 2) {
        if (n % divider === 0) {
            result.push(divider)
            n = n / divider
        }
        
        else divider++
    }
    
    return [...new Set(result)]
}